/**
 * Font Loading and Optimization Utilities
 * Efficient font loading strategies for Digital India typography system
 */

import { useState, useEffect } from 'react';

// Font configuration for preloading
export const fontConfig = {
  // Critical fonts that should be preloaded
  critical: [
    {
      family: 'Inter',
      weights: [400, 500, 600, 700],
      display: 'swap',
      preload: true,
    },
    {
      family: 'Poppins',
      weights: [400, 500, 600, 700],
      display: 'swap',
      preload: true,
    },
  ],
  
  // Secondary fonts that can be loaded after critical fonts
  secondary: [
    {
      family: 'Noto Sans Devanagari',
      weights: [400, 500, 600, 700],
      display: 'swap',
      preload: false,
    },
    {
      family: 'Fira Code',
      weights: [400, 500],
      display: 'swap',
      preload: false,
    },
  ],
};

// Generate font face CSS
export const generateFontFaceCSS = () => {
  const allFonts = [...fontConfig.critical, ...fontConfig.secondary];
  
  return allFonts.map(font => 
    font.weights.map(weight => `
@font-face {
  font-family: '${font.family}';
  src: url('/fonts/${font.family.toLowerCase().replace(/\s+/g, '-')}-${weight}.woff2') format('woff2'),
       url('/fonts/${font.family.toLowerCase().replace(/\s+/g, '-')}-${weight}.woff') format('woff');
  font-weight: ${weight};
  font-style: normal;
  font-display: ${font.display};
}
    `).join('\n')
  ).join('\n');
};

// Generate preload link tags for critical fonts
export const generatePreloadLinks = () => {
  return fontConfig.critical
    .filter(font => font.preload)
    .flatMap(font => 
      font.weights.map(weight => ({
        rel: 'preload',
        href: `/fonts/${font.family.toLowerCase().replace(/\s+/g, '-')}-${weight}.woff2`,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      }))
    );
};

// Font loading strategy implementation
export class FontLoader {
  private loadedFonts = new Set<string>();
  private loadingPromises = new Map<string, Promise<void>>();

  // Check if font is available
  async isFontAvailable(fontFamily: string): Promise<boolean> {
    if ('fonts' in document) {
      try {
        return document.fonts.check(`16px "${fontFamily}"`);
      } catch (error) {
        console.warn(`Font check failed for ${fontFamily}:`, error);
        return false;
      }
    }
    
    // Fallback for browsers without font loading API
    return this.fallbackFontCheck(fontFamily);
  }

  // Fallback font detection method
  private fallbackFontCheck(fontFamily: string): boolean {
    const testString = 'mmmmmmmmmmlli';
    const testSize = '72px';
    const fallbackFont = 'monospace';

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) return false;

    // Measure text with fallback font
    context.font = `${testSize} ${fallbackFont}`;
    const fallbackWidth = context.measureText(testString).width;

    // Measure text with target font
    context.font = `${testSize} ${fontFamily}, ${fallbackFont}`;
    const targetWidth = context.measureText(testString).width;

    return fallbackWidth !== targetWidth;
  }

  // Load font with promise caching
  async loadFont(fontFamily: string, weight = 400): Promise<void> {
    const fontKey = `${fontFamily}-${weight}`;
    
    if (this.loadedFonts.has(fontKey)) {
      return Promise.resolve();
    }

    if (this.loadingPromises.has(fontKey)) {
      return this.loadingPromises.get(fontKey)!;
    }

    const loadingPromise = this.performFontLoad(fontFamily, weight);
    this.loadingPromises.set(fontKey, loadingPromise);

    try {
      await loadingPromise;
      this.loadedFonts.add(fontKey);
    } catch (error) {
      console.warn(`Failed to load font ${fontFamily} ${weight}:`, error);
    } finally {
      this.loadingPromises.delete(fontKey);
    }
  }

  // Perform actual font loading
  private async performFontLoad(fontFamily: string, weight: number): Promise<void> {
    if ('fonts' in document) {
      const fontFace = new FontFace(
        fontFamily,
        `url('/fonts/${fontFamily.toLowerCase().replace(/\s+/g, '-')}-${weight}.woff2') format('woff2')`,
        { weight: weight.toString() }
      );

      await fontFace.load();
      document.fonts.add(fontFace);
    } else {
      // Fallback: create a hidden element to trigger font loading
      const element = document.createElement('div');
      element.style.fontFamily = fontFamily;
      element.style.fontSize = '1px';
      element.style.opacity = '0';
      element.style.position = 'absolute';
      element.style.left = '-9999px';
      element.textContent = 'Font loading test';
      
      document.body.appendChild(element);
      
      // Wait for font to load (simplified)
      await new Promise(resolve => setTimeout(resolve, 100));
      
      document.body.removeChild(element);
    }
  }

  // Load all critical fonts
  async loadCriticalFonts(): Promise<void> {
    const loadPromises = fontConfig.critical.flatMap(font =>
      font.weights.map(weight => this.loadFont(font.family, weight))
    );

    await Promise.allSettled(loadPromises);
  }

  // Load secondary fonts (non-blocking)
  loadSecondaryFonts(): void {
    fontConfig.secondary.forEach(font => {
      font.weights.forEach(weight => {
        // Load asynchronously without blocking
        this.loadFont(font.family, weight).catch(error => {
          console.warn(`Secondary font loading failed for ${font.family} ${weight}:`, error);
        });
      });
    });
  }

  // Get loading status
  getLoadingStatus(): {
    loaded: string[];
    loading: string[];
    total: number;
  } {
    const allFonts = [
      ...fontConfig.critical.flatMap(f => f.weights.map(w => `${f.family}-${w}`)),
      ...fontConfig.secondary.flatMap(f => f.weights.map(w => `${f.family}-${w}`)),
    ];

    return {
      loaded: Array.from(this.loadedFonts),
      loading: Array.from(this.loadingPromises.keys()),
      total: allFonts.length,
    };
  }
}

// Global font loader instance
export const fontLoader = new FontLoader();

// Font loading hook for React components
export const useFontLoader = () => {
  const [status, setStatus] = useState({
    loaded: [] as string[],
    loading: [] as string[],
    total: 0,
    isReady: false,
  });

  useEffect(() => {
    const updateStatus = () => {
      const currentStatus = fontLoader.getLoadingStatus();
      setStatus({
        ...currentStatus,
        isReady: currentStatus.loaded.length >= fontConfig.critical.length * 2, // At least critical fonts
      });
    };

    // Initial status
    updateStatus();

    // Load critical fonts
    fontLoader.loadCriticalFonts().then(() => {
      updateStatus();
      // Load secondary fonts after critical fonts are ready
      fontLoader.loadSecondaryFonts();
    });

    // Update status periodically during loading
    const interval = setInterval(updateStatus, 100);

    return () => clearInterval(interval);
  }, []);

  return status;
};

// Font optimization utilities
export const fontOptimization = {
  // Generate font subset for specific languages
  generateSubset: (text: string, language: 'en' | 'hi' | 'mixed' = 'en') => {
    const uniqueChars = [...new Set(text)].sort();
    
    const charRanges = {
      en: /[a-zA-Z0-9\s.,!?;:'"()-]/,
      hi: /[\u0900-\u097F\s.,!?;:'"()-]/,
      mixed: /[a-zA-Z0-9\u0900-\u097F\s.,!?;:'"()-]/,
    };

    return uniqueChars.filter(char => charRanges[language].test(char)).join('');
  },

  // Calculate font loading priority
  calculatePriority: (fontFamily: string, usage: 'critical' | 'important' | 'optional' = 'important') => {
    const priorities = {
      critical: 1,
      important: 2,
      optional: 3,
    };

    const fontPriorities = {
      'Inter': 1,
      'Poppins': 2,
      'Noto Sans Devanagari': 3,
      'Fira Code': 4,
    };

    return (fontPriorities[fontFamily as keyof typeof fontPriorities] || 5) + priorities[usage];
  },

  // Generate optimized font loading strategy
  generateLoadingStrategy: (pageType: 'landing' | 'dashboard' | 'form' | 'documentation') => {
    const strategies = {
      landing: {
        critical: ['Inter', 'Poppins'],
        secondary: ['Noto Sans Devanagari'],
        optional: ['Fira Code'],
      },
      dashboard: {
        critical: ['Inter'],
        secondary: ['Poppins', 'Noto Sans Devanagari'],
        optional: ['Fira Code'],
      },
      form: {
        critical: ['Inter', 'Noto Sans Devanagari'],
        secondary: ['Poppins'],
        optional: ['Fira Code'],
      },
      documentation: {
        critical: ['Inter', 'Fira Code'],
        secondary: ['Poppins'],
        optional: ['Noto Sans Devanagari'],
      },
    };

    return strategies[pageType];
  },
};

export default {
  fontConfig,
  generateFontFaceCSS,
  generatePreloadLinks,
  FontLoader,
  fontLoader,
  fontOptimization,
};
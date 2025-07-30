# Contributing to FounderSDK

Thank you for your interest in contributing to FounderSDK! We welcome contributions from developers who want to help Indian entrepreneurs succeed.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- PostgreSQL
- Basic understanding of Next.js and TypeScript

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/founderSDK.git
   cd founderSDK
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 How to Contribute

### Reporting Issues
- Use GitHub Issues to report bugs or request features
- Include detailed steps to reproduce bugs
- Provide context about your environment (OS, browser, etc.)

### Code Contributions

1. **Find an Issue**: Look for issues labeled `good first issue` or `help wanted`
2. **Create a Branch**: Create a feature branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Changes**: Follow our coding standards (see below)
4. **Test**: Ensure your changes work and don't break existing functionality
5. **Commit**: Use clear, descriptive commit messages
6. **Push**: Push your branch to your fork
7. **Pull Request**: Create a PR with a clear description

### Coding Standards

#### TypeScript
- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary

#### React/Next.js
- Use functional components with hooks
- Follow React best practices
- Use Next.js features appropriately (SSR, SSG, API routes)

#### Material-UI
- Use MUI components consistently
- Follow the established design system
- Maintain responsive design principles

#### Code Style
- Use ESLint and Prettier (configured in the project)
- Follow consistent naming conventions:
  - `camelCase` for variables and functions
  - `PascalCase` for components and types
  - `kebab-case` for file names

#### Indian Context
- Always use ₹ for currency display
- Consider multilingual support
- Respect cultural sensitivities
- Use Indian examples and context

## 📁 Project Structure

```
founderSDK/
├── src/
│   ├── app/                  # Next.js 13+ App Router
│   ├── components/           # Reusable UI components
│   ├── lib/                  # Utility libraries
│   ├── hooks/                # Custom React hooks
│   └── types/                # TypeScript type definitions
├── prisma/                   # Database schema and migrations
├── public/                   # Static assets
└── docs/                     # Documentation
```

## 🧪 Testing

- Write unit tests for utility functions
- Test React components with React Testing Library
- Ensure responsive design works across devices
- Test with different Indian user scenarios

## 📝 Documentation

- Update README.md if you add new features
- Document new API endpoints
- Add JSDoc comments for complex functions
- Update steering documents if architecture changes

## 🌍 Internationalization

- Use i18n-friendly text handling
- Consider Hindi and regional language support
- Test with longer text strings (Hindi text can be longer)
- Respect right-to-left text where applicable

## 🔒 Security

- Never commit sensitive data (API keys, passwords)
- Follow security best practices for user data
- Be mindful of Indian data protection requirements
- Report security issues privately

## 📋 Pull Request Guidelines

### PR Title Format
- Use clear, descriptive titles
- Start with type: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`
- Example: `feat: add government scheme search functionality`

### PR Description
Include:
- What changes you made and why
- Screenshots for UI changes
- Testing instructions
- Any breaking changes
- Related issue numbers

### Review Process
- All PRs require at least one review
- Address feedback promptly
- Keep PRs focused and reasonably sized
- Ensure CI checks pass

## 🎨 Design Contributions

- Follow the established design system
- Use the defined color palette and typography
- Maintain consistency with existing UI
- Consider mobile-first design
- Test accessibility compliance

## 📞 Getting Help

- Join our community discussions
- Ask questions in GitHub Issues
- Review existing documentation
- Check the steering documents in `.kiro/steering/`

## 🏆 Recognition

Contributors will be:
- Listed in our contributors section
- Mentioned in release notes for significant contributions
- Invited to join our contributor community

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make FounderSDK better for Indian entrepreneurs! 🇮🇳
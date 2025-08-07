# UI Mockups for Founder's Compass

## Design System Foundation

### Color Palette with Material-UI Mapping

#### Primary Colors
- **Primary Main**: `#1565C0` (Deep Blue) - Trust & Professionalism
  - Material-UI: `theme.palette.primary.main`
  - Usage: Primary buttons, links, active states, brand elements
  - Light variant: `#42A5F5` (`theme.palette.primary.light`)
  - Dark variant: `#0D47A1` (`theme.palette.primary.dark`)

- **Secondary Main**: `#FF9933` (Saffron) - Indian Identity & Energy
  - Material-UI: `theme.palette.secondary.main`
  - Usage: Accent elements, CTAs, highlights, Indian cultural elements
  - Light variant: `#FFB74D` (`theme.palette.secondary.light`)
  - Dark variant: `#F57C00` (`theme.palette.secondary.dark`)

#### Semantic Colors
- **Success**: `#388E3C` (Green)
  - Material-UI: `theme.palette.success.main`
  - Usage: Success messages, completed states, positive indicators
  - Light: `#66BB6A`, Dark: `#2E7D32`

- **Warning**: `#F57C00` (Orange)
  - Material-UI: `theme.palette.warning.main`
  - Usage: Warning messages, pending states, caution indicators
  - Light: `#FFB74D`, Dark: `#E65100`

- **Error**: `#D32F2F` (Red)
  - Material-UI: `theme.palette.error.main`
  - Usage: Error messages, destructive actions, validation errors
  - Light: `#EF5350`, Dark: `#C62828`

- **Info**: `#00695C` (Teal) - Growth & Stability
  - Material-UI: `theme.palette.info.main`
  - Usage: Information messages, neutral highlights, growth indicators
  - Light: `#4DB6AC`, Dark: `#004D40`

#### Background & Surface Colors
- **Background Default**: `#FAFAFA` (Light Grey)
  - Material-UI: `theme.palette.background.default`
  - Usage: Page backgrounds, app background

- **Background Paper**: `#FFFFFF` (White)
  - Material-UI: `theme.palette.background.paper`
  - Usage: Card backgrounds, modal backgrounds, elevated surfaces

#### Text Colors
- **Text Primary**: `#212121` (Dark Grey)
  - Material-UI: `theme.palette.text.primary`
  - Usage: Main content, headings, primary text

- **Text Secondary**: `#757575` (Medium Grey)
  - Material-UI: `theme.palette.text.secondary`
  - Usage: Supporting text, captions, meta information

### 8px Grid Spacing System

#### Spacing Scale (Material-UI theme.spacing())
- **xs**: `4px` - `theme.spacing(0.5)` - Minimal spacing, icon padding
- **sm**: `8px` - `theme.spacing(1)` - Base unit, small gaps
- **md**: `16px` - `theme.spacing(2)` - Standard spacing, component padding
- **lg**: `24px` - `theme.spacing(3)` - Section spacing, card padding
- **xl**: `32px` - `theme.spacing(4)` - Large gaps, page margins
- **2xl**: `48px` - `theme.spacing(6)` - Major section separation
- **3xl**: `64px` - `theme.spacing(8)` - Page-level spacing

#### Component Spacing Guidelines
- **Button Padding**: `10px 24px` (theme.spacing(1.25, 3))
- **Card Padding**: `24px` (theme.spacing(3))
- **Form Field Margin**: `16px` (theme.spacing(2))
- **Section Margins**: `48px` (theme.spacing(6))
- **Page Margins**: `64px` (theme.spacing(8))

### Typography Scale with Material-UI Variants

#### Heading Variants
- **H1**: `48px/3rem Bold` - Page Titles
  - Material-UI: `theme.typography.h1`
  - Font Weight: 700, Line Height: 1.2
  - Usage: Main page headings, hero titles

- **H2**: `36px/2.25rem Bold` - Section Headers
  - Material-UI: `theme.typography.h2`
  - Font Weight: 700, Line Height: 1.3
  - Usage: Major section headings, feature titles

- **H3**: `24px/1.5rem Medium` - Card Titles
  - Material-UI: `theme.typography.h3`
  - Font Weight: 500, Line Height: 1.4
  - Usage: Card titles, subsection headers

- **H4**: `20px/1.25rem Medium` - Component Headers
  - Material-UI: `theme.typography.h4`
  - Font Weight: 500, Line Height: 1.4
  - Usage: Component titles, form section headers

- **H5**: `18px/1.125rem Medium` - Small Headers
  - Material-UI: `theme.typography.h5`
  - Font Weight: 500, Line Height: 1.4
  - Usage: Small component headers, list headers

- **H6**: `16px/1rem Medium` - Micro Headers
  - Material-UI: `theme.typography.h6`
  - Font Weight: 500, Line Height: 1.4
  - Usage: Table headers, micro component titles

#### Body Text Variants
- **Body1**: `16px/1rem Regular` - Primary Content
  - Material-UI: `theme.typography.body1`
  - Font Weight: 400, Line Height: 1.6
  - Usage: Main content, descriptions, paragraphs

- **Body2**: `14px/0.875rem Regular` - Secondary Content
  - Material-UI: `theme.typography.body2`
  - Font Weight: 400, Line Height: 1.5
  - Usage: Supporting text, captions, meta information

#### Specialized Text Variants
- **Subtitle1**: `16px/1rem Medium` - Emphasized Content
  - Material-UI: `theme.typography.subtitle1`
  - Font Weight: 500, Line Height: 1.6
  - Usage: Emphasized descriptions, important notes

- **Subtitle2**: `14px/0.875rem Medium` - Small Emphasized Content
  - Material-UI: `theme.typography.subtitle2`
  - Font Weight: 500, Line Height: 1.5
  - Usage: Small emphasized text, form labels

- **Caption**: `12px/0.75rem Regular` - Meta Information
  - Material-UI: `theme.typography.caption`
  - Font Weight: 400, Line Height: 1.4
  - Usage: Timestamps, helper text, fine print

- **Overline**: `12px/0.75rem Medium Uppercase` - Labels
  - Material-UI: `theme.typography.overline`
  - Font Weight: 500, Line Height: 1.4, Text Transform: Uppercase
  - Usage: Category labels, section identifiers

### Material-UI Component Mapping

#### Navigation Components
- **AppBar**: `MuiAppBar` - Top navigation bar
- **Drawer**: `MuiDrawer` - Sidebar navigation
- **BottomNavigation**: `MuiBottomNavigation` - Mobile bottom nav
- **Breadcrumbs**: `MuiBreadcrumbs` - Navigation breadcrumbs
- **Tabs**: `MuiTabs` - Tab navigation

#### Layout Components
- **Container**: `MuiContainer` - Page content wrapper (maxWidth: 'lg')
- **Grid**: `MuiGrid` - Responsive grid system
- **Box**: `MuiBox` - Flexible container with spacing utilities
- **Stack**: `MuiStack` - Vertical/horizontal stacking
- **Paper**: `MuiPaper` - Elevated surface container

#### Input Components
- **TextField**: `MuiTextField` - Text input fields
- **Select**: `MuiSelect` - Dropdown selection
- **Checkbox**: `MuiCheckbox` - Checkbox input
- **Radio**: `MuiRadio` - Radio button input
- **Switch**: `MuiSwitch` - Toggle switch
- **Slider**: `MuiSlider` - Range slider input

#### Action Components
- **Button**: `MuiButton` - Primary action buttons
- **IconButton**: `MuiIconButton` - Icon-only buttons
- **Fab**: `MuiFab` - Floating action button
- **ButtonGroup**: `MuiButtonGroup` - Grouped buttons

#### Display Components
- **Card**: `MuiCard` - Content cards with elevation
- **List**: `MuiList` - Vertical list of items
- **Table**: `MuiTable` - Data tables
- **Chip**: `MuiChip` - Compact information display
- **Badge**: `MuiBadge` - Status indicators
- **Avatar**: `MuiAvatar` - User profile images

#### Feedback Components
- **Alert**: `MuiAlert` - Status messages
- **Snackbar**: `MuiSnackbar` - Toast notifications
- **Dialog**: `MuiDialog` - Modal dialogs
- **Tooltip**: `MuiTooltip` - Hover information
- **Skeleton**: `MuiSkeleton` - Loading placeholders
- **LinearProgress**: `MuiLinearProgress` - Progress bars
- **CircularProgress**: `MuiCircularProgress` - Loading spinners

## Component State Specifications

### Button State Variations

#### Primary Button States

**Default State**
- Component: `<Button variant="contained" color="primary">`
- Background: `#1565C0` (theme.palette.primary.main)
- Text Color: `#FFFFFF` (white)
- Border: None
- Padding: `10px 24px` (theme.spacing(1.25, 3))
- Border Radius: `4px` (theme.shape.borderRadius)
- Font Weight: 500 (theme.typography.button.fontWeight)
- Text Transform: Uppercase
- Box Shadow: `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)`
- Transition: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`

**Hover State**
- Component: `<Button variant="contained" color="primary">` (with :hover)
- Background: `#0D47A1` (theme.palette.primary.dark)
- Text Color: `#FFFFFF` (white)
- Box Shadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`
- Cursor: pointer
- Transform: None (Material-UI default)

**Active/Pressed State**
- Component: `<Button variant="contained" color="primary">` (with :active)
- Background: `#0D47A1` (theme.palette.primary.dark)
- Text Color: `#FFFFFF` (white)
- Box Shadow: `0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)`
- Transform: `scale(0.98)` (slight press effect)

**Focus State (Keyboard Navigation)**
- Component: `<Button variant="contained" color="primary">` (with :focus-visible)
- Background: `#1565C0` (theme.palette.primary.main)
- Text Color: `#FFFFFF` (white)
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`
- Box Shadow: Same as default + focus ring

**Disabled State**
- Component: `<Button variant="contained" color="primary" disabled>`
- Background: `rgba(0, 0, 0, 0.12)` (theme.palette.action.disabledBackground)
- Text Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Box Shadow: None
- Cursor: `not-allowed`
- Pointer Events: none

#### Secondary Button States

**Default State**
- Component: `<Button variant="outlined" color="primary">`
- Background: Transparent
- Text Color: `#1565C0` (theme.palette.primary.main)
- Border: `1px solid rgba(21, 101, 192, 0.5)`
- Padding: `9px 23px` (adjusted for border)
- Border Radius: `4px`
- Font Weight: 500
- Text Transform: Uppercase

**Hover State**
- Component: `<Button variant="outlined" color="primary">` (with :hover)
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Text Color: `#0D47A1` (theme.palette.primary.dark)
- Border: `1px solid #1565C0` (theme.palette.primary.main)

**Active/Pressed State**
- Component: `<Button variant="outlined" color="primary">` (with :active)
- Background: `rgba(21, 101, 192, 0.08)` (theme.palette.primary.main with alpha)
- Text Color: `#0D47A1` (theme.palette.primary.dark)
- Border: `1px solid #0D47A1` (theme.palette.primary.dark)

**Focus State (Keyboard Navigation)**
- Component: `<Button variant="outlined" color="primary">` (with :focus-visible)
- Background: Transparent
- Text Color: `#1565C0` (theme.palette.primary.main)
- Border: `1px solid #1565C0` (theme.palette.primary.main)
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`

**Disabled State**
- Component: `<Button variant="outlined" color="primary" disabled>`
- Background: Transparent
- Text Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Border: `1px solid rgba(0, 0, 0, 0.12)` (theme.palette.action.disabledBackground)
- Cursor: `not-allowed`

#### Text Button States

**Default State**
- Component: `<Button variant="text" color="primary">`
- Background: Transparent
- Text Color: `#1565C0` (theme.palette.primary.main)
- Border: None
- Padding: `6px 8px`
- Border Radius: `4px`
- Font Weight: 500
- Text Transform: Uppercase

**Hover State**
- Component: `<Button variant="text" color="primary">` (with :hover)
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Text Color: `#0D47A1` (theme.palette.primary.dark)

**Active/Pressed State**
- Component: `<Button variant="text" color="primary">` (with :active)
- Background: `rgba(21, 101, 192, 0.08)` (theme.palette.primary.main with alpha)
- Text Color: `#0D47A1` (theme.palette.primary.dark)

**Focus State (Keyboard Navigation)**
- Component: `<Button variant="text" color="primary">` (with :focus-visible)
- Background: Transparent
- Text Color: `#1565C0` (theme.palette.primary.main)
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`

**Disabled State**
- Component: `<Button variant="text" color="primary" disabled>`
- Background: Transparent
- Text Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

#### Secondary Color Button States (Saffron)

**Primary Contained - Secondary Color**
- Component: `<Button variant="contained" color="secondary">`
- Background: `#FF9933` (theme.palette.secondary.main)
- Text Color: `#FFFFFF` (white)
- Hover Background: `#F57C00` (theme.palette.secondary.dark)
- Active Background: `#F57C00` (theme.palette.secondary.dark)
- Focus Outline: `2px solid #FFB74D` (theme.palette.secondary.light)

**Outlined - Secondary Color**
- Component: `<Button variant="outlined" color="secondary">`
- Text Color: `#FF9933` (theme.palette.secondary.main)
- Border: `1px solid rgba(255, 153, 51, 0.5)`
- Hover Background: `rgba(255, 153, 51, 0.04)`
- Hover Border: `1px solid #FF9933`

#### Icon Button States

**Default State**
- Component: `<IconButton color="primary">`
- Background: Transparent
- Icon Color: `#1565C0` (theme.palette.primary.main)
- Size: `48px x 48px` (minimum touch target)
- Padding: `12px`
- Border Radius: `50%`

**Hover State**
- Component: `<IconButton color="primary">` (with :hover)
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Icon Color: `#0D47A1` (theme.palette.primary.dark)

**Active/Pressed State**
- Component: `<IconButton color="primary">` (with :active)
- Background: `rgba(21, 101, 192, 0.08)` (theme.palette.primary.main with alpha)
- Icon Color: `#0D47A1` (theme.palette.primary.dark)
- Transform: `scale(0.95)`

**Focus State (Keyboard Navigation)**
- Component: `<IconButton color="primary">` (with :focus-visible)
- Background: Transparent
- Icon Color: `#1565C0` (theme.palette.primary.main)
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`

**Disabled State**
- Component: `<IconButton color="primary" disabled>`
- Background: Transparent
- Icon Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

#### Floating Action Button (FAB) States

**Default State**
- Component: `<Fab color="primary">`
- Background: `#1565C0` (theme.palette.primary.main)
- Icon Color: `#FFFFFF` (white)
- Size: `56px x 56px`
- Border Radius: `50%`
- Box Shadow: `0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)`

**Hover State**
- Component: `<Fab color="primary">` (with :hover)
- Background: `#0D47A1` (theme.palette.primary.dark)
- Box Shadow: `0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)`
- Transform: `scale(1.05)`

**Active/Pressed State**
- Component: `<Fab color="primary">` (with :active)
- Background: `#0D47A1` (theme.palette.primary.dark)
- Transform: `scale(1.02)`

**Focus State (Keyboard Navigation)**
- Component: `<Fab color="primary">` (with :focus-visible)
- Background: `#1565C0` (theme.palette.primary.main)
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`

**Disabled State**
- Component: `<Fab color="primary" disabled>`
- Background: `rgba(0, 0, 0, 0.12)` (theme.palette.action.disabledBackground)
- Icon Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Box Shadow: None
- Cursor: `not-allowed`

#### Accessibility Indicators for Button States

**WCAG AA Compliance**
- All button text maintains minimum 4.5:1 contrast ratio against background
- Focus indicators have minimum 3:1 contrast ratio against adjacent colors
- Minimum touch target size: 44px x 44px for mobile devices
- Focus indicators are clearly visible and not obscured by other elements

**Keyboard Navigation Support**
- Tab order follows logical sequence
- Enter and Space keys activate buttons
- Focus indicators are visible for keyboard users
- Disabled buttons are not focusable

**Screen Reader Support**
- All buttons have accessible names (aria-label or text content)
- Button states are announced (pressed, disabled, expanded)
- Icon buttons include aria-label for context
- Loading states include aria-live announcements

**Touch Interaction Guidelines**
- Minimum 44px touch targets for mobile
- Adequate spacing between interactive elements (8px minimum)
- Visual feedback for touch interactions
- No hover states on touch devices

### Form Component State Specifications

#### Text Input Field States

**Default State**
- Component: `<TextField variant="outlined" fullWidth>`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `1px solid rgba(0, 0, 0, 0.23)` (theme.palette.grey[400])
- Border Radius: `4px` (theme.shape.borderRadius)
- Padding: `16.5px 14px` (theme.spacing(2.0625, 1.75))
- Font Size: `16px` (theme.typography.body1.fontSize)
- Line Height: `1.4375em`
- Label Color: `rgba(0, 0, 0, 0.6)` (theme.palette.text.secondary)
- Label Position: Floating above field when focused/filled

**Focus State**
- Component: `<TextField variant="outlined" fullWidth>` (with focus)
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Border Radius: `4px`
- Label Color: `#1565C0` (theme.palette.primary.main)
- Label Transform: `translate(14px, -9px) scale(0.75)`
- Outline: None (border serves as focus indicator)

**Filled State (with content)**
- Component: `<TextField variant="outlined" fullWidth value="Sample text">`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `1px solid rgba(0, 0, 0, 0.23)`
- Text Color: `#212121` (theme.palette.text.primary)
- Label Color: `rgba(0, 0, 0, 0.6)` (theme.palette.text.secondary)
- Label Transform: `translate(14px, -9px) scale(0.75)`

**Error State**
- Component: `<TextField variant="outlined" fullWidth error helperText="This field is required">`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `2px solid #D32F2F` (theme.palette.error.main)
- Border Radius: `4px`
- Label Color: `#D32F2F` (theme.palette.error.main)
- Helper Text Color: `#D32F2F` (theme.palette.error.main)
- Helper Text: Positioned below field with 8px margin
- Icon: Error icon (⚠️) positioned at end of field

**Success State**
- Component: `<TextField variant="outlined" fullWidth color="success" helperText="Valid input">`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `2px solid #388E3C` (theme.palette.success.main)
- Border Radius: `4px`
- Label Color: `#388E3C` (theme.palette.success.main)
- Helper Text Color: `#388E3C` (theme.palette.success.main)
- Icon: Success icon (✓) positioned at end of field

**Disabled State**
- Component: `<TextField variant="outlined" fullWidth disabled>`
- Background: `rgba(0, 0, 0, 0.04)` (theme.palette.action.disabledBackground)
- Border: `1px solid rgba(0, 0, 0, 0.12)`
- Text Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Label Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

#### Select/Dropdown Component States

**Default State**
- Component: `<Select variant="outlined" fullWidth displayEmpty>`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `1px solid rgba(0, 0, 0, 0.23)`
- Border Radius: `4px`
- Padding: `16.5px 14px`
- Placeholder: "Select an option" in `rgba(0, 0, 0, 0.6)`
- Dropdown Icon: ▼ positioned at right end

**Focus/Open State**
- Component: `<Select variant="outlined" fullWidth open>`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Label Color: `#1565C0` (theme.palette.primary.main)
- Dropdown Icon: ▲ (rotated)
- Dropdown Menu: Elevated paper with options list

**Selected State**
- Component: `<Select variant="outlined" fullWidth value="option1">`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `1px solid rgba(0, 0, 0, 0.23)`
- Selected Value: Displayed in `#212121` (theme.palette.text.primary)
- Label: Transformed to floating position

**Error State**
- Component: `<Select variant="outlined" fullWidth error>`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `2px solid #D32F2F` (theme.palette.error.main)
- Label Color: `#D32F2F` (theme.palette.error.main)
- Helper Text: Error message below field

**Disabled State**
- Component: `<Select variant="outlined" fullWidth disabled>`
- Background: `rgba(0, 0, 0, 0.04)` (theme.palette.action.disabledBackground)
- Border: `1px solid rgba(0, 0, 0, 0.12)`
- Text Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Dropdown Icon: Disabled color

#### Dropdown Menu Options

**Default Option**
- Component: `<MenuItem value="option1">`
- Background: Transparent
- Text Color: `#212121` (theme.palette.text.primary)
- Padding: `6px 16px` (theme.spacing(0.75, 2))
- Font Size: `16px`

**Hover Option**
- Component: `<MenuItem value="option1">` (with :hover)
- Background: `rgba(0, 0, 0, 0.04)` (theme.palette.action.hover)
- Text Color: `#212121` (theme.palette.text.primary)

**Selected Option**
- Component: `<MenuItem value="option1" selected>`
- Background: `rgba(21, 101, 192, 0.08)` (theme.palette.primary.main with alpha)
- Text Color: `#1565C0` (theme.palette.primary.main)
- Check Icon: ✓ positioned at right end

**Disabled Option**
- Component: `<MenuItem value="option1" disabled>`
- Background: Transparent
- Text Color: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

#### Checkbox Component States

**Default Unchecked State**
- Component: `<Checkbox color="primary">`
- Background: Transparent
- Border: `2px solid rgba(0, 0, 0, 0.54)` (theme.palette.action.active)
- Size: `18px x 18px`
- Border Radius: `2px`
- Margin: `9px` (to achieve 36px touch target)

**Hover Unchecked State**
- Component: `<Checkbox color="primary">` (with :hover)
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Ripple Effect: Circular ripple on hover

**Checked State**
- Component: `<Checkbox color="primary" checked>`
- Background: `#1565C0` (theme.palette.primary.main)
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Check Icon: ✓ in white color
- Size: `18px x 18px`

**Hover Checked State**
- Component: `<Checkbox color="primary" checked>` (with :hover)
- Background: `#0D47A1` (theme.palette.primary.dark)
- Border: `2px solid #0D47A1` (theme.palette.primary.dark)
- Ripple Effect: Circular ripple on hover

**Indeterminate State**
- Component: `<Checkbox color="primary" indeterminate>`
- Background: `#1565C0` (theme.palette.primary.main)
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Icon: ─ (horizontal line) in white color

**Focus State (Keyboard Navigation)**
- Component: `<Checkbox color="primary">` (with :focus-visible)
- Background: Current state background
- Border: Current state border
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`

**Disabled Unchecked State**
- Component: `<Checkbox color="primary" disabled>`
- Background: Transparent
- Border: `2px solid rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

**Disabled Checked State**
- Component: `<Checkbox color="primary" disabled checked>`
- Background: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Border: `2px solid rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Check Icon: ✓ in white color
- Cursor: `not-allowed`

#### Radio Button Component States

**Default Unchecked State**
- Component: `<Radio color="primary">`
- Background: Transparent
- Border: `2px solid rgba(0, 0, 0, 0.54)` (theme.palette.action.active)
- Size: `18px x 18px`
- Border Radius: `50%` (circular)
- Margin: `9px` (to achieve 36px touch target)

**Hover Unchecked State**
- Component: `<Radio color="primary">` (with :hover)
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Ripple Effect: Circular ripple on hover

**Checked State**
- Component: `<Radio color="primary" checked>`
- Background: Transparent
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Inner Circle: `8px x 8px` filled circle in `#1565C0` (theme.palette.primary.main)
- Size: `18px x 18px`

**Hover Checked State**
- Component: `<Radio color="primary" checked>` (with :hover)
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Border: `2px solid #0D47A1` (theme.palette.primary.dark)
- Inner Circle: `8px x 8px` filled circle in `#0D47A1` (theme.palette.primary.dark)

**Focus State (Keyboard Navigation)**
- Component: `<Radio color="primary">` (with :focus-visible)
- Background: Current state background
- Border: Current state border
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`

**Disabled Unchecked State**
- Component: `<Radio color="primary" disabled>`
- Background: Transparent
- Border: `2px solid rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

**Disabled Checked State**
- Component: `<Radio color="primary" disabled checked>`
- Background: Transparent
- Border: `2px solid rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Inner Circle: `8px x 8px` filled circle in `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

#### Switch/Toggle Component States

**Default Off State**
- Component: `<Switch color="primary">`
- Track Background: `rgba(0, 0, 0, 0.38)` (theme.palette.action.disabled)
- Track Width: `34px`
- Track Height: `14px`
- Track Border Radius: `7px`
- Thumb Background: `#FAFAFA` (theme.palette.grey[50])
- Thumb Size: `20px x 20px`
- Thumb Position: Left side (2px from edge)
- Thumb Border Radius: `50%`

**Hover Off State**
- Component: `<Switch color="primary">` (with :hover)
- Track Background: `rgba(0, 0, 0, 0.38)`
- Thumb Background: `#FAFAFA` with hover ripple effect
- Ripple Color: `rgba(0, 0, 0, 0.04)`

**On State**
- Component: `<Switch color="primary" checked>`
- Track Background: `rgba(21, 101, 192, 0.5)` (theme.palette.primary.main with alpha)
- Thumb Background: `#1565C0` (theme.palette.primary.main)
- Thumb Position: Right side (12px from left edge)

**Hover On State**
- Component: `<Switch color="primary" checked>` (with :hover)
- Track Background: `rgba(13, 71, 161, 0.5)` (theme.palette.primary.dark with alpha)
- Thumb Background: `#0D47A1` (theme.palette.primary.dark)
- Ripple Color: `rgba(21, 101, 192, 0.04)`

**Focus State (Keyboard Navigation)**
- Component: `<Switch color="primary">` (with :focus-visible)
- Track Background: Current state background
- Thumb Background: Current state background
- Outline: `2px solid #42A5F5` (theme.palette.primary.light)
- Outline Offset: `2px`

**Disabled Off State**
- Component: `<Switch color="primary" disabled>`
- Track Background: `rgba(0, 0, 0, 0.12)` (theme.palette.action.disabledBackground)
- Thumb Background: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

**Disabled On State**
- Component: `<Switch color="primary" disabled checked>`
- Track Background: `rgba(0, 0, 0, 0.12)` (theme.palette.action.disabledBackground)
- Thumb Background: `rgba(0, 0, 0, 0.26)` (theme.palette.action.disabled)
- Cursor: `not-allowed`

#### Form Validation Message Positioning and Styling

**Helper Text (Default)**
- Component: `<FormHelperText>`
- Position: Below form field with `8px` margin-top (theme.spacing(1))
- Font Size: `12px` (theme.typography.caption.fontSize)
- Font Weight: 400
- Line Height: `1.66`
- Color: `rgba(0, 0, 0, 0.6)` (theme.palette.text.secondary)
- Margin: `3px 14px 0` (aligned with field padding)

**Error Message**
- Component: `<FormHelperText error>`
- Position: Below form field with `8px` margin-top
- Font Size: `12px`
- Font Weight: 400
- Color: `#D32F2F` (theme.palette.error.main)
- Icon: ⚠️ Error icon positioned before text (optional)
- Animation: Fade in with 200ms transition

**Success Message**
- Component: `<FormHelperText sx={{ color: 'success.main' }}>`
- Position: Below form field with `8px` margin-top
- Font Size: `12px`
- Font Weight: 400
- Color: `#388E3C` (theme.palette.success.main)
- Icon: ✓ Success icon positioned before text (optional)
- Animation: Fade in with 200ms transition

**Warning Message**
- Component: `<FormHelperText sx={{ color: 'warning.main' }}>`
- Position: Below form field with `8px` margin-top
- Font Size: `12px`
- Font Weight: 400
- Color: `#F57C00` (theme.palette.warning.main)
- Icon: ⚠️ Warning icon positioned before text (optional)

**Field Label Specifications**
- Component: `<InputLabel>`
- Font Size: `16px` (default), `12px` (when floating)
- Font Weight: 400
- Color: `rgba(0, 0, 0, 0.6)` (theme.palette.text.secondary)
- Transform: `translate(14px, 16px) scale(1)` (default), `translate(14px, -9px) scale(0.75)` (floating)
- Transition: `color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms`

**Required Field Indicator**
- Component: `<InputLabel required>`
- Asterisk (*) Color: `#D32F2F` (theme.palette.error.main)
- Position: After label text with 4px spacing
- Font Size: Same as label
- Font Weight: Same as label

**Form Group Layout**
- Component: `<FormGroup>`
- Spacing between fields: `24px` (theme.spacing(3))
- Spacing between related fields: `16px` (theme.spacing(2))
- Maximum width: `400px` for optimal readability
- Alignment: Left-aligned labels and fields

**Form Section Layout**
- Component: `<Box>`
- Spacing between sections: `32px` (theme.spacing(4))
- Section headers: Typography variant h5 with 24px bottom margin
- Field grouping: Related fields grouped with 16px spacing
- Submit button positioning: Right-aligned with 24px top margin

## Indian Context-Specific Mockups

### Government Schemes Interface with Official Styling

#### Scheme Card Layout with Indian Government Branding

**Primary Scheme Card**
- Component: `<Card elevation={2}>`
- Dimensions: `100% width x auto height`
- Padding: `24px` (theme.spacing(3))
- Border Radius: `8px` (theme.shape.borderRadius * 2)
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border Top: `4px solid #FF9933` (Indian saffron accent)
- Box Shadow: `0px 2px 8px rgba(0, 0, 0, 0.1)`
- Hover State: `0px 4px 16px rgba(0, 0, 0, 0.15)` with `transform: translateY(-2px)`

**Government Badge/Logo Area**
- Component: `<Box>` with government emblem
- Position: Top-left corner with `16px` margin
- Size: `48px x 48px` for government logo/emblem
- Background: `#FFFFFF` with `2px solid #FF9933` border
- Border Radius: `50%` (circular)
- Content: Government of India emblem or state government logo
- Typography: "Government of India" or state name in `12px` caption below

**Scheme Title Section**
- Component: `<Typography variant="h6">`
- Font Weight: 600 (semi-bold)
- Color: `#1565C0` (theme.palette.primary.main)
- Margin Bottom: `8px` (theme.spacing(1))
- Line Height: 1.3
- Max Lines: 2 with ellipsis overflow

**Government Type Indicator**
- Component: `<Chip size="small">`
- Variants:
  - Central Government: `backgroundColor: '#1565C0', color: '#FFFFFF'`
  - State Government: `backgroundColor: '#FF9933', color: '#FFFFFF'`
  - Union Territory: `backgroundColor: '#388E3C', color: '#FFFFFF'`
- Font Size: `12px`
- Font Weight: 500
- Padding: `4px 12px`
- Border Radius: `16px`
- Position: Top-right corner

#### Currency Display Patterns for Rupee Amounts

**Primary Amount Display**
- Component: `<Typography variant="h5">`
- Format: `₹XX,XX,XXX` (Indian number formatting with commas)
- Font Weight: 700 (bold)
- Color: `#388E3C` (theme.palette.success.main)
- Font Family: 'Roboto Mono' for numbers (monospace)
- Position: Prominent placement in card header

**Amount Range Display**
- Component: `<Typography variant="body1">`
- Format: `₹X,XX,XXX - ₹XX,XX,XXX`
- Font Weight: 600
- Color: `#388E3C` (theme.palette.success.main)
- Background: `rgba(56, 142, 60, 0.1)` (success color with alpha)
- Padding: `4px 8px`
- Border Radius: `4px`
- Border: `1px solid rgba(56, 142, 60, 0.3)`

**Subsidy/Benefit Amount**
- Component: `<Box>` with icon and text
- Icon: `₹` symbol in `#FF9933` (secondary color)
- Text Format: "Up to ₹XX,XX,XXX subsidy"
- Font Size: `14px`
- Font Weight: 500
- Color: `#212121` (theme.palette.text.primary)

**Loan Amount with Interest Rate**
- Component: `<Stack direction="row" spacing={1}>`
- Principal: `₹XX,XX,XXX` in `#1565C0`
- Interest Rate: `@ X.X% p.a.` in `#757575`
- Tenure: `for XX years` in `#757575`
- Font Size: `14px`
- Alignment: Horizontal stack with consistent spacing

#### Deadline and Eligibility Indicator Designs

**Deadline Indicator - Urgent (< 30 days)**
- Component: `<Alert severity="error" variant="outlined">`
- Background: `rgba(211, 47, 47, 0.05)`
- Border: `1px solid #D32F2F`
- Icon: ⏰ Clock icon in `#D32F2F`
- Text: "Deadline: DD MMM YYYY (XX days left)"
- Font Weight: 600
- Animation: Subtle pulse effect for urgency

**Deadline Indicator - Moderate (30-90 days)**
- Component: `<Alert severity="warning" variant="outlined">`
- Background: `rgba(245, 124, 0, 0.05)`
- Border: `1px solid #F57C00`
- Icon: 📅 Calendar icon in `#F57C00`
- Text: "Deadline: DD MMM YYYY (XX days left)"
- Font Weight: 500

**Deadline Indicator - Comfortable (> 90 days)**
- Component: `<Alert severity="info" variant="outlined">`
- Background: `rgba(21, 101, 192, 0.05)`
- Border: `1px solid #1565C0`
- Icon: 📅 Calendar icon in `#1565C0`
- Text: "Deadline: DD MMM YYYY (XX days left)"
- Font Weight: 500

**Rolling/Ongoing Deadline**
- Component: `<Chip variant="outlined">`
- Background: `rgba(0, 105, 92, 0.1)`
- Border: `1px solid #00695C`
- Text: "Rolling Basis" or "Ongoing"
- Color: `#00695C` (theme.palette.info.main)
- Icon: ♾️ Infinity symbol

**Eligibility Status Indicators**

**Eligible Status**
- Component: `<Box>` with success styling
- Background: `rgba(56, 142, 60, 0.1)`
- Border: `1px solid #388E3C`
- Border Radius: `8px`
- Padding: `12px 16px`
- Icon: ✅ Check mark in `#388E3C`
- Text: "You are eligible for this scheme"
- Font Weight: 600
- Color: `#2E7D32` (theme.palette.success.dark)

**Partially Eligible Status**
- Component: `<Box>` with warning styling
- Background: `rgba(245, 124, 0, 0.1)`
- Border: `1px solid #F57C00`
- Border Radius: `8px`
- Padding: `12px 16px`
- Icon: ⚠️ Warning icon in `#F57C00`
- Text: "You meet X out of Y criteria"
- Font Weight: 600
- Color: `#E65100` (theme.palette.warning.dark)

**Not Eligible Status**
- Component: `<Box>` with error styling
- Background: `rgba(211, 47, 47, 0.1)`
- Border: `1px solid #D32F2F`
- Border Radius: `8px`
- Padding: `12px 16px`
- Icon: ❌ Cross mark in `#D32F2F`
- Text: "Not eligible - missing X criteria"
- Font Weight: 600
- Color: `#C62828` (theme.palette.error.dark)

**Eligibility Criteria Checklist**
- Component: `<List dense>`
- Item Component: `<ListItem>`
- Met Criteria: ✅ Green check with `#388E3C` color
- Unmet Criteria: ❌ Red cross with `#D32F2F` color
- Partial Criteria: ⚠️ Yellow warning with `#F57C00` color
- Text Color: `#212121` for met, `#757575` for unmet
- Font Size: `14px`
- Line Height: 1.5

#### Application Status Tracking Interface

**Application Status Header**
- Component: `<Paper elevation={1}>`
- Background: `#FAFAFA` (theme.palette.background.default)
- Padding: `16px 24px`
- Border Radius: `8px 8px 0 0`
- Typography: `<Typography variant="h6">` "Application Status"
- Color: `#1565C0` (theme.palette.primary.main)

**Status Progress Stepper**
- Component: `<Stepper orientation="horizontal" alternativeLabel>`
- Steps: ["Submitted", "Under Review", "Document Verification", "Approval", "Disbursement"]
- Active Step Color: `#1565C0` (theme.palette.primary.main)
- Completed Step Color: `#388E3C` (theme.palette.success.main)
- Inactive Step Color: `#BDBDBD` (theme.palette.grey[400])
- Connector Color: `#E0E0E0` (theme.palette.grey[300])

**Individual Status Steps**

**Step 1: Application Submitted**
- Icon: 📝 Document icon
- Status: "Submitted on DD MMM YYYY at HH:MM"
- Color: `#388E3C` (completed)
- Background: `rgba(56, 142, 60, 0.1)`
- Additional Info: "Application ID: APPXXXXXXXX"

**Step 2: Under Review**
- Icon: 👁️ Eye icon or 🔍 Magnifying glass
- Status: "Under review since DD MMM YYYY"
- Color: `#1565C0` (active) or `#F57C00` (in progress)
- Background: `rgba(21, 101, 192, 0.1)` or `rgba(245, 124, 0, 0.1)`
- Additional Info: "Expected completion: DD MMM YYYY"

**Step 3: Document Verification**
- Icon: 📋 Clipboard with checkmark
- Status: "Documents verified" or "Pending verification"
- Color: `#388E3C` (completed) or `#F57C00` (pending)
- Additional Info: "Missing documents" list if applicable

**Step 4: Approval Decision**
- Icon: ✅ Approval or ❌ Rejection
- Status: "Approved for ₹XX,XX,XXX" or "Rejected - Reason"
- Color: `#388E3C` (approved) or `#D32F2F` (rejected)
- Additional Info: Approval letter download link or rejection reason

**Step 5: Fund Disbursement**
- Icon: 💰 Money bag or 🏦 Bank icon
- Status: "Funds disbursed to account XXXX"
- Color: `#388E3C` (completed)
- Additional Info: "Transaction ID: TXNXXXXXXXX"

**Status Timeline View**
- Component: `<Timeline>`
- Item Component: `<TimelineItem>`
- Dot Colors: Match status colors above
- Content: Date, time, and status description
- Connector: Vertical line connecting timeline items
- Spacing: `16px` between timeline items

**Action Buttons for Each Status**

**Document Upload Button**
- Component: `<Button variant="contained" startIcon={<Upload />}>`
- Background: `#1565C0` (theme.palette.primary.main)
- Text: "Upload Missing Documents"
- Visibility: Only when documents are required

**Track Application Button**
- Component: `<Button variant="outlined" startIcon={<Visibility />}>`
- Border: `1px solid #1565C0`
- Text: "Track Application"
- Color: `#1565C0`

**Download Certificate Button**
- Component: `<Button variant="contained" startIcon={<Download />}>`
- Background: `#388E3C` (theme.palette.success.main)
- Text: "Download Approval Certificate"
- Visibility: Only when approved

**Appeal/Reapply Button**
- Component: `<Button variant="outlined" startIcon={<Refresh />}>`
- Border: `1px solid #F57C00`
- Text: "Appeal Decision" or "Reapply"
- Color: `#F57C00`
- Visibility: Only when rejected

**Status Notification Badges**
- Component: `<Badge badgeContent={number} color="error">`
- Position: Top-right of application card
- Colors:
  - Red: Action required (missing documents)
  - Orange: In progress (under review)
  - Green: Completed/Approved
  - Blue: Information available

**Government Contact Information Section**
- Component: `<Card variant="outlined">`
- Background: `rgba(255, 153, 51, 0.05)` (light saffron)
- Border: `1px solid rgba(255, 153, 51, 0.3)`
- Content:
  - Nodal Officer Name and Designation
  - Phone: +91-XXXXXXXXXX
  - Email: officer@gov.in
  - Office Address with pincode
  - Office Hours: 10:00 AM - 5:00 PM (Mon-Fri)

**Scheme Statistics Dashboard**
- Component: `<Grid container spacing={2}>`
- Metrics Cards:
  - Total Applications: Number with trend arrow
  - Success Rate: Percentage with color coding
  - Average Processing Time: Days with calendar icon
  - Fund Utilization: Percentage with progress bar

**Application Form Integration**
- Component: `<Stepper orientation="vertical">`
- Form Sections:
  1. Basic Information (Company details, registration)
  2. Project Details (Description, timeline, budget)
  3. Financial Information (Bank details, existing funding)
  4. Document Upload (Required certificates, proofs)
  5. Declaration and Submission

**Mobile-Responsive Adaptations**
- Card Layout: Single column on mobile
- Status Stepper: Vertical orientation on mobile
- Font Sizes: Scaled down by 10% on mobile
- Touch Targets: Minimum 44px for all interactive elements
- Spacing: Reduced by 25% on mobile devices

**Accessibility Compliance**
- Color Contrast: All text maintains WCAG AA standards
- Focus Indicators: 2px solid outline for keyboard navigation
- Screen Reader: Proper ARIA labels for all status elements
- Alternative Text: Descriptive alt text for all icons
- Keyboard Navigation: Tab order follows logical sequence

**Form Section Headers**
- Component: Typography variant="h6"
- Font Size: `16px` (theme.typography.h6.fontSize)
- Font Weight: 500
- Color: `#212121` (theme.palette.text.primary)
- Margin Bottom: `16px` (theme.spacing(2))
- Border Bottom: `1px solid rgba(0, 0, 0, 0.12)` (optional for section separation)

### Loading and Skeleton State Specifications

#### Loading Spinner Components

**Circular Progress Indicator (Primary)**
- Component: `<CircularProgress color="primary" size={40} />`
- Size: `40px x 40px` (default)
- Color: `#1565C0` (theme.palette.primary.main)
- Stroke Width: `3.6px` (default)
- Animation: Continuous rotation with 1.4s duration
- Usage: General loading states, form submissions, data fetching

**Small Circular Progress (20px)**
- Component: `<CircularProgress color="primary" size={20} />`
- Size: `20px x 20px`
- Color: `#1565C0` (theme.palette.primary.main)
- Stroke Width: `3.6px`
- Usage: Button loading states, inline loading indicators

**Large Circular Progress (60px)**
- Component: `<CircularProgress color="primary" size={60} />`
- Size: `60px x 60px`
- Color: `#1565C0` (theme.palette.primary.main)
- Stroke Width: `3.6px`
- Usage: Page-level loading, major data operations

**Secondary Color Progress**
- Component: `<CircularProgress color="secondary" size={40} />`
- Size: `40px x 40px`
- Color: `#FF9933` (theme.palette.secondary.main)
- Usage: Accent loading states, Indian-themed loading

#### Linear Progress Indicators

**Determinate Progress Bar**
- Component: `<LinearProgress variant="determinate" value={progress} color="primary" />`
- Height: `4px` (default)
- Background: `rgba(21, 101, 192, 0.2)` (theme.palette.primary.main with alpha)
- Progress Color: `#1565C0` (theme.palette.primary.main)
- Border Radius: `2px`
- Animation: Smooth progress transition
- Usage: File uploads, form completion, multi-step processes

**Indeterminate Progress Bar**
- Component: `<LinearProgress color="primary" />`
- Height: `4px`
- Background: `rgba(21, 101, 192, 0.2)`
- Progress Color: `#1565C0` (theme.palette.primary.main)
- Animation: Continuous sliding animation
- Usage: Unknown duration loading, background processes

**Buffer Progress Bar**
- Component: `<LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />`
- Height: `4px`
- Background: `rgba(21, 101, 192, 0.2)`
- Progress Color: `#1565C0` (theme.palette.primary.main)
- Buffer Color: `rgba(21, 101, 192, 0.1)`
- Usage: Video/audio loading, content streaming

#### Skeleton Screen Components

**Text Skeleton (Single Line)**
- Component: `<Skeleton variant="text" width="100%" height={20} />`
- Height: `20px` (matches body1 line height)
- Width: `100%` (or specific width like `200px`, `60%`)
- Background: `rgba(0, 0, 0, 0.11)` (theme.palette.action.hover)
- Border Radius: `4px`
- Animation: Shimmer effect with 1.5s duration
- Usage: Loading text content, titles, descriptions

**Text Skeleton (Multiple Lines)**
```jsx
<Stack spacing={1}>
  <Skeleton variant="text" width="100%" height={20} />
  <Skeleton variant="text" width="80%" height={20} />
  <Skeleton variant="text" width="60%" height={20} />
</Stack>
```
- Line Spacing: `8px` (theme.spacing(1))
- Varying Widths: 100%, 80%, 60% for natural text appearance
- Usage: Paragraph loading, article content, descriptions

**Rectangular Skeleton (Images/Cards)**
- Component: `<Skeleton variant="rectangular" width={300} height={200} />`
- Width: Variable (e.g., `300px`, `100%`)
- Height: Variable (e.g., `200px`, `150px`)
- Border Radius: `4px` (theme.shape.borderRadius)
- Background: `rgba(0, 0, 0, 0.11)`
- Animation: Shimmer effect
- Usage: Image placeholders, card content, media loading

**Circular Skeleton (Avatars)**
- Component: `<Skeleton variant="circular" width={40} height={40} />`
- Size: `40px x 40px` (or `24px`, `56px` for different avatar sizes)
- Border Radius: `50%`
- Background: `rgba(0, 0, 0, 0.11)`
- Animation: Shimmer effect
- Usage: User avatars, profile pictures, circular icons

**Rounded Skeleton (Buttons/Chips)**
- Component: `<Skeleton variant="rounded" width={120} height={36} />`
- Width: Variable (e.g., `120px` for buttons, `80px` for chips)
- Height: `36px` (button height) or `32px` (chip height)
- Border Radius: `18px` (pill shape) or `4px` (button shape)
- Background: `rgba(0, 0, 0, 0.11)`
- Usage: Button placeholders, chip loading, pill-shaped elements

#### Page-Level Skeleton Screens

**Dashboard Skeleton Layout**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ HEADER SKELETON                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│ [○] ████████████    ████  ████  ████  ████     [████] [████]                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ MAIN CONTENT SKELETON                                                           │
│                                                                                 │
│ ████████████████████████████                                                   │
│ ████████████████████                                                           │
│                                                                                 │
│ ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐       │
│ │ ████████████████    │ │ ████████████████    │ │ ████████████████    │       │
│ │ ████████████        │ │ ████████████        │ │ ████████████        │       │
│ │                     │ │                     │ │                     │       │
│ │ ████████████████    │ │ ████████████████    │ │ ████████████████    │       │
│ │ ████████████████    │ │ ████████████████    │ │ ████████████████    │       │
│ └─────────────────────┘ └─────────────────────┘ └─────────────────────┘       │
│                                                                                 │
│ ████████████████████████████                                                   │
│ ████████████████████                                                           │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────┐   │
│ │ ████████████████████████████████████████████████████████████████████    │   │
│ │ ████████████████████████████████████████████████████████████████        │   │
│ │ ████████████████████████████████████████████████████████████████████    │   │
│ │ ████████████████████████████████████████████████████████████████        │   │
│ └─────────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Learning Paths Skeleton Layout**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ HEADER SKELETON                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│ [○] ████████████    ████  ████  ████  ████     [████] [████]                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ FILTERS & SEARCH SKELETON                                                       │
│ [████████████████████████████████████████] [████] [████] [████]                │
│                                                                                 │
│ COURSE GRID SKELETON                                                            │
│                                                                                 │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │                 │ │                 │ │                 │ │                 │ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │ ████████████    │ │ ████████████    │ │ ████████████    │ │ ████████████    │ │
│ │                 │ │                 │ │                 │ │                 │ │
│ │ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
│                                                                                 │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │                 │ │                 │ │                 │ │                 │ │
│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│ │
│ │ ████████████    │ │ ████████████    │ │ ████████████    │ │ ████████████    │ │
│ │                 │ │                 │ │                 │ │                 │ │
│ │ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Government Schemes Skeleton Layout**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ HEADER SKELETON                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│ [○] ████████████    ████  ████  ████  ████     [████] [████]                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ SEARCH & FILTERS SKELETON                                                       │
│ [████████████████████████████████████████████████████████] [████] [████]       │
│                                                                                 │
│ SIDEBAR (25%)                    │ MAIN CONTENT (75%)                           │
│ ┌─────────────────────────────┐  │ ┌─────────────────────────────────────────┐ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████████    │ │
│ │                             │  │ │ ████████████████████████████████        │ │
│ │ ████████████████████████    │  │ │                                         │ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████████    │ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████████    │ │
│ │                             │  │ │ ████████████████████████████████████    │ │
│ │ ████████████████████████    │  │ │                                         │ │
│ │ ████████████████████████    │  │ │ [████████] [████████] [████████]        │ │
│ │ ████████████████████████    │  │ └─────────────────────────────────────────┘ │
│ │                             │  │                                             │
│ │ ████████████████████████    │  │ ┌─────────────────────────────────────────┐ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████████    │ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████        │ │
│ │                             │  │ │                                         │ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████████    │ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████████    │ │
│ │ ████████████████████████    │  │ │ ████████████████████████████████████    │ │
│ └─────────────────────────────┘  │ │                                         │ │
│                                  │ │ [████████] [████████] [████████]        │ │
│                                  │ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### Data Loading States for Tables and Lists

**Table Loading State**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ TABLE HEADER                                                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│ Name                    │ Status        │ Date          │ Amount        │ Actions │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ████████████████████    │ ████████      │ ████████      │ ████████      │ ████    │
│ ████████████████        │ ████████      │ ████████      │ ████████      │ ████    │
│ ████████████████████    │ ████████      │ ████████      │ ████████      │ ████    │
│ ████████████████        │ ████████      │ ████████      │ ████████      │ ████    │
│ ████████████████████    │ ████████      │ ████████      │ ████████      │ ████    │
│ ████████████████        │ ████████      │ ████████      │ ████████      │ ████    │
│ ████████████████████    │ ████████      │ ████████      │ ████████      │ ████    │
│ ████████████████        │ ████████      │ ████████      │ ████████      │ ████    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**List Loading State (Vertical)**
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ┌─────┐ ████████████████████████████████████████████████████████████████████   │
│ │ ○   │ ████████████████████████████████████████████████████                   │
│ │     │ ████████████████████████████████████████████████████████████████████   │
│ └─────┘                                                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────┐ ████████████████████████████████████████████████████████████████████   │
│ │ ○   │ ████████████████████████████████████████████████████                   │
│ │     │ ████████████████████████████████████████████████████████████████████   │
│ └─────┘                                                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────┐ ████████████████████████████████████████████████████████████████████   │
│ │ ○   │ ████████████████████████████████████████████████████                   │
│ │     │ ████████████████████████████████████████████████████████████████████   │
│ └─────┘                                                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ┌─────┐ ████████████████████████████████████████████████████████████████████   │
│ │ ○   │ ████████████████████████████████████████████████████                   │
│ │     │ ████████████████████████████████████████████████████████████████████   │
│ └─────┘                                                                         │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Card Grid Loading State**
```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│                 │ │                 │ │                 │ │                 │
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│ ████████████    │ │ ████████████    │ │ ████████████    │ │ ████████████    │
│                 │ │                 │ │                 │ │                 │
│ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│                 │ │                 │ │                 │ │                 │
│ ████████████████│ │ ████████████████│ │ ████████████████│ │ ████████████████│
│ ████████████    │ │ ████████████    │ │ ████████████    │ │ ████████████    │
│                 │ │                 │ │                 │ │                 │
│ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │ │ ████ ████ ████ │
└─────────────────┘ └─────────────────┘ └─────────────────┘ └─────────────────┘
```

#### Loading State Implementation Guidelines

**Button Loading States**
- Component: `<Button disabled startIcon={<CircularProgress size={20} />}>`
- Replace button text with "Loading..." or keep original text
- Disable button interaction during loading
- Show small spinner (20px) as start icon
- Maintain button dimensions to prevent layout shift

**Form Loading States**
- Show linear progress bar at top of form during submission
- Disable all form fields during submission
- Replace submit button with loading button
- Display success/error message after completion

**Page Loading States**
- Show skeleton screens immediately on navigation
- Replace skeleton with actual content progressively
- Maintain consistent layout structure
- Use appropriate skeleton variants for different content types

**Data Fetching Loading States**
- Show skeleton for initial data load
- Show spinner for refresh/reload operations
- Show progress bar for known-duration operations
- Show shimmer animation for content placeholders

**Accessibility Considerations for Loading States**
- Include `aria-live="polite"` for loading announcements
- Provide text alternatives for visual loading indicators
- Ensure loading states are announced to screen readers
- Maintain focus management during loading transitions
- Use `aria-busy="true"` on loading containers

## 1. Landing Page Mockup with Conversion Flow

### Hero Section Layout (Desktop: 1200px+ width)

**Container Specifications**
- Component: `<Container maxWidth="lg">`
- Max Width: `1200px`
- Padding: `0 24px` (theme.spacing(0, 3))
- Margin: `0 auto`
- Background: `#FAFAFA` (theme.palette.background.default)

**Hero Section Grid Layout**
- Component: `<Grid container spacing={6}>`
- Total Height: `600px`
- Padding: `80px 0` (theme.spacing(10, 0))
- Grid Spacing: `48px` (theme.spacing(6))

**Left Column Content (60% width)**
- Component: `<Grid item xs={12} md={7}>`
- Width: `60%` on desktop, `100%` on mobile
- Padding Right: `48px` (theme.spacing(6))

**Main Headline**
- Component: `<Typography variant="h1" component="h1">`
- Font Size: `48px` (3rem)
- Font Weight: `700` (Bold)
- Line Height: `1.2` (57.6px)
- Color: `#212121` (theme.palette.text.primary)
- Margin Bottom: `24px` (theme.spacing(3))
- Text: "India's Complete"

**Highlighted Text (Saffron)**
- Component: `<Typography variant="h1" component="span" sx={{ color: 'secondary.main' }}>`
- Font Size: `48px` (3rem)
- Font Weight: `700` (Bold)
- Color: `#FF9933` (theme.palette.secondary.main)
- Text: "🟠 Startup Playbook"

**Subheadline/Description**
- Component: `<Typography variant="h5" component="p">`
- Font Size: `20px` (1.25rem)
- Font Weight: `400` (Regular)
- Line Height: `1.6` (32px)
- Color: `#757575` (theme.palette.text.secondary)
- Margin Bottom: `40px` (theme.spacing(5))
- Max Width: `480px`
- Text: "Navigate Indian regulations, access government schemes, and build your startup with confidence."

**Call-to-Action Button Group**
- Component: `<Stack direction="row" spacing={3}>`
- Spacing: `24px` (theme.spacing(3))
- Margin Bottom: `24px` (theme.spacing(3))

**Primary CTA Button**
- Component: `<Button variant="contained" color="primary" size="large" startIcon={<RocketLaunchIcon />}>`
- Background: `#1565C0` (theme.palette.primary.main)
- Text Color: `#FFFFFF` (white)
- Font Size: `16px` (1rem)
- Font Weight: `500` (Medium)
- Padding: `12px 32px` (theme.spacing(1.5, 4))
- Border Radius: `8px`
- Min Width: `200px`
- Height: `48px`
- Text Transform: `none`
- Box Shadow: `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)`
- Hover Background: `#0D47A1` (theme.palette.primary.dark)
- Hover Transform: `translateY(-2px)`
- Hover Box Shadow: `0px 6px 10px -2px rgba(0,0,0,0.2), 0px 4px 8px 0px rgba(0,0,0,0.14), 0px 2px 16px 0px rgba(0,0,0,0.12)`
- Text: "🚀 Start Your Journey"

**Secondary CTA Button**
- Component: `<Button variant="outlined" color="primary" size="large" startIcon={<PlayArrowIcon />}>`
- Background: `transparent`
- Text Color: `#1565C0` (theme.palette.primary.main)
- Border: `2px solid #1565C0` (theme.palette.primary.main)
- Font Size: `16px` (1rem)
- Font Weight: `500` (Medium)
- Padding: `10px 30px` (adjusted for border)
- Border Radius: `8px`
- Min Width: `140px`
- Height: `48px`
- Text Transform: `none`
- Hover Background: `rgba(21, 101, 192, 0.04)`
- Hover Border: `2px solid #0D47A1` (theme.palette.primary.dark)
- Text: "▶ Demo"

**Trust Indicators**
- Component: `<Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>`
- Font Size: `14px` (0.875rem)
- Font Weight: `400` (Regular)
- Color: `#388E3C` (theme.palette.success.main)
- Margin Top: `16px` (theme.spacing(2))
- Text: "✅ Free to start • No credit card required"

**Right Column Content (40% width)**
- Component: `<Grid item xs={12} md={5}>`
- Width: `40%` on desktop, `100%` on mobile
- Padding Left: `24px` (theme.spacing(3))

**Quick Start Checklist Card**
- Component: `<Card elevation={3}>`
- Background: `#1565C0` (theme.palette.primary.main)
- Border Radius: `12px`
- Padding: `32px` (theme.spacing(4))
- Box Shadow: `0px 8px 24px rgba(21, 101, 192, 0.15)`
- Max Width: `400px`
- Margin: `0 auto`

**Card Header**
- Component: `<Typography variant="h4" sx={{ color: 'white', mb: 3 }}>`
- Font Size: `24px` (1.5rem)
- Font Weight: `600` (Semi-bold)
- Color: `#FFFFFF` (white)
- Margin Bottom: `24px` (theme.spacing(3))
- Text: "Quick Start Checklist"

**Checklist Items**
- Component: `<List sx={{ color: 'white' }}>`
- Each Item: `<ListItem sx={{ py: 1 }}>`
- Item Padding: `8px 0` (theme.spacing(1, 0))
- Icon: `<CheckCircleIcon sx={{ color: 'secondary.main', mr: 2 }}>`
- Icon Color: `#FF9933` (theme.palette.secondary.main)
- Icon Size: `20px`
- Icon Margin Right: `16px` (theme.spacing(2))
- Text Color: `#FFFFFF` (white)
- Font Size: `16px` (1rem)
- Font Weight: `400` (Regular)

**Checklist Item List:**
1. "✓ Company Registration Guide"
2. "✓ GST & Tax Setup"
3. "✓ Government Scheme Access"
4. "✓ Legal Document Templates"
5. "✓ Funding Roadmap"

### Header Navigation Bar

**Header Container**
- Component: `<AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Height: `80px`
- Box Shadow: `0px 1px 3px rgba(0, 0, 0, 0.12)`
- Border Bottom: `1px solid rgba(0, 0, 0, 0.12)`

**Header Content**
- Component: `<Toolbar sx={{ height: '80px', px: 3 }}>`
- Padding: `0 24px` (theme.spacing(0, 3))
- Height: `80px`
- Display: `flex`
- Justify Content: `space-between`
- Align Items: `center`

**Logo Section**
- Component: `<Box sx={{ display: 'flex', alignItems: 'center' }}>`
- Logo Icon: `🧭` (24px size)
- Logo Text: `<Typography variant="h6" sx={{ ml: 1, fontWeight: 600, color: 'primary.main' }}>`
- Font Size: `20px` (1.25rem)
- Font Weight: `600` (Semi-bold)
- Color: `#1565C0` (theme.palette.primary.main)
- Margin Left: `8px` (theme.spacing(1))
- Text: "Founder's Compass"

**Navigation Menu**
- Component: `<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>`
- Display: Hidden on mobile, flex on desktop
- Gap: `32px` (theme.spacing(4))

**Navigation Links**
- Component: `<Button variant="text" color="inherit" sx={{ textTransform: 'none' }}>`
- Font Size: `16px` (1rem)
- Font Weight: `500` (Medium)
- Color: `#212121` (theme.palette.text.primary)
- Text Transform: `none`
- Padding: `8px 16px` (theme.spacing(1, 2))
- Hover Background: `rgba(21, 101, 192, 0.04)`
- Hover Color: `#1565C0` (theme.palette.primary.main)

**Navigation Items:**
- "Learning"
- "Resources" 
- "Community"
- "Schemes"

**Auth Button Group**
- Component: `<Stack direction="row" spacing={2}>`
- Spacing: `16px` (theme.spacing(2))

**Login Button**
- Component: `<Button variant="text" color="primary" sx={{ textTransform: 'none' }}>`
- Font Size: `16px` (1rem)
- Font Weight: `500` (Medium)
- Color: `#1565C0` (theme.palette.primary.main)
- Text Transform: `none`
- Padding: `8px 16px` (theme.spacing(1, 2))
- Text: "Login"

**Sign Up Button**
- Component: `<Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>`
- Background: `#1565C0` (theme.palette.primary.main)
- Text Color: `#FFFFFF` (white)
- Font Size: `16px` (1rem)
- Font Weight: `500` (Medium)
- Text Transform: `none`
- Padding: `8px 24px` (theme.spacing(1, 3))
- Border Radius: `6px`
- Text: "Sign Up"

**Saffron Accent Line**
- Component: `<Box sx={{ height: '4px', bgcolor: 'secondary.main' }}>`
- Height: `4px`
- Background: `#FF9933` (theme.palette.secondary.main)
- Width: `100%`

### Features Section

**Features Container**
- Component: `<Container maxWidth="lg" sx={{ py: 10 }}>`
- Max Width: `1200px`
- Padding: `80px 24px` (theme.spacing(10, 3))
- Background: `#FFFFFF` (theme.palette.background.paper)

**Features Grid**
- Component: `<Grid container spacing={4}>`
- Grid Spacing: `32px` (theme.spacing(4))
- Justify Content: `center`

**Feature Card**
- Component: `<Card elevation={2} sx={{ height: '100%', textAlign: 'center', p: 4 }}>`
- Height: `100%` (equal height cards)
- Text Align: `center`
- Padding: `32px` (theme.spacing(4))
- Border Radius: `12px`
- Box Shadow: `0px 2px 8px rgba(0, 0, 0, 0.1)`
- Hover Transform: `translateY(-4px)`
- Hover Box Shadow: `0px 8px 24px rgba(0, 0, 0, 0.15)`
- Transition: `all 0.3s ease-in-out`

**Feature Icon**
- Component: `<Box sx={{ fontSize: '48px', mb: 2 }}>`
- Font Size: `48px` (3rem)
- Margin Bottom: `16px` (theme.spacing(2))

**Feature Title**
- Component: `<Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>`
- Font Size: `20px` (1.25rem)
- Font Weight: `600` (Semi-bold)
- Color: `#212121` (theme.palette.text.primary)
- Margin Bottom: `16px` (theme.spacing(2))

**Feature Description**
- Component: `<Typography variant="body1" color="text.secondary">`
- Font Size: `16px` (1rem)
- Font Weight: `400` (Regular)
- Color: `#757575` (theme.palette.text.secondary)
- Line Height: `1.6`

**Feature Cards Content:**

1. **Learning Paths**
   - Icon: "📚"
   - Title: "Learning Paths"
   - Description: "Step-by-step guides for Indian regulations and startup processes"

2. **Schemes Locator**
   - Icon: "🏛️"
   - Title: "Schemes Locator"
   - Description: "Find government schemes & grants tailored to your startup"

3. **Templates Library**
   - Icon: "📄"
   - Title: "Templates Library"
   - Description: "India-specific documents & templates for legal compliance"

4. **Community Forum**
   - Icon: "👥"
   - Title: "Community Forum"
   - Description: "Connect with founders & get advice from experienced entrepreneurs"

### Responsive Behavior Annotations

**Mobile Layout (320px - 767px)**

**Hero Section Mobile Adaptations:**
- Component: `<Grid container spacing={3}>`
- Grid Spacing: `24px` (theme.spacing(3))
- Padding: `40px 16px` (theme.spacing(5, 2))
- Stack Direction: `column`

**Mobile Headline:**
- Font Size: `32px` (2rem) - reduced from 48px
- Line Height: `1.3` (41.6px)
- Margin Bottom: `16px` (theme.spacing(2))

**Mobile Description:**
- Font Size: `18px` (1.125rem) - increased for readability
- Line Height: `1.5` (27px)
- Margin Bottom: `32px` (theme.spacing(4))

**Mobile CTA Buttons:**
- Stack Direction: `column`
- Spacing: `16px` (theme.spacing(2))
- Button Width: `100%`
- Button Height: `52px` (increased touch target)

**Mobile Quick Start Card:**
- Margin Top: `40px` (theme.spacing(5))
- Padding: `24px` (theme.spacing(3))
- Border Radius: `8px`

**Mobile Header:**
- Height: `64px` (reduced from 80px)
- Navigation: Hidden, replaced with hamburger menu
- Logo Font Size: `18px` (1.125rem)

**Mobile Features Grid:**
- Grid Columns: `1` (single column)
- Spacing: `24px` (theme.spacing(3))
- Card Padding: `24px` (theme.spacing(3))

**Tablet Layout (768px - 1199px)**

**Tablet Hero Section:**
- Grid Spacing: `32px` (theme.spacing(4))
- Padding: `60px 24px` (theme.spacing(7.5, 3))

**Tablet Headline:**
- Font Size: `40px` (2.5rem)
- Line Height: `1.25` (50px)

**Tablet CTA Buttons:**
- Stack Direction: `row`
- Primary Button Min Width: `180px`
- Secondary Button Min Width: `120px`

**Tablet Features Grid:**
- Grid Columns: `2` (two columns)
- Spacing: `24px` (theme.spacing(3))

**Performance Optimization Notes:**
- Images: Use WebP format with fallbacks
- Lazy Loading: Implement for below-fold content
- Critical CSS: Inline above-fold styles
- Font Loading: Use font-display: swap
- Animation: Use transform and opacity for smooth transitions
- Touch Targets: Minimum 44px for mobile interactions

**Accessibility Compliance:**
- Color Contrast: All text meets WCAG AA standards (4.5:1 minimum)
- Focus Indicators: Visible focus rings for keyboard navigation
- Alt Text: Descriptive alt text for all images and icons
- Semantic HTML: Proper heading hierarchy and landmark elements
- Screen Reader: ARIA labels for interactive elements
- Keyboard Navigation: Full keyboard accessibility support

### Visual ASCII Mockup

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ HEADER (White background, 80px height)                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│ [🧭] Founder's Compass    Learning  Resources  Community  Schemes  [Login] [Sign Up] │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ████████████████████████████████████████████████████████████████████████████████ │ ← Saffron accent line (4px)
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ HERO SECTION (600px height, 80px padding top/bottom)                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  LEFT COLUMN (60%, 48px padding-right)   │  RIGHT COLUMN (40%, 24px padding-left) │
│                                           │                                     │
│  India's Complete (48px, Bold)           │  ┌─────────────────────────────────┐ │
│  🟠 Startup Playbook (48px, Bold, Saffron)│  │ Quick Start Checklist          │ │
│                                           │  │ (Blue bg, 32px padding, 12px   │ │
│  Navigate Indian regulations, access      │  │  border-radius)                 │ │
│  government schemes, and build your       │  │                                 │ │
│  startup with confidence. (20px, 480px)  │  │ ✓ Company Registration Guide   │ │
│                                           │  │ ✓ GST & Tax Setup              │ │
│  [🚀 Start Your Journey] [▶ Demo]         │  │ ✓ Government Scheme Access     │ │
│  (48px height, 24px spacing)             │  │ ✓ Legal Document Templates     │ │
│                                           │  │ ✓ Funding Roadmap              │ │
│  ✅ Free to start • No credit card       │  │                                 │ │
│  (14px, Success green)                   │  └─────────────────────────────────┘ │
│                                           │                                     │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ FEATURES SECTION (80px padding, 32px grid spacing)                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │ 📚 (48px)   │  │ 🏛️ (48px)   │  │ 📄 (48px)   │  │ 👥 (48px)   │           │
│  │ Learning    │  │ Schemes     │  │ Templates   │  │ Community   │           │
│  │ Paths       │  │ Locator     │  │ Library     │  │ Forum       │           │
│  │ (20px, Bold)│  │ (20px, Bold)│  │ (20px, Bold)│  │ (20px, Bold)│           │
│  │             │  │             │  │             │  │             │           │
│  │ Step-by-step│  │ Find govt   │  │ India-spec  │  │ Connect with│           │
│  │ guides for  │  │ schemes &   │  │ documents & │  │ founders &  │           │
│  │ Indian regs │  │ grants      │  │ templates   │  │ get advice  │           │
│  │ (16px, Grey)│  │ (16px, Grey)│  │ (16px, Grey)│  │ (16px, Grey)│           │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘           │
│  (32px padding,   (32px padding,   (32px padding,   (32px padding,           │
│   12px radius,     12px radius,     12px radius,     12px radius,            │
│   hover effects)   hover effects)   hover effects)   hover effects)          │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 2. Dashboard Mockup

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ DASHBOARD LAYOUT                                                                │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ SIDEBAR (280px)          │ MAIN CONTENT AREA                                    │
│ ┌─────────────────────┐  │                                                      │
│ │ [🧭] Founder's      │  │ ┌──────────────────────────────────────────────────┐ │
│ │     Compass         │  │ │ Welcome back, Priya! 👋                          │ │
│ │                     │  │ │ (Blue background, white text)                    │ │
│ │ 🏠 Dashboard    ●   │  │ │                                                  │ │
│ │ 📚 Learning Paths③  │  │ │ You're 60% through your startup registration    │ │
│ │ 🏛️ Government       │  │ │ ████████████████████████░░░░░░░░░░ 60%          │ │
│ │    Schemes          │  │ └──────────────────────────────────────────────────┘ │
│ │ 📁 Resources        │  │                                                      │
│ │ 💬 Community    ⑤   │  │ STATS CARDS                                          │
│ │ 👤 Profile          │  │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│ │                     │  │ │ ✅  5   │ │ ⏳  3   │ │ 💰 ₹2.5L│ │ 📊 85% │    │
│ │ ─────────────────   │  │ │Completed│ │Pending  │ │Available│ │Profile │    │
│ │ 🔧 Settings         │  │ │Tasks    │ │Actions  │ │Grants   │ │Complete│    │
│ │ 🚪 Logout           │  │ └─────────┘ └─────────┘ └─────────┘ └─────────┘    │
│ └─────────────────────┘  │                                                      │
│                          │ RECENT ACTIVITY                                      │
│                          │ ┌──────────────────────────────────────────────────┐ │
│                          │ │ 📋 To-Do List                                    │ │
│                          │ │ ☐ Complete GST registration                      │ │
│                          │ │ ☐ Upload PAN card documents                      │ │
│                          │ │ ✅ Choose company name                           │ │
│                          │ │ ✅ Reserve domain name                           │ │
│                          │ └──────────────────────────────────────────────────┘ │
│                          │                                                      │
│                          │ ┌──────────────────────────────────────────────────┐ │
│                          │ │ 🎯 Recommended for You                           │ │
│                          │ │ • Maharashtra Startup Policy 2024               │ │
│                          │ │ • MSME Registration Guide                        │ │
│                          │ │ • Pitch Deck Template for Indian VCs            │ │
│                          │ └──────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 3. Learning Paths Page Mockup

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ LEARNING PATHS PAGE                                                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Dashboard > Learning Paths                                                      │
│                                                                                 │
│ Learning Paths                                                                  │
│ Step-by-step guides tailored for the Indian startup ecosystem                  │
│                                                                                 │
│ [All Paths] [Beginner] [Legal & Compliance] [Funding] [Operations]             │
│ ────────                                                                        │
│                                                                                 │
│ ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐       │
│ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │       │
│ │ │                 │ │ │ │                 │ │ │ │                 │ │       │
│ │ │      🏢         │ │ │ │      🏛️         │ │ │ │      💰         │ │       │
│ │ │   (Blue bg)     │ │ │ │  (Saffron bg)   │ │ │ │   (Teal bg)     │ │       │
│ │ │                 │ │ │ │                 │ │ │ │                 │ │       │
│ │ └─────────────────┘ │ │ └─────────────────┘ │ │ └─────────────────┘ │       │
│ │                     │ │                     │ │                     │       │
│ │ [Beginner] [5 mod]  │ │ [Intermediate] [7]  │ │ [Advanced] [4 mod]  │       │
│ │                     │ │                     │ │                     │       │
│ │ Company Registration│ │ GST Registration &  │ │ Fundraising from    │       │
│ │ in India            │ │ Compliance          │ │ Indian VCs          │       │
│ │                     │ │                     │ │                     │       │
│ │ Complete guide to   │ │ Master GST filing   │ │ Navigate the Indian │       │
│ │ registering Pvt Ltd,│ │ returns & staying   │ │ VC ecosystem and    │       │
│ │ LLP or Partnership  │ │ compliant with      │ │ raise your first    │       │
│ │                     │ │ examples            │ │ round of funding    │       │
│ │                     │ │                     │ │                     │       │
│ │ ████████░░░░ 40%    │ │ ░░░░░░░░░░░░ 0%     │ │ ░░░░░░░░░░░░ 0%     │       │
│ │                     │ │                     │ │                     │       │
│ │ ⏱️ 2-3 hrs [Continue]│ │ ⏱️ 4-5 hrs [Start]  │ │ ⏱️ 3-4 hrs [Start]  │       │
│ └─────────────────────┘ └─────────────────────┘ └─────────────────────┘       │
│                                                                                 │
│ ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐       │
│ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │       │
│ │ │      📊         │ │ │ │      🎯         │ │ │ │      👥         │ │       │
│ │ │   (Purple bg)   │ │ │ │   (Green bg)    │ │ │ │   (Orange bg)   │ │       │
│ │ └─────────────────┘ │ │ └─────────────────┘ │ │ └─────────────────┘ │       │
│ │                     │ │                     │ │                     │       │
│ │ [Intermediate] [6]  │ │ [Beginner] [3 mod]  │ │ [All Levels] [8]    │       │
│ │                     │ │                     │ │                     │       │
│ │ Financial Planning  │ │ MSME Registration   │ │ Building Your Team  │       │
│ │ & Projections       │ │ & Benefits          │ │ & Culture           │       │
│ │                     │ │                     │ │                     │       │
│ │ ⏱️ 3-4 hrs [Start]   │ │ ⏱️ 1-2 hrs [Start]   │ │ ⏱️ 5-6 hrs [Start]   │       │
│ └─────────────────────┘ └─────────────────────┘ └─────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 4. Government Schemes Page Mockup

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ GOVERNMENT SCHEMES PAGE                                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Government Schemes                                                              │
│ Find and access Central & State government funding and support schemes         │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ SEARCH & FILTERS                                                            │ │
│ │ ┌─────────────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │ │
│ │ │🔍 Search schemes│ │State ▼   │ │Industry▼ │ │Stage ▼   │ │[Search]  │   │ │
│ │ │                 │ │Maharashtra│ │Technology│ │Early     │ │          │   │ │
│ │ └─────────────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘   │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ MAIN RESULTS (70%)                    │ SIDEBAR (30%)                          │
│                                       │                                        │
│ ┌───────────────────────────────────┐ │ ┌────────────────────────────────────┐ │
│ │ Startup India Seed Fund Scheme    │ │ │ Available for You                  │ │
│ │ [Central Government]    [₹20 Lakhs]│ │ │                                    │ │
│ │                                   │ │ │ • 12 schemes match your profile    │ │
│ │ Provides financial assistance to  │ │ │   Based on location & industry     │ │
│ │ startups for proof of concept,    │ │ │                                    │ │
│ │ prototype development...          │ │ │ • ₹15.5 Lakhs total funding       │ │
│ │                                   │ │ │   Maximum available amount         │ │
│ │ [Technology] [Early Stage] [All]  │ │ │                                    │ │
│ │                                   │ │ │ • 3 applications in progress       │ │
│ │ 📅 Deadline: 31 Dec 2024 [Details]│ │ │                                    │ │
│ └───────────────────────────────────┘ │ └────────────────────────────────────┘ │
│                                       │                                        │
│ ┌───────────────────────────────────┐ │ ┌────────────────────────────────────┐ │
│ │ Maharashtra Startup Policy 2024   │ │ │ Quick Actions                      │ │
│ │ [State Government]      [₹5 Lakhs]│ │ │                                    │ │
│ │                                   │ │ │ 📋 Create Application Checklist    │ │
│ │ State-level incentives including  │ │ │ 📄 Download Application Templates  │ │
│ │ subsidies, tax benefits, and      │ │ │ 💬 Ask Community for Advice       │ │
│ │ infrastructure support...         │ │ │ 📞 Connect with Expert             │ │
│ │                                   │ │ │                                    │ │
│ │ [Manufacturing] [Growth] [MH]     │ │ └────────────────────────────────────┘ │
│ │                                   │ │                                        │
│ │ 📅 Rolling basis        [Details] │ │ ┌────────────────────────────────────┐ │
│ └───────────────────────────────────┘ │ │ Recently Viewed                    │ │
│                                       │ │                                    │ │
│ ┌───────────────────────────────────┐ │ │ • MSME Registration Benefits       │ │
│ │ MSME Udyam Registration Benefits  │ │ │ • Digital India Land Records       │ │
│ │ [Central Government]    [Various] │ │ │ • Export Promotion Schemes         │ │
│ │                                   │ │ │                                    │ │
│ │ Registration benefits including   │ │ └────────────────────────────────────┘ │
│ │ priority lending, tax exemptions  │ │                                        │
│ │ and government tender preferences │ │                                        │
│ │                                   │ │                                        │
│ │ [All Industries] [All Stages]     │ │                                        │
│ │                                   │ │                                        │
│ │ 📅 Ongoing              [Details] │ │                                        │
│ └───────────────────────────────────┘ │                                        │
│                                       │                                        │
│ [Load More Results...]                │                                        │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 5. Community Forum Page Mockup

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ COMMUNITY FORUM                                                                 │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Community Forum                                                                 │
│ Connect with fellow founders, ask questions, and share experiences              │
│                                                                                 │
│ [🔥 Hot] [📝 Recent] [❓ Questions] [💡 Tips] [🏆 Success Stories]              │
│                                                                                 │
│ MAIN FEED (70%)                       │ SIDEBAR (30%)                          │
│                                       │                                        │
│ ┌───────────────────────────────────┐ │ ┌────────────────────────────────────┐ │
│ │ 👤 Priya Sharma • 2 hours ago     │ │ │ 🔥 Trending Topics                 │ │
│ │ [❓ Question] [GST] [Maharashtra]  │ │ │                                    │ │
│ │                                   │ │ │ #GST-Registration (45 posts)       │ │
│ │ GST Registration for Tech Startup │ │ │ #Company-Formation (32 posts)      │ │
│ │                                   │ │ │ #Funding-Rounds (28 posts)         │ │
│ │ I'm registering my SaaS startup   │ │ │ #Maharashtra-Policy (15 posts)     │ │
│ │ in Pune. Do I need GST if my      │ │ │                                    │ │
│ │ revenue is under ₹20 lakhs?       │ │ └────────────────────────────────────┘ │
│ │                                   │ │                                        │
│ │ 👍 12  💬 8  🔗 Share             │ │ ┌────────────────────────────────────┐ │
│ └───────────────────────────────────┘ │ │ 👥 Active Members                  │ │
│                                       │ │                                    │ │
│ ┌───────────────────────────────────┐ │ │ 🟢 Rajesh Kumar (CA)               │ │
│ │ 👤 Amit Patel • 4 hours ago       │ │ │ 🟢 Sneha Reddy (Lawyer)            │ │
│ │ [💡 Tip] [Funding] [All States]   │ │ │ 🟡 Vikram Singh (Founder)          │ │
│ │                                   │ │ │ 🟢 Meera Joshi (CS)                │ │
│ │ 5 Mistakes to Avoid When Pitching │ │ │                                    │ │
│ │ to Indian VCs                     │ │ └────────────────────────────────────┘ │
│ │                                   │ │                                        │
│ │ Just closed our Series A! Here    │ │ ┌────────────────────────────────────┐ │
│ │ are the top mistakes I see        │ │ │ 📊 Your Stats                      │ │
│ │ founders make when pitching...    │ │ │                                    │ │
│ │                                   │ │ │ Posts: 5                           │ │
│ │ 👍 45  💬 23  🔗 Share            │ │ │ Helpful Answers: 12                │ │
│ └───────────────────────────────────┘ │ │ Reputation: 156 points             │ │
│                                       │ │ Badge: 🥉 Helper                   │ │
│ ┌───────────────────────────────────┐ │ │                                    │ │
│ │ 👤 Kavya Nair • 6 hours ago       │ │ │ [Ask Question] [Share Success]     │ │
│ │ [🏆 Success] [Kerala] [EdTech]     │ │ └────────────────────────────────────┘ │
│ │                                   │ │                                        │
│ │ From Idea to ₹1 Cr Revenue in 18  │ │                                        │
│ │ Months - Our Journey               │ │                                        │
│ │                                   │ │                                        │
│ │ Sharing our complete journey from │ │                                        │
│ │ college project to profitable...  │ │                                        │
│ │                                   │ │                                        │
│ │ 👍 89  💬 34  🔗 Share            │ │                                        │
│ └───────────────────────────────────┘ │                                        │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 6. Mobile-First Responsive Design

### Mobile Dashboard Layout
```
┌─────────────────────────┐
│ MOBILE DASHBOARD        │
├─────────────────────────┤
│ ☰ [🧭] Founder's Compass│
│ ████████████████████████│ ← Saffron line
│                         │
│ Welcome back, Priya! 👋 │
│ (Blue background)       │
│ Progress: 60%           │
│ ████████░░░░░░░░░░░░     │
│                         │
│ ┌─────┐ ┌─────┐         │
│ │✅ 5 │ │⏳ 3 │         │
│ │Done │ │Todo │         │
│ └─────┘ └─────┘         │
│                         │
│ ┌─────┐ ┌─────┐         │
│ │💰₹2.5L│ │📊85%│       │
│ │Grants│ │Profile│      │
│ └─────┘ └─────┘         │
│                         │
│ 📋 Quick Actions        │
│ • Complete GST reg      │
│ • Upload documents      │
│ • Check new schemes     │
│                         │
│ ─────────────────────── │
│ 🏠 📚 🏛️ 💬 👤         │ ← Bottom nav
└─────────────────────────┘
```

### Mobile Learning Path Card
```
┌─────────────────────────┐
│ ┌─────────────────────┐ │
│ │                     │ │
│ │        🏢           │ │
│ │    (Blue bg)        │ │
│ │                     │ │
│ └─────────────────────┘ │
│                         │
│ [Beginner] [5 modules]  │
│                         │
│ Company Registration    │
│ in India                │
│                         │
│ Complete guide to       │
│ registering your        │
│ company in India...     │
│                         │
│ ████████░░░░ 40%        │
│                         │
│ ⏱️ 2-3 hrs   [Continue] │
└─────────────────────────┘
```

## 7. AI-Powered Startup Assistant Interface

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ AI STARTUP ASSISTANT                                                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ 🤖 AI Startup Assistant                                    [💬 New Chat] [⚙️]  │
│                                                                                 │
│ CHAT INTERFACE (70%)                      │ QUICK ACTIONS (30%)                │
│                                           │                                    │
│ ┌───────────────────────────────────────┐ │ ┌────────────────────────────────┐ │
│ │ 🤖 Hi! I'm your AI startup assistant. │ │ │ 🚀 Quick Start Templates       │ │
│ │    How can I help you today?          │ │ │                                │ │
│ │                                       │ │ │ • Business Plan Generator      │ │
│ │ 👤 I have an idea for a food delivery │ │ │ • Pitch Deck Builder           │ │
│ │    app. How do I start?               │ │ │ • Legal Document Templates     │ │
│ │                                       │ │ │ • Financial Projections       │ │
│ │ 🤖 Great idea! Let me create a        │ │ │                                │ │
│ │    personalized roadmap for you:      │ │ └────────────────────────────────┘ │
│ │                                       │ │                                    │
│ │    📋 YOUR STARTUP ROADMAP            │ │ ┌────────────────────────────────┐ │
│ │    ┌─────────────────────────────────┐ │ │ │ 📊 Market Research Tools       │ │
│ │    │ Phase 1: Validation (Week 1-2) │ │ │ │                                │ │
│ │    │ • Market research in India      │ │ │ │ • Competitor Analysis          │ │
│ │    │ • Customer interviews           │ │ │ │ • TAM/SAM Calculator           │ │
│ │    │ • MVP wireframes               │ │ │ │ • Customer Survey Builder      │ │
│ │    └─────────────────────────────────┘ │ │ │ • Industry Reports             │ │
│ │                                       │ │ │                                │ │
│ │    ┌─────────────────────────────────┐ │ │ └────────────────────────────────┘ │
│ │    │ Phase 2: Legal Setup (Week 3-4)│ │ │                                    │
│ │    │ • Company registration          │ │ │ ┌────────────────────────────────┐ │
│ │    │ • FSSAI license (food business)│ │ │ │ 🎯 Funding Readiness           │ │
│ │    │ • GST registration              │ │ │ │                                │ │
│ │    └─────────────────────────────────┘ │ │ │ Current Score: 45/100          │ │
│ │                                       │ │ │ ████████░░░░░░░░░░░░ 45%        │ │
│ │    [📥 Download Full Plan]            │ │ │                                │ │
│ │                                       │ │ │ Missing:                       │ │
│ │ 👤 This is perfect! Can you help me   │ │ │ • Business Plan ❌             │ │
│ │    with the FSSAI license process?    │ │ │ • Financial Model ❌           │ │
│ │                                       │ │ │ • Team Formation ❌            │ │
│ │ 🤖 Absolutely! FSSAI registration     │ │ │                                │ │
│ │    for food delivery requires...      │ │ │ [📈 Improve Score]             │ │
│ └───────────────────────────────────────┘ │ └────────────────────────────────┘ │
│                                           │                                    │
│ ┌─────────────────────────────────────────┐                                   │
│ │ 💬 Ask me anything about startups...    │ [Send] [🎤] [📎]                 │
│ └─────────────────────────────────────────┘                                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 8. Business Plan Generator Interface

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ AI BUSINESS PLAN GENERATOR                                                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ 📋 Business Plan Generator                                    [💾 Save] [📤 Export] │
│ Create a comprehensive business plan tailored for Indian market                 │
│                                                                                 │
│ PROGRESS: ████████████████░░░░░░░░ 70% Complete                                │
│                                                                                 │
│ SIDEBAR (25%)           │ MAIN CONTENT (75%)                                    │
│ ┌─────────────────────┐ │                                                       │
│ │ 📝 Sections         │ │ ┌───────────────────────────────────────────────────┐ │
│ │                     │ │ │ 🎯 Executive Summary                              │ │
│ │ ✅ Executive Summary│ │ │                                                   │ │
│ │ ✅ Market Analysis  │ │ │ Business Name: FoodieExpress                     │ │
│ │ ✅ Product/Service  │ │ │ Industry: Food Delivery & Technology             │ │
│ │ 🔄 Marketing Plan   │ │ │ Location: Mumbai, Maharashtra                     │ │
│ │ ⏳ Financial Plan   │ │ │                                                   │ │
│ │ ⏳ Operations       │ │ │ 📊 Business Overview                             │ │
│ │ ⏳ Team Structure   │ │ │ FoodieExpress is a hyperlocal food delivery      │ │
│ │ ⏳ Risk Analysis    │ │ │ platform focusing on authentic regional cuisines │ │
│ │ ⏳ Funding Strategy │ │ │ across Indian cities. Our AI-powered             │ │
│ │                     │ │ │ recommendation engine connects customers with     │ │
│ │ ─────────────────   │ │ │ local restaurants and home chefs.                │ │
│ │                     │ │ │                                                   │ │
│ │ 🎨 Templates        │ │ │ 💰 Financial Highlights                          │ │
│ │ • SaaS Startup      │ │ │ • Initial Investment: ₹25 Lakhs                  │ │
│ │ • E-commerce        │ │ │ • Break-even: Month 18                           │ │
│ │ • Food & Beverage   │ │ │ • Projected Revenue (Year 3): ₹5.2 Crores       │ │
│ │ • FinTech          │ │ │                                                   │ │
│ │ • EdTech           │ │ │ 🎯 Key Success Factors                           │ │
│ │                     │ │ │ • Strong local partnerships                      │ │
│ │ 🤖 AI Suggestions   │ │ │ • Technology-driven efficiency                   │ │
│ │ • Add competitor    │ │ │ • Focus on regional food preferences             │ │
│ │   analysis          │ │ │                                                   │ │
│ │ • Include SWOT      │ │ │ [✏️ Edit Section] [🤖 AI Enhance] [💡 Suggestions] │ │
│ │ • Expand on risks   │ │ └───────────────────────────────────────────────────┘ │
│ └─────────────────────┘ │                                                       │
│                         │ ┌───────────────────────────────────────────────────┐ │
│                         │ │ 📈 Market Analysis                                │ │
│                         │ │                                                   │ │
│                         │ │ 🇮🇳 Indian Food Delivery Market                  │ │
│                         │ │ Market Size: ₹4,200 Crores (2024)                │ │
│                         │ │ Growth Rate: 25% CAGR                            │ │
│                         │ │ Key Players: Zomato, Swiggy, Dunzo               │ │
│                         │ │                                                   │ │
│                         │ │ 🎯 Target Market                                  │ │
│                         │ │ • Urban millennials (25-40 years)                │ │
│                         │ │ • Household income: ₹5-15 LPA                    │ │
│                         │ │ • Tech-savvy food enthusiasts                    │ │
│                         │ │                                                   │ │
│                         │ │ [🤖 Generate Market Research] [📊 Add Charts]     │ │
│                         │ └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 9. Pitch Deck Builder Interface

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ PITCH DECK BUILDER                                                              │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ 🎯 Pitch Deck Builder                                [📤 Export] [🎨 Themes] [▶️ Present] │
│ Create investor-ready pitch decks optimized for Indian VCs                     │
│                                                                                 │
│ SLIDE NAVIGATOR (20%)    │ SLIDE EDITOR (60%)        │ TIPS & SUGGESTIONS (20%) │
│ ┌─────────────────────┐  │                           │ ┌─────────────────────┐  │
│ │ 📑 Slides (12/15)   │  │ ┌───────────────────────┐ │ │ 💡 AI Tips          │  │
│ │                     │  │ │                       │ │ │                     │  │
│ │ 1. ✅ Title         │  │ │    🎯 PROBLEM         │ │ │ For Problem slide:  │  │
│ │ 2. ✅ Problem       │  │ │                       │ │ │                     │  │
│ │ 3. ✅ Solution      │  │ │ Food delivery in India│ │ │ • Use local data    │  │
│ │ 4. ✅ Market        │  │ │ is broken             │ │ │ • Show pain points  │  │
│ │ 5. ✅ Product       │  │ │                       │ │ │ • Include customer  │  │
│ │ 6. 🔄 Business Model│  │ │ • 67% customers       │ │ │   quotes            │  │
│ │ 7. ⏳ Traction      │  │ │   unsatisfied with    │ │ │                     │  │
│ │ 8. ⏳ Competition   │  │ │   delivery times      │ │ │ 📊 Suggested Data:  │  │
│ │ 9. ⏳ Marketing     │  │ │                       │ │ │ • Market research   │  │
│ │ 10. ⏳ Team         │  │ │ • Limited regional    │ │ │ • Customer surveys  │  │
│ │ 11. ⏳ Financials   │  │ │   food options        │ │ │ • Industry reports  │  │
│ │ 12. ⏳ Funding      │  │ │                       │ │ │                     │  │
│ │ 13. ⏳ Use of Funds │  │ │ • High commission     │ │ │ 🎨 Design Tips:     │  │
│ │ 14. ⏳ Milestones   │  │ │   rates hurt          │ │ │ • Use contrasting   │  │
│ │ 15. ⏳ Thank You    │  │ │   restaurants         │ │ │   colors            │  │
│ │                     │  │ │                       │ │ │ • Keep text minimal │  │
│ │ 🎨 Templates:       │  │ └───────────────────────┘ │ │ • Use Indian        │  │
│ │ • VC Standard       │  │                           │ │   context           │  │
│ │ • Seed Round        │  │ [📝 Edit Text] [📊 Add Chart] │ │                     │  │
│ │ • Series A          │  │ [🖼️ Add Image] [🎨 Design]   │ └─────────────────────┘  │
│ │ • Indian VC Focus   │  │                           │                          │
│ └─────────────────────┘  │                           │ ┌─────────────────────┐  │
│                          │                           │ │ 📈 Slide Analytics  │  │
│                          │                           │ │                     │  │
│                          │                           │ │ Completion: 40%     │  │
│                          │                           │ │ ████████░░░░░░░░     │  │
│                          │                           │ │                     │  │
│                          │                           │ │ Investor Readiness: │  │
│                          │                           │ │ 6/10 ⭐⭐⭐⭐⭐⭐     │  │
│                          │                           │ │                     │  │
│                          │                           │ │ Missing:            │  │
│                          │                           │ │ • Financial model   │  │
│                          │                           │ │ • Team credentials  │  │
│                          │                           │ │ • Traction metrics  │  │
│                          │                           │ │                     │  │
│                          │                           │ │ [🚀 Improve Score]  │  │
│                          │                           │ └─────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 10. Legal Document Generator

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ LEGAL DOCUMENT GENERATOR                                                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ⚖️ Legal Document Generator                              [📋 My Documents] [👨‍💼 Expert Help] │
│ Generate India-compliant legal documents with AI assistance                     │
│                                                                                 │
│ DOCUMENT CATEGORIES (30%)             │ DOCUMENT BUILDER (70%)                  │
│ ┌───────────────────────────────────┐ │                                         │
│ │ 🏢 Company Formation              │ │ ┌─────────────────────────────────────┐ │
│ │ • Memorandum of Association       │ │ │ 📄 Memorandum of Association        │ │
│ │ • Articles of Association         │ │ │ Private Limited Company             │ │
│ │ • Board Resolutions               │ │ │                                     │ │
│ │ • Share Certificates              │ │ │ Step 1 of 4: Company Details       │ │
│ │                                   │ │ │ ████████░░░░░░░░░░░░ 25%            │ │
│ │ 📋 Compliance Documents           │ │ │                                     │ │
│ │ • GST Registration Forms          │ │ │ Company Name:                       │ │
│ │ • PF Registration                 │ │ │ [FoodieExpress Private Limited    ] │ │
│ │ • ESI Registration                │ │ │                                     │ │
│ │ • Professional Tax                │ │ │ Registered Office Address:          │ │
│ │                                   │ │ │ [Street Address                   ] │ │
│ │ 💼 Employment Documents           │ │ │ [City: Mumbai    ] [State: MH ▼   ] │ │
│ │ • Employment Agreements           │ │ │ [PIN: 400001     ]                  │ │
│ │ • Offer Letters                   │ │ │                                     │ │
│ │ • NDAs & Non-Compete              │ │ │ Authorized Capital:                 │ │
│ │ • Consultant Agreements           │ │ │ [₹ 10,00,000     ]                  │ │
│ │                                   │ │ │                                     │ │
│ │ 🤝 Business Agreements            │ │ │ Business Activity:                  │ │
│ │ • Partnership Deeds               │ │ │ [Food delivery and technology ▼   ] │ │
│ │ • Vendor Agreements               │ │ │                                     │ │
│ │ • Service Agreements              │ │ │ Directors Information:              │ │
│ │ • Licensing Agreements            │ │ │ ┌─────────────────────────────────┐ │ │
│ │                                   │ │ │ │ Director 1:                     │ │ │
│ │ 🔒 IP & Privacy                   │ │ │ │ Name: [Priya Sharma           ] │ │ │
│ │ • Privacy Policies                │ │ │ │ DIN: [12345678               ] │ │ │
│ │ • Terms of Service                │ │ │ │ PAN: [ABCDE1234F             ] │ │ │
│ │ • Trademark Applications          │ │ │ │ [+ Add Another Director]        │ │ │
│ │ • Copyright Registrations         │ │ │ └─────────────────────────────────┘ │ │
│ │                                   │ │ │                                     │ │
│ │ 💰 Funding Documents              │ │ │ [⬅️ Previous] [Next: Objects ➡️]    │ │
│ │ • Term Sheets                     │ │ └─────────────────────────────────────┘ │
│ │ • Shareholder Agreements          │ │                                         │
│ │ • Investment Agreements           │ │ ┌─────────────────────────────────────┐ │
│ │ • ESOP Documents                  │ │ │ 🤖 AI Assistant                     │ │
│ │                                   │ │ │                                     │ │
│ │ ─────────────────────────────────  │ │ │ I notice you're creating an MoA     │ │
│ │                                   │ │ │ for a food delivery company.        │ │
│ │ 🔥 Popular This Week:             │ │ │                                     │ │
│ │ • GST Registration (156 created)  │ │ │ 💡 Suggestions:                     │ │
│ │ • Employment Agreement (89)       │ │ │ • Include FSSAI compliance clause   │ │
│ │ • Privacy Policy (67)             │ │ │ • Add delivery partner agreements   │ │
│ │                                   │ │ │ • Consider data protection clauses  │ │
│ │ 📞 Need Expert Review?            │ │ │                                     │ │
│ │ Connect with verified lawyers     │ │ │ [Apply Suggestions] [Ask Question]  │ │
│ │ [💬 Chat with Lawyer]             │ │ └─────────────────────────────────────┘ │
│ └───────────────────────────────────┘ │                                         │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 11. Funding Tracker & CRM

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ FUNDING TRACKER & INVESTOR CRM                                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ 💰 Funding Tracker                                    [+ Add Investor] [📊 Analytics] │
│ Track your fundraising progress and manage investor relationships               │
│                                                                                 │
│ FUNDING OVERVIEW                                                                │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🎯 Current Round: Seed Round                    Target: ₹2 Crores            │ │
│ │ Raised: ₹75 Lakhs                              Progress: ████████░░░░ 37.5%  │ │
│ │ Runway: 18 months                              Investors: 12 interested      │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ INVESTOR PIPELINE (60%)               │ ACTIVITY FEED (40%)                     │
│                                       │                                         │
│ [All] [Interested] [Due Diligence] [Committed] [Passed]                       │
│                                       │                                         │
│ ┌───────────────────────────────────┐ │ ┌─────────────────────────────────────┐ │
│ │ 🏢 Accel Partners                 │ │ │ 📅 Recent Activity                  │ │
│ │ [Due Diligence] [Tier 1 VC]      │ │ │                                     │ │
│ │                                   │ │ │ Today                               │ │
│ │ Contact: Shekhar Kirani           │ │ │ • 📧 Sent follow-up to Blume       │ │
│ │ 📧 s.kirani@accel.com             │ │ │ • 📞 Call scheduled with Kalaari   │ │
│ │ 📞 +91-80-4567-8900               │ │ │                                     │ │
│ │                                   │ │ │ Yesterday                           │ │
│ │ Investment Range: ₹5-50 Cr        │ │ │ • 📄 Pitch deck sent to Matrix     │ │
│ │ Sectors: SaaS, Consumer Tech      │ │ │ • 💬 Meeting notes added           │ │
│ │ Last Contact: 2 days ago          │ │ │                                     │ │
│ │                                   │ │ │ This Week                           │ │
│ │ 📝 Notes: Interested in our AI    │ │ │ • 🤝 Term sheet from Sequoia       │ │
│ │ recommendation engine. Wants to   │ │ │ • 📊 Financial model updated       │ │
│ │ see traction metrics.             │ │ │ • 🎯 3 new investors added         │ │
│ │                                   │ │ │                                     │ │
│ │ Next Steps:                       │ │ │ [View All Activity]                 │ │
│ │ • Send traction report (Due: 15th)│ │ └─────────────────────────────────────┘ │
│ │ • Schedule product demo           │ │                                         │
│ │                                   │ │ ┌─────────────────────────────────────┐ │
│ │ [📧 Email] [📞 Call] [📝 Notes]   │ │ │ 📈 Funding Analytics                │ │
│ └───────────────────────────────────┘ │ │                                     │ │
│                                       │ │ Response Rate: 65%                  │ │
│ ┌───────────────────────────────────┐ │ │ ████████████████░░░░░░░░ 65%        │ │
│ │ 🏢 Blume Ventures                 │ │ │                                     │ │
│ │ [Interested] [Early Stage VC]    │ │ │ Average Response Time: 4.2 days     │ │
│ │                                   │ │ │                                     │ │
│ │ Contact: Karthik Reddy            │ │ │ Top Interested Sectors:             │ │
│ │ Investment Range: ₹2-15 Cr        │ │ │ • FoodTech (8 investors)           │ │
│ │ Last Contact: 1 week ago          │ │ │ • Consumer Tech (6 investors)      │ │
│ │                                   │ │ │ • AI/ML (4 investors)              │ │
│ │ Status: Reviewing pitch deck      │ │ │                                     │ │
│ │                                   │ │ │ [📊 Detailed Analytics]             │ │
│ │ [📧 Email] [📞 Call] [📝 Notes]   │ │ └─────────────────────────────────────┘ │
│ └───────────────────────────────────┘ │                                         │
│                                       │ ┌─────────────────────────────────────┐ │
│ ┌───────────────────────────────────┐ │ │ 🎯 AI Recommendations               │ │
│ │ 🏢 Matrix Partners India          │ │ │                                     │ │
│ │ [Committed] [₹25 Lakhs]           │ │ │ Based on your profile:              │ │
│ │                                   │ │ │                                     │ │
│ │ Contact: Avnish Bajaj             │ │ │ • Reach out to Lightspeed India    │ │
│ │ Term Sheet: Received              │ │ │ • Consider angel investors in       │ │
│ │ Due Date: 20th Dec 2024           │ │ │   Mumbai food scene                 │ │
│ │                                   │ │ │ • Apply to Techstars accelerator   │ │
│ │ [📄 View Terms] [✅ Accept]       │ │ │                                     │ │
│ │ [📧 Email] [📞 Call] [📝 Notes]   │ │ │ [View All Suggestions]              │ │
│ └───────────────────────────────────┘ │ └─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## 12. Onboarding Flow for New Users

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ONBOARDING FLOW - STEP 1                                                       │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Welcome to Founder's Compass! 🧭                                               │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                             │ │
│ │                            🚀                                               │ │
│ │                     Let's Get Started!                                      │ │
│ │                                                                             │ │
│ │     Tell us about your startup journey so we can                           │ │
│ │     create a personalized roadmap just for you                             │ │
│ │                                                                             │ │
│ │     Progress: ●○○○○ Step 1 of 5                                            │ │
│ │                                                                             │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 💡 What stage is your startup idea?                                         │ │
│ │                                                                             │ │
│ │ ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐   │ │
│ │ │                     │ │                     │ │                     │   │ │
│ │ │        💭           │ │        📝           │ │        🏗️           │   │ │
│ │ │                     │ │                     │ │                     │   │ │
│ │ │   Just an Idea      │ │   Have a Plan       │ │   Building MVP      │   │ │
│ │ │                     │ │                     │ │                     │   │ │
│ │ │ I have a concept    │ │ I've done research  │ │ I'm developing      │   │ │
│ │ │ but need guidance   │ │ and have a business │ │ my product/service  │   │ │
│ │ │ on next steps       │ │ plan ready          │ │                     │   │ │
│ │ │                     │ │                     │ │                     │   │ │
│ │ └─────────────────────┘ └─────────────────────┘ └─────────────────────┘   │ │
│ │                                                                             │ │
│ │ ┌─────────────────────┐ ┌─────────────────────┐                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │        🚀           │ │        📈           │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │   Ready to Launch   │ │   Already Running   │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │ Product is ready,   │ │ I have customers    │                           │ │
│ │ │ need help with      │ │ and want to scale   │                           │ │
│ │ │ legal & compliance  │ │ or raise funding    │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ └─────────────────────┘ └─────────────────────┘                           │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│                                    [Continue]                                  │
└─────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────┐
│ ONBOARDING FLOW - STEP 2                                                       │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ Great! Let's learn more about your business 📊                                 │
│                                                                                 │
│ Progress: ●●○○○ Step 2 of 5                                                    │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🏭 What industry are you in?                                                │ │
│ │                                                                             │ │
│ │ [🍔 Food & Beverage ▼]                                                     │ │
│ │                                                                             │ │
│ │ 📍 Where are you based?                                                     │ │
│ │                                                                             │ │
│ │ State: [Maharashtra ▼]     City: [Mumbai ▼]                                │ │
│ │                                                                             │ │
│ │ 👥 Are you a solo founder or do you have co-founders?                      │ │
│ │                                                                             │ │
│ │ ○ Solo founder (just me)                                                    │ │
│ │ ● I have co-founders                                                        │ │
│ │ ○ Looking for co-founders                                                   │ │
│ │                                                                             │ │
│ │ 💰 What's your funding situation?                                           │ │
│ │                                                                             │ │
│ │ ○ Self-funded/Bootstrapped                                                  │ │
│ │ ● Looking to raise funding                                                  │ │
│ │ ○ Already have investors                                                    │ │
│ │                                                                             │ │
│ │ 🎯 What's your primary goal right now?                                      │ │
│ │                                                                             │ │
│ │ ☐ Register my company legally                                               │ │
│ │ ☑ Understand government schemes & grants                                    │ │
│ │ ☑ Create a business plan                                                    │ │
│ │ ☐ Build a pitch deck for investors                                          │ │
│ │ ☐ Learn about compliance requirements                                       │ │
│ │ ☑ Connect with other founders                                               │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│                              [Back] [Continue]                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Design Principles Summary

### Visual Hierarchy
- **Primary Actions**: Blue buttons with high contrast
- **Secondary Actions**: Outlined buttons or text links  
- **Success States**: Green indicators and checkmarks
- **Warning/Attention**: Saffron/orange highlights
- **Information**: Teal accents for neutral info

### Accessibility
- **Minimum touch targets**: 44px for mobile interactions
- **Color contrast**: WCAG AA compliant ratios
- **Typography**: Readable font sizes (16px+ for body text)
- **Focus indicators**: Clear keyboard navigation support

### Indian Context
- **Currency**: Always display ₹ symbol for Indian Rupees
- **Language**: Support for Hindi/regional language toggles
- **Cultural colors**: Saffron, white, green reflecting Indian identity
- **Government branding**: Respectful use of official colors/symbols

### AI Integration Patterns
- **Conversational UI**: Natural language interactions with clear AI indicators
- **Progressive Disclosure**: Show AI suggestions contextually
- **Personalization**: Adapt content based on user's startup stage and industry
- **Confidence Indicators**: Show AI confidence levels for recommendations
## Cor
e Page Mockups with Detailed Specifications

### Landing Page Mockup with Conversion Flow

#### Hero Section Layout (Desktop: 1200px+ width)

**Container Specifications**
- Component: `<Container maxWidth="lg">`
- Max Width: `1200px`
- Padding: `0 24px` (theme.spacing(0, 3))
- Margin: `0 auto`
- Background: `#FAFAFA` (theme.palette.background.default)

**Hero Section Grid Layout**
- Component: `<Grid container spacing={6}>`
- Total Height: `600px`
- Padding: `80px 0` (theme.spacing(10, 0))
- 
#
# Comprehensive Dashboard Mockup Variations

### Empty State Dashboard for New Users

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ DASHBOARD - EMPTY STATE (NEW USER)                                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ SIDEBAR (280px)          │ MAIN CONTENT AREA                                    │
│ ┌─────────────────────┐  │                                                      │
│ │ [🧭] Founder's      │  │ ┌──────────────────────────────────────────────────┐ │
│ │     Compass         │  │ │ Welcome to Founder's Compass! 🚀                │ │
│ │                     │  │ │ (Gradient: #1565C0 to #42A5F5, white text)      │ │
│ │ 🏠 Dashboard    ●   │  │ │                                                  │ │
│ │ 📚 Learning Paths   │  │ │ Let's get your startup journey started          │ │
│ │ 🏛️ Government       │  │ │                                                  │ │
│ │    Schemes          │  │ │ [🎯 Complete Your Profile] [📚 Start Learning]  │ │
│ │ 📁 Resources        │  │ └──────────────────────────────────────────────────┘ │
│ │ 💬 Community        │  │                                                      │
│ │ 👤 Profile          │  │ QUICK START GUIDE                                    │
│ │                     │  │ ┌──────────────────────────────────────────────────┐ │
│ │ ─────────────────   │  │ │ 🎯 Get Started in 3 Simple Steps                │ │
│ │ 🔧 Settings         │  │ │                                                  │ │
│ │ 🚪 Logout           │  │ │ ┌────────────┐ ┌────────────┐ ┌────────────┐    │ │
│ └─────────────────────┘  │ │ │     1️⃣     │ │     2️⃣     │ │     3️⃣     │    │ │
│                          │ │ │            │ │            │ │            │    │ │
│                          │ │ │ Complete   │ │ Explore    │ │ Connect    │    │ │
│                          │ │ │ Profile    │ │ Learning   │ │ with       │    │ │
│                          │ │ │            │ │ Paths      │ │ Community  │    │ │
│                          │ │ │ Tell us    │ │ Find       │ │ Join       │    │ │
│                          │ │ │ about your │ │ relevant   │ │ discussions│    │ │
│                          │ │ │ startup    │ │ courses    │ │ & get help │    │ │
│                          │ │ │            │ │            │ │            │    │ │
│                          │ │ │ [Start] ○  │ │ [Browse] ○ │ │ [Join] ○   │    │ │
│                          │ │ └────────────┘ └────────────┘ └────────────┘    │ │
│                          │ └──────────────────────────────────────────────────┘ │
│                          │                                                      │
│                          │ FEATURED CONTENT                                     │
│                          │ ┌──────────────────────────────────────────────────┐ │
│                          │ │ 🌟 Popular This Week                             │ │
│                          │ │                                                  │ │
│                          │ │ • 📋 Company Registration Guide (2.3k views)    │ │
│                          │ │ • 💰 Government Schemes for Startups (1.8k)     │ │
│                          │ │ • 🎯 Creating Your First Pitch Deck (1.5k)      │ │
│                          │ │                                                  │ │
│                          │ │ [View All Resources]                             │ │
│                          │ └──────────────────────────────────────────────────┘ │
│                          │                                                      │
│                          │ ┌──────────────────────────────────────────────────┐ │
│                          │ │ 💬 Recent Community Discussions                  │ │
│                          │ │                                                  │ │
│                          │ │ 👤 Priya S. asked: "Best way to register LLP?"  │ │
│                          │ │    💬 12 replies • ⏰ 2 hours ago               │ │
│                          │ │                                                  │ │
│                          │ │ 👤 Rahul K. shared: "Got my first funding!"     │ │
│                          │ │    ❤️ 45 likes • 💬 8 comments • ⏰ 4 hours ago  │ │
│                          │ │                                                  │ │
│                          │ │ [Join Community]                                 │ │
│                          │ └──────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- Welcome Banner: `<Paper elevation={2} sx={{ background: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)', color: 'white', p: 4, borderRadius: 2 }}>`
- Quick Start Cards: `<Card elevation={1} sx={{ p: 3, textAlign: 'center', height: '200px' }}>`
- Step Numbers: `<Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40, mx: 'auto', mb: 2 }}>`
- Action Buttons: `<Button variant="outlined" size="small" sx={{ mt: 2 }}>`
- Featured Content: `<List sx={{ bgcolor: 'background.paper' }}>`

### Personalized Dashboard with Progress Indicators

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ DASHBOARD - PERSONALIZED (ACTIVE USER)                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ SIDEBAR (280px)          │ MAIN CONTENT AREA                                    │
│ ┌─────────────────────┐  │                                                      │
│ │ [🧭] Founder's      │  │ ┌──────────────────────────────────────────────────┐ │
│ │     Compass         │  │ │ Good morning, Priya! ☀️                          │ │
│ │                     │  │ │ (Blue background #1565C0, white text)           │ │
│ │ 🏠 Dashboard    ●   │  │ │                                                  │ │
│ │ 📚 Learning Paths③  │  │ │ Your startup registration is 75% complete       │ │
│ │ 🏛️ Government       │  │ │ ████████████████████████████░░░░ 75%            │ │
│ │    Schemes      🔴  │  │ │                                                  │ │
│ │ 📁 Resources        │  │ │ 🎯 Next: Upload PAN card documents              │ │
│ │ 💬 Community    ⑤   │  │ └──────────────────────────────────────────────────┘ │
│ │ 👤 Profile          │  │                                                      │
│ │                     │  │ PROGRESS OVERVIEW                                    │
│ │ ─────────────────   │  │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐    │
│ │ 🔧 Settings         │  │ │ ✅  8   │ │ ⏳  4   │ │ 💰₹3.2L │ │ 📊 92% │    │
│ │ 🚪 Logout           │  │ │Completed│ │Pending  │ │Available│ │Profile │    │
│ └─────────────────────┘  │ │Tasks    │ │Actions  │ │Grants   │ │Complete│    │
│                          │ │(+3 new) │ │(2 urgent│ │(3 new)  │ │        │    │
│                          │ └─────────┘ └─────────┘ └─────────┘ └─────────┘    │
│                          │                                                      │
│                          │ URGENT ACTIONS (40%)         │ RECENT ACTIVITY (60%)│
│                          │                              │                      │
│                          │ ┌──────────────────────────┐ │ ┌──────────────────┐ │
│                          │ │ 🚨 Action Required       │ │ │ 📈 Your Progress │ │
│                          │ │                          │ │ │                  │ │
│                          │ │ ⚠️ GST filing due in 3   │ │ │ This Week:       │ │
│                          │ │    days (Dec 20)         │ │ │ ✅ Completed     │ │
│                          │ │    [File Now]            │ │ │    "Legal Basics"│ │
│                          │ │                          │ │ │ ✅ Registered    │ │
│                          │ │ 📄 Bank account docs     │ │ │    company name  │ │
│                          │ │    pending verification  │ │ │ ✅ Opened        │ │
│                          │ │    [Upload]              │ │ │    business bank │ │
│                          │ │                          │ │ │    account       │ │
│                          │ │ 💰 New grant available   │ │ │                  │ │
│                          │ │    Maharashtra Startup   │ │ │ Next Goals:      │ │
│                          │ │    Policy 2024           │ │ │ 🎯 Complete GST  │ │
│                          │ │    [Apply]               │ │ │    registration  │ │
│                          │ └──────────────────────────┘ │ │ 🎯 Finish pitch  │ │
│                          │                              │ │    deck course   │ │
│                          │ LEARNING PROGRESS            │ │                  │ │
│                          │ ┌──────────────────────────┐ │ │ [View Details]   │ │
│                          │ │ 📚 Current Courses       │ │ └──────────────────┘ │
│                          │ │                          │ │                      │
│                          │ │ Company Registration     │ │ ┌──────────────────┐ │
│                          │ │ ████████████░░░░ 80%     │ │ │ 🎯 AI Suggestions│ │
│                          │ │ Module 4 of 5            │ │ │                  │ │
│                          │ │ [Continue]               │ │ │ Based on your    │ │
│                          │ │                          │ │ │ progress:        │ │
│                          │ │ GST & Compliance         │ │ │                  │ │
│                          │ │ ████░░░░░░░░ 30%         │ │ │ • Start "Tax     │ │
│                          │ │ Module 2 of 7            │ │ │   Planning" next │ │
│                          │ │ [Resume]                 │ │ │ • Connect with   │ │
│                          │ │                          │ │ │   CA in Mumbai   │ │
│                          │ │ [View All Courses]       │ │ │ • Apply for MSME │ │
│                          │ └──────────────────────────┘ │ │   registration   │ │
│                          │                              │ │                  │ │
│                          │                              │ │ [View All]       │ │
│                          │                              │ └──────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- Progress Banner: `<Alert severity="info" sx={{ bgcolor: 'primary.main', color: 'white', '& .MuiAlert-icon': { color: 'white' } }}>`
- Stats Cards: `<Card elevation={2} sx={{ p: 2, textAlign: 'center', minHeight: '120px' }}>`
- Progress Bars: `<LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4 }}>`
- Urgent Actions: `<Card elevation={1} sx={{ p: 2, border: '1px solid', borderColor: 'warning.main' }}>`
- Badge Indicators: `<Badge badgeContent={3} color="error" sx={{ '& .MuiBadge-badge': { fontSize: '0.75rem' } }}>`

### Notification and Alert Component Designs

#### System Notifications Panel

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ NOTIFICATIONS PANEL (Slide-out from right)                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ 🔔 Notifications                                    [Mark All Read] [✕ Close]  │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ TODAY                                                                       │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🚨 [URGENT] GST Filing Due                                    ● 2h ago  │ │ │
│ │ │ Your GST return filing is due in 3 days. Avoid penalties by             │ │ │
│ │ │ filing before December 20th.                                            │ │ │
│ │ │ [File Now] [Remind Later]                                               │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 💰 New Grant Available                                        ● 4h ago  │ │ │
│ │ │ Maharashtra Startup Policy 2024 - Up to ₹10 lakhs funding              │ │ │
│ │ │ available for tech startups. Application deadline: Jan 15th.            │ │ │
│ │ │ [View Details] [Apply Now]                                              │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 📚 Course Completed                                           ○ 6h ago  │ │ │
│ │ │ Congratulations! You've completed "Legal Basics for                     │ │ │
│ │ │ Startups". Your certificate is ready for download.                      │ │ │
│ │ │ [Download Certificate] [Next Course]                                    │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ YESTERDAY                                                                   │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 💬 Community Reply                                            ○ 1d ago  │ │ │
│ │ │ Rahul K. replied to your question about "LLP vs Pvt Ltd"               │ │ │
│ │ │ [View Reply] [Thank]                                                    │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 📊 Weekly Report Ready                                        ○ 1d ago  │ │ │
│ │ │ Your startup progress report for this week is available.                │ │ │
│ │ │ [View Report] [Share]                                                   │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ THIS WEEK                                                                   │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🎉 Milestone Achieved                                         ○ 3d ago  │ │ │
│ │ │ You've completed 50% of your startup registration process!              │ │ │
│ │ │ [Continue Journey] [Share Achievement]                                  │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ [Load More Notifications]                                                   │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- Panel Container: `<Drawer anchor="right" open={true} sx={{ '& .MuiDrawer-paper': { width: 400, p: 2 } }}>`
- Notification Items: `<Card elevation={1} sx={{ mb: 2, p: 2, borderLeft: '4px solid', borderLeftColor: 'primary.main' }}>`
- Urgent Notifications: `<Card sx={{ borderLeftColor: 'error.main', bgcolor: 'error.light' }}>`
- Read/Unread Indicators: `<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main' }}>`
- Action Buttons: `<Button size="small" variant="outlined" sx={{ mr: 1, mt: 1 }}>`

#### In-App Alert Messages

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ IN-APP ALERT VARIATIONS                                                         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ SUCCESS ALERT                                                                   │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ✅ Success! Your company registration has been submitted successfully.       │ │
│ │ You'll receive a confirmation email within 24 hours.              [✕ Close] │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ WARNING ALERT                                                                   │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ⚠️ Warning: Your GST filing deadline is approaching (3 days left).          │ │
│ │ Complete your filing to avoid penalties.                          [✕ Close] │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ERROR ALERT                                                                     │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ❌ Error: Unable to upload document. Please check file format and try again. │ │
│ │ Supported formats: PDF, JPG, PNG (Max 5MB)                        [✕ Close] │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ INFO ALERT                                                                      │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ℹ️ Info: New government scheme available for tech startups in Maharashtra.   │ │
│ │ Check the Government Schemes section for details.                 [✕ Close] │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ PERSISTENT BANNER (Top of page)                                                │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🎉 Welcome to Founder's Compass! Complete your profile to get personalized  │ │
│ │ recommendations.                                    [Complete] [Maybe Later] │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ TOAST NOTIFICATION (Bottom right)                                              │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │                                                                             │ │
│ │                                              ┌─────────────────────────────┐ │ │
│ │                                              │ ✅ Document uploaded        │ │ │
│ │                                              │ successfully!               │ │ │
│ │                                              │                        [✕] │ │ │
│ │                                              └─────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- Success Alert: `<Alert severity="success" onClose={handleClose} sx={{ mb: 2 }}>`
- Warning Alert: `<Alert severity="warning" onClose={handleClose} sx={{ mb: 2 }}>`
- Error Alert: `<Alert severity="error" onClose={handleClose} sx={{ mb: 2 }}>`
- Info Alert: `<Alert severity="info" onClose={handleClose} sx={{ mb: 2 }}>`
- Toast: `<Snackbar open={true} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>`

### Sidebar Navigation with Exact Spacing

#### Desktop Sidebar (280px width)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ SIDEBAR NAVIGATION - DETAILED SPECIFICATIONS                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ SIDEBAR (280px width, fixed position)                                      │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ HEADER SECTION (Height: 80px, Padding: 16px)                           │ │ │
│ │ │                                                                         │ │ │
│ │ │ [🧭] Founder's Compass                                                  │ │ │
│ │ │ Logo: 32px x 32px, Margin-right: 12px                                  │ │ │
│ │ │ Text: H6 variant, Font-weight: 600                                     │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ NAVIGATION SECTION (Padding: 8px 16px)                                 │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ 🏠 Dashboard                                                    ● │ │ │ │
│ │ │ │ Height: 48px, Padding: 12px 16px, Border-radius: 8px           │ │ │ │
│ │ │ │ Background: rgba(21, 101, 192, 0.1) [ACTIVE STATE]             │ │ │ │
│ │ │ │ Text Color: #1565C0, Font-weight: 500                          │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ 📚 Learning Paths                                               ③ │ │ │ │
│ │ │ │ Height: 48px, Padding: 12px 16px, Border-radius: 8px           │ │ │ │
│ │ │ │ Background: Transparent [DEFAULT STATE]                        │ │ │ │
│ │ │ │ Text Color: #212121, Font-weight: 400                          │ │ │ │
│ │ │ │ Badge: 16px x 16px, Background: #FF9933, Color: white          │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ 🏛️ Government Schemes                                           🔴 │ │ │ │
│ │ │ │ Height: 48px, Padding: 12px 16px, Border-radius: 8px           │ │ │ │
│ │ │ │ Background: rgba(0, 0, 0, 0.04) [HOVER STATE]                  │ │ │ │
│ │ │ │ Text Color: #212121, Font-weight: 400                          │ │ │ │
│ │ │ │ Notification Dot: 8px x 8px, Background: #D32F2F               │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ 📁 Resources                                                            │ │ │
│ │ │ 💬 Community                                                        ⑤   │ │ │
│ │ │ 👤 Profile                                                              │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ DIVIDER (Margin: 16px 0, Height: 1px)                          │ │ │ │
│ │ │ │ ─────────────────────────────────────────────────────────────── │ │ │ │
│ │ │ │ Background: rgba(0, 0, 0, 0.12)                                 │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ 🔧 Settings                                                             │ │ │
│ │ │ 🚪 Logout                                                               │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ FOOTER SECTION (Position: absolute bottom, Padding: 16px)              │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ 👤 Priya Sharma                                                     │ │ │ │
│ │ │ │ Avatar: 32px x 32px, Margin-right: 12px                            │ │ │ │
│ │ │ │ Name: Body2 variant, Font-weight: 500                              │ │ │ │
│ │ │ │ Email: Caption variant, Color: text.secondary                      │ │ │ │
│ │ │ │ priya@example.com                                                   │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- Sidebar Container: `<Drawer variant="permanent" sx={{ width: 280, '& .MuiDrawer-paper': { width: 280, boxSizing: 'border-box' } }}>`
- Navigation Items: `<ListItem button sx={{ borderRadius: 1, mb: 0.5, px: 2, py: 1.5 }}>`
- Active State: `<ListItem sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', '&:hover': { bgcolor: 'primary.dark' } }}>`
- Badge Component: `<Badge badgeContent={3} color="secondary" sx={{ '& .MuiBadge-badge': { right: -3, top: 13 } }}>`
- User Profile: `<Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2, borderTop: '1px solid', borderColor: 'divider' }}>`

#### Mobile Bottom Navigation (Full width)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MOBILE BOTTOM NAVIGATION - SPECIFICATIONS                                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ BOTTOM NAVIGATION (Height: 64px, Position: fixed bottom)                   │ │
│ │                                                                             │ │
│ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                │ │
│ │ │   🏠    │ │   📚    │ │   🏛️    │ │   💬    │ │   👤    │                │ │
│ │ │         │ │         │ │         │ │         │ │         │                │ │
│ │ │Dashboard│ │Learning │ │Schemes  │ │Community│ │Profile  │                │ │
│ │ │         │ │    ③    │ │    🔴   │ │    ⑤    │ │         │                │ │
│ │ │ [ACTIVE]│ │         │ │         │ │         │ │         │                │ │
│ │ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘                │ │
│ │                                                                             │ │
│ │ Each Tab:                                                                   │ │
│ │ - Width: 20% (72px on 360px screen)                                        │ │
│ │ - Height: 64px                                                              │ │
│ │ - Padding: 8px 4px                                                          │ │
│ │ - Icon Size: 24px x 24px                                                    │ │
│ │ - Label: Caption variant (12px)                                             │ │
│ │ - Touch Target: Minimum 44px x 44px                                         │ │
│ │                                                                             │ │
│ │ Active State:                                                               │ │
│ │ - Background: rgba(21, 101, 192, 0.1)                                      │ │
│ │ - Icon Color: #1565C0 (primary.main)                                       │ │
│ │ - Label Color: #1565C0 (primary.main)                                      │ │
│ │ - Font Weight: 500                                                          │ │
│ │                                                                             │ │
│ │ Inactive State:                                                             │ │
│ │ - Background: Transparent                                                   │ │
│ │ - Icon Color: rgba(0, 0, 0, 0.6) (text.secondary)                         │ │
│ │ - Label Color: rgba(0, 0, 0, 0.6) (text.secondary)                        │ │
│ │ - Font Weight: 400                                                          │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- Bottom Navigation: `<BottomNavigation value={value} onChange={handleChange} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>`
- Navigation Action: `<BottomNavigationAction label="Dashboard" icon={<HomeIcon />} sx={{ minWidth: 0, px: 1 }}>`
- Badge on Tab: `<Badge badgeContent={3} color="secondary" sx={{ '& .MuiBadge-badge': { right: 8, top: 8 } }}>`

**Accessibility Specifications:**
- WCAG AA Compliance: All text maintains 4.5:1 contrast ratio
- Touch Targets: Minimum 44px x 44px for mobile interactions
- Keyboard Navigation: Tab order follows logical sequence
- Screen Reader: Proper ARIA labels and role attributes
- Focus Indicators: 2px solid outline with 2px offset for keyboard users
- Color Independence: Information not conveyed by color alone (icons + text)

**Responsive Behavior:**
- Desktop (1200px+): Full sidebar visible, 280px width
- Tablet (768px-1199px): Collapsible sidebar, 64px collapsed width
- Mobile (320px-767px): Hidden sidebar, bottom navigation visible
- Breakpoint Transitions: Smooth 300ms ease-in-out transitions
## Enhance
d Learning Paths Page with Interaction Details

### Course Card Hover and Selection States

#### Default Course Card State

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ LEARNING PATHS - COURSE CARD STATES                                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ DEFAULT CARD STATE (320px width, 400px height)                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ CARD HEADER (Height: 160px)                                             │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │                         🏢                                          │ │ │ │
│ │ │ │                    (Icon: 48px)                                     │ │ │ │
│ │ │ │                 Background: #1565C0                                 │ │ │ │
│ │ │ │                 Border-radius: 8px                                  │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ [Beginner] [5 modules]                                              │ │ │ │
│ │ │ │ Chips: Height 24px, Padding 6px 12px                               │ │ │ │
│ │ │ │ Background: rgba(21, 101, 192, 0.1)                                │ │ │ │
│ │ │ │ Color: #1565C0, Font-size: 12px                                    │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ CARD CONTENT (Padding: 16px)                                           │ │ │
│ │ │                                                                         │ │ │
│ │ │ Company Registration in India                                           │ │ │
│ │ │ (H6 variant, Font-weight: 600, Color: #212121)                         │ │ │
│ │ │                                                                         │ │ │
│ │ │ Complete guide to registering Pvt Ltd, LLP or Partnership              │ │ │
│ │ │ firm in India with step-by-step instructions.                          │ │ │
│ │ │ (Body2 variant, Color: text.secondary, Line-height: 1.5)               │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ PROGRESS BAR                                                        │ │ │ │
│ │ │ │ ████████░░░░░░░░░░░░ 40%                                            │ │ │ │
│ │ │ │ Height: 8px, Border-radius: 4px                                    │ │ │ │
│ │ │ │ Background: rgba(21, 101, 192, 0.1)                                │ │ │ │
│ │ │ │ Fill: #1565C0 (primary.main)                                       │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ ⏱️ 2-3 hours                                                            │ │ │
│ │ │ (Caption variant, Color: text.secondary)                               │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ CARD ACTIONS (Padding: 16px, Border-top: 1px solid divider)            │ │ │
│ │ │                                                                         │ │ │
│ │ │                                                    [Continue Learning] │ │ │
│ │ │                                                    Button: Contained    │ │ │
│ │ │                                                    Color: Primary       │ │ │
│ │ │                                                    Size: Small          │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### Hover State Course Card

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ HOVER STATE CARD (Elevation increased, subtle animations)                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ CARD HEADER (Slight scale: 1.02, Transition: 200ms ease)               │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │                         🏢                                          │ │ │ │
│ │ │ │                    (Icon: 48px)                                     │ │ │ │
│ │ │ │                 Background: #0D47A1 (primary.dark)                 │ │ │ │
│ │ │ │                 Transform: scale(1.1)                               │ │ │ │
│ │ │ │                 Transition: 200ms ease                              │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ [Beginner] [5 modules]                                                  │ │ │
│ │ │ (Chips slightly more saturated)                                         │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ Company Registration in India                                               │ │ │
│ │ (Color: #0D47A1 - primary.dark)                                            │ │ │
│ │                                                                             │ │
│ │ Complete guide to registering Pvt Ltd, LLP or Partnership                  │ │ │
│ │ firm in India with step-by-step instructions.                              │ │ │
│ │                                                                             │ │
│ │ ████████░░░░░░░░░░░░ 40%                                                    │ │ │
│ │ (Progress bar slightly brighter)                                            │ │ │
│ │                                                                             │ │
│ │ ⏱️ 2-3 hours                                                                │ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ ADDITIONAL HOVER CONTENT (Fade in: 200ms)                              │ │ │
│ │ │                                                                         │ │ │
│ │ │ 📊 What you'll learn:                                                   │ │ │
│ │ │ • Choose the right business structure                                   │ │ │
│ │ │ • Complete MCA registration process                                     │ │ │
│ │ │ • Understand compliance requirements                                    │ │ │
│ │ │                                                                         │ │ │
│ │ │ [Continue Learning] [📖 Preview] [⭐ Save]                              │ │ │
│ │ │ (Additional action buttons appear)                                      │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ Box Shadow: 0px 8px 25px rgba(0,0,0,0.15) (increased elevation)                │ │
│ Transform: translateY(-4px) (subtle lift effect)                               │ │
│ Transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1)                            │ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### Selected/Active Course Card

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ SELECTED STATE CARD (Border highlight, active indicators)                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ SELECTION INDICATOR (Top-right corner)                                  │ │ │
│ │ │                                                                    ✅   │ │ │
│ │ │                                                              (24px icon) │ │ │
│ │ │                                                        Background: white │ │ │
│ │ │                                                         Border: 2px blue │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │                         🏢                                              │ │ │
│ │ │                    (Icon: 48px)                                         │ │ │
│ │ │                 Background: #1565C0                                     │ │ │
│ │ │                 Border: 2px solid #42A5F5 (primary.light)              │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ [Beginner] [5 modules] [🎯 In Progress]                                     │ │ │
│ │ (Additional status chip appears)                                            │ │ │
│ │                                                                             │ │
│ │ Company Registration in India                                               │ │ │
│ │ (Color: #1565C0 - primary.main, Font-weight: 600)                          │ │ │
│ │                                                                             │ │
│ │ Complete guide to registering Pvt Ltd, LLP or Partnership                  │ │ │
│ │ firm in India with step-by-step instructions.                              │ │ │
│ │                                                                             │ │
│ │ ████████░░░░░░░░░░░░ 40%                                                    │ │ │
│ │ (Progress bar with animated pulse effect)                                   │ │ │
│ │                                                                             │ │
│ │ ⏱️ 2-3 hours • 📅 Last accessed: 2 hours ago                               │ │ │
│ │ (Additional metadata shown)                                                 │ │ │
│ │                                                                             │ │
│ │ [Continue Learning] [📊 View Progress] [⚙️ Settings]                        │ │ │
│ │ (Enhanced action buttons)                                                   │ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ Border: 2px solid #1565C0 (primary.main)                                       │ │
│ Box Shadow: 0px 4px 20px rgba(21, 101, 192, 0.2) (blue glow)                  │ │
│ Background: rgba(21, 101, 192, 0.02) (subtle blue tint)                        │ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Progress Tracking Visual Indicators

#### Course Progress Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ PROGRESS TRACKING DASHBOARD                                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ 📊 Your Learning Progress                                    [📈 Detailed View] │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ OVERALL PROGRESS SUMMARY                                                    │ │
│ │                                                                             │ │
│ │ ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐   │ │
│ │ │ 📚 Courses Started  │ │ ✅ Courses Completed│ │ ⏱️ Total Time Spent │   │ │
│ │ │                     │ │                     │ │                     │   │ │
│ │ │        5            │ │        2            │ │      24 hours       │   │ │
│ │ │                     │ │                     │ │                     │   │ │
│ │ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │   │ │
│ │ │ │ ████████░░░░░░░░ │ │ │ │ ████████████████ │ │ │ │ ████████████░░░░ │ │   │ │
│ │ │ │ 40% avg progress│ │ │ │ 100% completion │ │ │ │ 75% of monthly  │ │   │ │
│ │ │ └─────────────────┘ │ │ └─────────────────┘ │ │ │ goal (32 hours) │ │   │ │
│ │ └─────────────────────┘ └─────────────────────┘ └─────────────────────┘   │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ INDIVIDUAL COURSE PROGRESS                                                      │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🏢 Company Registration in India                                            │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ MODULE PROGRESS (5 modules total)                                       │ │ │
│ │ │                                                                         │ │ │
│ │ │ ✅ 1. Choosing Business Structure        [100%] ████████████████████   │ │ │
│ │ │ ✅ 2. Name Reservation Process           [100%] ████████████████████   │ │ │
│ │ │ 🔄 3. MCA Registration Steps             [ 60%] ████████████░░░░░░░░   │ │ │
│ │ │ ⏳ 4. Post-Registration Compliance       [  0%] ░░░░░░░░░░░░░░░░░░░░   │ │ │
│ │ │ ⏳ 5. Banking & Tax Setup                [  0%] ░░░░░░░░░░░░░░░░░░░░   │ │ │
│ │ │                                                                         │ │ │
│ │ │ Overall: ████████░░░░░░░░░░░░ 40% (2 of 5 modules completed)           │ │ │
│ │ │                                                                         │ │ │
│ │ │ 🎯 Next: Complete "MCA Registration Steps" (Est. 45 minutes)            │ │ │
│ │ │ [Continue Module] [📝 Take Notes] [❓ Get Help]                         │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🏛️ GST Registration & Compliance                                            │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ MODULE PROGRESS (7 modules total)                                       │ │ │
│ │ │                                                                         │ │ │
│ │ │ ✅ 1. GST Basics & Overview              [100%] ████████████████████   │ │ │
│ │ │ 🔄 2. Registration Process               [ 30%] ██████░░░░░░░░░░░░░░   │ │ │
│ │ │ ⏳ 3. Invoice Management                 [  0%] ░░░░░░░░░░░░░░░░░░░░   │ │ │
│ │ │ ⏳ 4. Return Filing Process              [  0%] ░░░░░░░░░░░░░░░░░░░░   │ │ │
│ │ │ ⏳ 5. Input Tax Credit                   [  0%] ░░░░░░░░░░░░░░░░░░░░   │ │ │
│ │ │ ⏳ 6. Compliance Calendar                [  0%] ░░░░░░░░░░░░░░░░░░░░   │ │ │
│ │ │ ⏳ 7. Penalties & Corrections            [  0%] ░░░░░░░░░░░░░░░░░░░░   │ │ │
│ │ │                                                                         │ │ │
│ │ │ Overall: ███░░░░░░░░░░░░░░░░░ 15% (1 of 7 modules completed)           │ │ │
│ │ │                                                                         │ │ │
│ │ │ 🎯 Next: Continue "Registration Process" (Est. 1 hour)                  │ │ │
│ │ │ [Resume Learning] [📋 Download Checklist] [💬 Ask Expert]               │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ LEARNING STREAK & ACHIEVEMENTS                                                  │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔥 7-day learning streak!                                    🏆 Achievements │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ WEEKLY ACTIVITY                                                         │ │ │
│ │ │ Mon Tue Wed Thu Fri Sat Sun                                             │ │ │
│ │ │  🔥   🔥   🔥   🔥   🔥   🔥   🔥                                        │ │ │
│ │ │  45m  30m  60m  20m  40m  35m  25m                                      │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ Recent Achievements:                                                        │ │ │
│ │ 🥇 First Course Completed (Company Registration)                           │ │ │
│ │ 📚 Knowledge Seeker (5 courses started)                                    │ │ │
│ │ ⚡ Quick Learner (Completed module in under 30 minutes)                    │ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Filtering and Search Interface Mockups

#### Advanced Filter Panel

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ LEARNING PATHS - FILTERING & SEARCH INTERFACE                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ SEARCH & FILTER BAR                                                         │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🔍 Search courses, topics, or keywords...                              │ │ │
│ │ │ Width: 100%, Height: 48px, Border-radius: 24px                         │ │ │
│ │ │ Background: #FFFFFF, Border: 1px solid rgba(0,0,0,0.12)                │ │ │
│ │ │ Padding: 12px 20px, Font-size: 16px                                    │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ QUICK FILTERS (Horizontal scroll on mobile)                            │ │ │
│ │ │                                                                         │ │ │
│ │ │ [All Paths] [Beginner] [Intermediate] [Advanced] [Legal] [Funding]     │ │ │
│ │ │ ────────                                                                │ │ │
│ │ │ Active filter underlined, Color: #1565C0                               │ │ │
│ │ │                                                                         │ │ │
│ │ │ [Free] [Premium] [Video] [Interactive] [Certificate] [🔧 More Filters] │ │ │
│ │ │                                                                         │ │ │
│ │ │ Chip Style: Height 32px, Padding 8px 16px, Border-radius 16px          │ │ │
│ │ │ Default: Background transparent, Border 1px solid rgba(0,0,0,0.12)     │ │ │
│ │ │ Active: Background #1565C0, Color white                                │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ ADVANCED FILTERS PANEL (Expandable)                                        │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 📊 Difficulty Level                                                     │ │ │
│ │ │ ☑ Beginner (12 courses)                                                 │ │ │
│ │ │ ☐ Intermediate (8 courses)                                              │ │ │
│ │ │ ☐ Advanced (4 courses)                                                  │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🏷️ Category                                                              │ │ │
│ │ │ ☑ Legal & Compliance (6 courses)                                        │ │ │
│ │ │ ☐ Funding & Investment (4 courses)                                      │ │ │
│ │ │ ☐ Operations & Management (5 courses)                                   │ │ │
│ │ │ ☐ Marketing & Sales (3 courses)                                         │ │ │
│ │ │ ☐ Technology & Product (4 courses)                                      │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ ⏱️ Duration                                                              │ │ │
│ │ │ ☐ Under 1 hour (3 courses)                                              │ │ │
│ │ │ ☑ 1-3 hours (8 courses)                                                 │ │ │
│ │ │ ☐ 3-5 hours (6 courses)                                                 │ │ │
│ │ │ ☐ 5+ hours (7 courses)                                                  │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 💰 Pricing                                                              │ │ │
│ │ │ ☑ Free (18 courses)                                                     │ │ │
│ │ │ ☐ Premium (6 courses)                                                   │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 📍 State-Specific Content                                               │ │ │
│ │ │ [Maharashtra ▼] [All States]                                            │ │ │
│ │ │ ☑ Include state-specific regulations                                    │ │ │
│ │ │ ☐ Central government schemes only                                       │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ [Clear All Filters] [Apply Filters (12 courses found)]                     │ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ SEARCH RESULTS & SORTING                                                        │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📊 Showing 12 courses                                    Sort by: [Most Popular ▼] │ │
│ │                                                                             │ │
│ │ Sort Options:                                                               │ │
│ │ • Most Popular                                                              │ │
│ │ • Newest First                                                              │ │
│ │ • Shortest Duration                                                         │ │
│ │ • Highest Rated                                                             │ │
│ │ • Alphabetical                                                              │ │
│ │ • My Progress                                                               │ │
│ │                                                                             │ │
│ │ View: [🔲 Grid] [📋 List]                                                   │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Course Completion Celebration States

#### Course Completion Modal

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ COURSE COMPLETION CELEBRATION                                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ COMPLETION MODAL (Overlay with backdrop blur)                              │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │                                                                         │ │ │
│ │ │                            🎉                                           │ │ │
│ │ │                     Congratulations!                                    │ │ │
│ │ │                                                                         │ │ │
│ │ │              You've completed the course                                │ │ │
│ │ │            "Company Registration in India"                              │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │                         🏆                                          │ │ │ │
│ │ │ │                   Certificate Earned                                │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │               ┌─────────────────────────┐                           │ │ │ │
│ │ │ │               │  📜 CERTIFICATE         │                           │ │ │ │
│ │ │ │               │                         │                           │ │ │ │
│ │ │ │               │  Company Registration   │                           │ │ │ │
│ │ │ │               │  in India               │                           │ │ │ │
│ │ │ │               │                         │                           │ │ │ │
│ │ │ │               │  Priya Sharma           │                           │ │ │ │
│ │ │ │               │  December 17, 2024      │                           │ │ │ │
│ │ │ │               │                         │                           │ │ │ │
│ │ │ │               │  [🔗] Verify Online     │                           │ │ │ │
│ │ │ │               └─────────────────────────┘                           │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ 📊 Your Achievement Stats                                           │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │ ⏱️ Time Taken: 2 hours 45 minutes                                   │ │ │ │
│ │ │ │ 📚 Modules Completed: 5/5                                           │ │ │ │
│ │ │ │ 🎯 Quiz Score: 92% (23/25 correct)                                  │ │ │ │
│ │ │ │ 🏆 Rank: Top 15% of learners                                        │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ 🎯 What's Next?                                                     │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │ Recommended next courses:                                           │ │ │ │
│ │ │ │ • 🏛️ GST Registration & Compliance                                  │ │ │ │
│ │ │ │ • 💰 Business Banking & Finance Setup                               │ │ │ │
│ │ │ │ • 📊 Legal Compliance Calendar                                      │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ ACTIONS                                                             │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │ [📥 Download Certificate] [📤 Share Achievement]                    │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │ [🎯 Start Next Course] [📚 Browse All Courses] [✕ Close]           │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ Background: rgba(0, 0, 0, 0.5) with backdrop-filter: blur(4px)                 │ │
│ Modal: Max-width 600px, Padding 32px, Border-radius 16px                       │ │
│ Animation: Scale in from 0.8 to 1.0 with 300ms ease-out                        │ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### Achievement Badge Notification

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ACHIEVEMENT BADGE NOTIFICATION (Toast style)                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│                                              ┌─────────────────────────────────┐ │
│                                              │ 🏆 New Achievement Unlocked!    │ │
│                                              │                                 │ │
│                                              │ ┌─────────────────────────────┐ │ │
│                                              │ │         🎓                  │ │ │
│                                              │ │    Knowledge Seeker         │ │ │
│                                              │ │                             │ │ │
│                                              │ │ Complete your first course  │ │ │
│                                              │ │ in the Legal & Compliance   │ │ │
│                                              │ │ category                    │ │ │
│                                              │ └─────────────────────────────┘ │ │
│                                              │                                 │ │
│                                              │ [View All Achievements] [✕]     │ │
│                                              └─────────────────────────────────┘ │
│                                                                                 │ │
│ Position: Fixed bottom-right, Margin: 24px                                     │ │
│ Width: 320px, Padding: 16px, Border-radius: 12px                               │ │
│ Background: #FFFFFF, Box-shadow: 0px 8px 32px rgba(0,0,0,0.12)                 │ │
│ Animation: Slide in from right + bounce effect                                 │ │
│ Auto-dismiss: 5 seconds                                                         │ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### Progress Milestone Celebration

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ PROGRESS MILESTONE CELEBRATION                                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ MILESTONE BANNER (Appears at top of dashboard)                             │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ 🎉 Milestone Achieved! 🎉                                               │ │ │
│ │ │                                                                         │ │ │
│ │ │ You've completed 50% of your startup registration journey!             │ │ │
│ │ │                                                                         │ │ │
│ │ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │ │
│ │ │ │ PROGRESS VISUALIZATION                                              │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │ Registration Journey: ████████████████████████████░░░░░░░░░░ 50%    │ │ │ │
│ │ │ │                                                                     │ │ │ │
│ │ │ │ ✅ Company Name Reserved                                            │ │ │ │
│ │ │ │ ✅ Business Structure Chosen                                        │ │ │ │
│ │ │ │ ✅ MCA Registration Completed                                       │ │ │ │
│ │ │ │ 🔄 GST Registration (In Progress)                                   │ │ │ │
│ │ │ │ ⏳ Bank Account Opening                                             │ │ │ │
│ │ │ │ ⏳ Compliance Setup                                                 │ │ │ │
│ │ │ └─────────────────────────────────────────────────────────────────────┘ │ │ │
│ │ │                                                                         │ │ │
│ │ │ 🎯 Keep going! You're halfway to having a fully registered startup.    │ │ │ │
│ │ │                                                                         │ │ │
│ │ │ [Continue Journey] [Share Progress] [View Roadmap] [✕ Dismiss]          │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ Background: Linear gradient from #1565C0 to #42A5F5                            │ │
│ Text Color: White                                                               │ │
│ Padding: 24px, Border-radius: 12px, Margin-bottom: 24px                        │ │
│ Animation: Fade in + confetti particles effect                                 │ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**

**Course Cards:**
- Default Card: `<Card elevation={2} sx={{ height: 400, display: 'flex', flexDirection: 'column', transition: 'all 0.2s ease' }}>`
- Hover State: `<Card sx={{ transform: 'translateY(-4px)', boxShadow: 4, '& .course-icon': { transform: 'scale(1.1)' } }}>`
- Selected State: `<Card sx={{ border: '2px solid', borderColor: 'primary.main', bgcolor: 'primary.light' }}>`

**Progress Indicators:**
- Progress Bar: `<LinearProgress variant="determinate" value={40} sx={{ height: 8, borderRadius: 4, bgcolor: 'primary.light' }}>`
- Module Status: `<Chip icon={<CheckIcon />} label="Completed" color="success" size="small">`
- Streak Counter: `<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><LocalFireDepartmentIcon color="error" /><Typography variant="h6">7</Typography></Box>`

**Completion Celebrations:**
- Modal: `<Dialog open={true} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 4, p: 2 } }}>`
- Achievement Toast: `<Snackbar open={true} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={5000}>`
- Milestone Banner: `<Alert severity="success" sx={{ background: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)', color: 'white', mb: 3 }}>`

**Filter Interface:**
- Search Field: `<TextField fullWidth placeholder="Search courses..." InputProps={{ startAdornment: <SearchIcon /> }} sx={{ mb: 2 }}>`
- Filter Chips: `<Chip label="Beginner" clickable color={selected ? 'primary' : 'default'} sx={{ mr: 1, mb: 1 }}>`
- Advanced Filters: `<Accordion sx={{ boxShadow: 'none', border: '1px solid', borderColor: 'divider' }}>`
## 
Indian Context-Specific Mockups

### Government Schemes Interface with Official Styling

#### Government Scheme Card Layout

**Primary Scheme Card**
- Component: `<Card elevation={2} sx={{ borderLeft: '4px solid #FF9933' }}>`
- Dimensions: `400px width x auto height`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `1px solid rgba(0, 0, 0, 0.12)` with `4px solid #FF9933` left border (Indian flag saffron)
- Border Radius: `8px` (theme.shape.borderRadius * 2)
- Padding: `24px` (theme.spacing(3))
- Box Shadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`
- Margin Bottom: `16px` (theme.spacing(2))

**Scheme Header Section**
- Government Logo: `32px x 32px` positioned top-left
- Scheme Title: Typography variant `h5` (18px, medium weight)
  - Color: `#212121` (theme.palette.text.primary)
  - Max Lines: 2 with ellipsis overflow
- Ministry/Department: Typography variant `caption` (12px)
  - Color: `#757575` (theme.palette.text.secondary)
  - Format: "Ministry of [Department Name]"
- Official Badge: `<Chip size="small" color="primary" label="Government Verified" />`
  - Background: `#1565C0` (theme.palette.primary.main)
  - Text Color: `#FFFFFF`
  - Icon: ✓ verification checkmark

**Scheme Content Section**
- Description: Typography variant `body2` (14px)
  - Color: `#212121` (theme.palette.text.primary)
  - Max Lines: 3 with "Read more" link
  - Line Height: 1.5
- Key Benefits: Bulleted list with `•` markers
  - Typography variant `body2`
  - Color: `#424242` (theme.palette.text.primary)
  - Maximum 3 benefits shown

**Financial Information Display**
- Funding Amount: Large typography variant `h4` (20px, medium weight)
  - Color: `#388E3C` (theme.palette.success.main)
  - Format: "₹ [amount] [unit]" (e.g., "₹ 10 Lakh", "₹ 50,000")
  - Font Family: Monospace for numbers
- Subsidy Percentage: `<Chip size="small" color="success" />`
  - Background: `rgba(56, 142, 60, 0.1)` (theme.palette.success.main with alpha)
  - Text Color: `#388E3C` (theme.palette.success.main)
  - Format: "Up to [X]% subsidy"

**Eligibility Indicators**
- Eligibility Status: Color-coded indicator
  - Eligible: `<Chip color="success" label="Eligible" />` with ✓ icon
  - Partially Eligible: `<Chip color="warning" label="Review Required" />` with ⚠️ icon
  - Not Eligible: `<Chip color="error" label="Not Eligible" />` with ✗ icon
- Quick Eligibility Tags: Horizontal chip group
  - `<Chip size="small" variant="outlined" label="Startup" />`
  - `<Chip size="small" variant="outlined" label="Women Entrepreneur" />`
  - `<Chip size="small" variant="outlined" label="SC/ST" />`
  - Colors: `#1565C0` border and text (theme.palette.primary.main)

**Deadline and Timeline Section**
- Application Deadline: Prominent display
  - Label: Typography variant `caption` "Application Deadline"
  - Date: Typography variant `subtitle1` (16px, medium weight)
  - Color: `#D32F2F` (theme.palette.error.main) if urgent (< 30 days)
  - Color: `#F57C00` (theme.palette.warning.main) if moderate (30-60 days)
  - Color: `#388E3C` (theme.palette.success.main) if ample time (> 60 days)
- Processing Time: Typography variant `caption`
  - Format: "Processing: [X] weeks"
  - Color: `#757575` (theme.palette.text.secondary)

**Action Buttons Section**
- Primary Action: `<Button variant="contained" color="primary" fullWidth>`
  - Text: "Apply Now" or "View Details"
  - Background: `#1565C0` (theme.palette.primary.main)
  - Margin Top: `16px` (theme.spacing(2))
- Secondary Actions: Horizontal button group
  - `<Button variant="outlined" size="small">Save</Button>`
  - `<Button variant="text" size="small">Share</Button>`
  - `<Button variant="text" size="small">Compare</Button>`

#### Government Scheme List View

**List Container**
- Component: `<Container maxWidth="lg">`
- Background: `#FAFAFA` (theme.palette.background.default)
- Padding: `32px 24px` (theme.spacing(4, 3))

**Filter and Search Section**
- Search Bar: `<TextField variant="outlined" fullWidth placeholder="Search schemes...">`
  - Width: `100%` on mobile, `400px` on desktop
  - Icon: 🔍 search icon positioned left
- Filter Chips: Horizontal scrollable chip group
  - `<Chip clickable label="All Schemes" color="primary" />`
  - `<Chip clickable label="Startup India" variant="outlined" />`
  - `<Chip clickable label="MSME" variant="outlined" />`
  - `<Chip clickable label="Women Entrepreneurs" variant="outlined" />`
  - `<Chip clickable label="SC/ST" variant="outlined" />`
  - Active filter: `color="primary"`, Inactive: `variant="outlined"`

**Sort and View Options**
- Sort Dropdown: `<Select size="small" value="relevance">`
  - Options: "Relevance", "Deadline", "Funding Amount", "Recently Added"
  - Width: `200px`
- View Toggle: `<ToggleButtonGroup size="small">`
  - Grid View: ⊞ icon
  - List View: ☰ icon
  - Active color: `#1565C0` (theme.palette.primary.main)

**Results Summary**
- Typography variant `body2`
- Format: "Showing [X] of [Y] schemes matching your criteria"
- Color: `#757575` (theme.palette.text.secondary)
- Margin: `16px 0` (theme.spacing(2, 0))

#### Government Scheme Detail Page

**Header Section**
- Breadcrumb Navigation: `<Breadcrumbs separator="›">`
  - Links: "Home › Government Schemes › [Scheme Name]"
  - Color: `#1565C0` (theme.palette.primary.main)
- Scheme Title: Typography variant `h2` (36px, bold)
  - Color: `#212121` (theme.palette.text.primary)
- Official Source: Typography variant `subtitle1`
  - Format: "Source: [Ministry/Department Name]"
  - Color: `#757575` (theme.palette.text.secondary)
- Last Updated: Typography variant `caption`
  - Format: "Last updated: [Date]"
  - Color: `#757575` (theme.palette.text.secondary)

**Key Information Panel**
- Component: `<Paper elevation={1} sx={{ p: 3, mb: 3 }}>`
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Border: `1px solid rgba(21, 101, 192, 0.2)`

**Information Grid Layout**
- Funding Details:
  - Maximum Amount: `₹ [amount]` in large text
  - Subsidy Rate: Percentage with visual indicator
  - Interest Rate: If applicable, with comparison to market rates
- Eligibility Criteria:
  - Bulleted list with checkmark icons
  - Color-coded based on user's eligibility status
- Timeline Information:
  - Application Period: Start and end dates
  - Processing Time: Expected duration
  - Disbursement Schedule: Payment timeline

**Application Status Tracking Interface**

**Status Progress Indicator**
- Component: `<Stepper activeStep={currentStep} alternativeLabel>`
- Steps: "Application Submitted", "Under Review", "Document Verification", "Approval", "Disbursement"
- Active Step Color: `#1565C0` (theme.palette.primary.main)
- Completed Step Color: `#388E3C` (theme.palette.success.main)
- Pending Step Color: `rgba(0, 0, 0, 0.38)` (theme.palette.action.disabled)

**Status Card for Each Step**
- Component: `<Card variant="outlined">`
- Dimensions: `100% width x auto height`
- Padding: `16px` (theme.spacing(2))

**Step Status Indicators**
- Completed: ✓ icon with green background circle
- In Progress: ⟳ icon with blue background circle (animated rotation)
- Pending: ○ icon with grey background circle
- Rejected: ✗ icon with red background circle

**Status Details Section**
- Step Title: Typography variant `subtitle1` (16px, medium weight)
- Status Description: Typography variant `body2`
- Date/Time: Typography variant `caption`
- Action Required: If applicable, highlighted button or link
- Contact Information: Officer details if available

**Document Upload Section**
- Required Documents List: Checklist format
  - `<Checkbox checked />` for uploaded documents
  - `<Checkbox />` for pending documents
- Upload Area: Drag-and-drop zone
  - Component: `<Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>`
  - Background: `rgba(21, 101, 192, 0.04)` on hover
  - Border: `2px dashed #1565C0` on drag over
- Document Status: Color-coded indicators
  - Uploaded: Green checkmark with file name
  - Pending: Orange warning with "Required" label
  - Rejected: Red X with rejection reason

**Communication Timeline**
- Component: `<Timeline>`
- Message Items: Chronological list of communications
- Official Messages: Distinguished with government seal icon
- User Messages: Standard user avatar
- System Updates: Automated status change notifications

#### Currency Display Patterns for Indian Rupees

**Large Amount Display (> ₹1 Lakh)**
- Format: `₹ [X] Lakh` or `₹ [X] Crore`
- Typography: variant `h4` or `h5` for prominence
- Color: `#388E3C` (theme.palette.success.main) for positive amounts
- Font Family: Monospace for numerical values
- Examples: "₹ 10 Lakh", "₹ 2.5 Crore"

**Medium Amount Display (₹1,000 - ₹1 Lakh)**
- Format: `₹ [X,XXX]` with comma separators
- Typography: variant `subtitle1` or `body1`
- Color: `#212121` (theme.palette.text.primary)
- Examples: "₹ 50,000", "₹ 1,25,000"

**Small Amount Display (< ₹1,000)**
- Format: `₹ [XXX]`
- Typography: variant `body1` or `body2`
- Color: `#212121` (theme.palette.text.primary)
- Examples: "₹ 500", "₹ 999"

**Subsidy/Percentage Display**
- Format: `Up to [X]% subsidy` or `[X]% of project cost`
- Component: `<Chip color="success" size="small" />`
- Background: `rgba(56, 142, 60, 0.1)`
- Text Color: `#388E3C` (theme.palette.success.main)

**Interest Rate Display**
- Format: `[X]% per annum` or `[X]% p.a.`
- Typography: variant `body2`
- Color: `#F57C00` (theme.palette.warning.main) for rates
- Comparison: "Market rate: [Y]%" in smaller text

**Range Display**
- Format: `₹ [min] - ₹ [max]`
- Typography: variant `subtitle1`
- Color: `#212121` (theme.palette.text.primary)
- Examples: "₹ 1 Lakh - ₹ 10 Lakh"

#### Deadline and Eligibility Indicator Designs

**Deadline Urgency Indicators**

**Critical Deadline (< 7 days)**
- Component: `<Alert severity="error" variant="filled">`
- Background: `#D32F2F` (theme.palette.error.main)
- Text Color: `#FFFFFF`
- Icon: ⚠️ warning icon
- Text: "Application closes in [X] days"
- Animation: Subtle pulse effect

**Urgent Deadline (7-30 days)**
- Component: `<Alert severity="warning" variant="filled">`
- Background: `#F57C00` (theme.palette.warning.main)
- Text Color: `#FFFFFF`
- Icon: ⏰ clock icon
- Text: "Application closes in [X] days"

**Moderate Deadline (30-60 days)**
- Component: `<Alert severity="info" variant="outlined">`
- Border Color: `#00695C` (theme.palette.info.main)
- Text Color: `#00695C`
- Icon: 📅 calendar icon
- Text: "Application closes in [X] days"

**Ample Time (> 60 days)**
- Component: `<Alert severity="success" variant="outlined">`
- Border Color: `#388E3C` (theme.palette.success.main)
- Text Color: `#388E3C`
- Icon: ✓ checkmark icon
- Text: "Application closes in [X] days"

**Eligibility Status Indicators**

**Fully Eligible**
- Component: `<Chip color="success" icon={<CheckCircleIcon />} label="Eligible" />`
- Background: `#388E3C` (theme.palette.success.main)
- Text Color: `#FFFFFF`
- Icon: ✓ checkmark in circle

**Partially Eligible**
- Component: `<Chip color="warning" icon={<WarningIcon />} label="Review Required" />`
- Background: `#F57C00` (theme.palette.warning.main)
- Text Color: `#FFFFFF`
- Icon: ⚠️ warning triangle

**Not Eligible**
- Component: `<Chip color="error" icon={<CancelIcon />} label="Not Eligible" />`
- Background: `#D32F2F` (theme.palette.error.main)
- Text Color: `#FFFFFF`
- Icon: ✗ cancel/cross icon

**Eligibility Under Review**
- Component: `<Chip color="info" icon={<HourglassEmptyIcon />} label="Under Review" />`
- Background: `#00695C` (theme.palette.info.main)
- Text Color: `#FFFFFF`
- Icon: ⧗ hourglass icon

**Detailed Eligibility Breakdown**
- Component: `<Accordion>`
- Header: "Eligibility Criteria" with expand/collapse icon
- Content: Checklist format with individual criteria
  - Met Criteria: ✓ green checkmark with criteria text
  - Unmet Criteria: ✗ red X with criteria text and suggestion
  - Unclear Criteria: ? yellow question mark with "Need more info" link

**Category-Based Eligibility Tags**
- Startup Category: `<Chip size="small" label="Startup" color="primary" />`
- Gender Category: `<Chip size="small" label="Women Entrepreneur" color="secondary" />`
- Social Category: `<Chip size="small" label="SC/ST" color="info" />`
- Geographic Category: `<Chip size="small" label="Rural Area" color="success" />`
- Sector Category: `<Chip size="small" label="Technology" color="default" />`

#### Application Status Tracking Interface

**Application Dashboard Overview**
- Component: `<Grid container spacing={3}>`
- Layout: 12-column responsive grid
- Background: `#FAFAFA` (theme.palette.background.default)

**Status Summary Cards**
- Active Applications: Count with progress indicators
- Approved Applications: Count with success indicators  
- Pending Reviews: Count with warning indicators
- Rejected Applications: Count with error indicators

**Individual Application Card**
- Component: `<Card elevation={2}>`
- Dimensions: `100% width x auto height`
- Padding: `24px` (theme.spacing(3))
- Border Left: `4px solid [status-color]`

**Application Header**
- Scheme Name: Typography variant `h6` (16px, medium weight)
- Application ID: Typography variant `caption` with copy button
- Submission Date: Typography variant `caption`
- Current Status: Status chip with appropriate color

**Progress Visualization**
- Linear Progress Bar: `<LinearProgress variant="determinate" value={progress} />`
- Color: Based on current status
- Height: `8px`
- Border Radius: `4px`
- Background: `rgba(0, 0, 0, 0.1)`

**Action Items Section**
- Pending Actions: Highlighted with warning color
- Required Documents: Checklist with upload buttons
- Next Steps: Clear instructions with action buttons
- Contact Information: Officer details with communication options

**Timeline View**
- Component: `<Timeline position="left">`
- Events: Chronological list of application events
- Icons: Status-appropriate icons for each event
- Timestamps: Relative time display (e.g., "2 days ago")
- Details: Expandable sections for additional information

**Notification Preferences**
- Email Notifications: Toggle switches for different event types
- SMS Notifications: Toggle switches with phone number verification
- Push Notifications: Toggle switches for mobile app
- Frequency Settings: Daily digest vs. immediate notifications

This comprehensive government schemes interface design ensures official styling compliance while maintaining usability and accessibility standards for Indian users navigating government bureaucratic processes.##
# Multilingual Support Indicators

#### Language Selector Component

**Primary Language Selector (Header)**
- Component: `<Select size="small" variant="outlined" value="en">`
- Position: Top-right corner of header navigation
- Width: `120px`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border: `1px solid rgba(0, 0, 0, 0.23)`
- Icon: 🌐 globe icon positioned left of selected language

**Language Options**
- English: `<MenuItem value="en">🇺🇸 English</MenuItem>`
- Hindi: `<MenuItem value="hi">🇮🇳 हिंदी</MenuItem>`
- Tamil: `<MenuItem value="ta">🇮🇳 தமிழ்</MenuItem>`
- Telugu: `<MenuItem value="te">🇮🇳 తెలుగు</MenuItem>`
- Bengali: `<MenuItem value="bn">🇮🇳 বাংলা</MenuItem>`
- Marathi: `<MenuItem value="mr">🇮🇳 मराठी</MenuItem>`
- Gujarati: `<MenuItem value="gu">🇮🇳 ગુજરાતી</MenuItem>`
- Kannada: `<MenuItem value="kn">🇮🇳 ಕನ್ನಡ</MenuItem>`

**Mobile Language Selector**
- Component: `<BottomSheet>` or `<Dialog fullScreen>`
- Trigger: Language icon in mobile header
- Layout: Full-screen overlay with language grid
- Grid: 2 columns on mobile, 3 columns on tablet
- Each Option: Large touch target (56px height minimum)

**Language Selection Confirmation**
- Component: `<Dialog open={languageChanged}>`
- Title: "Language Changed" / "भाषा बदली गई"
- Content: "The interface will reload in [selected language]"
- Actions: "Continue" and "Cancel" buttons
- Auto-reload: 3-second countdown with progress indicator

#### Text Expansion Considerations for Hindi/Regional Languages

**Dynamic Container Sizing**
- Text Containers: `min-height` property to accommodate expansion
- Button Labels: `min-width: 120px` to handle longer translations
- Navigation Items: Flexible width with `max-width` constraints
- Card Titles: Multi-line support with `line-height: 1.4`

**Hindi Text Expansion Patterns**
- Average Expansion: 30-40% longer than English
- Button Text: `padding: 12px 20px` (increased from 10px 16px)
- Menu Items: `padding: 12px 16px` (increased vertical padding)
- Form Labels: `margin-bottom: 8px` for multi-line labels

**Devanagari Script Considerations**
- Font Family: `'Noto Sans Devanagari', 'Roboto', sans-serif`
- Line Height: `1.6` (increased from 1.4 for better readability)
- Letter Spacing: `0.01em` for improved character clarity
- Font Weight: 500 for body text (instead of 400) for better visibility

**Regional Language Typography**
- Tamil Font: `'Noto Sans Tamil', 'Roboto', sans-serif`
- Telugu Font: `'Noto Sans Telugu', 'Roboto', sans-serif`
- Bengali Font: `'Noto Sans Bengali', 'Roboto', sans-serif`
- Base Font Size: `16px` minimum for complex scripts
- Line Height: `1.7` for scripts with extensive diacritics

**Responsive Text Scaling**
- Mobile: Base font size `16px` with `1.2rem` scaling
- Tablet: Base font size `15px` with `1.1rem` scaling  
- Desktop: Base font size `14px` with `1rem` scaling
- Large Desktop: Base font size `14px` with `0.95rem` scaling

**Form Field Adaptations**
- Input Height: `56px` minimum (increased from 48px)
- Label Space: `24px` top margin for floating labels
- Helper Text: Multi-line support with `max-width: 400px`
- Placeholder Text: Shorter, context-appropriate translations

**Navigation Menu Adaptations**
- Menu Width: `280px` minimum (increased from 240px)
- Item Height: `48px` minimum for touch targets
- Text Truncation: `text-overflow: ellipsis` with tooltip on hover
- Submenu Positioning: Adjusted for longer parent menu items

#### Right-to-Left (RTL) Text Support Indicators

**RTL Language Detection**
- Supported RTL Languages: Urdu (`ur`), Arabic (`ar`)
- Component: `<ThemeProvider theme={rtlTheme}>`
- Direction: `dir="rtl"` applied to `<html>` element
- CSS: `direction: rtl` with `text-align: right`

**RTL Layout Adaptations**

**Navigation Adjustments**
- Sidebar: Positioned on right side instead of left
- Breadcrumbs: Arrow direction reversed (‹ instead of ›)
- Menu Icons: Positioned on right side of text
- Hamburger Menu: Positioned top-right corner

**Content Layout Changes**
- Text Alignment: `text-align: right` for RTL content
- Margin/Padding: `margin-left` becomes `margin-right`
- Float Properties: `float: left` becomes `float: right`
- Border Radius: Corner values mirrored

**Form Field RTL Support**
- Input Text: Right-aligned with RTL cursor behavior
- Labels: Positioned on right side of fields
- Icons: Search icons on right, clear icons on left
- Validation Messages: Right-aligned below fields

**Button and Action RTL**
- Icon Buttons: Icons mirrored where directionally relevant
- Floating Action Button: Positioned bottom-left instead of bottom-right
- Dialog Actions: Primary action on left, secondary on right
- Stepper Navigation: Previous/Next button positions swapped

**Data Table RTL**
- Column Headers: Right-aligned text
- Sort Icons: Positioned on left side of headers
- Action Columns: Moved to leftmost position
- Pagination: Previous/Next button positions swapped

**RTL Typography Specifications**
- Urdu Font: `'Noto Nastaliq Urdu', 'Roboto', sans-serif`
- Arabic Font: `'Noto Sans Arabic', 'Roboto', sans-serif`
- Line Height: `1.8` for better script readability
- Letter Spacing: `0.02em` for improved character separation
- Text Direction: `unicode-bidi: embed` for mixed content

**Mixed Content Handling**
- English Numbers: Maintain LTR direction within RTL text
- URLs and Emails: Preserve LTR formatting
- Code Snippets: `direction: ltr` with `text-align: left`
- Dates: Localized format with appropriate direction

**RTL Icon Adaptations**
- Directional Icons: Arrow icons flipped horizontally
- Navigation Icons: Back/forward icons mirrored
- Media Controls: Play/pause positioning adjusted
- Non-directional Icons: Unchanged (settings, search, etc.)

#### Language-Specific UI Adaptations

**Content Density Adjustments**
- Hindi/Regional: Increased line spacing and padding
- English: Standard Material-UI spacing
- RTL Languages: Additional margin for script complexity

**Cultural Color Considerations**
- Saffron (`#FF9933`): Maintained for Indian cultural relevance
- Green (`#388E3C`): Success color appropriate across cultures
- Red (`#D32F2F`): Error color with cultural sensitivity
- Blue (`#1565C0`): Primary color suitable for all languages

**Date and Number Formatting**
- Hindi: Devanagari numerals option (०१२३४५६७८९)
- English: Standard Arabic numerals (0123456789)
- Regional: Local numeral systems where applicable
- Currency: ₹ symbol positioning based on language conventions

**Keyboard Input Support**
- Input Method Editor (IME): Support for complex script input
- Virtual Keyboards: Language-specific layouts
- Transliteration: Roman to Devanagari conversion
- Auto-correction: Language-specific dictionaries

**Accessibility for Multilingual Content**
- Screen Readers: Language tags (`lang` attribute) for proper pronunciation
- Voice Navigation: Language-specific voice commands
- High Contrast: Maintained across all language variants
- Font Scaling: Proportional scaling for all scripts

**Language Switching Indicators**
- Loading State: `<CircularProgress size={20} />` during language change
- Success Feedback: Brief snackbar confirmation
- Error Handling: Fallback to previous language on failure
- Persistence: Language preference saved in localStorage

**Translation Quality Indicators**
- Machine Translation: `<Chip size="small" label="Auto-translated" color="warning" />`
- Human Translation: `<Chip size="small" label="Verified" color="success" />`
- Partial Translation: `<Chip size="small" label="Partial" color="info" />`
- Translation Missing: Fallback to English with indicator

This multilingual support system ensures comprehensive language accessibility while maintaining design consistency across all supported languages and scripts.### Pr
emium Feature and Upgrade Flow Mockups

#### Upgrade Prompt Overlays and Modals

**Subtle Premium Feature Indicator**
- Component: `<Chip size="small" color="secondary" icon={<StarIcon />} label="Premium" />`
- Position: Top-right corner of premium feature cards
- Background: `#FF9933` (theme.palette.secondary.main)
- Text Color: `#FFFFFF`
- Icon: ⭐ star icon
- Border Radius: `12px` (rounded chip)

**Feature Lock Overlay**
- Component: `<Box sx={{ position: 'relative', '&::after': { overlay styles } }}>`
- Overlay: Semi-transparent layer over locked content
- Background: `rgba(0, 0, 0, 0.6)` with backdrop blur
- Lock Icon: 🔒 centered with 48px size
- Color: `#FFFFFF` with subtle glow effect

**Upgrade Prompt Modal**
- Component: `<Dialog maxWidth="sm" fullWidth>`
- Dimensions: `500px width x auto height`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border Radius: `12px` (theme.shape.borderRadius * 3)
- Box Shadow: `0px 8px 32px rgba(0, 0, 0, 0.12)`

**Modal Header Section**
- Premium Badge: Large star icon with gradient background
- Title: Typography variant `h4` "Unlock Premium Features"
- Subtitle: Typography variant `body1` "Get access to advanced tools and insights"
- Close Button: `<IconButton>` positioned top-right

**Feature Comparison Section**
- Component: `<Grid container spacing={2}>`
- Layout: Two-column comparison (Free vs Premium)
- Free Column: Basic features with checkmarks
- Premium Column: Advanced features with star icons
- Highlight: Premium features with accent color background

**Pricing Display**
- Monthly Price: Typography variant `h3` "₹999/month"
- Annual Price: Typography variant `h4` "₹9,999/year" with "Save 17%" badge
- Currency: Indian Rupee symbol prominently displayed
- Discount Badge: `<Chip color="success" label="2 months free" />`

**Call-to-Action Buttons**
- Primary: `<Button variant="contained" color="secondary" size="large" fullWidth>`
  - Text: "Upgrade to Premium"
  - Background: `#FF9933` (theme.palette.secondary.main)
  - Margin Bottom: `12px`
- Secondary: `<Button variant="outlined" color="primary" size="large" fullWidth>`
  - Text: "Start Free Trial"
  - Border Color: `#1565C0` (theme.palette.primary.main)

**Trust Indicators**
- Money-back Guarantee: "30-day money-back guarantee"
- Security: "Secure payment with 256-bit SSL encryption"
- Support: "24/7 premium customer support"
- Icons: Shield, lock, and support icons with text

#### Premium Feature Restriction Indicators

**Content Blur Effect**
- Component: `<Box sx={{ filter: 'blur(4px)', pointerEvents: 'none' }}>`
- Applied to: Premium content areas
- Blur Radius: `4px` for readability while indicating restriction
- Pointer Events: Disabled to prevent interaction

**Feature Limitation Banner**
- Component: `<Alert severity="info" variant="outlined">`
- Background: `rgba(21, 101, 192, 0.04)` (theme.palette.primary.main with alpha)
- Border: `1px solid rgba(21, 101, 192, 0.2)`
- Icon: ℹ️ information icon
- Text: "This feature is available in Premium plan"
- Action: "Upgrade Now" link button

**Usage Limit Indicators**
- Progress Bar: `<LinearProgress variant="determinate" value={80} />`
- Color: `#F57C00` (theme.palette.warning.main) when approaching limit
- Text: "4 of 5 free reports used this month"
- Upgrade Prompt: "Upgrade for unlimited access"

**Feature Teaser Cards**
- Component: `<Card elevation={2} sx={{ opacity: 0.7 }}>`
- Overlay: Gradient overlay from transparent to semi-opaque
- Lock Icon: Positioned center with upgrade button
- Preview: Partial content visible to show value
- Hover Effect: Slight opacity increase with upgrade tooltip

**Freemium Boundary Indicators**
- Divider Line: `<Divider sx={{ my: 2 }}>Premium Features</Divider>`
- Background Change: Subtle background color shift for premium section
- Border: Left border accent in secondary color
- Typography: "Premium" label with star icon

#### Payment Gateway Integration Mockups for Indian Services

**Payment Method Selection**
- Component: `<RadioGroup>`
- Layout: Vertical list of payment options
- Spacing: `16px` between options (theme.spacing(2))

**UPI Payment Option**
- Component: `<FormControlLabel control={<Radio />} label="UPI" />`
- Icon: UPI logo (32px x 32px)
- Input Field: UPI ID text field
- Popular Apps: Quick select buttons for GPay, PhonePe, Paytm
- QR Code: Option to display QR for mobile scanning

**Credit/Debit Card Option**
- Component: `<FormControlLabel control={<Radio />} label="Credit/Debit Card" />`
- Icons: Visa, Mastercard, RuPay logos
- Form Fields: Card number, expiry, CVV, name
- Security: "Secured by SSL" indicator
- Save Card: Checkbox option for future payments

**Net Banking Option**
- Component: `<FormControlLabel control={<Radio />} label="Net Banking" />`
- Bank Selection: Dropdown with major Indian banks
- Popular Banks: Quick select grid (SBI, HDFC, ICICI, Axis)
- Security Notice: Bank-level security assurance

**Digital Wallet Options**
- Paytm: `<Button variant="outlined" startIcon={<PaytmIcon />}>`
- PhonePe: `<Button variant="outlined" startIcon={<PhonePeIcon />}>`
- Amazon Pay: `<Button variant="outlined" startIcon={<AmazonPayIcon />}>`
- Google Pay: `<Button variant="outlined" startIcon={<GPayIcon />}>`

**Payment Summary Section**
- Component: `<Paper elevation={1} sx={{ p: 3 }}>`
- Background: `rgba(21, 101, 192, 0.04)`
- Border: `1px solid rgba(21, 101, 192, 0.2)`

**Order Details**
- Plan Name: Typography variant `subtitle1` "Premium Annual Plan"
- Duration: "12 months" with renewal date
- Base Price: "₹11,988" with strikethrough
- Discount: "-₹1,989 (17% off)" in success color
- Final Price: Typography variant `h5` "₹9,999" in large text
- Taxes: "Inclusive of 18% GST" in caption text

**Payment Security Indicators**
- SSL Certificate: Lock icon with "256-bit SSL encryption"
- PCI Compliance: "PCI DSS compliant" badge
- Money-back: "30-day money-back guarantee"
- Refund Policy: Link to detailed refund terms

**Payment Processing States**
- Loading: `<CircularProgress />` with "Processing payment..."
- Success: Checkmark animation with "Payment successful!"
- Error: Error icon with retry button and support contact
- Redirect: "Redirecting to bank..." with progress indicator

#### Subscription Management Interface Designs

**Subscription Dashboard Overview**
- Component: `<Container maxWidth="md">`
- Background: `#FAFAFA` (theme.palette.background.default)
- Padding: `32px 24px` (theme.spacing(4, 3))

**Current Plan Card**
- Component: `<Card elevation={3}>`
- Dimensions: `100% width x auto height`
- Background: Linear gradient from primary to secondary color
- Text Color: `#FFFFFF` for contrast
- Border Radius: `12px`

**Plan Details Section**
- Plan Name: Typography variant `h4` "Premium Annual"
- Status: `<Chip color="success" label="Active" />` with checkmark
- Renewal Date: "Renews on March 15, 2024"
- Price: "₹9,999/year" with "Next billing: ₹9,999"

**Usage Statistics**
- Component: `<Grid container spacing={3}>`
- Metrics Cards: Individual cards for key usage stats
- Reports Generated: Progress bar with "45 of unlimited"
- AI Consultations: "12 this month" with trend indicator
- Document Templates: "Unlimited access" with checkmark

**Plan Comparison Table**
- Component: `<Table>`
- Columns: Feature, Free, Premium, Enterprise
- Rows: Key features with checkmarks/crosses
- Current Plan: Highlighted column with accent color
- Upgrade Options: Action buttons for higher tiers

**Billing History Section**
- Component: `<TableContainer component={Paper}>`
- Columns: Date, Description, Amount, Status, Invoice
- Pagination: `<TablePagination />` for multiple pages
- Download: PDF invoice download buttons
- Payment Method: Last 4 digits of card/UPI ID

**Payment Method Management**
- Primary Method: Current payment method with "Primary" badge
- Add Method: `<Button variant="outlined">Add Payment Method</Button>`
- Edit/Remove: Action buttons for existing methods
- Auto-renewal: Toggle switch with explanation

**Subscription Controls**
- Upgrade Plan: `<Button variant="contained" color="secondary">`
- Downgrade Plan: `<Button variant="outlined" color="primary">`
- Pause Subscription: `<Button variant="text" color="warning">`
- Cancel Subscription: `<Button variant="text" color="error">`

**Cancellation Flow**
- Confirmation Dialog: "Are you sure you want to cancel?"
- Reason Selection: Multiple choice reasons for cancellation
- Retention Offer: Discount or feature offer to retain
- Final Confirmation: "Cancel immediately" vs "Cancel at period end"

**Renewal Notifications**
- Email Preferences: Checkboxes for different notification types
- Timing: "Notify me 7 days before renewal"
- Payment Failures: "Send SMS for failed payments"
- Promotional: "Receive offers and updates"

**Support and Help Section**
- FAQ Links: Common subscription questions
- Contact Support: Chat, email, and phone options
- Billing Disputes: Process for handling billing issues
- Refund Requests: Link to refund request form

**Mobile Subscription Management**
- Responsive Design: Single column layout on mobile
- Touch-friendly: Larger buttons and touch targets
- Swipe Actions: Swipe to reveal secondary actions
- Bottom Sheet: Modal overlays for detailed actions

**Enterprise Features Preview**
- Team Management: User seats and role management
- Advanced Analytics: Business intelligence dashboards
- API Access: Developer tools and integrations
- Priority Support: Dedicated account manager contact

This comprehensive premium feature and upgrade flow design ensures smooth monetization while maintaining transparency and user trust in the Indian market context.
##
 Mobile-First Responsive Mockups

### Mobile Dashboard with Thumb-Friendly Navigation

#### Mobile Dashboard Layout (320px - 767px)

**Container Specifications**
- Component: `<Container maxWidth="sm" sx={{ px: 2 }}>`
- Width: `100%` with `16px` horizontal padding (theme.spacing(2))
- Background: `#FAFAFA` (theme.palette.background.default)
- Minimum Height: `100vh`
- Safe Area: Respects device safe areas (notch, home indicator)

**Header Section - Mobile**
- Component: `<AppBar position="sticky" elevation={0}>`
- Height: `64px` (theme.mixins.toolbar.minHeight)
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border Bottom: `1px solid rgba(0, 0, 0, 0.12)`
- Padding: `0 16px` (theme.spacing(0, 2))
- Z-index: `1100` (theme.zIndex.appBar)

**Mobile Header Content**
```
┌─────────────────────────────────────────┐
│ [☰]  Founder's Compass        [🔔] [👤] │ 64px
└─────────────────────────────────────────┘
```

- Menu Icon: `<IconButton>` with hamburger icon (☰)
  - Size: `48px x 48px` (minimum touch target)
  - Color: `#1565C0` (theme.palette.primary.main)
  - Position: Left aligned with 8px margin

- Logo/Title: `<Typography variant="h6">`
  - Font Size: `18px` (theme.typography.h6.fontSize)
  - Font Weight: 500
  - Color: `#212121` (theme.palette.text.primary)
  - Truncation: Text overflow ellipsis if needed

- Notification Icon: `<IconButton>` with bell icon (🔔)
  - Size: `48px x 48px`
  - Badge: `<Badge badgeContent={3} color="error">`
  - Color: `#1565C0` (theme.palette.primary.main)

- Profile Avatar: `<Avatar>` with user image/initials
  - Size: `32px x 32px`
  - Background: `#FF9933` (theme.palette.secondary.main)
  - Text Color: `#FFFFFF`

**Welcome Section - Mobile**
- Component: `<Card elevation={1} sx={{ mb: 3 }}>`
- Margin Bottom: `24px` (theme.spacing(3))
- Padding: `20px 16px` (theme.spacing(2.5, 2))
- Border Radius: `8px`
- Background: Linear gradient from `#1565C0` to `#42A5F5`

```
┌─────────────────────────────────────────┐
│ Good morning, Rajesh! 👋                │
│                                         │
│ Ready to grow your startup today?       │
│                                         │
│ [    Continue Learning    ] 📚          │ 56px button
└─────────────────────────────────────────┘
```

- Greeting Text: `<Typography variant="h5" sx={{ color: 'white', mb: 1 }}>`
  - Font Size: `20px`
  - Font Weight: 500
  - Color: `#FFFFFF`
  - Margin Bottom: `8px`

- Subtitle: `<Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>`
  - Font Size: `16px`
  - Color: `rgba(255, 255, 255, 0.9)`
  - Margin Bottom: `16px`

- CTA Button: `<Button variant="contained" fullWidth size="large">`
  - Height: `56px` (large touch target)
  - Background: `rgba(255, 255, 255, 0.2)`
  - Text Color: `#FFFFFF`
  - Border: `1px solid rgba(255, 255, 255, 0.3)`
  - Icon: 📚 positioned before text

**Progress Overview Cards - Mobile Stack**
- Component: `<Stack spacing={2} sx={{ mb: 3 }}>`
- Layout: Single column stack
- Spacing: `16px` between cards (theme.spacing(2))

**Learning Progress Card**
```
┌─────────────────────────────────────────┐
│ 📚 Learning Progress                    │
│                                         │
│ ████████░░ 80% Complete                 │
│                                         │
│ 4 of 5 modules completed               │
│ Next: Financial Planning                │
└─────────────────────────────────────────┘
```

- Component: `<Card elevation={1}>`
- Padding: `20px 16px` (theme.spacing(2.5, 2))
- Header: `<Typography variant="h6">` with emoji icon
- Progress Bar: `<LinearProgress variant="determinate" value={80}>`
  - Height: `8px`
  - Background: `rgba(21, 101, 192, 0.1)`
  - Fill: `#1565C0` (theme.palette.primary.main)
  - Border Radius: `4px`
- Progress Text: `<Typography variant="body2" color="primary">`
- Status Text: `<Typography variant="body2" color="text.secondary">`
- Next Action: `<Typography variant="body2" sx={{ fontWeight: 500 }}>`

**Government Schemes Card**
```
┌─────────────────────────────────────────┐
│ 🏛️ Government Schemes                   │
│                                         │
│ 3 new schemes available                 │
│ 2 applications in progress              │
│                                         │
│ [    View All Schemes    ]              │
└─────────────────────────────────────────┘
```

- Component: `<Card elevation={1}>`
- Padding: `20px 16px`
- Header: Government building emoji (🏛️) + title
- Stats: Two-line summary with key numbers
- Action Button: `<Button variant="outlined" fullWidth>`
  - Height: `44px` (minimum touch target)
  - Border: `1px solid #1565C0`
  - Text Color: `#1565C0`

**Community Activity Card**
```
┌─────────────────────────────────────────┐
│ 💬 Community Activity                   │
│                                         │
│ 5 new discussions                       │
│ 12 questions answered                   │
│                                         │
│ [    Join Discussions    ]              │
└─────────────────────────────────────────┘
```

- Component: `<Card elevation={1}>`
- Layout: Same structure as Government Schemes card
- Icon: Speech bubble emoji (💬)
- Action Button: Same styling as above

**Quick Actions Grid - Mobile**
- Component: `<Grid container spacing={2} sx={{ mb: 3 }}>`
- Layout: 2x2 grid on mobile
- Spacing: `16px` between items

```
┌─────────────────┬─────────────────┐
│ 📊 Analytics    │ 💰 Funding     │
│                 │                 │
│ View Reports    │ Find Investors  │
└─────────────────┼─────────────────┤
│ 📋 Business     │ 🎯 Mentorship  │
│ Plan            │                 │
│ Create Plan     │ Find Mentors    │
└─────────────────┴─────────────────┘
```

**Quick Action Card Specifications**
- Component: `<Card elevation={1} sx={{ height: '100%', cursor: 'pointer' }}>`
- Height: `120px` (consistent card height)
- Padding: `16px` (theme.spacing(2))
- Border Radius: `8px`
- Hover Effect: `elevation={3}` on hover
- Touch Feedback: Ripple effect on tap

**Card Content Layout**
- Icon: `<Box sx={{ fontSize: '32px', mb: 1 }}>`
  - Size: `32px` emoji or Material-UI icon
  - Margin Bottom: `8px`
- Title: `<Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>`
  - Font Size: `16px`
  - Font Weight: 600
  - Margin Bottom: `4px`
- Description: `<Typography variant="body2" color="text.secondary">`
  - Font Size: `14px`
  - Color: `rgba(0, 0, 0, 0.6)`

#### Bottom Navigation - Thumb-Friendly Design

**Bottom Navigation Container**
- Component: `<BottomNavigation showLabels sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>`
- Height: `64px` (minimum for thumb reach)
- Background: `#FFFFFF` (theme.palette.background.paper)
- Border Top: `1px solid rgba(0, 0, 0, 0.12)`
- Box Shadow: `0px -2px 4px rgba(0, 0, 0, 0.1)`
- Z-index: `1000`
- Safe Area: `padding-bottom: env(safe-area-inset-bottom)` for devices with home indicator

```
┌─────────────────────────────────────────┐
│ [🏠] [📚] [🏛️] [💬] [👤]              │ 64px + safe area
│ Home Learn Schemes Forum Profile        │
└─────────────────────────────────────────┘
```

**Navigation Item Specifications**
- Component: `<BottomNavigationAction>`
- Width: `20%` of container (5 equal items)
- Height: `64px`
- Touch Target: Minimum `44px x 44px` (exceeds requirement)
- Padding: `8px 12px 10px` (theme.spacing(1, 1.5, 1.25))

**Active State**
- Icon Color: `#1565C0` (theme.palette.primary.main)
- Label Color: `#1565C0` (theme.palette.primary.main)
- Background: `rgba(21, 101, 192, 0.08)` (subtle highlight)
- Icon Size: `24px`
- Label Font Size: `12px`
- Font Weight: 500

**Inactive State**
- Icon Color: `rgba(0, 0, 0, 0.6)` (theme.palette.text.secondary)
- Label Color: `rgba(0, 0, 0, 0.6)` (theme.palette.text.secondary)
- Background: Transparent
- Icon Size: `24px`
- Label Font Size: `12px`
- Font Weight: 400

**Navigation Items**
1. **Home** - 🏠 (House icon)
   - Active: Dashboard view
   - Route: `/dashboard`

2. **Learn** - 📚 (Books icon)
   - Active: Learning paths
   - Route: `/learning`

3. **Schemes** - 🏛️ (Government building icon)
   - Active: Government schemes
   - Route: `/schemes`

4. **Forum** - 💬 (Speech bubble icon)
   - Active: Community discussions
   - Route: `/community`

5. **Profile** - 👤 (Person icon)
   - Active: User profile
   - Route: `/profile`

**Touch Interaction Guidelines**
- Minimum Touch Target: `44px x 44px` (WCAG AA compliance)
- Touch Feedback: Material-UI ripple effect
- Haptic Feedback: Light haptic on tap (iOS/Android)
- Visual Feedback: 150ms transition between states
- Accessibility: Screen reader support with proper labels

#### Swipe Gesture Indicators for Card Interactions

**Swipeable Progress Cards**
- Component: `<SwipeableCard>` (custom wrapper around Card)
- Swipe Direction: Horizontal (left/right)
- Swipe Threshold: `40%` of card width
- Animation: `300ms ease-out` transition

**Visual Swipe Indicators**
```
┌─────────────────────────────────────────┐
│ 📚 Learning Progress              ⋯⋯⋯ │ ← Swipe indicator
│                                         │
│ ████████░░ 80% Complete                 │
│                                         │
│ 4 of 5 modules completed               │
│ Next: Financial Planning                │
└─────────────────────────────────────────┘
```

**Swipe Indicator Specifications**
- Position: Top-right corner of card
- Icon: Three dots (⋯) or chevron (›)
- Color: `rgba(0, 0, 0, 0.3)` (subtle)
- Size: `16px`
- Animation: Gentle pulse every 3 seconds
- Fade Out: After first swipe interaction

**Swipe Actions - Left Swipe (Reveal Actions)**
```
┌─────────────────────────────────────────┐
│                    [📊] [⭐] [📤]      │ ← Action buttons
│ Learning Progress                       │
│                                         │
│ ████████░░ 80% Complete                 │
└─────────────────────────────────────────┘
```

**Action Button Specifications**
- Component: `<IconButton size="large">`
- Size: `48px x 48px` (thumb-friendly)
- Background: Semi-transparent colored circles
- Spacing: `8px` between buttons
- Animation: Slide in from right with stagger effect

**Action Types**
1. **View Details** - 📊 (Chart icon)
   - Background: `rgba(21, 101, 192, 0.1)`
   - Icon Color: `#1565C0`

2. **Mark Favorite** - ⭐ (Star icon)
   - Background: `rgba(255, 153, 51, 0.1)`
   - Icon Color: `#FF9933`

3. **Share Progress** - 📤 (Share icon)
   - Background: `rgba(56, 142, 60, 0.1)`
   - Icon Color: `#388E3C`

**Swipe Actions - Right Swipe (Quick Actions)**
```
┌─────────────────────────────────────────┐
│ [▶️] [📝] [🔔]                          │ ← Quick actions
│                    Learning Progress     │
│                                         │
│                    ████████░░ 80%       │
└─────────────────────────────────────────┘
```

**Quick Action Types**
1. **Continue Learning** - ▶️ (Play icon)
   - Background: `rgba(21, 101, 192, 0.1)`
   - Action: Navigate to current module

2. **Take Notes** - 📝 (Note icon)
   - Background: `rgba(255, 153, 51, 0.1)`
   - Action: Open note-taking interface

3. **Set Reminder** - 🔔 (Bell icon)
   - Background: `rgba(156, 39, 176, 0.1)`
   - Action: Schedule learning reminder

#### Mobile-Specific Progress Tracking Designs

**Circular Progress Indicators**
- Component: `<CircularProgress variant="determinate" size={80}>`
- Size: `80px` diameter (easily readable on mobile)
- Stroke Width: `4px`
- Background Circle: `rgba(21, 101, 192, 0.1)`
- Progress Circle: `#1565C0` (theme.palette.primary.main)
- Center Text: Percentage value

**Progress Ring with Icon**
```
    ┌─────────┐
    │   📚    │
    │  80%    │ ← Circular progress ring
    │ Complete│
    └─────────┘
```

**Specifications**
- Container: `<Box sx={{ position: 'relative', display: 'inline-flex' }}>`
- Progress Ring: `<CircularProgress variant="determinate" value={80} size={80}>`
- Center Content: Absolutely positioned
- Icon: `24px` emoji or Material-UI icon
- Percentage: `<Typography variant="h6" sx={{ fontWeight: 600 }}>`
- Label: `<Typography variant="caption" color="text.secondary">`

**Linear Progress with Milestones**
```
┌─────────────────────────────────────────┐
│ Module Progress                         │
│                                         │
│ ●────●────●────○────○                   │
│ 1    2    3    4    5                   │
│                                         │
│ Current: Business Model Canvas          │
│ Next: Financial Planning                │
└─────────────────────────────────────────┘
```

**Milestone Progress Specifications**
- Container: `<Box sx={{ py: 2 }}>`
- Progress Line: `<Box>` with background gradient
- Milestone Dots: `<Box>` circles positioned absolutely
- Completed Dot: `#1565C0` filled circle (8px diameter)
- Current Dot: `#FF9933` filled circle (10px diameter)
- Future Dot: `rgba(0, 0, 0, 0.2)` outline circle (8px diameter)
- Labels: `<Typography variant="caption">` below each dot

**Achievement Badges - Mobile Layout**
```
┌─────────────────────────────────────────┐
│ Recent Achievements                     │
│                                         │
│ [🏆] [⭐] [🎯] [📈] [💡]              │
│                                         │
│ Tap to view details                     │
└─────────────────────────────────────────┘
```

**Badge Specifications**
- Component: `<Chip variant="outlined" size="large">`
- Size: `48px x 48px` (square badges)
- Border Radius: `12px`
- Background: `rgba(21, 101, 192, 0.05)`
- Border: `1px solid rgba(21, 101, 192, 0.2)`
- Icon: `24px` emoji
- Spacing: `8px` between badges
- Touch Target: Full badge area
- Animation: Gentle bounce on achievement unlock

**Progress Summary Card - Mobile**
```
┌─────────────────────────────────────────┐
│ This Week's Progress                    │
│                                         │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐        │
│ │ 📚  │ │ 🎯  │ │ 💬  │ │ 🏆  │        │
│ │  3  │ │  2  │ │  8  │ │  1  │        │
│ │Mods │ │Goals│ │Posts│ │Badge│        │
│ └─────┘ └─────┘ └─────┘ └─────┘        │
└─────────────────────────────────────────┘
```

**Summary Metric Specifications**
- Container: `<Grid container spacing={1}>`
- Metric Card: `<Paper elevation={0} sx={{ p: 1.5, textAlign: 'center' }}>`
- Icon: `20px` emoji at top
- Number: `<Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>`
- Label: `<Typography variant="caption" color="text.secondary">`
- Background: `rgba(21, 101, 192, 0.02)`
- Border: `1px solid rgba(21, 101, 192, 0.1)`

**Mobile Dashboard Responsive Behavior**

**Breakpoint Specifications**
- Mobile Small: `320px - 374px`
  - Single column layout
  - Reduced padding: `12px`
  - Smaller card heights
  - Compact typography

- Mobile Medium: `375px - 424px`
  - Standard mobile layout
  - Normal padding: `16px`
  - Standard card heights
  - Full typography scale

- Mobile Large: `425px - 767px`
  - Wider mobile layout
  - Increased padding: `20px`
  - Larger touch targets
  - Enhanced spacing

**Touch Target Optimization**
- Minimum Size: `44px x 44px` (WCAG AA)
- Recommended Size: `48px x 48px` (Material Design)
- Spacing: Minimum `8px` between interactive elements
- Thumb Zone: Primary actions within 75% of screen height
- One-Handed Use: Critical actions in bottom 50% of screen

**Performance Optimizations**
- Lazy Loading: Cards load as user scrolls
- Image Optimization: WebP format with fallbacks
- Animation Performance: GPU-accelerated transforms
- Touch Response: <100ms feedback delay
- Smooth Scrolling: 60fps scroll performance

This mobile dashboard design prioritizes thumb-friendly navigation with proper touch targets, intuitive swipe gestures, and mobile-optimized progress tracking that works seamlessly on Indian mobile devices and network conditions.### Mobile 
Learning Path Interface

#### Mobile Course Card Layouts with Touch Interactions

**Course Card Container - Mobile**
- Component: `<Card elevation={2} sx={{ mb: 2, borderRadius: 2 }}>`
- Width: `100%` (full width on mobile)
- Margin Bottom: `16px` (theme.spacing(2))
- Border Radius: `8px`
- Background: `#FFFFFF` (theme.palette.background.paper)
- Touch Feedback: Ripple effect with 200ms duration
- Minimum Height: `140px` (adequate content space)

```
┌─────────────────────────────────────────┐
│ [📊] Business Fundamentals        [⭐]  │
│                                         │
│ ████████░░ 8/10 modules                 │
│                                         │
│ 🕒 2h 30m remaining  👥 1,234 enrolled │
│ [    Continue Learning    ] 80%         │
└─────────────────────────────────────────┘
```

**Course Card Header**
- Component: `<CardHeader>`
- Padding: `16px 16px 8px` (theme.spacing(2, 2, 1))
- Avatar: Course category icon (48px circle)
  - Background: `#1565C0` (theme.palette.primary.main)
  - Icon: `24px` white Material-UI icon
- Title: `<Typography variant="h6" sx={{ fontWeight: 600 }}>`
  - Font Size: `18px`
  - Font Weight: 600
  - Line Height: `1.3`
  - Max Lines: 2 (with ellipsis)
- Action: Favorite star icon button
  - Size: `40px x 40px` (touch-friendly)
  - Color: `#FF9933` when favorited, `rgba(0,0,0,0.3)` when not

**Course Progress Section**
- Component: `<CardContent sx={{ pt: 0, pb: 1 }}>`
- Progress Bar: `<LinearProgress variant="determinate" value={80}>`
  - Height: `6px`
  - Background: `rgba(21, 101, 192, 0.1)`
  - Fill: `#1565C0` (theme.palette.primary.main)
  - Border Radius: `3px`
- Progress Text: `<Typography variant="body2" color="primary" sx={{ mt: 0.5 }}>`
  - Text: "8/10 modules" or "80% complete"
  - Color: `#1565C0`
  - Font Weight: 500

**Course Metadata Row**
- Component: `<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>`
- Time Remaining: Clock icon + text
  - Icon: 🕒 (16px)
  - Text: `<Typography variant="caption" color="text.secondary">`
  - Format: "2h 30m remaining"
- Enrollment Count: People icon + number
  - Icon: 👥 (16px)
  - Text: `<Typography variant="caption" color="text.secondary">`
  - Format: "1,234 enrolled"

**Course Action Button**
- Component: `<Button variant="contained" fullWidth size="large" sx={{ mt: 1 }}>`
- Height: `48px` (large touch target)
- Background: `#1565C0` (theme.palette.primary.main)
- Text: "Continue Learning" or "Start Course"
- Progress Indicator: Percentage on right side
- Border Radius: `6px`*
*Touch Interaction States**

*Default State*
- Background: `#FFFFFF`
- Border: None
- Shadow: `0px 2px 4px rgba(0, 0, 0, 0.1)`

*Pressed State*
- Background: `rgba(21, 101, 192, 0.02)`
- Transform: `scale(0.98)`
- Shadow: `0px 1px 2px rgba(0, 0, 0, 0.1)`
- Transition: `150ms ease-out`

*Long Press State (Context Menu)*
- Background: `rgba(21, 101, 192, 0.05)`
- Border: `2px solid #1565C0`
- Haptic Feedback: Medium impact
- Context Menu: Slide up from bottom

**Course Card Variations**

*Completed Course Card*
```
┌─────────────────────────────────────────┐
│ [✅] Marketing Mastery           [⭐]   │
│                                         │
│ ██████████ Completed!                   │
│                                         │
│ 🏆 Certificate earned  📅 2 days ago   │
│ [    View Certificate    ] ✓            │
└─────────────────────────────────────────┘
```

- Progress Bar: `#388E3C` (theme.palette.success.main)
- Completion Badge: Green checkmark icon
- Certificate Button: `variant="outlined"` with success color
- Achievement Icon: Trophy emoji (🏆)

*Locked Course Card*
```
┌─────────────────────────────────────────┐
│ [🔒] Advanced Analytics          [⭐]   │
│                                         │
│ ░░░░░░░░░░ Locked                       │
│                                         │
│ 📋 Complete 2 prerequisites             │
│ [    View Requirements    ] 🔒          │
└─────────────────────────────────────────┘
```

- Background: `rgba(0, 0, 0, 0.05)` (slightly dimmed)
- Progress Bar: `rgba(0, 0, 0, 0.1)` (grey)
- Lock Icon: 🔒 in header
- Requirements Text: Prerequisites list
- Action Button: `variant="outlined"` with disabled styling

#### Mobile-Specific Filtering and Search Interfaces

**Search Header - Mobile**
- Component: `<Box sx={{ position: 'sticky', top: 64, zIndex: 100, bgcolor: 'background.default', pb: 2 }}>`
- Background: `#FAFAFA` (theme.palette.background.default)
- Padding Bottom: `16px`
- Z-index: 100 (below app bar)

```
┌─────────────────────────────────────────┐
│ [🔍 Search courses...            ] [⚙️] │ 56px
│                                         │
│ [All] [Beginner] [Business] [Tech] [+]  │ 40px
└─────────────────────────────────────────┘
```

**Search Input Field**
- Component: `<TextField variant="outlined" fullWidth placeholder="Search courses...">`
- Height: `56px` (large touch target)
- Border Radius: `28px` (pill shape)
- Background: `#FFFFFF`
- Padding: `0 20px`
- Start Adornment: Search icon (🔍)
- End Adornment: Filter settings button (⚙️)

**Filter Chips Row**
- Component: `<Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', py: 1 }}>`
- Layout: Horizontal scrollable row
- Spacing: `8px` between chips
- Padding: `8px 0` vertical

**Filter Chip Specifications**
- Component: `<Chip variant="outlined" clickable>`
- Height: `40px` (touch-friendly)
- Padding: `0 16px`
- Border Radius: `20px`
- Font Size: `14px`
- Font Weight: 500

*Active Filter Chip*
- Background: `#1565C0` (theme.palette.primary.main)
- Text Color: `#FFFFFF`
- Border: `1px solid #1565C0`

*Inactive Filter Chip*
- Background: `#FFFFFF`
- Text Color: `#1565C0`
- Border: `1px solid rgba(21, 101, 192, 0.5)`

**Filter Categories**
1. **All** - Show all courses
2. **Beginner** - Entry level courses
3. **Business** - Business-focused content
4. **Tech** - Technical courses
5. **+** - More filters (opens bottom sheet)

**Advanced Filter Bottom Sheet**
- Component: `<SwipeableDrawer anchor="bottom">`
- Height: `60%` of screen height
- Background: `#FFFFFF`
- Border Radius: `16px 16px 0 0` (top corners rounded)
- Handle: Drag handle at top center``
`
┌─────────────────────────────────────────┐
│ ═══ Filter Courses                      │
│                                         │
│ Difficulty Level                        │
│ ○ Beginner  ○ Intermediate  ○ Advanced │
│                                         │
│ Duration                                │
│ ○ < 1 hour  ○ 1-5 hours  ○ 5+ hours   │
│                                         │
│ Category                                │
│ ☑ Business  ☑ Marketing  ☐ Finance     │
│ ☐ Technology  ☐ Legal  ☐ Operations    │
│                                         │
│ [    Clear All    ] [    Apply    ]     │
└─────────────────────────────────────────┘
```

**Filter Section Specifications**
- Section Title: `<Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>`
- Radio Groups: `<RadioGroup row>` for single selection
- Checkbox Groups: `<FormGroup>` for multiple selection
- Action Buttons: Bottom-aligned with full width
  - Clear All: `<Button variant="text" fullWidth>`
  - Apply: `<Button variant="contained" fullWidth>`

#### Mobile Progress Tracking and Completion Flows

**Learning Path Progress Header**
- Component: `<Card elevation={1} sx={{ mb: 3, background: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)' }}>`
- Background: Gradient from primary to light blue
- Padding: `24px 20px` (theme.spacing(3, 2.5))
- Text Color: `#FFFFFF`

```
┌─────────────────────────────────────────┐
│ Startup Fundamentals Path               │
│                                         │
│     ●────●────●────○────○               │
│     1    2    3    4    5               │
│                                         │
│ 3 of 5 courses completed (60%)         │
│ Estimated completion: 2 weeks           │
└─────────────────────────────────────────┘
```

**Progress Path Visualization**
- Container: `<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>`
- Path Line: `<Box>` with gradient background
- Progress Dots: Positioned absolutely on line
  - Completed: `#FFFFFF` filled circle (12px)
  - Current: `#FF9933` filled circle (16px) with pulse animation
  - Future: `rgba(255, 255, 255, 0.3)` outline circle (12px)
- Step Numbers: `<Typography variant="caption">` below dots

**Module Completion Flow**

*Module Start Screen*
```
┌─────────────────────────────────────────┐
│ [←] Module 3: Business Model Canvas     │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 📊 Overview                         │ │
│ │ • Understanding your value prop     │ │
│ │ • Customer segments analysis        │ │
│ │ • Revenue stream planning           │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ 🕒 Estimated time: 45 minutes           │
│ 📚 5 lessons + 1 quiz                   │
│                                         │
│ [    Start Module    ]                  │
└─────────────────────────────────────────┘
```

**Module Header**
- Component: `<AppBar position="sticky" color="default">`
- Back Button: `<IconButton>` with arrow left
- Title: Module name with number
- Progress Indicator: Linear progress at bottom

**Module Content Overview**
- Component: `<Card elevation={1} sx={{ mb: 3 }}>`
- Icon: Large emoji or Material-UI icon (48px)
- Learning Objectives: Bulleted list
- Metadata: Time estimate and lesson count
- Start Button: Full-width primary button

*Lesson Progress Screen*
```
┌─────────────────────────────────────────┐
│ [←] Lesson 2 of 5              ████░░░░ │
│                                         │
│ Understanding Customer Segments         │
│                                         │
│ [Lesson content area with video,        │
│  text, images, and interactive          │
│  elements optimized for mobile]         │
│                                         │
│ [    Previous    ] [    Next    ]       │
└─────────────────────────────────────────┘
```

**Lesson Navigation**
- Progress Bar: Shows lesson progress within module
- Content Area: Scrollable with mobile-optimized media
- Navigation Buttons: Previous/Next with swipe gesture support
- Bookmark: Floating action button for saving progress

*Module Completion Screen*
```
┌─────────────────────────────────────────┐
│ 🎉 Module Completed!                    │
│                                         │
│ Business Model Canvas                   │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ ✅ 5 lessons completed              │ │
│ │ ✅ Quiz passed (85%)                │ │
│ │ ✅ Certificate earned               │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [    View Certificate    ]              │
│ [    Continue to Module 4    ]          │
│ [    Share Achievement    ]             │
└─────────────────────────────────────────┘
```

**Completion Celebration**
- Animation: Confetti or celebration particles
- Achievement Summary: Checkmarked accomplishments
- Action Buttons: Certificate, continue, and share options
- Social Sharing: Pre-filled text for LinkedIn/Twitter

**Quiz Interface - Mobile**
```
┌─────────────────────────────────────────┐
│ [←] Quiz: Business Models    Question 3/5│
│                                         │
│ Which revenue model is best for SaaS?   │
│                                         │
│ ○ One-time purchase                     │
│ ● Subscription-based                    │
│ ○ Advertising-supported                 │
│ ○ Freemium model                        │
│                                         │
│ [    Previous    ] [    Next    ]       │
└─────────────────────────────────────────┘
```

**Quiz Specifications**
- Question Counter: "Question X of Y" in header
- Question Text: Large, readable font (18px)
- Answer Options: Radio buttons with large touch targets
- Navigation: Previous/Next buttons
- Progress: Visual indicator of quiz completion
- Timer: Optional countdown for timed quizzes

This mobile learning path interface ensures optimal touch interactions, clear progress tracking, and completion flows that work seamlessly on mobile devices while maintaining engagement through visual feedback and celebration of achievements.### Mobile 
Community Forum Mockups

#### Mobile Posting and Commenting Interfaces

**Forum Main Screen - Mobile**
- Component: `<Container maxWidth="sm" sx={{ px: 2, pb: 10 }}>`
- Background: `#FAFAFA` (theme.palette.background.default)
- Bottom Padding: `80px` (account for bottom navigation)

```
┌─────────────────────────────────────────┐
│ [🔍 Search discussions...        ] [+]  │ 56px
│                                         │
│ [🔥 Hot] [📅 Recent] [❓ Questions]     │ 40px
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 👤 Priya Sharma  • 2h ago  [⭐ 245] │ │
│ │                                     │ │
│ │ How to validate startup idea in     │ │
│ │ Indian market?                      │ │
│ │                                     │ │
│ │ 💬 12 replies  👍 8 likes  👁 156   │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [More discussion cards...]              │
└─────────────────────────────────────────┘
```

**Forum Header with Search and Actions**
- Search Bar: `<TextField variant="outlined" fullWidth>`
  - Height: `56px`
  - Border Radius: `28px`
  - Placeholder: "Search discussions..."
  - Start Adornment: Search icon (🔍)
- New Post Button: `<Fab color="primary" sx={{ position: 'fixed', bottom: 80, right: 16 }}>`
  - Size: `56px x 56px`
  - Icon: Plus (+)
  - Position: Fixed bottom-right, above bottom navigation

**Category Filter Chips**
- Component: `<Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', py: 1, mb: 2 }}>`
- Scrollable: Horizontal scroll for more categories
- Chip Height: `40px` (touch-friendly)

**Discussion Card - Mobile Layout**
- Component: `<Card elevation={1} sx={{ mb: 2, borderRadius: 2 }}>`
- Padding: `16px` (theme.spacing(2))
- Touch Target: Full card area clickable
- Ripple Effect: Material-UI ripple on tap

**User Info Header**
- Component: `<Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>`
- Avatar: `<Avatar sx={{ width: 32, height: 32, mr: 1 }}>`
- Username: `<Typography variant="subtitle2" sx={{ fontWeight: 600 }}>`
- Timestamp: `<Typography variant="caption" color="text.secondary">`
- Reputation: `<Chip size="small" icon={⭐} label="245">`
  - Background: `rgba(255, 153, 51, 0.1)`
  - Text Color: `#FF9933`

**Discussion Content**
- Title: `<Typography variant="h6" sx={{ fontWeight: 600, mb: 1, lineHeight: 1.3 }}>`
  - Font Size: `18px`
  - Max Lines: 3 (with ellipsis)
- Preview: `<Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>`
  - Max Lines: 2
  - Character Limit: 120 characters

**Engagement Metrics Row**
- Component: `<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>`
- Reply Count: 💬 icon + number
- Like Count: 👍 icon + number  
- View Count: 👁 icon + number
- Icon Size: `16px`
- Text: `<Typography variant="caption" color="text.secondary">`

**New Post Interface - Mobile**
```
┌─────────────────────────────────────────┐
│ [×] New Discussion              [Post]  │
│                                         │
│ [📝 Title                            ]  │
│                                         │
│ [📂 Select Category ▼               ]  │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Write your question or discussion   │ │
│ │ topic here...                       │ │
│ │                                     │ │
│ │ [B] [I] [🔗] [📷] [📊]             │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [🏷️ Add tags...                      ]  │
│                                         │
│ ☐ Anonymous posting                     │
└─────────────────────────────────────────┘
```

**Post Creation Header**
- Component: `<AppBar position="sticky" color="default" elevation={0}>`
- Close Button: `<IconButton>` with X icon
- Title: "New Discussion"
- Post Button: `<Button variant="contained" disabled={!isValid}>`

**Form Fields**
- Title Input: `<TextField variant="outlined" fullWidth placeholder="Title">`
  - Character Limit: 100 characters
  - Counter: Shows remaining characters
- Category Selector: `<Select variant="outlined" fullWidth>`
  - Options: Questions, Discussions, Resources, Events
- Rich Text Editor: Custom mobile-optimized editor
  - Toolbar: Bold, Italic, Link, Image, Poll buttons
  - Height: `200px` minimum
- Tags Input: `<Autocomplete multiple freeSolo>`
  - Chip display for selected tags
  - Suggestions based on popular tags

**Discussion Detail View - Mobile**
```
┌─────────────────────────────────────────┐
│ [←] Discussion                    [⋯]   │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 👤 Priya Sharma  • 2h ago  [⭐ 245] │ │
│ │                                     │ │
│ │ How to validate startup idea in     │ │
│ │ Indian market?                      │ │
│ │                                     │ │
│ │ I'm working on a fintech startup... │ │
│ │ [Read more]                         │ │
│ │                                     │ │
│ │ 👍 8  👎 0  💬 Reply  📤 Share      │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ 💬 12 Replies                           │
│                                         │
│ [Reply cards...]                        │
│                                         │
│ [💬 Add your reply...            ] [→] │
└─────────────────────────────────────────┘
```

**Original Post Card**
- Component: `<Card elevation={2} sx={{ mb: 3 }}>`
- Expanded Content: Full post text visible
- Read More: Expandable for long posts
- Action Row: Like, dislike, reply, share buttons
  - Touch Targets: `44px x 44px` minimum
  - Spacing: `16px` between actions

**Reply Cards**
- Component: `<Card elevation={0} sx={{ ml: 2, mb: 2, bgcolor: 'grey.50' }}>`
- Nested Layout: Indented from main discussion
- Compact Design: Smaller avatar and text
- Threading: Visual line connecting to parent**Qui
ck Reply Interface**
- Component: `<Box sx={{ position: 'sticky', bottom: 0, bgcolor: 'background.paper', p: 2, borderTop: 1 }}>`
- Input Field: `<TextField variant="outlined" fullWidth multiline maxRows={3}>`
- Send Button: `<IconButton color="primary" disabled={!hasContent}>`
- Attachment: Optional image/file upload button

#### Mobile-Specific User Profile and Reputation Displays

**User Profile Card - Mobile**
```
┌─────────────────────────────────────────┐
│ ┌─────────────────────────────────────┐ │
│ │     [👤]  Rajesh Kumar              │ │
│ │                                     │ │
│ │ ⭐ 1,245 reputation                  │ │
│ │ 🏆 Top Contributor                   │ │
│ │ 📍 Mumbai, Maharashtra               │ │
│ │ 🏢 Fintech Startup Founder          │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 📊 Activity Stats                   │ │
│ │                                     │ │
│ │ 💬 45 Posts    👍 234 Likes Given   │ │
│ │ ✅ 12 Best Answers  🔥 7 Day Streak │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 🏅 Achievements                     │ │
│ │                                     │ │
│ │ [🥇] [🎯] [💡] [🤝] [📈]          │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Profile Header Card**
- Component: `<Card elevation={2} sx={{ mb: 2, textAlign: 'center', p: 3 }}>`
- Avatar: `<Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}>`
- Name: `<Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>`
- Reputation: Large number with star icon
- Badge: User level or special status
- Location: City and state with map pin icon
- Role: Professional title or company

**Activity Statistics Card**
- Component: `<Card elevation={1} sx={{ mb: 2, p: 2 }}>`
- Grid Layout: 2x2 grid of statistics
- Stat Item: Icon + number + label
- Icons: Relevant emojis or Material-UI icons
- Numbers: Prominent display with primary color

**Achievement Badges**
- Component: `<Card elevation={1} sx={{ p: 2 }}>`
- Badge Grid: Horizontal scrollable row
- Badge Size: `48px x 48px`
- Badge Design: Circular with emoji/icon
- Tooltip: Achievement description on long press

**Reputation System - Mobile Display**
```
┌─────────────────────────────────────────┐
│ Reputation Breakdown                    │
│                                         │
│ ⭐ 1,245 Total Points                    │
│                                         │
│ +15  Best answer selected               │
│ +10  Answer upvoted                     │
│ +5   Question upvoted                   │
│ +2   Daily login streak                 │
│ -1   Answer downvoted                   │
│                                         │
│ 🎯 Next milestone: 1,500 points         │
│ ████████░░ 83% progress                 │
└─────────────────────────────────────────┘
```

**Reputation Details**
- Component: `<Card elevation={1} sx={{ p: 2 }}>`
- Total Points: Large display with star icon
- Point History: Recent point changes with reasons
- Progress Bar: Towards next milestone
- Milestone Rewards: Preview of upcoming benefits

#### Mobile Voting and Interaction Patterns

**Vote Buttons - Mobile Optimized**
```
┌─────────────────────────────────────────┐
│ ┌───┐                                   │
│ │ ▲ │ 8  👍 Like  💬 Reply  📤 Share    │
│ │ ▼ │                                   │
│ └───┘                                   │
└─────────────────────────────────────────┘
```

**Voting Interface Specifications**
- Vote Container: `<Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>`
- Vote Buttons: Vertical stack of up/down arrows
  - Size: `40px x 40px` each (touch-friendly)
  - Active Color: `#1565C0` (upvote), `#D32F2F` (downvote)
  - Inactive Color: `rgba(0, 0, 0, 0.3)`
- Vote Count: Between buttons, centered
  - Font Weight: 600
  - Color: Changes based on user vote

**Interaction Button Row**
- Component: `<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>`
- Button Specifications:
  - Height: `36px`
  - Padding: `8px 12px`
  - Border Radius: `18px`
  - Font Size: `14px`

**Like Button**
- Icon: 👍 thumbs up
- Text: "Like" + count
- Active State: `#1565C0` background with white text
- Inactive State: Outlined with primary color

**Reply Button**
- Icon: 💬 speech bubble
- Text: "Reply"
- Action: Opens reply composer
- Color: `#FF9933` (secondary color)

**Share Button**
- Icon: 📤 share arrow
- Text: "Share"
- Action: Opens native share sheet
- Options: Copy link, WhatsApp, Twitter, LinkedIn

**Long Press Context Menu**
```
┌─────────────────────────────────────────┐
│ ┌─────────────────────────────────────┐ │
│ │ 📌 Pin to top                       │ │
│ │ 🔖 Save for later                   │ │
│ │ 🚫 Hide post                        │ │
│ │ ⚠️ Report content                   │ │
│ │ 👤 View profile                     │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Context Menu Specifications**
- Component: `<Menu anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>`
- Trigger: Long press on post card (500ms)
- Haptic Feedback: Medium impact vibration
- Menu Items: Icon + text with proper spacing
- Actions: Pin, save, hide, report, view profile

**Swipe Actions on Posts**
- Left Swipe: Reveal quick actions (like, save, share)
- Right Swipe: Quick reply or upvote
- Swipe Threshold: 30% of card width
- Visual Feedback: Background color change during swipe
- Animation: Smooth 200ms transition

**Mobile Forum Navigation**
- Tab Bar: Categories at top (sticky)
- Pull to Refresh: Standard iOS/Android pattern
- Infinite Scroll: Load more posts automatically
- Back to Top: Floating button after scrolling
- Search: Expandable search bar in header

**Notification Indicators**
- New Posts: Blue dot on category tabs
- Mentions: Red badge with count
- Replies: Orange notification in profile
- Achievements: Gold star animation

This mobile community forum design ensures optimal touch interactions, clear user profiles with reputation systems, and intuitive voting patterns that work seamlessly on mobile devices while encouraging community engagement.
## Co
mmunity Forum and Social Features

### Forum Posting and Interaction Flow

#### Question Posting Interface with Rich Text Editor

**Main Question Posting Form**
```
Component Structure:
┌─────────────────────────────────────────────────────────────────┐
│ Post a Question                                    [Cancel] [Post] │
├─────────────────────────────────────────────────────────────────┤
│ Title*                                                          │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ What's your question? (e.g., "How to register a startup?") │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Category*                                                       │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Select Category                                         ▼   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Tags (Optional)                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ startup, funding, legal                              [+ Add] │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Question Details*                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [B] [I] [U] [Link] [Code] [List] [Quote] [Image]           │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │                                                             │ │
│ │ Describe your question in detail...                         │ │
│ │                                                             │ │
│ │                                                             │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ☐ Notify me of new answers via email                           │
│ ☐ This is an urgent question                                   │
│                                                                 │
│ Preview your question before posting                            │
└─────────────────────────────────────────────────────────────────┘
```

**Component Specifications:**
- Container: `<Paper elevation={2} sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>`
- Title Field: `<TextField variant="outlined" fullWidth required label="Title" placeholder="What's your question? (e.g., 'How to register a startup?')" sx={{ mb: 3 }}>`
- Category Select: `<Select variant="outlined" fullWidth required displayEmpty sx={{ mb: 3 }}>`
- Tags Input: `<Autocomplete multiple freeSolo options={popularTags} renderTags={(value, getTagProps) => value.map((option, index) => <Chip variant="outlined" label={option} {...getTagProps({ index })} />)}`
- Rich Text Editor: Custom component with Material-UI styling
- Checkboxes: `<FormControlLabel control={<Checkbox color="primary" />} label="..." />`
- Action Buttons: `<Button variant="outlined" color="secondary">Cancel</Button>` and `<Button variant="contained" color="primary">Post Question</Button>`

**Rich Text Editor Toolbar**
```
Toolbar Layout:
┌─────────────────────────────────────────────────────────────────┐
│ [B] [I] [U] │ [🔗] │ [</>] │ [•] [1.] │ ["] │ [📷] │ [👁] [?] │
└─────────────────────────────────────────────────────────────────┘
```

**Toolbar Component Specifications:**
- Container: `<Box sx={{ borderBottom: 1, borderColor: 'divider', p: 1, display: 'flex', gap: 1, alignItems: 'center' }}>`
- Format Buttons: `<IconButton size="small" color={active ? 'primary' : 'default'}>`
- Separators: `<Divider orientation="vertical" flexItem />`
- Icons: Material Icons (FormatBold, FormatItalic, FormatUnderlined, Link, Code, FormatListBulleted, FormatListNumbered, FormatQuote, Image, Visibility, Help)

**Category Dropdown Options**
```
Categories:
├── 🏢 Business Registration & Legal
├── 💰 Funding & Investment
├── 📊 Business Planning & Strategy
├── 🏛️ Government Schemes & Compliance
├── 💼 Operations & Management
├── 🎯 Marketing & Sales
├── 💻 Technology & Digital
├── 🤝 Networking & Partnerships
├── 📚 Learning & Development
└── ❓ General Questions
```

**Tag Suggestions (Auto-complete)**
```
Popular Tags:
startup, funding, legal, registration, GST, compliance, investment, 
business-plan, marketing, technology, government-schemes, MSME, 
incorporation, trademark, patent, angel-investor, venture-capital,
digital-marketing, e-commerce, fintech, SaaS, B2B, B2C
```

#### Answer and Comment Threading Visual Hierarchy

**Question Display with Answers**
```
Question Layout:
┌─────────────────────────────────────────────────────────────────┐
│ 🏢 Business Registration & Legal                    📅 2 days ago │
├─────────────────────────────────────────────────────────────────┤
│ How to register a private limited company in India?             │
│                                                                 │
│ I'm planning to start a tech startup and need to register...    │
│ [Read more]                                                     │
│                                                                 │
│ 📊 startup  legal  registration  private-limited               │
│                                                                 │
│ 👤 Priya Sharma • 🏆 Expert (2.5k points) • 📍 Mumbai          │
│                                                                 │
│ ▲ 15  ▼ 0  💬 3 answers  🔖 Save  🔗 Share  🚩 Report         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 💬 3 Answers                                      [Sort: Best ▼] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ✅ Best Answer                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Here's a step-by-step process to register a private...     │ │
│ │                                                             │ │
│ │ 1. Choose a unique company name                             │ │
│ │ 2. Obtain Digital Signature Certificate (DSC)              │ │
│ │ 3. Get Director Identification Number (DIN)                │ │
│ │ [Read more]                                                 │ │
│ │                                                             │ │
│ │ 👤 Rajesh Kumar • 🏆 Legal Expert (5.2k points)            │ │
│ │ 📅 1 day ago                                                │ │
│ │                                                             │ │
│ │ ▲ 12  ▼ 0  💬 2 comments  🔗 Share  🚩 Report             │ │
│ │                                                             │ │
│ │   ┌─────────────────────────────────────────────────────┐   │ │
│ │   │ 💬 Comments                                         │   │ │
│ │   ├─────────────────────────────────────────────────────┤   │ │
│ │   │ Very helpful! What about the minimum capital?      │   │ │
│ │   │ 👤 Amit Singh • 📅 1 day ago                        │   │ │
│ │   │ ▲ 3  ▼ 0  💬 Reply                                  │   │ │
│ │   │                                                     │   │ │
│ │   │   └─ Minimum capital is ₹1 lakh for Pvt Ltd...     │   │ │
│ │   │      👤 Rajesh Kumar • 📅 1 day ago                 │   │ │
│ │   │      ▲ 2  ▼ 0  💬 Reply                             │   │ │
│ │   └─────────────────────────────────────────────────────┘   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ You can also consider LLP (Limited Liability Partnership)  │ │
│ │ if you want more flexibility...                             │ │
│ │                                                             │ │
│ │ 👤 Sneha Patel • 🏆 Business Advisor (1.8k points)         │ │
│ │ 📅 2 days ago                                               │ │
│ │                                                             │ │
│ │ ▲ 5  ▼ 1  💬 0 comments  🔗 Share  🚩 Report              │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ [+ Add Your Answer]                                             │
└─────────────────────────────────────────────────────────────────┘
```

**Component Specifications for Question Display:**
- Question Container: `<Card elevation={1} sx={{ mb: 2 }}>`
- Question Header: `<CardHeader avatar={<Chip label="🏢 Business Registration" size="small" />} action={<Typography variant="caption" color="text.secondary">2 days ago</Typography>} />`
- Question Title: `<Typography variant="h5" component="h1" gutterBottom>`
- Question Content: `<CardContent>`
- Tags: `<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}> {tags.map(tag => <Chip label={tag} size="small" variant="outlined" />)}`
- User Info: `<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>`
- Action Bar: `<CardActions sx={{ justifyContent: 'space-between' }}>`

**Answer Component Specifications:**
- Answer Container: `<Card variant="outlined" sx={{ ml: 2, mb: 2 }}>`
- Best Answer Badge: `<Chip label="✅ Best Answer" color="success" size="small" sx={{ mb: 1 }} />`
- Answer Content: `<CardContent sx={{ pb: 1 }}>`
- Answer Actions: `<CardActions sx={{ pt: 0 }}>`
- Comment Thread: `<Collapse in={showComments}><Box sx={{ ml: 3, mt: 1, borderLeft: 2, borderColor: 'divider', pl: 2 }}>`

#### Voting and Reputation System Visual Indicators

**Voting Component**
```
Vote Layout:
┌─────┐
│  ▲  │ ← Upvote button
│ 15  │ ← Vote count
│  ▼  │ ← Downvote button
└─────┘
```

**Voting Component Specifications:**
- Container: `<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>`
- Upvote Button: `<IconButton size="small" color={userVote === 'up' ? 'primary' : 'default'} onClick={handleUpvote}><KeyboardArrowUpIcon /></IconButton>`
- Vote Count: `<Typography variant="body2" fontWeight="bold" color={voteCount > 0 ? 'success.main' : voteCount < 0 ? 'error.main' : 'text.secondary'}>{voteCount}</Typography>`
- Downvote Button: `<IconButton size="small" color={userVote === 'down' ? 'error' : 'default'} onClick={handleDownvote}><KeyboardArrowDownIcon /></IconButton>`

**Reputation Badge System**
```
Reputation Levels:
┌─────────────────────────────────────────────────────────────────┐
│ 🆕 Newcomer (0-99 points)     - Light grey badge               │
│ 🌱 Contributor (100-499)      - Green badge                    │
│ 🏆 Expert (500-1999)          - Blue badge                     │
│ 💎 Master (2000-4999)         - Purple badge                   │
│ 👑 Legend (5000+)             - Gold badge                     │
└─────────────────────────────────────────────────────────────────┘
```

**Reputation Component Specifications:**
- Badge Container: `<Chip icon={<ReputationIcon />} label={`${reputationLevel} (${points} points)`} size="small" color={reputationColor} variant="outlined" />`
- Reputation Colors:
  - Newcomer: `default`
  - Contributor: `success`
  - Expert: `primary`
  - Master: `secondary`
  - Legend: Custom gold color `#FFD700`

#### User Profile and Badge Display Components

**User Profile Card in Forum**
```
Profile Card Layout:
┌─────────────────────────────────────────────────────────────────┐
│ 👤 Priya Sharma                                    [Follow] [DM] │
├─────────────────────────────────────────────────────────────────┤
│ 🏆 Expert • 2,547 points • 📍 Mumbai                           │
│                                                                 │
│ 🏢 Founder at TechStart Solutions                              │
│ 🎓 MBA, IIM Bangalore                                          │
│                                                                 │
│ Badges Earned:                                                  │
│ 🥇 Top Contributor  🎯 Problem Solver  📚 Knowledge Sharer     │
│ 🤝 Community Helper  ⚡ Quick Responder                        │
│                                                                 │
│ Stats:                                                          │
│ 📝 42 Questions  💬 156 Answers  ✅ 89% Acceptance Rate        │
│ 👍 234 Helpful votes  🔥 15 day streak                         │
│                                                                 │
│ Expertise Areas:                                                │
│ 📊 Business Planning  💰 Funding  🏛️ Legal Compliance         │
└─────────────────────────────────────────────────────────────────┘
```

**User Profile Component Specifications:**
- Profile Container: `<Card elevation={2} sx={{ maxWidth: 400, p: 2 }}>`
- Profile Header: `<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>`
- User Avatar: `<Avatar sx={{ width: 56, height: 56, mr: 2 }}>{user.name.charAt(0)}</Avatar>`
- User Name: `<Typography variant="h6" component="h2">{user.name}</Typography>`
- Action Buttons: `<Box sx={{ display: 'flex', gap: 1 }}><Button size="small" variant="outlined">Follow</Button><Button size="small" variant="outlined">DM</Button></Box>`
- Reputation Display: `<Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>`
- Badges Section: `<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>`
- Stats Grid: `<Grid container spacing={1} sx={{ mb: 2 }}>`
- Expertise Tags: `<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>`

**Achievement Badges**
```
Badge Types:
┌─────────────────────────────────────────────────────────────────┐
│ Activity Badges:                                                │
│ 🥇 Top Contributor    - 100+ helpful answers                   │
│ 🎯 Problem Solver     - 50+ accepted answers                   │
│ 📚 Knowledge Sharer   - 25+ detailed answers                   │
│ 🤝 Community Helper   - 100+ comments helping others           │
│ ⚡ Quick Responder    - Answers within 1 hour 20+ times        │
│ 🔥 Streak Master     - 30+ day activity streak                 │
│                                                                 │
│ Quality Badges:                                                 │
│ ⭐ Expert Verified    - Verified by community moderators       │
│ 💎 Quality Content   - 90%+ upvote ratio on answers            │
│ 🎖️ Mentor            - Helped 10+ newcomers get started       │
│ 🏅 Subject Expert    - Top contributor in specific category    │
│                                                                 │
│ Special Badges:                                                 │
│ 🎂 Anniversary       - 1+ years active member                  │
│ 🌟 Beta Tester       - Early platform adopter                 │
│ 🎪 Event Participant - Joined community events/webinars       │
└─────────────────────────────────────────────────────────────────┘
```

**Badge Component Specifications:**
- Badge Container: `<Tooltip title={badgeDescription}><Chip icon={<BadgeIcon />} label={badgeName} size="small" sx={{ bgcolor: badgeColor, color: 'white' }} /></Tooltip>`
- Badge Colors:
  - Activity: `#4CAF50` (Green)
  - Quality: `#2196F3` (Blue)
  - Special: `#FF9800` (Orange)
  - Expert: `#9C27B0` (Purple)

**Mini User Display (in answers/comments)**
```
Mini Profile Layout:
┌─────────────────────────────────────────────────────────────────┐
│ 👤 Rajesh Kumar • 🏆 Legal Expert (5.2k points) • 📅 1 day ago  │
└─────────────────────────────────────────────────────────────────┘
```

**Mini Profile Component Specifications:**
- Container: `<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>`
- Avatar: `<Avatar sx={{ width: 24, height: 24 }}>{user.name.charAt(0)}</Avatar>`
- User Info: `<Typography variant="body2" color="text.secondary">{user.name} • {reputationBadge} • {timeAgo}</Typography>`

#### Forum Navigation and Filtering

**Forum Main Navigation**
```
Forum Header:
┌─────────────────────────────────────────────────────────────────┐
│ 💬 Community Forum                              [Ask Question]   │
├─────────────────────────────────────────────────────────────────┤
│ 🔍 Search questions...                          [🔍] [Filter ▼]  │
├─────────────────────────────────────────────────────────────────┤
│ [All] [Unanswered] [My Questions] [Following] [Trending]        │
└─────────────────────────────────────────────────────────────────┘
```

**Forum Navigation Component Specifications:**
- Header Container: `<Box sx={{ mb: 3 }}>`
- Title Section: `<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>`
- Forum Title: `<Typography variant="h4" component="h1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>💬 Community Forum</Typography>`
- Ask Question Button: `<Button variant="contained" color="primary" startIcon={<AddIcon />}>Ask Question</Button>`
- Search Bar: `<Box sx={{ display: 'flex', gap: 2, mb: 2 }}><TextField fullWidth placeholder="Search questions..." InputProps={{ startAdornment: <SearchIcon /> }} /><Button variant="outlined">Filter</Button></Box>`
- Tab Navigation: `<Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">`

**Filter Sidebar**
```
Filter Panel:
┌─────────────────────────────────────────────────────────────────┐
│ 🔧 Filters                                              [Clear] │
├─────────────────────────────────────────────────────────────────┤
│ Category                                                        │
│ ☐ Business Registration & Legal                                 │
│ ☐ Funding & Investment                                          │
│ ☐ Business Planning & Strategy                                  │
│ ☐ Government Schemes & Compliance                               │
│ [Show more...]                                                  │
│                                                                 │
│ Status                                                          │
│ ☐ Answered                                                      │
│ ☐ Unanswered                                                    │
│ ☐ Has Best Answer                                               │
│                                                                 │
│ Time Period                                                     │
│ ○ Today                                                         │
│ ○ This Week                                                     │
│ ○ This Month                                                    │
│ ○ All Time                                                      │
│                                                                 │
│ Sort By                                                         │
│ ○ Most Recent                                                   │
│ ○ Most Votes                                                    │
│ ○ Most Answers                                                  │
│ ○ Trending                                                      │
└─────────────────────────────────────────────────────────────────┘
```

**Filter Component Specifications:**
- Filter Container: `<Paper elevation={1} sx={{ p: 2, width: 280 }}>`
- Filter Header: `<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>`
- Filter Sections: `<Box sx={{ mb: 3 }}>`
- Section Title: `<Typography variant="subtitle2" fontWeight="bold" gutterBottom>`
- Checkbox Group: `<FormGroup>`
- Radio Group: `<RadioGroup>`
- Clear Button: `<Button size="small" color="secondary">Clear All</Button>`
### Content Moderation and Admin Interface

#### Content Moderation Tools and Interfaces

**Moderation Dashboard Overview**
```
Moderation Dashboard:
┌─────────────────────────────────────────────────────────────────┐
│ 🛡️ Moderation Dashboard                        👤 Admin Panel   │
├─────────────────────────────────────────────────────────────────┤
│ Quick Stats                                                     │
│ ┌─────────────┬─────────────┬─────────────┬─────────────────────┐ │
│ │ 🚩 Reports  │ ⏳ Pending  │ ✅ Resolved │ 👥 Active Users     │ │
│ │     23      │     8       │     156     │      1,247          │ │
│ │   +5 today  │   -2 today  │  +12 today  │    +23 today        │ │
│ └─────────────┴─────────────┴─────────────┴─────────────────────┘ │
│                                                                 │
│ Recent Activity                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🚩 New Report: Spam content in "Funding Questions"         │ │
│ │ 📅 2 minutes ago • 👤 Reported by: Amit Singh              │ │
│ │ [Review] [Dismiss] [View Content]                           │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ ⚠️ User flagged for multiple violations                     │ │
│ │ 📅 15 minutes ago • 👤 User: suspicious_user123            │ │
│ │ [Review Profile] [Suspend] [Warning]                        │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ ✅ Resolved: Inappropriate language in comment             │ │
│ │ 📅 1 hour ago • 👤 Moderator: Sarah Admin                  │ │
│ │ [View Details]                                              │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Quick Actions                                                   │
│ [📝 Review Queue] [👥 User Management] [📊 Reports] [⚙️ Settings] │
└─────────────────────────────────────────────────────────────────┘
```

**Moderation Dashboard Component Specifications:**
- Dashboard Container: `<Container maxWidth="xl" sx={{ py: 3 }}>`
- Stats Cards: `<Grid container spacing={3} sx={{ mb: 4 }}><Grid item xs={12} sm={6} md={3}><Card elevation={2}><CardContent sx={{ textAlign: 'center' }}>`
- Stat Number: `<Typography variant="h4" color="primary" fontWeight="bold">{statValue}</Typography>`
- Stat Label: `<Typography variant="body2" color="text.secondary">{statLabel}</Typography>`
- Stat Change: `<Typography variant="caption" color={changeColor} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>`
- Activity Feed: `<Card elevation={1} sx={{ mb: 3 }}><CardHeader title="Recent Activity" /><CardContent>`
- Activity Item: `<Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>`
- Quick Actions: `<Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>`

**Content Review Interface**
```
Content Review Panel:
┌─────────────────────────────────────────────────────────────────┐
│ 📝 Content Review Queue                    [Filter ▼] [Sort ▼]  │
├─────────────────────────────────────────────────────────────────┤
│ 🚩 High Priority                                                │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Reported Content: Question about illegal activities        │ │
│ │ 👤 Posted by: user123 • 📅 2 hours ago                     │ │
│ │ 🚩 Reported by: 3 users • Reason: Inappropriate content    │ │
│ │                                                             │ │
│ │ "How can I avoid paying taxes for my startup..."           │ │
│ │ [Show full content]                                         │ │
│ │                                                             │ │
│ │ Moderator Actions:                                          │ │
│ │ [✅ Approve] [❌ Remove] [⚠️ Edit] [🚫 Ban User] [💬 Warn]  │ │
│ │                                                             │ │
│ │ Add Moderator Note:                                         │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ Reason for action...                                    │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ⚠️ Medium Priority                                              │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Reported Content: Spam link in answer                      │ │
│ │ 👤 Posted by: spammer456 • 📅 4 hours ago                  │ │
│ │ 🚩 Reported by: 1 user • Reason: Spam                      │ │
│ │                                                             │ │
│ │ "Check out this amazing tool: [suspicious-link.com]"       │ │
│ │ [Show full content]                                         │ │
│ │                                                             │ │
│ │ [✅ Approve] [❌ Remove] [⚠️ Edit] [🚫 Ban User] [💬 Warn]  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ [Load More Items]                                               │
└─────────────────────────────────────────────────────────────────┘
```

**Content Review Component Specifications:**
- Review Container: `<Box sx={{ maxWidth: 1000, mx: 'auto', p: 2 }}>`
- Review Header: `<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>`
- Priority Section: `<Box sx={{ mb: 4 }}>`
- Priority Label: `<Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>`
- Content Card: `<Card elevation={2} sx={{ mb: 2, border: priorityColor }}>`
- Content Header: `<CardHeader title={contentTitle} subheader={contentMeta} />`
- Content Preview: `<CardContent><Typography variant="body2" sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 1, fontFamily: 'monospace' }}>`
- Action Buttons: `<CardActions sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>`
- Moderator Note: `<TextField multiline rows={2} fullWidth placeholder="Reason for action..." sx={{ mt: 2 }} />`

**User Reporting and Flagging System**
```
Report Content Modal:
┌─────────────────────────────────────────────────────────────────┐
│ 🚩 Report Content                                      [✕ Close] │
├─────────────────────────────────────────────────────────────────┤
│ Why are you reporting this content?                             │
│                                                                 │
│ ○ Spam or promotional content                                   │
│ ○ Inappropriate or offensive language                           │
│ ○ Harassment or bullying                                        │
│ ○ Misinformation or false claims                                │
│ ○ Copyright violation                                            │
│ ○ Off-topic or irrelevant                                       │
│ ○ Duplicate content                                             │
│ ○ Other (please specify)                                        │
│                                                                 │
│ Additional Details (Optional):                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Please provide more context about why you're reporting     │ │
│ │ this content...                                             │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ☐ I want to remain anonymous                                    │
│ ☐ Block this user from my feed                                 │
│                                                                 │
│                                    [Cancel] [Submit Report]     │
└─────────────────────────────────────────────────────────────────┘
```

**Report Modal Component Specifications:**
- Modal Container: `<Dialog open={reportModalOpen} onClose={handleClose} maxWidth="sm" fullWidth>`
- Modal Header: `<DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>`
- Report Reasons: `<RadioGroup value={reportReason} onChange={handleReasonChange}>`
- Reason Option: `<FormControlLabel value={reason} control={<Radio />} label={reasonLabel} />`
- Details Field: `<TextField multiline rows={4} fullWidth placeholder="Please provide more context..." sx={{ mt: 2 }} />`
- Options: `<FormGroup sx={{ mt: 2 }}>`
- Action Buttons: `<DialogActions><Button onClick={handleClose}>Cancel</Button><Button variant="contained" color="error" onClick={handleSubmit}>Submit Report</Button></DialogActions>`

#### Admin Dashboard for Community Management

**Admin Dashboard Overview**
```
Admin Dashboard:
┌─────────────────────────────────────────────────────────────────┐
│ 👑 Admin Dashboard                              🔔 Notifications │
├─────────────────────────────────────────────────────────────────┤
│ Community Health Metrics                                        │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 📊 Activity Overview                                        │ │
│ │ ┌─────────────┬─────────────┬─────────────┬─────────────────┐ │ │
│ │ │ Daily Users │ New Posts   │ Engagement  │ Satisfaction    │ │ │
│ │ │    1,247    │     89      │    78.5%    │     4.2/5       │ │ │
│ │ │   ↗️ +12%   │   ↗️ +23%   │   ↗️ +5%    │    ↗️ +0.3      │ │ │
│ │ └─────────────┴─────────────┴─────────────┴─────────────────┘ │ │
│ │                                                             │ │ │
│ │ [📈 View Detailed Analytics]                                │ │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Quick Management Actions                                        │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 👥 User Management                                          │ │
│ │ • 5 users pending verification                              │ │
│ │ • 2 users flagged for review                               │ │
│ │ • 12 new expert applications                               │ │
│ │ [Manage Users]                                              │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ 📝 Content Management                                       │ │
│ │ • 8 posts in moderation queue                              │ │
│ │ • 3 featured posts to review                               │ │
│ │ • 15 reported comments                                      │ │
│ │ [Review Content]                                            │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ 🏆 Community Programs                                       │ │
│ │ • Expert of the Month selection                            │ │
│ │ • Weekly challenge setup                                    │ │
│ │ • Badge criteria updates                                    │ │
│ │ [Manage Programs]                                           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ System Alerts                                                   │
│ ⚠️ High spam activity detected in "Funding" category            │
│ 🔧 Scheduled maintenance: Sunday 2 AM - 4 AM                    │
│ 📊 Weekly community report ready for review                     │
└─────────────────────────────────────────────────────────────────┘
```

**Admin Dashboard Component Specifications:**
- Dashboard Container: `<Container maxWidth="xl" sx={{ py: 3 }}>`
- Metrics Section: `<Card elevation={2} sx={{ mb: 4 }}>`
- Metrics Grid: `<Grid container spacing={2} sx={{ p: 3 }}>`
- Metric Card: `<Box sx={{ textAlign: 'center', p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>`
- Management Sections: `<Grid container spacing={3} sx={{ mb: 4 }}>`
- Management Card: `<Card elevation={1}><CardHeader title={sectionTitle} /><CardContent>`
- Alert Section: `<Alert severity={alertType} sx={{ mb: 2 }}>`

**User Management Interface**
```
User Management Panel:
┌─────────────────────────────────────────────────────────────────┐
│ 👥 User Management                     [🔍 Search] [Filter ▼]   │
├─────────────────────────────────────────────────────────────────┤
│ [All Users] [Active] [Suspended] [Pending] [Experts] [Admins]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ ⚠️ Flagged Users                                                │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 👤 suspicious_user123                              🚩 High   │ │
│ │ 📧 user@example.com • 📅 Joined: 2 days ago                │ │
│ │ 📊 2 posts, 0 helpful answers, 5 reports against           │ │
│ │ 🚩 Violations: Spam (3), Inappropriate content (2)         │ │
│ │                                                             │ │
│ │ Recent Activity:                                            │ │
│ │ • Posted promotional content in 3 different categories     │ │
│ │ • Multiple users reported spam behavior                     │ │
│ │                                                             │ │
│ │ Actions: [👁️ View Profile] [⚠️ Warn] [⏸️ Suspend] [🚫 Ban] │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ✅ Active Contributors                                          │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 👤 Priya Sharma                                    🏆 Expert │ │
│ │ 📧 priya@techstart.com • 📅 Joined: 6 months ago           │ │
│ │ 📊 42 posts, 156 answers, 89% acceptance rate              │ │
│ │ 🏅 Badges: Top Contributor, Problem Solver, Quick Responder │ │
│ │                                                             │ │
│ │ Actions: [👁️ View Profile] [🏆 Promote] [📧 Message]       │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ 🆕 Pending Expert Applications                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 👤 Rajesh Kumar                                             │ │
│ │ 📧 rajesh@legalcorp.com • 📅 Applied: 3 days ago           │ │
│ │ 🎓 Credentials: LLB, 10 years corporate law experience     │ │
│ │ 📊 Community stats: 25 answers, 95% upvote ratio           │ │
│ │                                                             │ │
│ │ Application: "I specialize in startup legal compliance..." │ │
│ │ [Read full application]                                     │ │
│ │                                                             │ │
│ │ Actions: [✅ Approve] [❌ Reject] [💬 Request Info]         │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**User Management Component Specifications:**
- Management Container: `<Box sx={{ maxWidth: 1200, mx: 'auto', p: 2 }}>`
- Header Section: `<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>`
- Tab Navigation: `<Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" sx={{ mb: 3 }}>`
- User Categories: `<Box sx={{ mb: 4 }}>`
- Category Title: `<Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>`
- User Card: `<Card elevation={1} sx={{ mb: 2, border: riskLevel === 'high' ? '2px solid #f44336' : '1px solid #e0e0e0' }}>`
- User Header: `<CardHeader avatar={<Avatar>{user.name.charAt(0)}</Avatar>} title={user.name} subheader={user.email} action={<Chip label={user.status} color={statusColor} size="small" />} />`
- User Stats: `<CardContent><Typography variant="body2" color="text.secondary">`
- User Actions: `<CardActions sx={{ justifyContent: 'flex-end', gap: 1 }}>`

**Community Analytics Dashboard**
```
Analytics Dashboard:
┌─────────────────────────────────────────────────────────────────┐
│ 📊 Community Analytics                          [Export] [📅 Range] │
├─────────────────────────────────────────────────────────────────┤
│ Engagement Metrics (Last 30 Days)                              │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │     📈 User Activity Trend                                  │ │
│ │ 1500 ┤                                                     │ │
│ │ 1200 ┤     ●●●                                             │ │
│ │  900 ┤   ●●   ●●●                                          │ │
│ │  600 ┤ ●●       ●●●                                        │ │
│ │  300 ┤●           ●●●                                      │ │
│ │    0 └─────────────────────────────────────────────────────┘ │ │
│ │      Week 1  Week 2  Week 3  Week 4                        │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Content Performance                                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Top Categories by Engagement:                               │ │
│ │ 1. 💰 Funding & Investment        - 2,456 interactions     │ │
│ │ 2. 🏢 Business Registration       - 1,892 interactions     │ │
│ │ 3. 🏛️ Government Schemes          - 1,634 interactions     │ │
│ │ 4. 📊 Business Planning           - 1,245 interactions     │ │
│ │ 5. 💻 Technology & Digital        - 987 interactions       │ │
│ │                                                             │ │
│ │ Question Resolution Rate: 78.5% (↗️ +5.2%)                 │ │
│ │ Average Response Time: 2.3 hours (↗️ -0.8 hours)           │ │
│ │ User Satisfaction Score: 4.2/5 (↗️ +0.3)                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ User Behavior Insights                                          │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🕐 Peak Activity Hours: 10 AM - 12 PM, 7 PM - 9 PM        │ │
│ │ 📱 Device Usage: 65% Mobile, 35% Desktop                   │ │
│ │ 🌍 Top Locations: Mumbai (23%), Delhi (18%), Bangalore (15%) │ │
│ │ 👥 New vs Returning: 30% New, 70% Returning                │ │
│ │ 🔄 Session Duration: Avg 12.5 minutes (↗️ +2.1 min)        │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Analytics Component Specifications:**
- Analytics Container: `<Container maxWidth="xl" sx={{ py: 3 }}>`
- Chart Section: `<Card elevation={2} sx={{ mb: 4, p: 3 }}>`
- Chart Title: `<Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>`
- Chart Container: `<Box sx={{ height: 300, width: '100%' }}>`
- Metrics Grid: `<Grid container spacing={3} sx={{ mb: 4 }}>`
- Metric Item: `<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>`
- Trend Indicator: `<Chip label={trendText} color={trendColor} size="small" icon={<TrendIcon />} />`

**Automated Moderation Rules Configuration**
```
Moderation Rules Setup:
┌─────────────────────────────────────────────────────────────────┐
│ ⚙️ Automated Moderation Rules                          [+ Add Rule] │
├─────────────────────────────────────────────────────────────────┤
│ Active Rules                                                    │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🚫 Spam Detection                                   [Edit] │ │
│ │ Trigger: Posts containing 3+ external links                │ │
│ │ Action: Auto-flag for review                               │ │
│ │ Status: ✅ Active • Triggered 23 times this week           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🤬 Profanity Filter                                 [Edit] │ │
│ │ Trigger: Content contains banned words                     │ │
│ │ Action: Auto-remove and warn user                          │ │
│ │ Status: ✅ Active • Triggered 7 times this week            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 📊 New User Restrictions                            [Edit] │ │
│ │ Trigger: User account less than 7 days old                │ │
│ │ Action: Limit to 3 posts per day, require approval        │ │
│ │ Status: ✅ Active • Applied to 45 users this week          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Draft Rules                                                     │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🔄 Duplicate Content Detection                      [Edit] │ │
│ │ Trigger: Content similarity > 80%                          │ │
│ │ Action: Flag as duplicate, suggest existing thread         │ │
│ │ Status: ⏸️ Draft • Testing in progress                     │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Rule Performance Analytics                                      │
│ • False Positive Rate: 12% (Target: <10%)                      │
│ • Manual Review Reduction: 67%                                 │
│ • User Satisfaction with Auto-moderation: 4.1/5               │
└─────────────────────────────────────────────────────────────────┘
```

**Moderation Rules Component Specifications:**
- Rules Container: `<Box sx={{ maxWidth: 1000, mx: 'auto', p: 2 }}>`
- Rules Header: `<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>`
- Rule Card: `<Card elevation={1} sx={{ mb: 2 }}>`
- Rule Header: `<CardHeader title={ruleName} action={<Button size="small" variant="outlined">Edit</Button>} />`
- Rule Details: `<CardContent><Typography variant="body2" color="text.secondary">`
- Rule Status: `<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>`
- Status Chip: `<Chip label={status} color={statusColor} size="small" />`
- Performance Metrics: `<Card elevation={2} sx={{ mt: 4, p: 3 }}>`
## Er
ror Handling and Edge Case Mockups

### Comprehensive Error State Mockups

#### Network Error and Timeout Displays

**Network Connection Error Page**
```
Component Structure:
<Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
  <Box sx={{ mb: 4 }}>
    <WifiOffIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
    <Typography variant="h4" component="h1" gutterBottom>
      Connection Problem
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      We're having trouble connecting to our servers. Please check your internet connection and try again.
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" color="primary" startIcon={<RefreshIcon />}>
        Try Again
      </Button>
      <Button variant="outlined" color="primary">
        Go Offline
      </Button>
    </Stack>
  </Box>
</Container>
```

**Visual Specifications:**
- Background: `#FAFAFA` (theme.palette.background.default)
- Container: Centered, max-width 600px
- Icon: WiFi off icon, 80px size, `#D32F2F` (theme.palette.error.main)
- Title: H4 typography, `#212121` (theme.palette.text.primary)
- Description: Body1 typography, `#757575` (theme.palette.text.secondary)
- Buttons: Primary contained and outlined variants
- Spacing: 64px top/bottom padding, 32px between elements

**Timeout Error Dialog**
```
Component Structure:
<Dialog open={true} maxWidth="sm" fullWidth>
  <DialogTitle>
    <Box display="flex" alignItems="center">
      <AccessTimeIcon sx={{ mr: 1, color: 'warning.main' }} />
      Request Timeout
    </Box>
  </DialogTitle>
  <DialogContent>
    <Typography variant="body1" sx={{ mb: 2 }}>
      The request is taking longer than expected. This might be due to:
    </Typography>
    <List dense>
      <ListItem>
        <ListItemIcon>
          <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
        </ListItemIcon>
        <ListItemText primary="Slow internet connection" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
        </ListItemIcon>
        <ListItemText primary="Server maintenance" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CircleIcon sx={{ fontSize: 8, color: 'text.secondary' }} />
        </ListItemIcon>
        <ListItemText primary="High server load" />
      </ListItem>
    </List>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCancel} color="primary">
      Cancel
    </Button>
    <Button onClick={handleRetry} variant="contained" color="primary">
      Retry
    </Button>
  </DialogActions>
</Dialog>
```

**Visual Specifications:**
- Dialog: Material-UI Dialog component, max-width 'sm'
- Icon: Clock icon, `#F57C00` (theme.palette.warning.main)
- Title: Dialog title with icon alignment
- Content: Body text with bulleted list
- Actions: Cancel (text) and Retry (contained) buttons
- List items: Dense list with small circle bullets

**API Error Snackbar**
```
Component Structure:
<Snackbar
  open={true}
  autoHideDuration={6000}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
>
  <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
    <AlertTitle>API Error</AlertTitle>
    Failed to load data. Please try again later.
    <Box sx={{ mt: 1 }}>
      <Button size="small" color="inherit" onClick={handleRetry}>
        RETRY
      </Button>
      <Button size="small" color="inherit" onClick={handleDismiss}>
        DISMISS
      </Button>
    </Box>
  </Alert>
</Snackbar>
```

**Visual Specifications:**
- Position: Bottom-left of screen
- Background: `#D32F2F` (theme.palette.error.main)
- Text Color: White
- Icon: Error icon (filled)
- Actions: Small text buttons in white
- Auto-hide: 6 seconds
- Width: Auto-sizing with max-width constraints

#### Form Validation Error Message Designs

**Inline Field Validation Errors**
```
Component Structure:
<TextField
  variant="outlined"
  fullWidth
  label="Email Address"
  error={true}
  helperText="Please enter a valid email address"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <ErrorIcon color="error" />
      </InputAdornment>
    ),
  }}
/>
```

**Visual Specifications:**
- Border: `2px solid #D32F2F` (theme.palette.error.main)
- Label Color: `#D32F2F` (theme.palette.error.main)
- Helper Text: Below field, `#D32F2F` color, 12px font size
- Error Icon: Positioned at field end, `#D32F2F` color
- Animation: Shake animation on error (200ms duration)

**Form-Level Error Summary**
```
Component Structure:
<Alert severity="error" sx={{ mb: 3 }}>
  <AlertTitle>Please fix the following errors:</AlertTitle>
  <List dense>
    <ListItem disablePadding>
      <ListItemText 
        primary="Email address is required"
        primaryTypographyProps={{ variant: 'body2' }}
      />
    </ListItem>
    <ListItem disablePadding>
      <ListItemText 
        primary="Password must be at least 8 characters"
        primaryTypographyProps={{ variant: 'body2' }}
      />
    </ListItem>
    <ListItem disablePadding>
      <ListItemText 
        primary="Please accept the terms and conditions"
        primaryTypographyProps={{ variant: 'body2' }}
      />
    </ListItem>
  </List>
</Alert>
```

**Visual Specifications:**
- Background: `rgba(211, 47, 47, 0.1)` (theme.palette.error.main with alpha)
- Border: `1px solid #D32F2F` (theme.palette.error.main)
- Icon: Error icon, `#D32F2F` color
- Title: Bold, `#D32F2F` color
- List: Dense list with body2 typography
- Margin: 24px bottom spacing

**Real-time Validation Feedback**
```
Component Structure:
<Box>
  <TextField
    variant="outlined"
    fullWidth
    label="Password"
    type="password"
    value={password}
    onChange={handlePasswordChange}
    error={passwordError}
    helperText={passwordHelperText}
  />
  <Box sx={{ mt: 1 }}>
    <Typography variant="caption" color="text.secondary">
      Password Requirements:
    </Typography>
    <List dense sx={{ pl: 2 }}>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 20 }}>
          {hasMinLength ? 
            <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} /> :
            <CloseIcon sx={{ fontSize: 16, color: 'error.main' }} />
          }
        </ListItemIcon>
        <ListItemText 
          primary="At least 8 characters"
          primaryTypographyProps={{ 
            variant: 'caption',
            color: hasMinLength ? 'success.main' : 'error.main'
          }}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 20 }}>
          {hasUppercase ? 
            <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} /> :
            <CloseIcon sx={{ fontSize: 16, color: 'error.main' }} />
          }
        </ListItemIcon>
        <ListItemText 
          primary="One uppercase letter"
          primaryTypographyProps={{ 
            variant: 'caption',
            color: hasUppercase ? 'success.main' : 'error.main'
          }}
        />
      </ListItem>
      <ListItem disablePadding>
        <ListItemIcon sx={{ minWidth: 20 }}>
          {hasNumber ? 
            <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} /> :
            <CloseIcon sx={{ fontSize: 16, color: 'error.main' }} />
          }
        </ListItemIcon>
        <ListItemText 
          primary="One number"
          primaryTypographyProps={{ 
            variant: 'caption',
            color: hasNumber ? 'success.main' : 'error.main'
          }}
        />
      </ListItem>
    </List>
  </Box>
</Box>
```

**Visual Specifications:**
- Requirements List: Below password field with 8px margin
- Check Icons: Green for met requirements, red for unmet
- Text Color: Dynamic based on requirement status
- Font Size: Caption (12px)
- Icons: 16px size, aligned with text
- Animation: Smooth color transitions (200ms)

#### 404 and General Error Page Layouts

**404 Not Found Page**
```
Component Structure:
<Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
  <Box sx={{ mb: 6 }}>
    <Typography 
      variant="h1" 
      component="h1" 
      sx={{ 
        fontSize: '8rem',
        fontWeight: 'bold',
        color: 'primary.main',
        mb: 2,
        lineHeight: 1
      }}
    >
      404
    </Typography>
    <Typography variant="h4" component="h2" gutterBottom>
      Page Not Found
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
      The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
    </Typography>
  </Box>
  
  <Box sx={{ mb: 4 }}>
    <SearchIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
    <Typography variant="h6" gutterBottom>
      What are you looking for?
    </Typography>
    <Box sx={{ maxWidth: 400, mx: 'auto', mb: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for pages, features, or help..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  </Box>

  <Box>
    <Typography variant="h6" gutterBottom>
      Popular Pages
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
      <Button variant="outlined" startIcon={<DashboardIcon />}>
        Dashboard
      </Button>
      <Button variant="outlined" startIcon={<SchoolIcon />}>
        Learning Paths
      </Button>
      <Button variant="outlined" startIcon={<AccountBalanceIcon />}>
        Government Schemes
      </Button>
      <Button variant="outlined" startIcon={<ForumIcon />}>
        Community
      </Button>
    </Stack>
    <Box sx={{ mt: 3 }}>
      <Button variant="contained" color="primary" size="large">
        Go to Homepage
      </Button>
    </Box>
  </Box>
</Container>
```

**Visual Specifications:**
- Layout: Centered container, max-width 'md'
- 404 Number: Large display (8rem), primary color, bold weight
- Title: H4 typography, primary text color
- Description: Body1, secondary text color, max-width 500px
- Search Section: Search icon (60px), input field with search button
- Popular Pages: Outlined buttons with icons in horizontal stack
- Homepage Button: Large contained primary button
- Spacing: 64px top/bottom padding, 48px between sections

**General Error Page (500)**
```
Component Structure:
<Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
  <Box sx={{ mb: 4 }}>
    <ErrorOutlineIcon sx={{ fontSize: 80, color: 'error.main', mb: 2 }} />
    <Typography variant="h4" component="h1" gutterBottom>
      Something went wrong
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      We're experiencing technical difficulties. Our team has been notified and is working to fix the issue.
    </Typography>
  </Box>

  <Alert severity="info" sx={{ mb: 4, textAlign: 'left' }}>
    <AlertTitle>What you can do:</AlertTitle>
    <List dense>
      <ListItem disablePadding>
        <ListItemText primary="• Refresh the page" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="• Try again in a few minutes" />
      </ListItem>
      <ListItem disablePadding>
        <ListItemText primary="• Contact support if the problem persists" />
      </ListItem>
    </List>
  </Alert>

  <Stack direction="row" spacing={2} justifyContent="center">
    <Button variant="contained" color="primary" startIcon={<RefreshIcon />}>
      Refresh Page
    </Button>
    <Button variant="outlined" color="primary" startIcon={<HomeIcon />}>
      Go Home
    </Button>
  </Stack>

  <Box sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: 'divider' }}>
    <Typography variant="caption" color="text.secondary">
      Error ID: {errorId} • Time: {timestamp}
    </Typography>
  </Box>
</Container>
```

**Visual Specifications:**
- Error Icon: 80px size, error color
- Title: H4 typography, primary text
- Description: Body1, secondary text
- Info Alert: Blue info alert with suggestions list
- Action Buttons: Primary contained and outlined variants
- Error Details: Caption text with error ID and timestamp
- Divider: Top border above error details

**Access Denied Page (403)**
```
Component Structure:
<Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
  <Box sx={{ mb: 4 }}>
    <LockIcon sx={{ fontSize: 80, color: 'warning.main', mb: 2 }} />
    <Typography variant="h4" component="h1" gutterBottom>
      Access Denied
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      You don't have permission to access this page. Please contact your administrator or upgrade your account.
    </Typography>
  </Box>

  <Card sx={{ p: 3, mb: 4 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Need access to premium features?
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Upgrade to unlock advanced tools and resources for your startup journey.
      </Typography>
      <Button variant="contained" color="secondary" fullWidth>
        Upgrade to Premium
      </Button>
    </CardContent>
  </Card>

  <Stack direction="row" spacing={2} justifyContent="center">
    <Button variant="outlined" color="primary">
      Go Back
    </Button>
    <Button variant="outlined" color="primary">
      Contact Support
    </Button>
  </Stack>
</Container>
```

**Visual Specifications:**
- Lock Icon: 80px size, warning color
- Title: H4 typography
- Upgrade Card: Elevated card with padding
- Upgrade Button: Secondary color (saffron), full width
- Action Buttons: Outlined variants in horizontal stack

#### Retry and Recovery Action Interfaces

**Retry Button with Loading State**
```
Component Structure:
<Button
  variant="contained"
  color="primary"
  disabled={isRetrying}
  onClick={handleRetry}
  startIcon={isRetrying ? <CircularProgress size={20} /> : <RefreshIcon />}
  sx={{ minWidth: 120 }}
>
  {isRetrying ? 'Retrying...' : 'Try Again'}
</Button>
```

**Visual Specifications:**
- Button: Contained primary variant
- Loading Icon: 20px circular progress indicator
- Disabled State: When retrying is in progress
- Min Width: 120px for consistent sizing
- Icon: Refresh icon (default) or loading spinner (active)

**Progressive Retry Interface**
```
Component Structure:
<Card sx={{ p: 3, textAlign: 'center' }}>
  <CardContent>
    <Typography variant="h6" gutterBottom>
      Connection Failed
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
      Attempt {retryCount} of 3
    </Typography>
    
    <LinearProgress 
      variant="determinate" 
      value={(retryCount / 3) * 100} 
      sx={{ mb: 3, height: 8, borderRadius: 4 }}
    />
    
    <Stack spacing={2}>
      <Button
        variant="contained"
        color="primary"
        disabled={isRetrying}
        onClick={handleRetry}
        startIcon={isRetrying ? <CircularProgress size={20} /> : <RefreshIcon />}
      >
        {isRetrying ? 'Retrying...' : 'Retry Now'}
      </Button>
      
      <Button variant="text" color="primary" onClick={handleCancel}>
        Cancel
      </Button>
      
      {retryCount >= 3 && (
        <Button variant="outlined" color="secondary" onClick={handleSupport}>
          Contact Support
        </Button>
      )}
    </Stack>
  </CardContent>
</Card>
```

**Visual Specifications:**
- Progress Bar: Linear progress showing retry attempts
- Retry Counter: Shows current attempt number
- Conditional Support: Appears after max retries
- Button States: Loading state during retry attempts
- Card Layout: Elevated card with centered content

**Auto-Retry with Countdown**
```
Component Structure:
<Alert severity="warning" sx={{ mb: 2 }}>
  <AlertTitle>Connection Lost</AlertTitle>
  <Typography variant="body2" sx={{ mb: 2 }}>
    Automatically retrying in {countdown} seconds...
  </Typography>
  <LinearProgress 
    variant="determinate" 
    value={((10 - countdown) / 10) * 100}
    sx={{ mb: 2 }}
  />
  <Stack direction="row" spacing={1}>
    <Button size="small" variant="outlined" onClick={handleRetryNow}>
      Retry Now
    </Button>
    <Button size="small" variant="text" onClick={handleCancel}>
      Cancel
    </Button>
  </Stack>
</Alert>
```

**Visual Specifications:**
- Alert: Warning severity with yellow background
- Countdown: Dynamic text showing seconds remaining
- Progress Bar: Visual countdown indicator
- Action Buttons: Small size, inline layout
- Auto-dismiss: Automatically retries when countdown reaches 0

**Offline Recovery Interface**
```
Component Structure:
<Snackbar
  open={isOffline}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  sx={{ top: 24 }}
>
  <Alert 
    severity="warning" 
    variant="filled"
    action={
      <Button color="inherit" size="small" onClick={handleRefresh}>
        REFRESH
      </Button>
    }
  >
    <AlertTitle>You're offline</AlertTitle>
    Some features may not work properly. Check your connection.
  </Alert>
</Snackbar>
```

**Visual Specifications:**
- Position: Top center of screen
- Background: Warning color (orange)
- Text: White text on colored background
- Action Button: Small white text button
- Persistent: Stays visible until connection restored

**Batch Operation Error Recovery**
```
Component Structure:
<Card sx={{ p: 3 }}>
  <CardHeader
    title="Batch Operation Results"
    subheader={`${successCount} successful, ${errorCount} failed`}
  />
  <CardContent>
    <Box sx={{ mb: 2 }}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Progress: {((successCount + errorCount) / totalCount * 100).toFixed(0)}%
      </Typography>
      <LinearProgress 
        variant="determinate" 
        value={(successCount + errorCount) / totalCount * 100}
        sx={{ height: 8, borderRadius: 4 }}
      />
    </Box>
    
    {errorCount > 0 && (
      <Alert severity="error" sx={{ mb: 2 }}>
        <AlertTitle>{errorCount} items failed to process</AlertTitle>
        <Button size="small" variant="outlined" onClick={handleViewErrors}>
          View Details
        </Button>
      </Alert>
    )}
    
    <Stack direction="row" spacing={2}>
      <Button 
        variant="contained" 
        color="primary"
        disabled={errorCount === 0}
        onClick={handleRetryFailed}
      >
        Retry Failed Items
      </Button>
      <Button variant="outlined" onClick={handleDownloadReport}>
        Download Report
      </Button>
    </Stack>
  </CardContent>
</Card>
```

**Visual Specifications:**
- Card Layout: Elevated card with header and content
- Progress Bar: Shows overall completion percentage
- Error Alert: Conditional display when errors exist
- Action Buttons: Retry failed items and download report
- Success/Error Counts: Displayed in card subheader
###
 Empty State Designs for All Major Features

#### Empty Dashboard State for New Users

**New User Welcome Dashboard**
```
Component Structure:
<Container maxWidth="lg" sx={{ py: 4 }}>
  <Grid container spacing={4}>
    {/* Welcome Hero Section */}
    <Grid item xs={12}>
      <Card elevation={2} sx={{ p: 4, textAlign: 'center', background: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)', color: 'white' }}>
        <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'rgba(255,255,255,0.2)' }}>
          <RocketLaunchIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Founder's Compass!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Your journey to startup success starts here. Let's get you set up with the tools and resources you need.
        </Typography>
        <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}>
          Complete Your Profile
        </Button>
      </Card>
    </Grid>

    {/* Quick Start Actions */}
    <Grid item xs={12}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Quick Start Actions
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%', cursor: 'pointer', '&:hover': { elevation: 4 } }}>
            <PersonIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Set Up Profile
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tell us about your startup idea and goals
            </Typography>
            <Button variant="outlined" size="small">
              Get Started
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%', cursor: 'pointer', '&:hover': { elevation: 4 } }}>
            <SchoolIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Explore Learning
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Discover courses tailored to your needs
            </Typography>
            <Button variant="outlined" size="small">
              Browse Courses
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', height: '100%', cursor: 'pointer', '&:hover': { elevation: 4 } }}>
            <AccountBalanceIcon sx={{ fontSize: 48, color: 'info.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Find Funding
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Explore government schemes and grants
            </Typography>
            <Button variant="outlined" size="small">
              View Schemes
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Grid>

    {/* Progress Tracker */}
    <Grid item xs={12}>
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Your Progress
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Profile Completion
            </Typography>
            <Typography variant="body2" color="text.secondary">
              20%
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={20} sx={{ height: 8, borderRadius: 4 }} />
        </Box>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: 'success.main' }} />
            </ListItemIcon>
            <ListItemText primary="Account created" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Complete business information" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Set learning preferences" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon sx={{ color: 'text.secondary' }} />
            </ListItemIcon>
            <ListItemText primary="Join community discussions" />
          </ListItem>
        </List>
      </Card>
    </Grid>
  </Grid>
</Container>
```

**Visual Specifications:**
- Hero Card: Gradient background (primary colors), white text, centered content
- Welcome Icon: Rocket launch icon, 80px avatar container
- Quick Start Cards: Equal height cards with hover elevation effect
- Action Icons: 48px size, different colors for each category
- Progress Bar: Linear progress with 8px height, rounded corners
- Checklist: Dense list with check/unchecked icons

#### No Search Results and No Data Available States

**No Search Results State**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 8 }}>
  <SearchOffIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h5" component="h2" gutterBottom>
    No results found
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
    We couldn't find anything matching "{searchQuery}". Try adjusting your search terms or filters.
  </Typography>
  
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" gutterBottom>
      Search suggestions:
    </Typography>
    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
      <Chip label="startup funding" clickable onClick={() => handleSuggestion('startup funding')} />
      <Chip label="business plan" clickable onClick={() => handleSuggestion('business plan')} />
      <Chip label="legal compliance" clickable onClick={() => handleSuggestion('legal compliance')} />
      <Chip label="market research" clickable onClick={() => handleSuggestion('market research')} />
    </Stack>
  </Box>
  
  <Stack direction="row" spacing={2} justifyContent="center">
    <Button variant="outlined" onClick={handleClearFilters}>
      Clear Filters
    </Button>
    <Button variant="contained" onClick={handleNewSearch}>
      Try New Search
    </Button>
  </Stack>
</Box>
```

**Visual Specifications:**
- Search Off Icon: 80px size, secondary text color
- Title: H5 typography, primary text color
- Description: Body1, secondary text, max-width 400px
- Search Query: Highlighted in quotes within description
- Suggestion Chips: Clickable chips with common search terms
- Action Buttons: Outlined and contained variants

**No Data Available State (Generic)**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <InboxIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    No data available
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    There's nothing to show here yet. Data will appear once it's available.
  </Typography>
  <Button variant="outlined" startIcon={<RefreshIcon />} onClick={handleRefresh}>
    Refresh
  </Button>
</Box>
```

**Visual Specifications:**
- Inbox Icon: 64px size, secondary text color
- Title: H6 typography
- Description: Body2, secondary text
- Refresh Button: Outlined variant with refresh icon

#### Empty Community Forum and Discussion States

**Empty Forum State (No Posts)**
```
Component Structure:
<Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
  <ForumIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h4" component="h1" gutterBottom>
    Start the Conversation
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
    Be the first to share your thoughts, ask questions, or help fellow entrepreneurs. Your contribution can spark meaningful discussions.
  </Typography>
  
  <Card sx={{ p: 3, mb: 4, textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
    <Typography variant="h6" gutterBottom>
      💡 Discussion Ideas
    </Typography>
    <List dense>
      <ListItem>
        <ListItemIcon>
          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
        </ListItemIcon>
        <ListItemText primary="Share your startup journey and challenges" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
        </ListItemIcon>
        <ListItemText primary="Ask for feedback on your business idea" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
        </ListItemIcon>
        <ListItemText primary="Discuss industry trends and opportunities" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CircleIcon sx={{ fontSize: 8, color: 'primary.main' }} />
        </ListItemIcon>
        <ListItemText primary="Share resources and tools you've discovered" />
      </ListItem>
    </List>
  </Card>
  
  <Button variant="contained" size="large" startIcon={<AddIcon />}>
    Create First Post
  </Button>
</Container>
```

**Visual Specifications:**
- Forum Icon: 80px size, secondary text color
- Title: H4 typography, encouraging tone
- Description: Body1, secondary text, max-width 500px
- Ideas Card: Left-aligned content with bullet points
- Bullet Points: Small circle icons in primary color
- CTA Button: Large contained button with add icon

**Empty Discussion Thread State**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <ChatBubbleOutlineIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    No replies yet
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    Be the first to respond to this discussion. Share your thoughts or ask follow-up questions.
  </Typography>
  <Button variant="contained" startIcon={<ReplyIcon />}>
    Add Reply
  </Button>
</Box>
```

**Visual Specifications:**
- Chat Bubble Icon: 64px size, secondary text color
- Title: H6 typography
- Description: Body2, secondary text
- Reply Button: Contained variant with reply icon

**Empty User Profile Activity**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <PersonOutlineIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    No activity yet
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    This user hasn't posted or commented yet. Check back later for updates.
  </Typography>
  <Button variant="outlined" onClick={handleFollowUser}>
    Follow User
  </Button>
</Box>
```

**Visual Specifications:**
- Person Outline Icon: 64px size, secondary text color
- Title: H6 typography
- Description: Body2, secondary text
- Follow Button: Outlined variant

#### Empty Government Schemes Search Results

**No Schemes Found State**
```
Component Structure:
<Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
  <AccountBalanceIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h4" component="h1" gutterBottom>
    No schemes match your criteria
  </Typography>
  <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
    We couldn't find any government schemes matching your current filters. Try adjusting your search criteria or explore popular schemes.
  </Typography>
  
  <Card sx={{ p: 3, mb: 4, textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
    <Typography variant="h6" gutterBottom>
      💡 Search Tips
    </Typography>
    <List dense>
      <ListItem>
        <ListItemIcon>
          <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} />
        </ListItemIcon>
        <ListItemText primary="Try broader industry categories" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} />
        </ListItemIcon>
        <ListItemText primary="Remove location filters to see national schemes" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} />
        </ListItemIcon>
        <ListItemText primary="Check if your business stage matches scheme requirements" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CheckIcon sx={{ fontSize: 16, color: 'success.main' }} />
        </ListItemIcon>
        <ListItemText primary="Consider schemes for related business types" />
      </ListItem>
    </List>
  </Card>
  
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" gutterBottom>
      Popular Schemes
    </Typography>
    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
      <Chip 
        label="Startup India" 
        clickable 
        onClick={() => handleSchemeSearch('Startup India')}
        icon={<StarIcon />}
      />
      <Chip 
        label="MUDRA Loan" 
        clickable 
        onClick={() => handleSchemeSearch('MUDRA Loan')}
        icon={<StarIcon />}
      />
      <Chip 
        label="Stand Up India" 
        clickable 
        onClick={() => handleSchemeSearch('Stand Up India')}
        icon={<StarIcon />}
      />
      <Chip 
        label="MSME Schemes" 
        clickable 
        onClick={() => handleSchemeSearch('MSME Schemes')}
        icon={<StarIcon />}
      />
    </Stack>
  </Box>
  
  <Stack direction="row" spacing={2} justifyContent="center">
    <Button variant="outlined" onClick={handleClearFilters}>
      Clear All Filters
    </Button>
    <Button variant="contained" onClick={handleBrowseAll}>
      Browse All Schemes
    </Button>
  </Stack>
</Container>
```

**Visual Specifications:**
- Government Building Icon: 80px size, secondary text color
- Title: H4 typography, informative tone
- Description: Body1, secondary text, max-width 500px
- Tips Card: Left-aligned content with checkmark bullets
- Popular Schemes: Clickable chips with star icons
- Action Buttons: Outlined and contained variants

**Empty Scheme Bookmarks**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <BookmarkBorderIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    No bookmarked schemes
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    Save schemes you're interested in by clicking the bookmark icon. They'll appear here for easy access.
  </Typography>
  <Button variant="contained" onClick={handleBrowseSchemes}>
    Browse Schemes
  </Button>
</Box>
```

**Visual Specifications:**
- Bookmark Icon: 64px size, secondary text color
- Title: H6 typography
- Description: Body2, secondary text with instruction
- Browse Button: Contained variant

**Empty Application History**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <DescriptionIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    No applications yet
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    Your scheme applications will appear here. Start by exploring available schemes and applying to those that match your business.
  </Typography>
  <Button variant="contained" onClick={handleFindSchemes}>
    Find Suitable Schemes
  </Button>
</Box>
```

**Visual Specifications:**
- Document Icon: 64px size, secondary text color
- Title: H6 typography
- Description: Body2, secondary text with guidance
- Find Schemes Button: Contained variant

#### Additional Empty States

**Empty Learning Progress**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <SchoolIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    Start your learning journey
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    Enroll in courses to track your progress and build essential startup skills.
  </Typography>
  <Button variant="contained" onClick={handleExploreCourses}>
    Explore Courses
  </Button>
</Box>
```

**Empty Notifications**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <NotificationsNoneIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    No notifications
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    You're all caught up! New notifications will appear here.
  </Typography>
</Box>
```

**Empty Saved Items**
```
Component Structure:
<Box sx={{ textAlign: 'center', py: 6 }}>
  <FavoriteIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
  <Typography variant="h6" component="h2" gutterBottom>
    No saved items
  </Typography>
  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
    Save articles, courses, and resources you want to revisit later.
  </Typography>
  <Button variant="outlined" onClick={handleBrowseContent}>
    Browse Content
  </Button>
</Box>
```

**Visual Specifications for All Empty States:**
- Consistent Icon Size: 64px for secondary empty states, 80px for primary pages
- Icon Color: `theme.palette.text.secondary` for subtle appearance
- Typography Hierarchy: H6 for titles, Body2 for descriptions
- Spacing: 24px padding top/bottom, 12px margin bottom for descriptions
- Button Variants: Contained for primary actions, outlined for secondary
- Max Width: 500px for descriptions to maintain readability
- Center Alignment: All content centered for clean appearance
## Authe
ntication and User Onboarding Flow Mockups

### Complete Login and Signup Flow

#### Login Page Layout

**Desktop Login Form (1200px+)**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'primary.main', width: 56, height: 56 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome Back
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Sign in to your Founder's Compass account
      </Typography>
    </Box>
    
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        sx={{ mb: 2 }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        sx={{ mb: 3 }}
      />
      
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        sx={{ mb: 2 }}
      />
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, py: 1.5 }}
      >
        Sign In
      </Button>
      
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>
      
      <Stack spacing={2}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ py: 1.5 }}
        >
          Continue with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LinkedInIcon />}
          sx={{ py: 1.5 }}
        >
          Continue with LinkedIn
        </Button>
      </Stack>
      
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Link href="/forgot-password" variant="body2" sx={{ mr: 2 }}>
          Forgot password?
        </Link>
        <Link href="/signup" variant="body2">
          Don't have an account? Sign Up
        </Link>
      </Box>
    </Box>
  </Paper>
</Container>
```

**Visual Specifications:**
- Container: Max width 600px, centered with 64px top margin
- Paper Elevation: 3 for subtle shadow depth
- Form Padding: 32px all sides
- Avatar: 56px diameter, primary color background
- Typography: H4 for title, Body2 for subtitle and links
- Button Height: 48px for optimal touch targets
- Social Button Icons: 20px size, positioned with startIcon
- Divider: Custom "OR" text with secondary color
- Link Spacing: 16px margin between forgot password and signup links

**Mobile Login Form (320px-767px)**
```
Component Structure:
<Container maxWidth="xs" sx={{ px: 2, mt: 4 }}>
  <Box sx={{ textAlign: 'center', mb: 3 }}>
    <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'primary.main', width: 48, height: 48 }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography variant="h5" component="h1" gutterBottom>
      Welcome Back
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Sign in to continue
    </Typography>
  </Box>
  
  <Box component="form">
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email"
      name="email"
      autoComplete="email"
      sx={{ mb: 2 }}
    />
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      sx={{ mb: 2 }}
    />
    
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
      sx={{ mb: 2 }}
    />
    
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 2, mb: 2, py: 1.5 }}
    >
      Sign In
    </Button>
    
    <Divider sx={{ my: 2 }}>
      <Typography variant="caption" color="text.secondary">
        OR
      </Typography>
    </Divider>
    
    <Stack spacing={1.5}>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{ py: 1.5 }}
      >
        Google
      </Button>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<LinkedInIcon />}
        sx={{ py: 1.5 }}
      >
        LinkedIn
      </Button>
    </Stack>
    
    <Stack direction="column" spacing={1} sx={{ mt: 3, textAlign: 'center' }}>
      <Link href="/forgot-password" variant="body2">
        Forgot password?
      </Link>
      <Link href="/signup" variant="body2">
        Don't have an account? Sign Up
      </Link>
    </Stack>
  </Box>
</Container>
```

**Mobile Adaptations:**
- Container: Max width 400px with 16px horizontal padding
- Avatar: Reduced to 48px diameter
- Typography: H5 for title (smaller than desktop)
- Reduced Margins: 16px between form elements
- Stacked Links: Vertical layout for better touch targets
- Shorter Button Text: "Google" instead of "Continue with Google"

#### Signup Flow with Email Verification

**Step 1: Initial Signup Form**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 6, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'secondary.main', width: 56, height: 56 }}>
        <PersonAddIcon />
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Join Founder's Compass
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Start your entrepreneurial journey today
      </Typography>
    </Box>
    
    <Box component="form" sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
      </Grid>
      
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        sx={{ mt: 2, mb: 2 }}
      />
      
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        helperText="Minimum 8 characters with letters and numbers"
        sx={{ mb: 2 }}
      />
      
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        sx={{ mb: 3 }}
      />
      
      <FormControlLabel
        control={<Checkbox value="terms" color="primary" required />}
        label={
          <Typography variant="body2">
            I agree to the{' '}
            <Link href="/terms" target="_blank">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" target="_blank">
              Privacy Policy
            </Link>
          </Typography>
        }
        sx={{ mb: 3 }}
      />
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 3, py: 1.5 }}
      >
        Create Account
      </Button>
      
      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>
      
      <Stack spacing={2}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ py: 1.5 }}
        >
          Sign up with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LinkedInIcon />}
          sx={{ py: 1.5 }}
        >
          Sign up with LinkedIn
        </Button>
      </Stack>
      
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Link href="/login" variant="body2">
          Already have an account? Sign In
        </Link>
      </Box>
    </Box>
  </Paper>
</Container>
```

**Step 2: Email Verification Screen**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'info.main', width: 80, height: 80 }}>
      <EmailIcon sx={{ fontSize: 40 }} />
    </Avatar>
    
    <Typography variant="h4" component="h1" gutterBottom>
      Check Your Email
    </Typography>
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      We've sent a verification link to
    </Typography>
    
    <Typography variant="h6" color="primary.main" sx={{ mb: 4 }}>
      user@example.com
    </Typography>
    
    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
      Click the link in the email to verify your account. 
      If you don't see it, check your spam folder.
    </Typography>
    
    <Stack spacing={2} sx={{ mb: 4 }}>
      <Button
        variant="contained"
        fullWidth
        sx={{ py: 1.5 }}
        onClick={handleOpenEmail}
      >
        Open Email App
      </Button>
      
      <Button
        variant="outlined"
        fullWidth
        sx={{ py: 1.5 }}
        onClick={handleResendEmail}
      >
        Resend Verification Email
      </Button>
    </Stack>
    
    <Typography variant="body2" color="text.secondary">
      Wrong email address?{' '}
      <Link href="/signup" underline="hover">
        Go back and try again
      </Link>
    </Typography>
  </Paper>
</Container>
```

**Step 3: Email Verification Success**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'success.main', width: 80, height: 80 }}>
      <CheckCircleIcon sx={{ fontSize: 40 }} />
    </Avatar>
    
    <Typography variant="h4" component="h1" gutterBottom>
      Email Verified!
    </Typography>
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      Your account has been successfully verified. 
      Welcome to Founder's Compass!
    </Typography>
    
    <Button
      variant="contained"
      size="large"
      fullWidth
      sx={{ py: 1.5, mb: 2 }}
      onClick={handleContinueToOnboarding}
    >
      Continue to Setup
    </Button>
    
    <Button
      variant="text"
      fullWidth
      onClick={handleSkipToLogin}
    >
      Skip setup and sign in
    </Button>
  </Paper>
</Container>
```

#### Forgot Password Flow

**Step 1: Password Reset Request**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'warning.main', width: 56, height: 56 }}>
        <LockResetIcon />
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Reset Password
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Enter your email address and we'll send you a reset link
      </Typography>
    </Box>
    
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        sx={{ mb: 3 }}
      />
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 3, py: 1.5 }}
      >
        Send Reset Link
      </Button>
      
      <Box sx={{ textAlign: 'center' }}>
        <Link href="/login" variant="body2">
          Remember your password? Sign In
        </Link>
      </Box>
    </Box>
  </Paper>
</Container>
```

**Step 2: Reset Email Sent Confirmation**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'info.main', width: 80, height: 80 }}>
      <EmailIcon sx={{ fontSize: 40 }} />
    </Avatar>
    
    <Typography variant="h4" component="h1" gutterBottom>
      Reset Link Sent
    </Typography>
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
      We've sent a password reset link to
    </Typography>
    
    <Typography variant="h6" color="primary.main" sx={{ mb: 4 }}>
      user@example.com
    </Typography>
    
    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
      Click the link in the email to reset your password. 
      The link will expire in 24 hours.
    </Typography>
    
    <Stack spacing={2} sx={{ mb: 4 }}>
      <Button
        variant="outlined"
        fullWidth
        sx={{ py: 1.5 }}
        onClick={handleResendReset}
      >
        Resend Reset Link
      </Button>
    </Stack>
    
    <Typography variant="body2" color="text.secondary">
      <Link href="/login" underline="hover">
        Back to Sign In
      </Link>
    </Typography>
  </Paper>
</Container>
```

**Step 3: New Password Form**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'primary.main', width: 56, height: 56 }}>
        <LockIcon />
      </Avatar>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Password
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Enter a strong password for your account
      </Typography>
    </Box>
    
    <Box component="form" sx={{ mt: 1 }}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="newPassword"
        label="New Password"
        type="password"
        id="newPassword"
        autoComplete="new-password"
        helperText="Minimum 8 characters with letters and numbers"
        sx={{ mb: 2 }}
      />
      
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="confirmNewPassword"
        label="Confirm New Password"
        type="password"
        id="confirmNewPassword"
        sx={{ mb: 3 }}
      />
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 3, py: 1.5 }}
      >
        Update Password
      </Button>
    </Box>
  </Paper>
</Container>
```

**Step 4: Password Reset Success**
```
Component Structure:
<Container maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
  <Paper elevation={3} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'success.main', width: 80, height: 80 }}>
      <CheckCircleIcon sx={{ fontSize: 40 }} />
    </Avatar>
    
    <Typography variant="h4" component="h1" gutterBottom>
      Password Updated!
    </Typography>
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      Your password has been successfully updated. 
      You can now sign in with your new password.
    </Typography>
    
    <Button
      variant="contained"
      size="large"
      fullWidth
      sx={{ py: 1.5 }}
      onClick={handleGoToLogin}
    >
      Sign In Now
    </Button>
  </Paper>
</Container>
```

#### Account Verification and Welcome Screens

**Account Verification Pending**
```
Component Structure:
<Container maxWidth="md" sx={{ mt: 6, mb: 4 }}>
  <Paper elevation={2} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'warning.main', width: 80, height: 80 }}>
      <VerifiedUserIcon sx={{ fontSize: 40 }} />
    </Avatar>
    
    <Typography variant="h4" component="h1" gutterBottom>
      Account Under Review
    </Typography>
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
      Thank you for joining Founder's Compass! We're currently reviewing your account 
      to ensure the best experience for our community. This typically takes 1-2 business days.
    </Typography>
    
    <Alert severity="info" sx={{ mb: 4, textAlign: 'left' }}>
      <AlertTitle>What happens next?</AlertTitle>
      <Typography variant="body2">
        • We'll verify your information and business details<br/>
        • You'll receive an email once your account is approved<br/>
        • You can then access all premium features and resources
      </Typography>
    </Alert>
    
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
      <Button
        variant="outlined"
        startIcon={<EmailIcon />}
        onClick={handleContactSupport}
      >
        Contact Support
      </Button>
      <Button
        variant="text"
        onClick={handleBrowseFreeContent}
      >
        Browse Free Content
      </Button>
    </Stack>
    
    <Typography variant="body2" color="text.secondary">
      Questions? Email us at{' '}
      <Link href="mailto:support@founderscompass.in">
        support@founderscompass.in
      </Link>
    </Typography>
  </Paper>
</Container>
```

**Welcome Screen (Post-Verification)**
```
Component Structure:
<Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
  <Box sx={{ textAlign: 'center', mb: 6 }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'primary.main', width: 100, height: 100 }}>
      <CelebrationIcon sx={{ fontSize: 50 }} />
    </Avatar>
    
    <Typography variant="h3" component="h1" gutterBottom>
      Welcome to Founder's Compass! 🎉
    </Typography>
    
    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
      Your account has been verified and you're ready to start your entrepreneurial journey. 
      Here's what you can do now:
    </Typography>
  </Box>
  
  <Grid container spacing={4} sx={{ mb: 6 }}>
    <Grid item xs={12} md={4}>
      <Card elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
        <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'secondary.main', width: 60, height: 60 }}>
          <SchoolIcon sx={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          Start Learning
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Access curated courses and resources tailored for Indian entrepreneurs
        </Typography>
        <Button variant="outlined" fullWidth>
          Explore Courses
        </Button>
      </Card>
    </Grid>
    
    <Grid item xs={12} md={4}>
      <Card elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
        <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'info.main', width: 60, height: 60 }}>
          <AccountBalanceIcon sx={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          Government Schemes
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Discover funding opportunities and schemes available for your startup
        </Typography>
        <Button variant="outlined" fullWidth>
          Browse Schemes
        </Button>
      </Card>
    </Grid>
    
    <Grid item xs={12} md={4}>
      <Card elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
        <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'success.main', width: 60, height: 60 }}>
          <ForumIcon sx={{ fontSize: 30 }} />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          Join Community
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Connect with fellow entrepreneurs and get answers to your questions
        </Typography>
        <Button variant="outlined" fullWidth>
          Join Discussions
        </Button>
      </Card>
    </Grid>
  </Grid>
  
  <Box sx={{ textAlign: 'center' }}>
    <Button
      variant="contained"
      size="large"
      sx={{ px: 4, py: 1.5, mr: 2 }}
      onClick={handleGoToDashboard}
    >
      Go to Dashboard
    </Button>
    <Button
      variant="text"
      onClick={handleStartOnboarding}
    >
      Complete Profile Setup
    </Button>
  </Box>
</Container>
```

**Authentication State Specifications:**

**Form Validation States:**
- **Valid Input**: Green border (`theme.palette.success.main`) with checkmark icon
- **Invalid Input**: Red border (`theme.palette.error.main`) with error message below
- **Loading State**: Disabled form with circular progress in submit button
- **Network Error**: Alert banner above form with retry option

**Social Authentication Integration:**
- **Google OAuth**: Official Google branding colors and icon
- **LinkedIn OAuth**: LinkedIn blue (#0077B5) with official icon
- **Button States**: Same hover/focus/disabled states as primary buttons
- **Loading States**: Spinner replaces icon during authentication

**Accessibility Compliance:**
- **Focus Management**: Logical tab order through form elements
- **Screen Reader Support**: Proper labels and ARIA attributes
- **Error Announcements**: Live regions for validation messages
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)

**Responsive Breakpoints:**
- **Desktop (1200px+)**: Full-width forms with side-by-side name fields
- **Tablet (768px-1199px)**: Stacked name fields, maintained form width
- **Mobile (320px-767px)**: Full-width container, reduced padding and margins
- **Touch Targets**: Minimum 44px height for all interactive elements

### User Onboarding and Profile Setup Mockups

#### Step-by-Step Onboarding Wizard

**Step 1: Welcome and Business Stage Selection**
```
Component Structure:
<Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'primary.main', width: 80, height: 80 }}>
      <RocketLaunchIcon sx={{ fontSize: 40 }} />
    </Avatar>
    
    <Typography variant="h3" component="h1" gutterBottom>
      Welcome to Founder's Compass! 🧭
    </Typography>
    
    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
      Let's create a personalized roadmap for your entrepreneurial journey
    </Typography>
    
    <LinearProgress 
      variant="determinate" 
      value={20} 
      sx={{ width: 300, mx: 'auto', mb: 2 }}
    />
    <Typography variant="body2" color="text.secondary">
      Step 1 of 5
    </Typography>
  </Box>
  
  <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
      💡 What stage is your startup idea?
    </Typography>
    
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            textAlign: 'center', 
            cursor: 'pointer',
            border: '2px solid transparent',
            '&:hover': { borderColor: 'primary.main' },
            '&.selected': { borderColor: 'primary.main', bgcolor: 'primary.50' }
          }}
          onClick={() => handleStageSelect('idea')}
        >
          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'secondary.main', width: 60, height: 60 }}>
            <LightbulbIcon sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Just an Idea
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I have a concept but need guidance on next steps
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            textAlign: 'center', 
            cursor: 'pointer',
            border: '2px solid transparent',
            '&:hover': { borderColor: 'primary.main' }
          }}
          onClick={() => handleStageSelect('plan')}
        >
          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'info.main', width: 60, height: 60 }}>
            <DescriptionIcon sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Have a Plan
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I've done research and have a business plan ready
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            textAlign: 'center', 
            cursor: 'pointer',
            border: '2px solid transparent',
            '&:hover': { borderColor: 'primary.main' }
          }}
          onClick={() => handleStageSelect('building')}
        >
          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'warning.main', width: 60, height: 60 }}>
            <BuildIcon sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Building MVP
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm developing my product/service
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            textAlign: 'center', 
            cursor: 'pointer',
            border: '2px solid transparent',
            '&:hover': { borderColor: 'primary.main' }
          }}
          onClick={() => handleStageSelect('launch')}
        >
          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'success.main', width: 60, height: 60 }}>
            <LaunchIcon sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Ready to Launch
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product is ready, need help with legal & compliance
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            textAlign: 'center', 
            cursor: 'pointer',
            border: '2px solid transparent',
            '&:hover': { borderColor: 'primary.main' }
          }}
          onClick={() => handleStageSelect('scaling')}
        >
          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'error.main', width: 60, height: 60 }}>
            <TrendingUpIcon sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            Already Running
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I have customers and want to scale or raise funding
          </Typography>
        </Card>
      </Grid>
    </Grid>
    
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Button 
        variant="contained" 
        size="large" 
        sx={{ px: 4, py: 1.5 }}
        disabled={!selectedStage}
        onClick={handleContinueToStep2}
      >
        Continue
      </Button>
    </Box>
  </Paper>
</Container>
```

**Step 2: Business Information Collection**
```
Component Structure:
<Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Tell us about your business 📊
    </Typography>
    
    <LinearProgress 
      variant="determinate" 
      value={40} 
      sx={{ width: 300, mx: 'auto', mb: 2 }}
    />
    <Typography variant="body2" color="text.secondary">
      Step 2 of 5
    </Typography>
  </Box>
  
  <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Business/Startup Name"
          variant="outlined"
          placeholder="Enter your business name"
          helperText="This can be changed later"
          sx={{ mb: 3 }}
        />
        
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Industry</InputLabel>
          <Select
            value={industry}
            label="Industry"
            onChange={handleIndustryChange}
          >
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="healthcare">Healthcare</MenuItem>
            <MenuItem value="fintech">FinTech</MenuItem>
            <MenuItem value="ecommerce">E-commerce</MenuItem>
            <MenuItem value="food">Food & Beverage</MenuItem>
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="agriculture">Agriculture</MenuItem>
            <MenuItem value="manufacturing">Manufacturing</MenuItem>
            <MenuItem value="services">Services</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          📍 Business Location
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>State</InputLabel>
              <Select
                value={state}
                label="State"
                onChange={handleStateChange}
              >
                <MenuItem value="maharashtra">Maharashtra</MenuItem>
                <MenuItem value="karnataka">Karnataka</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="gujarat">Gujarat</MenuItem>
                <MenuItem value="tamil-nadu">Tamil Nadu</MenuItem>
                <MenuItem value="telangana">Telangana</MenuItem>
                <MenuItem value="west-bengal">West Bengal</MenuItem>
                <MenuItem value="rajasthan">Rajasthan</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>City</InputLabel>
              <Select
                value={city}
                label="City"
                onChange={handleCityChange}
              >
                <MenuItem value="mumbai">Mumbai</MenuItem>
                <MenuItem value="bangalore">Bangalore</MenuItem>
                <MenuItem value="delhi">Delhi</MenuItem>
                <MenuItem value="pune">Pune</MenuItem>
                <MenuItem value="hyderabad">Hyderabad</MenuItem>
                <MenuItem value="chennai">Chennai</MenuItem>
                <MenuItem value="kolkata">Kolkata</MenuItem>
                <MenuItem value="ahmedabad">Ahmedabad</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          👥 Team Structure
        </Typography>
        
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <RadioGroup
            value={teamStructure}
            onChange={handleTeamStructureChange}
          >
            <FormControlLabel 
              value="solo" 
              control={<Radio />} 
              label="Solo founder (just me)" 
            />
            <FormControlLabel 
              value="cofounders" 
              control={<Radio />} 
              label="I have co-founders" 
            />
            <FormControlLabel 
              value="looking" 
              control={<Radio />} 
              label="Looking for co-founders" 
            />
          </RadioGroup>
        </FormControl>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          💰 Funding Situation
        </Typography>
        
        <FormControl component="fieldset" sx={{ mb: 3 }}>
          <RadioGroup
            value={fundingStatus}
            onChange={handleFundingStatusChange}
          >
            <FormControlLabel 
              value="bootstrapped" 
              control={<Radio />} 
              label="Self-funded/Bootstrapped" 
            />
            <FormControlLabel 
              value="seeking" 
              control={<Radio />} 
              label="Looking to raise funding" 
            />
            <FormControlLabel 
              value="funded" 
              control={<Radio />} 
              label="Already have investors" 
            />
          </RadioGroup>
        </FormControl>
        
        <TextField
          fullWidth
          label="Brief Business Description"
          multiline
          rows={4}
          variant="outlined"
          placeholder="Describe your business idea or current operations..."
          helperText="This helps us provide better recommendations"
        />
      </Grid>
    </Grid>
    
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
      <Button 
        variant="outlined" 
        onClick={handleBackToStep1}
        sx={{ px: 3, py: 1.5 }}
      >
        Back
      </Button>
      <Button 
        variant="contained" 
        onClick={handleContinueToStep3}
        sx={{ px: 4, py: 1.5 }}
      >
        Continue
      </Button>
    </Box>
  </Paper>
</Container>
```

**Step 3: Goals and Priorities Selection**
```
Component Structure:
<Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      What are your immediate goals? 🎯
    </Typography>
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      Select all that apply - we'll prioritize content based on your choices
    </Typography>
    
    <LinearProgress 
      variant="determinate" 
      value={60} 
      sx={{ width: 300, mx: 'auto', mb: 2 }}
    />
    <Typography variant="body2" color="text.secondary">
      Step 3 of 5
    </Typography>
  </Box>
  
  <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            cursor: 'pointer',
            border: goals.includes('legal') ? '2px solid' : '2px solid transparent',
            borderColor: goals.includes('legal') ? 'primary.main' : 'transparent',
            bgcolor: goals.includes('legal') ? 'primary.50' : 'background.paper'
          }}
          onClick={() => handleGoalToggle('legal')}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'info.main', width: 40, height: 40, mr: 2 }}>
              <GavelIcon />
            </Avatar>
            <Typography variant="h6">
              Legal Setup
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Register company, understand compliance requirements
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            cursor: 'pointer',
            border: goals.includes('funding') ? '2px solid' : '2px solid transparent',
            borderColor: goals.includes('funding') ? 'primary.main' : 'transparent',
            bgcolor: goals.includes('funding') ? 'primary.50' : 'background.paper'
          }}
          onClick={() => handleGoalToggle('funding')}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'success.main', width: 40, height: 40, mr: 2 }}>
              <AccountBalanceIcon />
            </Avatar>
            <Typography variant="h6">
              Funding & Grants
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Explore government schemes, investor funding options
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            cursor: 'pointer',
            border: goals.includes('business-plan') ? '2px solid' : '2px solid transparent',
            borderColor: goals.includes('business-plan') ? 'primary.main' : 'transparent',
            bgcolor: goals.includes('business-plan') ? 'primary.50' : 'background.paper'
          }}
          onClick={() => handleGoalToggle('business-plan')}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'warning.main', width: 40, height: 40, mr: 2 }}>
              <BusinessCenterIcon />
            </Avatar>
            <Typography variant="h6">
              Business Plan
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Create comprehensive business strategy and planning
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            cursor: 'pointer',
            border: goals.includes('pitch-deck') ? '2px solid' : '2px solid transparent',
            borderColor: goals.includes('pitch-deck') ? 'primary.main' : 'transparent',
            bgcolor: goals.includes('pitch-deck') ? 'primary.50' : 'background.paper'
          }}
          onClick={() => handleGoalToggle('pitch-deck')}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'error.main', width: 40, height: 40, mr: 2 }}>
              <PresentationChartBarIcon />
            </Avatar>
            <Typography variant="h6">
              Pitch Deck
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Build compelling investor presentations
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            cursor: 'pointer',
            border: goals.includes('networking') ? '2px solid' : '2px solid transparent',
            borderColor: goals.includes('networking') ? 'primary.main' : 'transparent',
            bgcolor: goals.includes('networking') ? 'primary.50' : 'background.paper'
          }}
          onClick={() => handleGoalToggle('networking')}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'secondary.main', width: 40, height: 40, mr: 2 }}>
              <PeopleIcon />
            </Avatar>
            <Typography variant="h6">
              Networking
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Connect with mentors, investors, and fellow founders
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={4}>
        <Card 
          sx={{ 
            p: 3, 
            cursor: 'pointer',
            border: goals.includes('learning') ? '2px solid' : '2px solid transparent',
            borderColor: goals.includes('learning') ? 'primary.main' : 'transparent',
            bgcolor: goals.includes('learning') ? 'primary.50' : 'background.paper'
          }}
          onClick={() => handleGoalToggle('learning')}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'info.main', width: 40, height: 40, mr: 2 }}>
              <SchoolIcon />
            </Avatar>
            <Typography variant="h6">
              Learning
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Access courses, resources, and skill development
          </Typography>
        </Card>
      </Grid>
    </Grid>
    
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
      <Button 
        variant="outlined" 
        onClick={handleBackToStep2}
        sx={{ px: 3, py: 1.5 }}
      >
        Back
      </Button>
      <Button 
        variant="contained" 
        onClick={handleContinueToStep4}
        disabled={goals.length === 0}
        sx={{ px: 4, py: 1.5 }}
      >
        Continue ({goals.length} selected)
      </Button>
    </Box>
  </Paper>
</Container>
```

**Step 4: Profile Completion and Preferences**
```
Component Structure:
<Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
  <Box sx={{ textAlign: 'center', mb: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Complete your profile 👤
    </Typography>
    
    <LinearProgress 
      variant="determinate" 
      value={80} 
      sx={{ width: 300, mx: 'auto', mb: 2 }}
    />
    <Typography variant="body2" color="text.secondary">
      Step 4 of 5
    </Typography>
  </Box>
  
  <Paper elevation={2} sx={{ p: 4, borderRadius: 2 }}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Avatar 
            sx={{ 
              width: 120, 
              height: 120, 
              mx: 'auto', 
              mb: 2,
              bgcolor: 'primary.main',
              fontSize: '3rem'
            }}
          >
            {profileData.firstName?.[0]}{profileData.lastName?.[0]}
          </Avatar>
          <Button
            variant="outlined"
            component="label"
            startIcon={<PhotoCameraIcon />}
          >
            Upload Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </Button>
        </Box>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={profileData.firstName}
              onChange={(e) => handleProfileChange('firstName', e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={profileData.lastName}
              onChange={(e) => handleProfileChange('lastName', e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Professional Title"
              variant="outlined"
              placeholder="e.g., Founder & CEO, Product Manager, etc."
              value={profileData.title}
              onChange={(e) => handleProfileChange('title', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="LinkedIn Profile (Optional)"
              variant="outlined"
              placeholder="https://linkedin.com/in/yourprofile"
              value={profileData.linkedin}
              onChange={(e) => handleProfileChange('linkedin', e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Years of Experience"
              variant="outlined"
              type="number"
              inputProps={{ min: 0, max: 50 }}
              value={profileData.experience}
              onChange={(e) => handleProfileChange('experience', e.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    
    <Divider sx={{ my: 4 }} />
    
    <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
      📧 Communication Preferences
    </Typography>
    
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Switch
              checked={preferences.emailUpdates}
              onChange={(e) => handlePreferenceChange('emailUpdates', e.target.checked)}
            />
          }
          label="Email updates about new resources and opportunities"
        />
        <FormControlLabel
          control={
            <Switch
              checked={preferences.weeklyDigest}
              onChange={(e) => handlePreferenceChange('weeklyDigest', e.target.checked)}
            />
          }
          label="Weekly digest of relevant government schemes"
        />
        <FormControlLabel
          control={
            <Switch
              checked={preferences.communityNotifications}
              onChange={(e) => handlePreferenceChange('communityNotifications', e.target.checked)}
            />
          }
          label="Community forum notifications"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Preferred Language</InputLabel>
          <Select
            value={preferences.language}
            label="Preferred Language"
            onChange={(e) => handlePreferenceChange('language', e.target.value)}
          >
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="hindi">हिंदी (Hindi)</MenuItem>
            <MenuItem value="marathi">मराठी (Marathi)</MenuItem>
            <MenuItem value="gujarati">ગુજરાતી (Gujarati)</MenuItem>
            <MenuItem value="tamil">தமிழ் (Tamil)</MenuItem>
            <MenuItem value="telugu">తెలుగు (Telugu)</MenuItem>
            <MenuItem value="kannada">ಕನ್ನಡ (Kannada)</MenuItem>
            <MenuItem value="bengali">বাংলা (Bengali)</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel>Time Zone</InputLabel>
          <Select
            value={preferences.timezone}
            label="Time Zone"
            onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
          >
            <MenuItem value="IST">IST (Indian Standard Time)</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
      <Button 
        variant="outlined" 
        onClick={handleBackToStep3}
        sx={{ px: 3, py: 1.5 }}
      >
        Back
      </Button>
      <Button 
        variant="contained" 
        onClick={handleContinueToStep5}
        sx={{ px: 4, py: 1.5 }}
      >
        Continue
      </Button>
    </Box>
  </Paper>
</Container>
```

**Step 5: Onboarding Completion and Dashboard Introduction**
```
Component Structure:
<Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
  <Box sx={{ textAlign: 'center', mb: 6 }}>
    <Avatar sx={{ mx: 'auto', mb: 3, bgcolor: 'success.main', width: 100, height: 100 }}>
      <CheckCircleIcon sx={{ fontSize: 50 }} />
    </Avatar>
    
    <Typography variant="h3" component="h1" gutterBottom>
      You're all set! 🎉
    </Typography>
    
    <LinearProgress 
      variant="determinate" 
      value={100} 
      sx={{ width: 300, mx: 'auto', mb: 2 }}
    />
    <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
      Profile Complete
    </Typography>
    
    <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
      Based on your responses, we've personalized your dashboard with relevant resources and opportunities
    </Typography>
  </Box>
  
  <Paper elevation={2} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
      📊 Your Personalized Dashboard Preview
    </Typography>
    
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card elevation={1} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            🎯 Recommended Next Steps
          </Typography>
          <List>
            {recommendedSteps.map((step, index) => (
              <ListItem key={index} sx={{ pl: 0 }}>
                <ListItemIcon>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                    <Typography variant="caption">{index + 1}</Typography>
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={step.title}
                  secondary={step.description}
                />
                <Chip 
                  label={step.priority} 
                  size="small" 
                  color={step.priority === 'High' ? 'error' : step.priority === 'Medium' ? 'warning' : 'default'}
                />
              </ListItem>
            ))}
          </List>
        </Card>
        
        <Card elevation={1} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            📚 Curated Learning Path
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={0} 
              sx={{ flexGrow: 1, mr: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              0% Complete
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {learningPath.totalCourses} courses • {learningPath.estimatedHours} hours
          </Typography>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Card elevation={1} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            💰 Relevant Schemes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {relevantSchemes.count} government schemes match your profile
          </Typography>
          <Button variant="outlined" size="small" fullWidth>
            View All Schemes
          </Button>
        </Card>
        
        <Card elevation={1} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            👥 Community
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Connect with {communityStats.founders} founders in your industry
          </Typography>
          <Button variant="outlined" size="small" fullWidth>
            Join Discussions
          </Button>
        </Card>
        
        <Card elevation={1} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            🤖 AI Assistant
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Get personalized guidance and answers to your questions
          </Typography>
          <Button variant="outlined" size="small" fullWidth>
            Ask a Question
          </Button>
        </Card>
      </Grid>
    </Grid>
  </Paper>
  
  <Box sx={{ textAlign: 'center' }}>
    <Button
      variant="contained"
      size="large"
      sx={{ px: 6, py: 2, mr: 2 }}
      onClick={handleGoToDashboard}
    >
      Go to My Dashboard
    </Button>
    <Button
      variant="outlined"
      size="large"
      sx={{ px: 4, py: 2 }}
      onClick={handleTakeTour}
    >
      Take a Quick Tour
    </Button>
  </Box>
</Container>
```

#### Profile Completion Progress Indicators

**Progress Bar Component Specifications**
```
Component Structure:
<Box sx={{ mb: 4 }}>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
    <Typography variant="h6">
      Profile Completion
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {completionPercentage}% Complete
    </Typography>
  </Box>
  
  <LinearProgress 
    variant="determinate" 
    value={completionPercentage}
    sx={{ 
      height: 8, 
      borderRadius: 4,
      bgcolor: 'grey.200',
      '& .MuiLinearProgress-bar': {
        borderRadius: 4,
        bgcolor: completionPercentage === 100 ? 'success.main' : 'primary.main'
      }
    }}
  />
  
  <Box sx={{ mt: 2 }}>
    <Grid container spacing={1}>
      {profileSections.map((section, index) => (
        <Grid item key={section.id}>
          <Chip
            label={section.name}
            size="small"
            icon={section.completed ? <CheckIcon /> : <RadioButtonUncheckedIcon />}
            color={section.completed ? 'success' : 'default'}
            variant={section.completed ? 'filled' : 'outlined'}
            onClick={() => handleSectionClick(section.id)}
            sx={{ cursor: 'pointer' }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
</Box>
```

**Profile Section Completion States:**
- **Basic Info**: Name, email, phone (Required)
- **Business Details**: Company name, industry, location (Required)
- **Team Structure**: Co-founders, team size (Optional)
- **Goals & Priorities**: Immediate objectives (Required)
- **Preferences**: Communication, language settings (Optional)
- **Profile Photo**: Avatar upload (Optional)

**Visual Specifications:**
- Progress Bar Height: 8px with rounded corners
- Completion Colors: Primary blue (in progress), Success green (100%)
- Section Chips: Small size with icons indicating completion status
- Interactive Elements: Clickable chips navigate to specific sections
- Responsive Layout: Stacked on mobile, horizontal on desktop

#### Mobile-Responsive Onboarding Adaptations

**Mobile Onboarding (320px-767px)**
```
Component Structure:
<Container maxWidth="sm" sx={{ px: 2, mt: 2, mb: 4 }}>
  <Box sx={{ textAlign: 'center', mb: 3 }}>
    <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'primary.main', width: 60, height: 60 }}>
      <RocketLaunchIcon sx={{ fontSize: 30 }} />
    </Avatar>
    
    <Typography variant="h5" component="h1" gutterBottom>
      Welcome! 🧭
    </Typography>
    
    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
      Let's set up your profile
    </Typography>
    
    <LinearProgress 
      variant="determinate" 
      value={20} 
      sx={{ width: '100%', mb: 2 }}
    />
    <Typography variant="caption" color="text.secondary">
      Step 1 of 5
    </Typography>
  </Box>
  
  <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
    <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
      What stage is your startup?
    </Typography>
    
    <Stack spacing={2}>
      {stages.map((stage) => (
        <Card 
          key={stage.id}
          sx={{ 
            p: 2, 
            cursor: 'pointer',
            border: selectedStage === stage.id ? '2px solid' : '1px solid',
            borderColor: selectedStage === stage.id ? 'primary.main' : 'divider',
            bgcolor: selectedStage === stage.id ? 'primary.50' : 'background.paper'
          }}
          onClick={() => handleStageSelect(stage.id)}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: stage.color, width: 40, height: 40, mr: 2 }}>
              {stage.icon}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                {stage.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stage.description}
              </Typography>
            </Box>
          </Box>
        </Card>
      ))}
    </Stack>
    
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <Button 
        variant="contained" 
        fullWidth
        size="large"
        disabled={!selectedStage}
        onClick={handleContinue}
        sx={{ py: 1.5 }}
      >
        Continue
      </Button>
    </Box>
  </Paper>
</Container>
```

**Mobile Adaptations:**
- Reduced Avatar Sizes: 60px for main icons, 40px for cards
- Stacked Layout: All cards in single column
- Full-Width Progress: Progress bar spans container width
- Larger Touch Targets: Minimum 48px height for all interactive elements
- Simplified Typography: H5 instead of H3 for titles
- Reduced Padding: 16px container padding, 24px card padding

This comprehensive authentication flow ensures a smooth user experience from initial signup through account verification, with proper error handling, accessibility compliance, and responsive design for all device types.
## Acces
sibility and Internationalization Specifications

### WCAG AA Compliance Standards

#### Color Contrast Requirements

**Text Contrast Ratios (WCAG AA Standard: 4.5:1 minimum)**

**Primary Text Combinations:**
- **Dark text on light backgrounds**: `#212121` on `#FFFFFF` = 16.1:1 ✓
- **Dark text on default background**: `#212121` on `#FAFAFA` = 15.8:1 ✓
- **Secondary text on light**: `#757575` on `#FFFFFF` = 4.6:1 ✓
- **Secondary text on default**: `#757575` on `#FAFAFA` = 4.5:1 ✓

**Interactive Element Contrast:**
- **Primary button text**: `#FFFFFF` on `#1565C0` = 8.2:1 ✓
- **Secondary button text**: `#1565C0` on `#FFFFFF` = 8.2:1 ✓
- **Error text**: `#D32F2F` on `#FFFFFF` = 5.4:1 ✓
- **Success text**: `#388E3C` on `#FFFFFF` = 4.8:1 ✓
- **Warning text**: `#F57C00` on `#FFFFFF` = 3.1:1 ⚠️ (Use with caution, consider darker variant)

**Link and Interactive Text:**
- **Primary links**: `#1565C0` on `#FFFFFF` = 8.2:1 ✓
- **Visited links**: `#7B1FA2` on `#FFFFFF` = 7.1:1 ✓
- **Link hover state**: `#0D47A1` on `#FFFFFF` = 12.6:1 ✓

**Focus Indicator Contrast (WCAG AA Standard: 3:1 minimum)**
- **Primary focus outline**: `#42A5F5` on `#FFFFFF` = 3.4:1 ✓
- **Focus outline on dark**: `#42A5F5` on `#1565C0` = 2.4:1 ⚠️ (Use white outline instead)
- **Alternative focus outline**: `#FFFFFF` on `#1565C0` = 8.2:1 ✓

#### Focus State Specifications for Keyboard Navigation

**Universal Focus Indicator Standards:**
- **Outline Width**: Minimum 2px solid outline
- **Outline Offset**: 2px from element boundary
- **Outline Color**: `#42A5F5` (primary light) or `#FFFFFF` (on dark backgrounds)
- **Border Radius**: Matches element border radius + 2px
- **Transition**: `outline 200ms ease-in-out`

**Component-Specific Focus States:**

**Button Focus Indicators:**
```css
.MuiButton-root:focus-visible {
  outline: 2px solid #42A5F5;
  outline-offset: 2px;
  border-radius: 6px; /* 4px + 2px offset */
}

.MuiButton-contained:focus-visible {
  outline: 2px solid #FFFFFF;
  outline-offset: 2px;
}
```

**Form Field Focus Indicators:**
```css
.MuiTextField-root .MuiOutlinedInput-root:focus-within {
  border: 2px solid #1565C0;
  outline: none; /* Border serves as focus indicator */
}

.MuiTextField-root .MuiOutlinedInput-root:focus-within .MuiInputLabel-root {
  color: #1565C0;
}
```

**Navigation Focus Indicators:**
```css
.MuiTab-root:focus-visible {
  outline: 2px solid #42A5F5;
  outline-offset: -2px; /* Inside the tab */
  border-radius: 4px;
}

.MuiListItem-button:focus-visible {
  outline: 2px solid #42A5F5;
  outline-offset: -2px;
  background-color: rgba(21, 101, 192, 0.04);
}
```

**Card and Interactive Container Focus:**
```css
.MuiCard-root[tabindex]:focus-visible {
  outline: 2px solid #42A5F5;
  outline-offset: 2px;
  border-radius: 6px;
}
```

#### Screen Reader Compatibility Requirements

**ARIA Label Specifications:**

**Navigation Elements:**
```html
<!-- Main Navigation -->
<nav aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="/dashboard" role="menuitem" aria-current="page">Dashboard</a>
    </li>
    <li role="none">
      <a href="/learning" role="menuitem">Learning Paths</a>
    </li>
  </ul>
</nav>

<!-- Breadcrumb Navigation -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/" aria-label="Home">Home</a></li>
    <li><a href="/schemes" aria-label="Government Schemes">Schemes</a></li>
    <li aria-current="page">Startup India Registration</li>
  </ol>
</nav>
```

**Form Elements:**
```html
<!-- Text Input with Error -->
<TextField
  id="business-name"
  label="Business Name"
  error={hasError}
  helperText={errorMessage}
  aria-describedby={hasError ? "business-name-error" : undefined}
  aria-invalid={hasError}
  required
  aria-required="true"
/>

<!-- Select Dropdown -->
<FormControl>
  <InputLabel id="state-select-label">Select State</InputLabel>
  <Select
    labelId="state-select-label"
    id="state-select"
    aria-describedby="state-select-helper"
    aria-required="true"
  >
    <MenuItem value="maharashtra">Maharashtra</MenuItem>
    <MenuItem value="karnataka">Karnataka</MenuItem>
  </Select>
  <FormHelperText id="state-select-helper">
    Choose your business registration state
  </FormHelperText>
</FormControl>

<!-- Checkbox with Description -->
<FormControlLabel
  control={
    <Checkbox
      id="terms-agreement"
      aria-describedby="terms-description"
      required
    />
  }
  label="I agree to the Terms and Conditions"
/>
<Typography id="terms-description" variant="caption" color="textSecondary">
  By checking this box, you agree to our terms of service and privacy policy
</Typography>
```

**Interactive Elements:**
```html
<!-- Icon Button with Label -->
<IconButton
  aria-label="Add to favorites"
  onClick={handleFavorite}
>
  <FavoriteIcon />
</IconButton>

<!-- Toggle Button with State -->
<IconButton
  aria-label={isExpanded ? "Collapse section" : "Expand section"}
  aria-expanded={isExpanded}
  onClick={handleToggle}
>
  <ExpandMoreIcon />
</IconButton>

<!-- Loading Button -->
<Button
  variant="contained"
  disabled={isLoading}
  aria-describedby={isLoading ? "loading-status" : undefined}
>
  {isLoading ? "Submitting..." : "Submit Application"}
</Button>
{isLoading && (
  <div id="loading-status" aria-live="polite" className="sr-only">
    Submitting your application, please wait
  </div>
)}
```

**Data Tables:**
```html
<Table aria-label="Government schemes comparison">
  <TableHead>
    <TableRow>
      <TableCell>
        <TableSortLabel
          active={orderBy === 'name'}
          direction={order}
          onClick={() => handleSort('name')}
          aria-label="Sort by scheme name"
        >
          Scheme Name
        </TableSortLabel>
      </TableCell>
      <TableCell aria-label="Funding amount">Amount (₹)</TableCell>
      <TableCell aria-label="Application deadline">Deadline</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell component="th" scope="row">
        Startup India Seed Fund
      </TableCell>
      <TableCell>₹20,00,000</TableCell>
      <TableCell>
        <time datetime="2024-12-31">December 31, 2024</time>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Status and Feedback Elements:**
```html
<!-- Alert Messages -->
<Alert
  severity="error"
  role="alert"
  aria-live="assertive"
>
  Application submission failed. Please try again.
</Alert>

<!-- Progress Indicators -->
<Box>
  <Typography id="progress-label">Application Progress</Typography>
  <LinearProgress
    variant="determinate"
    value={progress}
    aria-labelledby="progress-label"
    aria-valuenow={progress}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuetext={`${progress}% complete`}
  />
</Box>

<!-- Live Status Updates -->
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {statusMessage}
</div>
```

#### Alt Text and ARIA Label Specifications

**Image Alt Text Guidelines:**

**Decorative Images:**
```html
<!-- Purely decorative images -->
<img src="/decorative-pattern.svg" alt="" role="presentation" />

<!-- Background images with CSS -->
<div 
  style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
  role="img"
  aria-label="Indian startup ecosystem illustration"
>
  <!-- Content -->
</div>
```

**Informative Images:**
```html
<!-- Scheme logos -->
<img 
  src="/startup-india-logo.png" 
  alt="Startup India government scheme logo" 
/>

<!-- User avatars -->
<Avatar
  src={user.profileImage}
  alt={`${user.name}'s profile picture`}
>
  {user.name.charAt(0)}
</Avatar>

<!-- Charts and graphs -->
<img 
  src="/funding-chart.png" 
  alt="Bar chart showing funding distribution: Seed funding 40%, Series A 35%, Series B 25%" 
/>

<!-- Status icons -->
<CheckCircleIcon 
  aria-label="Application approved" 
  color="success" 
/>
```

**Complex UI Elements:**
```html
<!-- Card with multiple interactive elements -->
<Card
  tabIndex={0}
  role="article"
  aria-labelledby="scheme-title"
  aria-describedby="scheme-description"
>
  <CardHeader
    title={
      <Typography id="scheme-title" variant="h6">
        Startup India Seed Fund Scheme
      </Typography>
    }
    action={
      <IconButton
        aria-label="Bookmark this scheme"
        onClick={handleBookmark}
      >
        <BookmarkIcon />
      </IconButton>
    }
  />
  <CardContent>
    <Typography id="scheme-description" variant="body2">
      Financial support for proof of concept, prototype development, 
      product trials, market entry and commercialization.
    </Typography>
  </CardContent>
  <CardActions>
    <Button
      size="small"
      aria-describedby="scheme-title"
    >
      Learn More
    </Button>
    <Button
      size="small"
      variant="contained"
      aria-describedby="scheme-title"
    >
      Apply Now
    </Button>
  </CardActions>
</Card>
```

**Form Validation and Error Messages:**
```html
<!-- Field with validation -->
<FormControl error={hasError}>
  <InputLabel id="funding-amount-label">
    Funding Amount Required *
  </InputLabel>
  <Select
    labelId="funding-amount-label"
    id="funding-amount"
    aria-describedby="funding-amount-helper funding-amount-error"
    aria-invalid={hasError}
    aria-required="true"
  >
    <MenuItem value="0-5">₹0 - ₹5 Lakhs</MenuItem>
    <MenuItem value="5-20">₹5 - ₹20 Lakhs</MenuItem>
    <MenuItem value="20-50">₹20 - ₹50 Lakhs</MenuItem>
  </Select>
  <FormHelperText id="funding-amount-helper">
    Select the funding range that matches your requirement
  </FormHelperText>
  {hasError && (
    <FormHelperText id="funding-amount-error" error>
      Please select a funding amount to continue
    </FormHelperText>
  )}
</FormControl>
```

### Keyboard Navigation Specifications

#### Tab Order and Focus Management

**Logical Tab Sequence:**
1. **Skip Links** (hidden, visible on focus)
2. **Main Navigation** (horizontal menu items)
3. **Page Content** (headings, interactive elements)
4. **Sidebar/Secondary Navigation** (if present)
5. **Footer Links** (contact, legal, social)

**Skip Link Implementation:**
```html
<a 
  href="#main-content" 
  className="skip-link"
  style={{
    position: 'absolute',
    left: '-9999px',
    zIndex: 999,
    padding: '8px 16px',
    background: '#1565C0',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0 0 4px 4px'
  }}
  onFocus={(e) => {
    e.target.style.left = '0';
    e.target.style.top = '0';
  }}
  onBlur={(e) => {
    e.target.style.left = '-9999px';
  }}
>
  Skip to main content
</a>
```

**Focus Trap for Modals:**
```javascript
// Modal focus management
const Modal = ({ open, onClose, children }) => {
  const modalRef = useRef();
  const firstFocusableRef = useRef();
  const lastFocusableRef = useRef();

  useEffect(() => {
    if (open) {
      firstFocusableRef.current?.focus();
    }
  }, [open]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
    
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current?.focus();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <DialogTitle id="modal-title" ref={firstFocusableRef} tabIndex={-1}>
        Application Details
      </DialogTitle>
      <DialogContent id="modal-description">
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          ref={lastFocusableRef}
          variant="contained" 
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
```

**Keyboard Shortcuts:**
```html
<!-- Global keyboard shortcuts -->
<div
  onKeyDown={(e) => {
    // Alt + M: Main menu
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      mainMenuRef.current?.focus();
    }
    
    // Alt + S: Search
    if (e.altKey && e.key === 's') {
      e.preventDefault();
      searchInputRef.current?.focus();
    }
    
    // Escape: Close overlays
    if (e.key === 'Escape') {
      closeAllOverlays();
    }
  }}
>
  {/* App content */}
</div>
```

#### Touch Target Specifications

**Minimum Touch Target Sizes (WCAG AAA: 44px x 44px)**

**Button Touch Targets:**
```css
/* Ensure minimum touch target size */
.MuiButton-root {
  min-height: 44px;
  min-width: 44px;
  padding: 10px 24px;
}

.MuiIconButton-root {
  width: 44px;
  height: 44px;
  padding: 10px;
}

/* Small buttons with adequate spacing */
.MuiButton-sizeSmall {
  min-height: 36px;
  margin: 4px; /* Ensures 44px total target area */
}
```

**Form Element Touch Targets:**
```css
.MuiTextField-root .MuiOutlinedInput-root {
  min-height: 44px;
}

.MuiCheckbox-root,
.MuiRadio-root {
  width: 44px;
  height: 44px;
  padding: 11px; /* 22px icon + 22px padding = 44px total */
}

.MuiSwitch-root {
  width: 58px; /* 34px track + 24px padding */
  height: 44px;
  padding: 12px;
}
```

**Navigation Touch Targets:**
```css
.MuiTab-root {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

.MuiListItem-button {
  min-height: 44px;
  padding: 8px 16px;
}

.MuiBottomNavigationAction-root {
  min-width: 44px;
  min-height: 44px;
  padding: 6px 12px;
}
```

### Multilingual Support Indicators

#### Language Selector Component

**Language Selector Design:**
```html
<FormControl variant="outlined" size="small">
  <InputLabel id="language-select-label">Language</InputLabel>
  <Select
    labelId="language-select-label"
    id="language-select"
    value={currentLanguage}
    onChange={handleLanguageChange}
    aria-label="Select interface language"
    startAdornment={
      <InputAdornment position="start">
        <LanguageIcon />
      </InputAdornment>
    }
  >
    <MenuItem value="en">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇺🇸</span>
        <span>English</span>
      </Box>
    </MenuItem>
    <MenuItem value="hi">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇮🇳</span>
        <span>हिन्दी (Hindi)</span>
      </Box>
    </MenuItem>
    <MenuItem value="mr">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇮🇳</span>
        <span>मराठी (Marathi)</span>
      </Box>
    </MenuItem>
    <MenuItem value="ta">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇮🇳</span>
        <span>தமிழ் (Tamil)</span>
      </Box>
    </MenuItem>
    <MenuItem value="te">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇮🇳</span>
        <span>తెలుగు (Telugu)</span>
      </Box>
    </MenuItem>
    <MenuItem value="kn">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇮🇳</span>
        <span>ಕನ್ನಡ (Kannada)</span>
      </Box>
    </MenuItem>
    <MenuItem value="gu">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇮🇳</span>
        <span>ગુજરાતી (Gujarati)</span>
      </Box>
    </MenuItem>
    <MenuItem value="bn">
      <Box display="flex" alignItems="center" gap={1}>
        <span>🇮🇳</span>
        <span>বাংলা (Bengali)</span>
      </Box>
    </MenuItem>
  </Select>
</FormControl>
```

#### Text Expansion Considerations for Hindi/Regional Languages

**Layout Flexibility for Text Expansion:**

**English to Hindi Text Expansion (30-50% increase):**
```css
/* Flexible button widths */
.MuiButton-root {
  min-width: fit-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive navigation labels */
.MuiTab-root {
  min-width: 90px; /* Accommodate longer Hindi labels */
  max-width: 200px;
}

/* Form labels with adequate space */
.MuiInputLabel-root {
  max-width: calc(100% - 24px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

**Typography Adjustments for Indian Languages:**
```css
/* Hindi/Devanagari script support */
html[lang="hi"] {
  font-family: 'Noto Sans Devanagari', 'Roboto', sans-serif;
  line-height: 1.7; /* Increased for better readability */
}

/* Tamil script support */
html[lang="ta"] {
  font-family: 'Noto Sans Tamil', 'Roboto', sans-serif;
  line-height: 1.8;
}

/* Telugu script support */
html[lang="te"] {
  font-family: 'Noto Sans Telugu', 'Roboto', sans-serif;
  line-height: 1.8;
}

/* Kannada script support */
html[lang="kn"] {
  font-family: 'Noto Sans Kannada', 'Roboto', sans-serif;
  line-height: 1.8;
}

/* Gujarati script support */
html[lang="gu"] {
  font-family: 'Noto Sans Gujarati', 'Roboto', sans-serif;
  line-height: 1.7;
}

/* Bengali script support */
html[lang="bn"] {
  font-family: 'Noto Sans Bengali', 'Roboto', sans-serif;
  line-height: 1.8;
}
```

**Responsive Text Containers:**
```css
/* Card titles with text expansion support */
.MuiCardHeader-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  min-height: 2.8em; /* 2 lines minimum */
}

/* Button text with overflow handling */
.MuiButton-root .MuiButton-label {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

/* Navigation menu items */
.MuiListItemText-primary {
  white-space: normal;
  word-wrap: break-word;
  hyphens: auto;
}
```

#### Right-to-Left Text Support Indicators

**RTL Layout Support (for Urdu/Arabic if needed):**
```css
/* RTL layout adjustments */
html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

html[dir="rtl"] .MuiDrawer-paperAnchorLeft {
  right: 0;
  left: auto;
}

html[dir="rtl"] .MuiDrawer-paperAnchorRight {
  left: 0;
  right: auto;
}

/* Icon positioning in RTL */
html[dir="rtl"] .MuiButton-startIcon {
  margin-left: 8px;
  margin-right: -4px;
}

html[dir="rtl"] .MuiButton-endIcon {
  margin-right: 8px;
  margin-left: -4px;
}

/* Form field adjustments */
html[dir="rtl"] .MuiOutlinedInput-adornedStart {
  padding-right: 14px;
  padding-left: 0;
}

html[dir="rtl"] .MuiOutlinedInput-adornedEnd {
  padding-left: 14px;
  padding-right: 0;
}
```

**Bidirectional Text Handling:**
```html
<!-- Mixed content with proper direction -->
<Typography
  variant="body1"
  dir="auto"
  style={{
    unicodeBidi: 'plaintext',
    textAlign: 'start'
  }}
>
  {translatedText}
</Typography>

<!-- Form inputs with RTL support -->
<TextField
  dir="auto"
  inputProps={{
    dir: 'auto',
    style: { textAlign: 'start' }
  }}
  label={t('businessName')}
  placeholder={t('enterBusinessName')}
/>
```

### Screen Reader Optimization

#### Live Regions for Dynamic Content

**Status Updates and Notifications:**
```html
<!-- Global status announcements -->
<div
  id="global-status"
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {globalStatusMessage}
</div>

<!-- Urgent alerts -->
<div
  id="urgent-alerts"
  aria-live="assertive"
  aria-atomic="true"
  className="sr-only"
>
  {urgentMessage}
</div>

<!-- Form validation announcements -->
<div
  id="form-status"
  aria-live="polite"
  aria-atomic="false"
>
  {formValidationMessage}
</div>
```

**Loading State Announcements:**
```html
<!-- Loading announcements -->
<div
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {isLoading ? 'Loading content, please wait' : ''}
</div>

<!-- Progress updates -->
<div
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {progressMessage}
</div>

<!-- Search results announcements -->
<div
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {searchResults.length > 0 
    ? `Found ${searchResults.length} results for "${searchQuery}"`
    : searchQuery 
      ? `No results found for "${searchQuery}"`
      : ''
  }
</div>
```

#### Semantic HTML Structure

**Proper Heading Hierarchy:**
```html
<!-- Page structure with proper heading levels -->
<main id="main-content">
  <h1>Government Schemes Dashboard</h1>
  
  <section aria-labelledby="active-schemes">
    <h2 id="active-schemes">Active Applications</h2>
    
    <article aria-labelledby="scheme-1">
      <h3 id="scheme-1">Startup India Seed Fund</h3>
      <h4>Application Status</h4>
      <p>Under Review</p>
      
      <h4>Required Documents</h4>
      <ul>
        <li>Business Plan</li>
        <li>Financial Projections</li>
      </ul>
    </article>
  </section>
  
  <section aria-labelledby="available-schemes">
    <h2 id="available-schemes">Available Schemes</h2>
    <!-- Scheme cards -->
  </section>
</main>
```

**Landmark Roles:**
```html
<body>
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <!-- Primary navigation -->
    </nav>
  </header>
  
  <main role="main" id="main-content">
    <!-- Main content -->
  </main>
  
  <aside role="complementary" aria-label="Related schemes">
    <!-- Sidebar content -->
  </aside>
  
  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
```

**Data Tables with Proper Structure:**
```html
<table role="table" aria-label="Government schemes comparison">
  <caption>
    Comparison of available government schemes for startups
  </caption>
  <thead>
    <tr>
      <th scope="col" id="scheme-name">
        <button
          aria-describedby="scheme-name"
          onClick={() => handleSort('name')}
        >
          Scheme Name
          <span aria-hidden="true">↕</span>
        </button>
      </th>
      <th scope="col" id="funding-amount">Funding Amount</th>
      <th scope="col" id="deadline">Application Deadline</th>
      <th scope="col" id="actions">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" headers="scheme-name">
        Startup India Seed Fund Scheme
      </th>
      <td headers="funding-amount">
        <span aria-label="20 lakh rupees">₹20,00,000</span>
      </td>
      <td headers="deadline">
        <time datetime="2024-12-31">December 31, 2024</time>
      </td>
      <td headers="actions">
        <Button
          size="small"
          aria-describedby="scheme-name"
        >
          Apply Now
        </Button>
      </td>
    </tr>
  </tbody>
</table>
```

### Implementation Guidelines

#### CSS Classes for Accessibility

**Screen Reader Only Content:**
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

**High Contrast Mode Support:**
```css
@media (prefers-contrast: high) {
  .MuiButton-outlined {
    border-width: 2px;
  }
  
  .MuiTextField-root .MuiOutlinedInput-root {
    border-width: 2px;
  }
  
  .focus-visible {
    outline-width: 3px;
  }
}
```

**Reduced Motion Support:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .MuiCollapse-root {
    transition: none !important;
  }
  
  .MuiSlide-root {
    transition: none !important;
  }
}
```

**Dark Mode Accessibility:**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --background-default: #121212;
    --background-paper: #1e1e1e;
    --primary-main: #90caf9;
    --focus-outline: #90caf9;
  }
  
  /* Ensure sufficient contrast in dark mode */
  .MuiButton-containedPrimary {
    background-color: #1976d2;
    color: #ffffff;
  }
  
  .focus-visible {
    outline-color: var(--focus-outline);
  }
}
```

This comprehensive accessibility specification ensures that all mockups meet WCAG AA standards and provide an inclusive experience for users with disabilities, while also supporting multilingual content and various assistive technologies.
## Of
fline and Connectivity-Aware Design Patterns

### Offline State Indicators and Messaging

#### Global Connectivity Status Banner

**Offline Status Banner (Top of Page)**
```html
<Alert
  severity="warning"
  variant="filled"
  sx={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1400,
    borderRadius: 0,
    justifyContent: 'center'
  }}
  icon={<WifiOffIcon />}
  action={
    <Button
      color="inherit"
      size="small"
      onClick={handleRetryConnection}
      startIcon={<RefreshIcon />}
    >
      Retry
    </Button>
  }
>
  You're currently offline. Some features may be limited.
</Alert>
```

**Component Specifications:**
- **Background**: `#F57C00` (theme.palette.warning.main)
- **Text Color**: `#FFFFFF` (white)
- **Height**: `48px` minimum
- **Position**: Fixed at top, above all content
- **Animation**: Slide down from top (300ms ease-out)
- **Icon**: WiFi off icon (24px)
- **Retry Button**: White outlined button with refresh icon

**Limited Connectivity Banner**
```html
<Alert
  severity="info"
  variant="outlined"
  sx={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1400,
    borderRadius: 0,
    backgroundColor: 'rgba(0, 105, 92, 0.1)',
    borderColor: '#00695C'
  }}
  icon={<SignalWifiStatusbar4BarIcon />}
>
  Slow connection detected. Content may take longer to load.
</Alert>
```

**Component Specifications:**
- **Background**: `rgba(0, 105, 92, 0.1)` (theme.palette.info.main with alpha)
- **Border**: `1px solid #00695C` (theme.palette.info.main)
- **Text Color**: `#00695C` (theme.palette.info.main)
- **Icon**: Signal strength icon with warning indicator

#### Page-Level Offline Indicators

**Dashboard Offline State**
```html
<Container maxWidth="lg" sx={{ py: 4 }}>
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="60vh"
    textAlign="center"
  >
    <CloudOffIcon
      sx={{
        fontSize: 120,
        color: 'text.secondary',
        mb: 3
      }}
    />
    <Typography variant="h4" gutterBottom color="textPrimary">
      You're Offline
    </Typography>
    <Typography variant="body1" color="textSecondary" sx={{ mb: 4, maxWidth: 500 }}>
      Don't worry! You can still view your saved schemes, drafts, and recently accessed content. 
      We'll sync your changes when you're back online.
    </Typography>
    
    <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
      <Button
        variant="contained"
        startIcon={<FolderIcon />}
        onClick={handleViewOfflineContent}
      >
        View Saved Content
      </Button>
      <Button
        variant="outlined"
        startIcon={<RefreshIcon />}
        onClick={handleRetryConnection}
      >
        Try Again
      </Button>
    </Box>
    
    <Box mt={4} p={2} bgcolor="grey.50" borderRadius={1} maxWidth={400}>
      <Typography variant="caption" color="textSecondary">
        <InfoIcon sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }} />
        Offline features: View saved schemes, edit drafts, access help documentation
      </Typography>
    </Box>
  </Box>
</Container>
```

**Component Specifications:**
- **Icon Size**: 120px, secondary text color
- **Heading**: H4 typography, primary text color
- **Description**: Body1 typography, secondary text color, max-width 500px
- **Buttons**: Standard contained and outlined variants
- **Info Box**: Light grey background, rounded corners, caption text

#### Component-Level Offline States

**Form Offline State**
```html
<Paper elevation={1} sx={{ p: 3, position: 'relative' }}>
  {/* Offline overlay */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      borderRadius: 1
    }}
  >
    <Box textAlign="center">
      <WifiOffIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
      <Typography variant="h6" gutterBottom>
        Offline Mode
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        This form requires an internet connection
      </Typography>
      <Button
        variant="outlined"
        size="small"
        startIcon={<RefreshIcon />}
        onClick={handleRetryConnection}
      >
        Retry Connection
      </Button>
    </Box>
  </Box>
  
  {/* Form content (disabled) */}
  <form>
    <TextField
      fullWidth
      label="Business Name"
      disabled
      sx={{ mb: 2 }}
    />
    <TextField
      fullWidth
      label="Description"
      multiline
      rows={4}
      disabled
      sx={{ mb: 2 }}
    />
    <Button
      variant="contained"
      disabled
      fullWidth
    >
      Submit Application
    </Button>
  </form>
</Paper>
```

**Offline Card State**
```html
<Card sx={{ position: 'relative', opacity: 0.7 }}>
  <Box
    sx={{
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 1
    }}
  >
    <Chip
      icon={<WifiOffIcon />}
      label="Offline"
      size="small"
      color="default"
      variant="outlined"
    />
  </Box>
  
  <CardContent>
    <Typography variant="h6" gutterBottom>
      Startup India Seed Fund
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Last updated 2 hours ago
    </Typography>
  </CardContent>
  
  <CardActions>
    <Button size="small" disabled>
      Apply Now
    </Button>
    <Button size="small" color="primary">
      View Details
    </Button>
  </CardActions>
</Card>
```

### Sync Status and Data Freshness Indicators

#### Data Freshness Timestamps

**Last Updated Indicator**
```html
<Box
  display="flex"
  alignItems="center"
  gap={1}
  sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
>
  <AccessTimeIcon sx={{ fontSize: 16 }} />
  <Typography variant="caption">
    Last updated: {formatDistanceToNow(lastUpdated)} ago
  </Typography>
  {isStale && (
    <Chip
      label="May be outdated"
      size="small"
      color="warning"
      variant="outlined"
      sx={{ ml: 1 }}
    />
  )}
</Box>
```

**Sync Status Indicators**
```html
<Box display="flex" alignItems="center" gap={1}>
  {syncStatus === 'syncing' && (
    <>
      <CircularProgress size={16} />
      <Typography variant="caption" color="primary">
        Syncing...
      </Typography>
    </>
  )}
  
  {syncStatus === 'synced' && (
    <>
      <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
      <Typography variant="caption" color="success.main">
        Up to date
      </Typography>
    </>
  )}
  
  {syncStatus === 'error' && (
    <>
      <ErrorIcon sx={{ fontSize: 16, color: 'error.main' }} />
      <Typography variant="caption" color="error.main">
        Sync failed
      </Typography>
      <Button
        size="small"
        color="error"
        onClick={handleRetrySync}
      >
        Retry
      </Button>
    </>
  )}
  
  {syncStatus === 'offline' && (
    <>
      <WifiOffIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
      <Typography variant="caption" color="textSecondary">
        Offline
      </Typography>
    </>
  )}
</Box>
```

#### Pending Changes Indicator

**Unsaved Changes Banner**
```html
<Alert
  severity="info"
  variant="outlined"
  sx={{
    mb: 2,
    backgroundColor: 'rgba(21, 101, 192, 0.04)'
  }}
  icon={<SaveIcon />}
  action={
    <Box display="flex" gap={1}>
      <Button
        color="primary"
        size="small"
        onClick={handleSaveChanges}
      >
        Save Now
      </Button>
      <Button
        color="inherit"
        size="small"
        onClick={handleDiscardChanges}
      >
        Discard
      </Button>
    </Box>
  }
>
  You have unsaved changes that will be synced when you're back online.
</Alert>
```

**Pending Sync Queue**
```html
<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Box display="flex" alignItems="center" gap={2}>
      <Badge badgeContent={pendingItems.length} color="primary">
        <SyncIcon />
      </Badge>
      <Typography>
        Pending Sync ({pendingItems.length} items)
      </Typography>
    </Box>
  </AccordionSummary>
  <AccordionDetails>
    <List>
      {pendingItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            {item.type === 'create' && <AddIcon />}
            {item.type === 'update' && <EditIcon />}
            {item.type === 'delete' && <DeleteIcon />}
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            secondary={`${item.type} • ${formatDistanceToNow(item.timestamp)} ago`}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              onClick={() => handleRemoveFromQueue(item.id)}
              aria-label="Remove from sync queue"
            >
              <CloseIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </AccordionDetails>
</Accordion>
```

### Offline-First Interaction Patterns

#### Optimistic UI Updates

**Form Submission with Optimistic Update**
```html
<form onSubmit={handleOptimisticSubmit}>
  <TextField
    fullWidth
    label="Scheme Name"
    value={formData.name}
    onChange={handleInputChange}
    sx={{ mb: 2 }}
  />
  
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Button
      type="submit"
      variant="contained"
      disabled={isSubmitting}
      startIcon={isSubmitting ? <CircularProgress size={20} /> : <SaveIcon />}
    >
      {isSubmitting ? 'Saving...' : 'Save Scheme'}
    </Button>
    
    {showOptimisticFeedback && (
      <Chip
        icon={<CloudQueueIcon />}
        label="Saved locally"
        size="small"
        color="info"
        variant="outlined"
      />
    )}
  </Box>
  
  {submitError && (
    <Alert severity="error" sx={{ mt: 2 }}>
      Failed to sync. Changes saved locally and will sync when online.
      <Button
        color="inherit"
        size="small"
        onClick={handleRetrySubmit}
        sx={{ ml: 2 }}
      >
        Retry Now
      </Button>
    </Alert>
  )}
</form>
```

#### Cached Content Indicators

**Cached Content Card**
```html
<Card sx={{ position: 'relative' }}>
  <Box
    sx={{
      position: 'absolute',
      top: 8,
      left: 8,
      zIndex: 1
    }}
  >
    <Tooltip title="Viewing cached version">
      <Chip
        icon={<StorageIcon />}
        label="Cached"
        size="small"
        color="default"
        variant="outlined"
      />
    </Tooltip>
  </Box>
  
  <CardContent sx={{ pt: 5 }}>
    <Typography variant="h6" gutterBottom>
      Government Scheme Details
    </Typography>
    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
      Last synced: 3 hours ago
    </Typography>
    <Typography variant="body1">
      This content was saved for offline viewing. Some information may be outdated.
    </Typography>
  </CardContent>
  
  <CardActions>
    <Button
      size="small"
      startIcon={<RefreshIcon />}
      onClick={handleRefreshContent}
      disabled={!isOnline}
    >
      Refresh
    </Button>
    <Button size="small" color="primary">
      View Cached Version
    </Button>
  </CardActions>
</Card>
```

#### Progressive Enhancement Patterns

**Feature Degradation for Offline**
```html
<Box>
  {/* Full feature when online */}
  {isOnline ? (
    <Button
      variant="contained"
      startIcon={<CloudUploadIcon />}
      onClick={handleCloudUpload}
    >
      Upload to Cloud
    </Button>
  ) : (
    <Button
      variant="outlined"
      startIcon={<SaveIcon />}
      onClick={handleLocalSave}
    >
      Save Locally
    </Button>
  )}
  
  {/* Search with offline fallback */}
  <TextField
    fullWidth
    label={isOnline ? "Search all schemes" : "Search saved schemes"}
    placeholder={isOnline ? "Search 500+ schemes..." : "Search your saved content..."}
    value={searchQuery}
    onChange={handleSearch}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
      endAdornment: !isOnline && (
        <InputAdornment position="end">
          <Tooltip title="Offline search - limited to saved content">
            <WifiOffIcon color="disabled" />
          </Tooltip>
        </InputAdornment>
      )
    }}
  />
</Box>
```

### Connectivity Restoration Flow Designs

#### Connection Restored Notification

**Reconnection Success Banner**
```html
<Snackbar
  open={showReconnectionSuccess}
  autoHideDuration={6000}
  onClose={handleCloseReconnection}
  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
>
  <Alert
    onClose={handleCloseReconnection}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
    action={
      <Button
        color="inherit"
        size="small"
        onClick={handleSyncNow}
      >
        Sync Now
      </Button>
    }
  >
    Connection restored! Syncing your changes...
  </Alert>
</Snackbar>
```

#### Automatic Sync Progress

**Sync Progress Dialog**
```html
<Dialog
  open={showSyncProgress}
  disableEscapeKeyDown
  maxWidth="sm"
  fullWidth
>
  <DialogTitle>
    <Box display="flex" alignItems="center" gap={2}>
      <SyncIcon />
      Syncing Your Data
    </Box>
  </DialogTitle>
  
  <DialogContent>
    <Box sx={{ mb: 3 }}>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Uploading your offline changes...
      </Typography>
      <LinearProgress
        variant="determinate"
        value={syncProgress}
        sx={{ mb: 1 }}
      />
      <Typography variant="caption" color="textSecondary">
        {syncedItems}/{totalItems} items synced
      </Typography>
    </Box>
    
    <List dense>
      {syncItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            {item.status === 'synced' && <CheckCircleIcon color="success" />}
            {item.status === 'syncing' && <CircularProgress size={20} />}
            {item.status === 'pending' && <RadioButtonUncheckedIcon color="disabled" />}
            {item.status === 'error' && <ErrorIcon color="error" />}
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            secondary={item.status === 'error' ? 'Failed to sync' : item.type}
          />
        </ListItem>
      ))}
    </List>
  </DialogContent>
  
  <DialogActions>
    <Button
      onClick={handleCancelSync}
      disabled={syncProgress > 0}
    >
      Cancel
    </Button>
    <Button
      onClick={handleContinueOffline}
      variant="outlined"
    >
      Continue Offline
    </Button>
  </DialogActions>
</Dialog>
```

#### Conflict Resolution Interface

**Data Conflict Resolution**
```html
<Dialog
  open={showConflictResolution}
  maxWidth="md"
  fullWidth
>
  <DialogTitle>
    <Box display="flex" alignItems="center" gap={2}>
      <WarningIcon color="warning" />
      Resolve Data Conflicts
    </Box>
  </DialogTitle>
  
  <DialogContent>
    <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
      We found conflicts between your offline changes and the server version. 
      Please choose which version to keep.
    </Typography>
    
    {conflicts.map((conflict, index) => (
      <Paper key={index} elevation={1} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          {conflict.itemName}
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                border: conflict.selectedVersion === 'local' ? 2 : 1,
                borderColor: conflict.selectedVersion === 'local' ? 'primary.main' : 'grey.300',
                borderRadius: 1,
                p: 2,
                cursor: 'pointer'
              }}
              onClick={() => handleSelectVersion(conflict.id, 'local')}
            >
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Radio
                  checked={conflict.selectedVersion === 'local'}
                  onChange={() => handleSelectVersion(conflict.id, 'local')}
                />
                <Typography variant="subtitle2">Your Version (Offline)</Typography>
                <Chip label="Local" size="small" color="info" />
              </Box>
              <Typography variant="body2" color="textSecondary">
                Modified: {formatDistanceToNow(conflict.localTimestamp)} ago
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {conflict.localContent}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={6}>
            <Box
              sx={{
                border: conflict.selectedVersion === 'server' ? 2 : 1,
                borderColor: conflict.selectedVersion === 'server' ? 'primary.main' : 'grey.300',
                borderRadius: 1,
                p: 2,
                cursor: 'pointer'
              }}
              onClick={() => handleSelectVersion(conflict.id, 'server')}
            >
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Radio
                  checked={conflict.selectedVersion === 'server'}
                  onChange={() => handleSelectVersion(conflict.id, 'server')}
                />
                <Typography variant="subtitle2">Server Version</Typography>
                <Chip label="Online" size="small" color="success" />
              </Box>
              <Typography variant="body2" color="textSecondary">
                Modified: {formatDistanceToNow(conflict.serverTimestamp)} ago
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {conflict.serverContent}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    ))}
  </DialogContent>
  
  <DialogActions>
    <Button onClick={handleCancelResolution}>
      Cancel
    </Button>
    <Button
      onClick={handleKeepBothVersions}
      variant="outlined"
    >
      Keep Both
    </Button>
    <Button
      onClick={handleResolveConflicts}
      variant="contained"
      disabled={!allConflictsResolved}
    >
      Resolve Conflicts
    </Button>
  </DialogActions>
</Dialog>
```

### Offline Content Management

#### Offline Storage Indicators

**Storage Usage Display**
```html
<Paper elevation={1} sx={{ p: 2 }}>
  <Box display="flex" alignItems="center" gap={2} mb={2}>
    <StorageIcon />
    <Typography variant="h6">Offline Storage</Typography>
  </Box>
  
  <Box sx={{ mb: 2 }}>
    <Box display="flex" justifyContent="space-between" mb={1}>
      <Typography variant="body2">Used Storage</Typography>
      <Typography variant="body2">
        {formatBytes(usedStorage)} / {formatBytes(totalStorage)}
      </Typography>
    </Box>
    <LinearProgress
      variant="determinate"
      value={(usedStorage / totalStorage) * 100}
      color={storageUsage > 80 ? 'warning' : 'primary'}
    />
  </Box>
  
  <List dense>
    <ListItem>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText
        primary="Saved Schemes"
        secondary={`${savedSchemes.length} items • ${formatBytes(schemesStorage)}`}
      />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText
        primary="Draft Applications"
        secondary={`${draftApplications.length} items • ${formatBytes(draftsStorage)}`}
      />
    </ListItem>
    <ListItem>
      <ListItemIcon>
        <ImageIcon />
      </ListItemIcon>
      <ListItemText
        primary="Cached Images"
        secondary={`${cachedImages.length} items • ${formatBytes(imagesStorage)}`}
      />
    </ListItem>
  </List>
  
  <Box display="flex" gap={1} mt={2}>
    <Button
      variant="outlined"
      size="small"
      startIcon={<DeleteSweepIcon />}
      onClick={handleClearCache}
    >
      Clear Cache
    </Button>
    <Button
      variant="outlined"
      size="small"
      startIcon={<SettingsIcon />}
      onClick={handleStorageSettings}
    >
      Settings
    </Button>
  </Box>
</Paper>
```

#### Offline Download Options

**Content Download Interface**
```html
<Card>
  <CardHeader
    title="Download for Offline"
    subheader="Save content to access without internet"
    action={
      <IconButton onClick={handleToggleDownloadOptions}>
        <MoreVertIcon />
      </IconButton>
    }
  />
  
  <CardContent>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={downloadOptions.schemes}
            onChange={handleDownloadOptionChange('schemes')}
          />
        }
        label={
          <Box>
            <Typography variant="body2">Government Schemes</Typography>
            <Typography variant="caption" color="textSecondary">
              ~2.5 MB • Updated daily
            </Typography>
          </Box>
        }
      />
      
      <FormControlLabel
        control={
          <Checkbox
            checked={downloadOptions.forms}
            onChange={handleDownloadOptionChange('forms')}
          />
        }
        label={
          <Box>
            <Typography variant="body2">Application Forms</Typography>
            <Typography variant="caption" color="textSecondary">
              ~1.2 MB • Templates and examples
            </Typography>
          </Box>
        }
      />
      
      <FormControlLabel
        control={
          <Checkbox
            checked={downloadOptions.guides}
            onChange={handleDownloadOptionChange('guides')}
          />
        }
        label={
          <Box>
            <Typography variant="body2">Help Guides</Typography>
            <Typography variant="caption" color="textSecondary">
              ~800 KB • Step-by-step instructions
            </Typography>
          </Box>
        }
      />
    </FormGroup>
    
    <Box mt={2} p={2} bgcolor="grey.50" borderRadius={1}>
      <Typography variant="caption" color="textSecondary">
        Total download size: {calculateTotalSize()} • 
        Last updated: {formatDistanceToNow(lastUpdate)} ago
      </Typography>
    </Box>
  </CardContent>
  
  <CardActions>
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={handleStartDownload}
      disabled={!hasSelectedContent || isDownloading}
    >
      {isDownloading ? 'Downloading...' : 'Download Selected'}
    </Button>
    <Button
      variant="outlined"
      onClick={handleScheduleDownload}
    >
      Schedule for WiFi
    </Button>
  </CardActions>
</Card>
```

### Implementation Guidelines

#### Service Worker Integration

**Offline Capability Detection**
```javascript
// Service worker registration and offline detection
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  }
};

// Network status monitoring
const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Detect connection type if available
    if ('connection' in navigator) {
      setConnectionType(navigator.connection.effectiveType);
      navigator.connection.addEventListener('change', () => {
        setConnectionType(navigator.connection.effectiveType);
      });
    }
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, connectionType };
};
```

#### Offline-First Data Patterns

**Local Storage Management**
```javascript
// Offline data management utilities
const OfflineDataManager = {
  // Save data with timestamp
  saveData: (key, data) => {
    const item = {
      data,
      timestamp: Date.now(),
      version: 1
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  // Get data with freshness check
  getData: (key, maxAge = 24 * 60 * 60 * 1000) => { // 24 hours default
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const parsed = JSON.parse(item);
    const isStale = Date.now() - parsed.timestamp > maxAge;
    
    return {
      data: parsed.data,
      timestamp: parsed.timestamp,
      isStale
    };
  },
  
  // Queue operations for sync
  queueOperation: (operation) => {
    const queue = JSON.parse(localStorage.getItem('syncQueue') || '[]');
    queue.push({
      ...operation,
      id: Date.now(),
      timestamp: Date.now()
    });
    localStorage.setItem('syncQueue', JSON.stringify(queue));
  },
  
  // Process sync queue
  processSyncQueue: async () => {
    const queue = JSON.parse(localStorage.getItem('syncQueue') || '[]');
    const results = [];
    
    for (const operation of queue) {
      try {
        await processOperation(operation);
        results.push({ ...operation, status: 'success' });
      } catch (error) {
        results.push({ ...operation, status: 'error', error: error.message });
      }
    }
    
    // Remove successful operations from queue
    const failedOperations = results.filter(r => r.status === 'error');
    localStorage.setItem('syncQueue', JSON.stringify(failedOperations));
    
    return results;
  }
};
```

This comprehensive offline and connectivity-aware design system ensures users can continue working productively even without internet access, with clear indicators of data freshness, sync status, and seamless restoration when connectivity returns.
## Develop
er Implementation Guidelines

### Comprehensive Component Specification Format

This section provides exact Material-UI component props, CSS custom properties, animation specifications, and responsive behavior documentation for all mockup elements.

#### Component Specification Template

Each component in the mockups follows this standardized specification format:

```typescript
// Component Name: [Material-UI Component Name]
// Usage Context: [Where and when to use this component]

interface ComponentSpecification {
  // Material-UI Props
  component: string;           // Base Material-UI component
  variant?: string;           // Component variant (if applicable)
  color?: string;             // Color theme (primary, secondary, etc.)
  size?: string;              // Size variant (small, medium, large)
  
  // Layout & Spacing (using theme.spacing())
  padding?: string | number;   // Internal spacing
  margin?: string | number;    // External spacing
  width?: string | number;     // Component width
  height?: string | number;    // Component height
  
  // Visual Properties
  backgroundColor?: string;    // Background color (theme reference)
  color?: string;             // Text/icon color (theme reference)
  border?: string;            // Border specification
  borderRadius?: string;      // Border radius (theme.shape.borderRadius)
  boxShadow?: string;         // Elevation/shadow
  
  // Typography (when applicable)
  fontSize?: string;          // Font size (theme.typography reference)
  fontWeight?: number;        // Font weight
  lineHeight?: string;        // Line height
  textTransform?: string;     // Text transformation
  
  // Interactive States
  hover?: object;             // Hover state overrides
  active?: object;            // Active/pressed state overrides
  focus?: object;             // Focus state overrides
  disabled?: object;          // Disabled state overrides
  
  // Responsive Behavior
  breakpoints?: {
    xs?: object;              // Mobile (0px+)
    sm?: object;              // Small tablet (600px+)
    md?: object;              // Tablet (900px+)
    lg?: object;              // Desktop (1200px+)
    xl?: object;              // Large desktop (1536px+)
  };
  
  // Animation & Transitions
  transition?: string;        // CSS transition specification
  animation?: string;         // CSS animation specification
  transform?: string;         // CSS transform specification
  
  // Accessibility
  'aria-label'?: string;      // Accessible name
  'aria-describedby'?: string; // Associated description
  role?: string;              // ARIA role
  tabIndex?: number;          // Tab order
}
```

#### Primary Button Component Specification

```typescript
// Component: Primary Call-to-Action Button
// Usage: Main actions, form submissions, primary navigation

const PrimaryButtonSpec: ComponentSpecification = {
  // Material-UI Props
  component: 'Button',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  
  // Layout & Spacing
  padding: 'theme.spacing(1.25, 3)', // 10px 24px
  minWidth: '64px',
  minHeight: '36px',
  
  // Visual Properties
  backgroundColor: 'theme.palette.primary.main', // #1565C0
  color: '#FFFFFF',
  border: 'none',
  borderRadius: 'theme.shape.borderRadius', // 4px
  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  
  // Typography
  fontSize: 'theme.typography.button.fontSize', // 0.875rem
  fontWeight: 'theme.typography.button.fontWeight', // 500
  lineHeight: 'theme.typography.button.lineHeight', // 1.75
  textTransform: 'theme.typography.button.textTransform', // uppercase
  
  // Interactive States
  hover: {
    backgroundColor: 'theme.palette.primary.dark', // #0D47A1
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  active: {
    backgroundColor: 'theme.palette.primary.dark',
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
    transform: 'scale(0.98)',
  },
  focus: {
    outline: '2px solid theme.palette.primary.light', // #42A5F5
    outlineOffset: '2px',
  },
  disabled: {
    backgroundColor: 'theme.palette.action.disabledBackground',
    color: 'theme.palette.action.disabled',
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
  
  // Responsive Behavior
  breakpoints: {
    xs: {
      padding: 'theme.spacing(1, 2)', // 8px 16px on mobile
      fontSize: '0.8125rem', // Slightly smaller on mobile
    },
    sm: {
      padding: 'theme.spacing(1.25, 3)', // Default padding
    },
  },
  
  // Animation & Transitions
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  
  // Accessibility
  'aria-label': 'Primary action button',
  role: 'button',
  tabIndex: 0,
};

// Implementation Example:
<Button
  variant="contained"
  color="primary"
  sx={{
    padding: theme.spacing(1.25, 3),
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:focus-visible': {
      outline: `2px solid ${theme.palette.primary.light}`,
      outlineOffset: '2px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2),
      fontSize: '0.8125rem',
    },
  }}
>
  Button Text
</Button>
```

#### Text Input Field Component Specification

```typescript
// Component: Text Input Field
// Usage: Form inputs, search fields, data entry

const TextFieldSpec: ComponentSpecification = {
  // Material-UI Props
  component: 'TextField',
  variant: 'outlined',
  fullWidth: true,
  
  // Layout & Spacing
  margin: 'theme.spacing(1, 0)', // 8px vertical margin
  
  // Visual Properties - Default State
  backgroundColor: 'theme.palette.background.paper', // #FFFFFF
  border: '1px solid rgba(0, 0, 0, 0.23)',
  borderRadius: 'theme.shape.borderRadius', // 4px
  
  // Typography
  fontSize: 'theme.typography.body1.fontSize', // 1rem
  fontWeight: 'theme.typography.body1.fontWeight', // 400
  lineHeight: '1.4375em',
  
  // Interactive States
  focus: {
    border: '2px solid theme.palette.primary.main', // #1565C0
    '& .MuiInputLabel-root': {
      color: 'theme.palette.primary.main',
    },
  },
  error: {
    border: '2px solid theme.palette.error.main', // #D32F2F
    '& .MuiInputLabel-root': {
      color: 'theme.palette.error.main',
    },
    '& .MuiFormHelperText-root': {
      color: 'theme.palette.error.main',
    },
  },
  disabled: {
    backgroundColor: 'theme.palette.action.disabledBackground',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    color: 'theme.palette.action.disabled',
    cursor: 'not-allowed',
  },
  
  // Responsive Behavior
  breakpoints: {
    xs: {
      '& .MuiInputBase-input': {
        padding: 'theme.spacing(1.5, 1.75)', // Adjusted padding for mobile
      },
    },
    sm: {
      '& .MuiInputBase-input': {
        padding: 'theme.spacing(2.0625, 1.75)', // Default padding
      },
    },
  },
  
  // Animation & Transitions
  transition: 'border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  
  // Accessibility
  'aria-describedby': 'helper-text-id',
  role: 'textbox',
};

// Implementation Example:
<TextField
  variant="outlined"
  fullWidth
  label="Field Label"
  helperText="Helper text"
  sx={{
    margin: theme.spacing(1, 0),
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
      },
      '&.Mui-error fieldset': {
        borderColor: theme.palette.error.main,
        borderWidth: '2px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiInputBase-input': {
        padding: theme.spacing(1.5, 1.75),
      },
    },
  }}
/>
```

#### Card Component Specification

```typescript
// Component: Content Card
// Usage: Content containers, feature highlights, information display

const CardSpec: ComponentSpecification = {
  // Material-UI Props
  component: 'Card',
  elevation: 2,
  
  // Layout & Spacing
  padding: 'theme.spacing(3)', // 24px
  margin: 'theme.spacing(2, 0)', // 16px vertical margin
  borderRadius: 'theme.shape.borderRadius', // 4px
  
  // Visual Properties
  backgroundColor: 'theme.palette.background.paper', // #FFFFFF
  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
  
  // Interactive States
  hover: {
    elevation: 4,
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    transform: 'translateY(-2px)',
  },
  
  // Responsive Behavior
  breakpoints: {
    xs: {
      padding: 'theme.spacing(2)', // 16px on mobile
      margin: 'theme.spacing(1, 0)', // 8px vertical margin
    },
    sm: {
      padding: 'theme.spacing(3)', // Default padding
      margin: 'theme.spacing(2, 0)', // Default margin
    },
  },
  
  // Animation & Transitions
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  
  // Accessibility
  role: 'article',
  tabIndex: 0,
};

// Implementation Example:
<Card
  elevation={2}
  sx={{
    padding: theme.spacing(3),
    margin: theme.spacing(2, 0),
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      boxShadow: theme.shadows[4],
      transform: 'translateY(-2px)',
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      margin: theme.spacing(1, 0),
    },
  }}
>
  <CardContent>
    {/* Card content */}
  </CardContent>
</Card>
```

### CSS Custom Properties for Theme Overrides

#### Color System Custom Properties

```css
:root {
  /* Primary Color System */
  --mui-palette-primary-main: #1565C0;
  --mui-palette-primary-light: #42A5F5;
  --mui-palette-primary-dark: #0D47A1;
  --mui-palette-primary-contrast-text: #FFFFFF;
  
  /* Secondary Color System (Indian Saffron) */
  --mui-palette-secondary-main: #FF9933;
  --mui-palette-secondary-light: #FFB74D;
  --mui-palette-secondary-dark: #F57C00;
  --mui-palette-secondary-contrast-text: #FFFFFF;
  
  /* Semantic Colors */
  --mui-palette-success-main: #388E3C;
  --mui-palette-success-light: #66BB6A;
  --mui-palette-success-dark: #2E7D32;
  
  --mui-palette-warning-main: #F57C00;
  --mui-palette-warning-light: #FFB74D;
  --mui-palette-warning-dark: #E65100;
  
  --mui-palette-error-main: #D32F2F;
  --mui-palette-error-light: #EF5350;
  --mui-palette-error-dark: #C62828;
  
  --mui-palette-info-main: #00695C;
  --mui-palette-info-light: #4DB6AC;
  --mui-palette-info-dark: #004D40;
  
  /* Background Colors */
  --mui-palette-background-default: #FAFAFA;
  --mui-palette-background-paper: #FFFFFF;
  
  /* Text Colors */
  --mui-palette-text-primary: #212121;
  --mui-palette-text-secondary: #757575;
  --mui-palette-text-disabled: rgba(0, 0, 0, 0.26);
  
  /* Action Colors */
  --mui-palette-action-active: rgba(0, 0, 0, 0.54);
  --mui-palette-action-hover: rgba(0, 0, 0, 0.04);
  --mui-palette-action-selected: rgba(0, 0, 0, 0.08);
  --mui-palette-action-disabled: rgba(0, 0, 0, 0.26);
  --mui-palette-action-disabled-background: rgba(0, 0, 0, 0.12);
}
```

#### Spacing System Custom Properties

```css
:root {
  /* Base Spacing Unit (8px) */
  --mui-spacing-unit: 8px;
  
  /* Spacing Scale */
  --mui-spacing-0-5: calc(var(--mui-spacing-unit) * 0.5); /* 4px */
  --mui-spacing-1: var(--mui-spacing-unit); /* 8px */
  --mui-spacing-1-5: calc(var(--mui-spacing-unit) * 1.5); /* 12px */
  --mui-spacing-2: calc(var(--mui-spacing-unit) * 2); /* 16px */
  --mui-spacing-2-5: calc(var(--mui-spacing-unit) * 2.5); /* 20px */
  --mui-spacing-3: calc(var(--mui-spacing-unit) * 3); /* 24px */
  --mui-spacing-4: calc(var(--mui-spacing-unit) * 4); /* 32px */
  --mui-spacing-5: calc(var(--mui-spacing-unit) * 5); /* 40px */
  --mui-spacing-6: calc(var(--mui-spacing-unit) * 6); /* 48px */
  --mui-spacing-8: calc(var(--mui-spacing-unit) * 8); /* 64px */
  --mui-spacing-10: calc(var(--mui-spacing-unit) * 10); /* 80px */
  --mui-spacing-12: calc(var(--mui-spacing-unit) * 12); /* 96px */
}
```

#### Typography System Custom Properties

```css
:root {
  /* Font Family */
  --mui-typography-font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  
  /* Font Weights */
  --mui-typography-font-weight-light: 300;
  --mui-typography-font-weight-regular: 400;
  --mui-typography-font-weight-medium: 500;
  --mui-typography-font-weight-bold: 700;
  
  /* Font Sizes */
  --mui-typography-h1-font-size: 3rem; /* 48px */
  --mui-typography-h2-font-size: 2.25rem; /* 36px */
  --mui-typography-h3-font-size: 1.5rem; /* 24px */
  --mui-typography-h4-font-size: 1.25rem; /* 20px */
  --mui-typography-h5-font-size: 1.125rem; /* 18px */
  --mui-typography-h6-font-size: 1rem; /* 16px */
  --mui-typography-body1-font-size: 1rem; /* 16px */
  --mui-typography-body2-font-size: 0.875rem; /* 14px */
  --mui-typography-caption-font-size: 0.75rem; /* 12px */
  --mui-typography-button-font-size: 0.875rem; /* 14px */
  
  /* Line Heights */
  --mui-typography-h1-line-height: 1.2;
  --mui-typography-h2-line-height: 1.3;
  --mui-typography-h3-line-height: 1.4;
  --mui-typography-h4-line-height: 1.4;
  --mui-typography-h5-line-height: 1.4;
  --mui-typography-h6-line-height: 1.4;
  --mui-typography-body1-line-height: 1.6;
  --mui-typography-body2-line-height: 1.5;
  --mui-typography-caption-line-height: 1.4;
  --mui-typography-button-line-height: 1.75;
}
```

#### Shape and Border Custom Properties

```css
:root {
  /* Border Radius */
  --mui-shape-border-radius: 4px;
  --mui-shape-border-radius-small: 2px;
  --mui-shape-border-radius-large: 8px;
  
  /* Elevation/Shadow System */
  --mui-shadow-1: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  --mui-shadow-2: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  --mui-shadow-3: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  --mui-shadow-4: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  --mui-shadow-6: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  --mui-shadow-8: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
}
```

### Animation and Transition Timing Specifications

#### Standard Transition Timings

```css
:root {
  /* Easing Functions */
  --mui-easing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --mui-easing-ease-out: cubic-bezier(0.0, 0, 0.2, 1);
  --mui-easing-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --mui-easing-sharp: cubic-bezier(0.4, 0, 0.6, 1);
  
  /* Duration Values */
  --mui-duration-shortest: 150ms;
  --mui-duration-shorter: 200ms;
  --mui-duration-short: 250ms;
  --mui-duration-standard: 300ms;
  --mui-duration-complex: 375ms;
  --mui-duration-entering-screen: 225ms;
  --mui-duration-leaving-screen: 195ms;
}
```

#### Component-Specific Animation Specifications

```typescript
// Button Animations
const ButtonAnimations = {
  // Hover transition
  hover: {
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    duration: '250ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Press/Active animation
  active: {
    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
    transform: 'scale(0.98)',
    duration: '150ms',
    easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  
  // Ripple effect
  ripple: {
    animation: 'mui-ripple-enter 550ms cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '550ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Card Animations
const CardAnimations = {
  // Hover elevation
  hover: {
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    transform: 'translateY(-2px)',
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Entry animation
  enter: {
    animation: 'mui-card-enter 225ms cubic-bezier(0.0, 0, 0.2, 1)',
    duration: '225ms',
    easing: 'cubic-bezier(0.0, 0, 0.2, 1)',
  },
};

// Form Field Animations
const FormFieldAnimations = {
  // Label float animation
  labelFloat: {
    transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    duration: '200ms',
    easing: 'cubic-bezier(0.0, 0, 0.2, 1)',
  },
  
  // Border color transition
  borderColor: {
    transition: 'border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    duration: '200ms',
    easing: 'cubic-bezier(0.0, 0, 0.2, 1)',
  },
  
  // Error state animation
  error: {
    animation: 'mui-error-shake 200ms cubic-bezier(0.4, 0, 0.6, 1)',
    duration: '200ms',
    easing: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};
```

#### Keyframe Animations

```css
/* Ripple Effect Animation */
@keyframes mui-ripple-enter {
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}

@keyframes mui-ripple-exit {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Card Entry Animation */
@keyframes mui-card-enter {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Error Shake Animation */
@keyframes mui-error-shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}

/* Loading Spinner Animation */
@keyframes mui-circular-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Skeleton Loading Animation */
@keyframes mui-skeleton-pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
```

### Responsive Breakpoint Behavior Documentation

#### Material-UI Breakpoint System

```typescript
// Breakpoint Values
const breakpoints = {
  xs: 0,      // Extra small devices (phones)
  sm: 600,    // Small devices (tablets)
  md: 900,    // Medium devices (small laptops)
  lg: 1200,   // Large devices (desktops)
  xl: 1536,   // Extra large devices (large desktops)
};

// Breakpoint Usage in Components
const ResponsiveComponentSpec = {
  // Mobile-first approach
  [theme.breakpoints.up('xs')]: {
    // Base styles for all screen sizes
    padding: theme.spacing(1),
    fontSize: '0.875rem',
  },
  
  [theme.breakpoints.up('sm')]: {
    // Tablet and up
    padding: theme.spacing(2),
    fontSize: '1rem',
  },
  
  [theme.breakpoints.up('md')]: {
    // Desktop and up
    padding: theme.spacing(3),
    fontSize: '1.125rem',
  },
  
  [theme.breakpoints.up('lg')]: {
    // Large desktop and up
    padding: theme.spacing(4),
    fontSize: '1.25rem',
  },
};
```

#### Component-Specific Responsive Behavior

```typescript
// Navigation Component Responsive Behavior
const NavigationResponsive = {
  // Mobile (xs): Bottom navigation
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '64px',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
  // Desktop (md+): Sidebar navigation
  [theme.breakpoints.up('md')]: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '240px',
    height: '100vh',
    flexDirection: 'column',
  },
};

// Card Grid Responsive Behavior
const CardGridResponsive = {
  // Mobile: 1 column
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
  },
  
  // Tablet: 2 columns
  [theme.breakpoints.between('sm', 'lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3),
  },
  
  // Desktop: 3 columns
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
  },
};

// Typography Responsive Behavior
const TypographyResponsive = {
  // Heading sizes scale down on mobile
  h1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem', // 32px instead of 48px
      lineHeight: 1.3,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem', // 48px
      lineHeight: 1.2,
    },
  },
  
  h2: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem', // 24px instead of 36px
      lineHeight: 1.4,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.25rem', // 36px
      lineHeight: 1.3,
    },
  },
  
  // Body text remains consistent
  body1: {
    fontSize: '1rem', // 16px on all devices
    lineHeight: 1.6,
  },
};
```

#### Touch Target Specifications for Mobile

```typescript
// Minimum Touch Target Sizes (WCAG Guidelines)
const TouchTargetSpecs = {
  // Minimum size for touch targets
  minTouchTarget: '44px',
  
  // Button touch targets
  button: {
    minHeight: '44px',
    minWidth: '44px',
    padding: theme.spacing(1.5, 2), // Ensures minimum size
  },
  
  // Icon button touch targets
  iconButton: {
    width: '48px',
    height: '48px',
    padding: '12px', // 24px icon + 12px padding each side = 48px
  },
  
  // List item touch targets
  listItem: {
    minHeight: '48px',
    padding: theme.spacing(1.5, 2),
  },
  
  // Form field touch targets
  formField: {
    minHeight: '56px', // Material-UI standard
    '& .MuiInputBase-input': {
      padding: theme.spacing(2, 1.75),
    },
  },
};
```

This comprehensive component specification format provides developers with exact implementation details for all mockup elements, ensuring consistent and accessible implementation across the Founder's Compass platform.
##
 Quality Assurance and Testing Guidelines

### Visual Regression Testing Checkpoints

Visual regression testing ensures that UI changes don't break existing designs. These checkpoints should be implemented using tools like Percy, Chromatic, or Playwright visual testing.

#### Critical Visual Testing Scenarios

```typescript
// Visual Testing Configuration
const visualTestingConfig = {
  // Viewport sizes to test
  viewports: [
    { width: 375, height: 667, name: 'iPhone SE' },
    { width: 414, height: 896, name: 'iPhone 11 Pro' },
    { width: 768, height: 1024, name: 'iPad' },
    { width: 1024, height: 768, name: 'iPad Landscape' },
    { width: 1280, height: 720, name: 'Desktop Small' },
    { width: 1920, height: 1080, name: 'Desktop Large' },
  ],
  
  // Component states to capture
  componentStates: [
    'default',
    'hover',
    'focus',
    'active',
    'disabled',
    'loading',
    'error',
    'success',
  ],
  
  // Theme variations
  themes: [
    'light',
    'dark', // If dark mode is implemented
    'high-contrast', // For accessibility testing
  ],
};
```

#### Page-Level Visual Regression Tests

```typescript
// Landing Page Visual Tests
const landingPageTests = [
  {
    name: 'Landing Page - Hero Section',
    url: '/',
    selector: '[data-testid="hero-section"]',
    states: ['default', 'mobile', 'tablet', 'desktop'],
    description: 'Verify hero section layout, CTA buttons, and responsive behavior',
  },
  {
    name: 'Landing Page - Features Grid',
    url: '/',
    selector: '[data-testid="features-grid"]',
    states: ['default', 'hover-cards'],
    description: 'Verify feature cards layout and hover effects',
  },
  {
    name: 'Landing Page - Footer',
    url: '/',
    selector: '[data-testid="footer"]',
    states: ['default', 'mobile'],
    description: 'Verify footer layout and responsive stacking',
  },
];

// Dashboard Visual Tests
const dashboardTests = [
  {
    name: 'Dashboard - Empty State',
    url: '/dashboard',
    mockData: 'empty-user',
    selector: '[data-testid="dashboard-content"]',
    description: 'Verify empty dashboard state for new users',
  },
  {
    name: 'Dashboard - Populated State',
    url: '/dashboard',
    mockData: 'active-user',
    selector: '[data-testid="dashboard-content"]',
    description: 'Verify dashboard with user progress and recommendations',
  },
  {
    name: 'Dashboard - Progress Cards',
    url: '/dashboard',
    selector: '[data-testid="progress-cards"]',
    states: ['default', 'hover'],
    description: 'Verify progress card styling and interactions',
  },
];

// Form Visual Tests
const formTests = [
  {
    name: 'Contact Form - All States',
    url: '/contact',
    selector: '[data-testid="contact-form"]',
    states: ['empty', 'filled', 'validation-errors', 'success'],
    description: 'Verify form field states and validation styling',
  },
  {
    name: 'Login Form - Authentication States',
    url: '/login',
    selector: '[data-testid="login-form"]',
    states: ['default', 'loading', 'error', 'success'],
    description: 'Verify login form states and feedback messages',
  },
];
```

#### Component-Level Visual Regression Tests

```typescript
// Button Component Tests
const buttonComponentTests = [
  {
    name: 'Primary Button - All States',
    component: 'Button',
    props: { variant: 'contained', color: 'primary' },
    states: ['default', 'hover', 'focus', 'active', 'disabled'],
    description: 'Verify primary button styling across all interactive states',
  },
  {
    name: 'Secondary Button - All States',
    component: 'Button',
    props: { variant: 'outlined', color: 'primary' },
    states: ['default', 'hover', 'focus', 'active', 'disabled'],
    description: 'Verify secondary button styling across all interactive states',
  },
  {
    name: 'Button Sizes',
    component: 'Button',
    variants: [
      { size: 'small', variant: 'contained' },
      { size: 'medium', variant: 'contained' },
      { size: 'large', variant: 'contained' },
    ],
    description: 'Verify button size variations maintain proper proportions',
  },
];

// Form Field Component Tests
const formFieldTests = [
  {
    name: 'TextField - All States',
    component: 'TextField',
    props: { variant: 'outlined', fullWidth: true },
    states: ['empty', 'filled', 'focused', 'error', 'disabled', 'success'],
    description: 'Verify text field styling across all states',
  },
  {
    name: 'Select Field - Dropdown States',
    component: 'Select',
    props: { variant: 'outlined', fullWidth: true },
    states: ['closed', 'open', 'selected', 'error'],
    description: 'Verify select field and dropdown menu styling',
  },
  {
    name: 'Checkbox - All States',
    component: 'Checkbox',
    states: ['unchecked', 'checked', 'indeterminate', 'disabled'],
    description: 'Verify checkbox styling and state indicators',
  },
];

// Card Component Tests
const cardComponentTests = [
  {
    name: 'Content Card - Variations',
    component: 'Card',
    variants: [
      { elevation: 1, content: 'minimal' },
      { elevation: 2, content: 'standard' },
      { elevation: 4, content: 'elevated' },
    ],
    states: ['default', 'hover'],
    description: 'Verify card elevation and hover effects',
  },
  {
    name: 'Scheme Card - Indian Government Style',
    component: 'SchemeCard',
    props: { scheme: 'sample-government-scheme' },
    states: ['default', 'hover', 'selected'],
    description: 'Verify government scheme card styling and branding',
  },
];
```

#### Visual Testing Implementation Example

```typescript
// Playwright Visual Testing Example
import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('Landing page hero section', async ({ page }) => {
    await page.goto('/');
    
    // Wait for content to load
    await page.waitForSelector('[data-testid="hero-section"]');
    
    // Take screenshot of hero section
    await expect(page.locator('[data-testid="hero-section"]')).toHaveScreenshot('hero-section.png');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('[data-testid="hero-section"]')).toHaveScreenshot('hero-section-mobile.png');
  });
  
  test('Button component states', async ({ page }) => {
    await page.goto('/storybook/button');
    
    // Test default state
    await expect(page.locator('[data-testid="primary-button"]')).toHaveScreenshot('button-default.png');
    
    // Test hover state
    await page.locator('[data-testid="primary-button"]').hover();
    await expect(page.locator('[data-testid="primary-button"]')).toHaveScreenshot('button-hover.png');
    
    // Test focus state
    await page.locator('[data-testid="primary-button"]').focus();
    await expect(page.locator('[data-testid="primary-button"]')).toHaveScreenshot('button-focus.png');
  });
});
```

### Cross-Browser Compatibility Requirements

#### Supported Browser Matrix

```typescript
// Browser Support Matrix
const browserSupport = {
  // Desktop Browsers
  desktop: {
    chrome: {
      versions: ['latest', 'latest-1', 'latest-2'],
      priority: 'high',
      marketShare: '65%',
    },
    firefox: {
      versions: ['latest', 'latest-1'],
      priority: 'medium',
      marketShare: '8%',
    },
    safari: {
      versions: ['latest', 'latest-1'],
      priority: 'high',
      marketShare: '18%',
    },
    edge: {
      versions: ['latest', 'latest-1'],
      priority: 'medium',
      marketShare: '4%',
    },
  },
  
  // Mobile Browsers
  mobile: {
    chrome_android: {
      versions: ['latest', 'latest-1'],
      priority: 'high',
      marketShare: '45%',
    },
    safari_ios: {
      versions: ['latest', 'latest-1'],
      priority: 'high',
      marketShare: '35%',
    },
    samsung_internet: {
      versions: ['latest'],
      priority: 'medium',
      marketShare: '8%',
    },
  },
};
```

#### Browser-Specific Testing Checklist

```typescript
// Cross-Browser Testing Checklist
const crossBrowserTests = {
  // Layout and Positioning
  layout: [
    'CSS Grid support and fallbacks',
    'Flexbox behavior consistency',
    'Position sticky support',
    'CSS custom properties (variables)',
    'Viewport units (vh, vw) behavior',
  ],
  
  // Interactive Elements
  interactions: [
    'Button hover and focus states',
    'Form field focus indicators',
    'Dropdown menu positioning',
    'Modal dialog centering',
    'Touch interactions on mobile',
  ],
  
  // Typography and Fonts
  typography: [
    'Web font loading and fallbacks',
    'Font weight rendering consistency',
    'Text overflow and ellipsis',
    'Line height calculations',
    'Font size scaling',
  ],
  
  // Colors and Theming
  colors: [
    'Color accuracy across browsers',
    'Transparency and opacity support',
    'CSS filter effects',
    'Color contrast ratios',
    'Dark mode support (if implemented)',
  ],
  
  // Animations and Transitions
  animations: [
    'CSS transition support',
    'Transform property behavior',
    'Animation performance',
    'Reduced motion preferences',
    'Hardware acceleration',
  ],
};
```

#### Browser Testing Implementation

```typescript
// Playwright Cross-Browser Testing
import { test, devices } from '@playwright/test';

// Test on multiple browsers
const browsers = ['chromium', 'firefox', 'webkit'];

browsers.forEach(browserName => {
  test.describe(`${browserName} Browser Tests`, () => {
    test.use({ 
      ...devices['Desktop Chrome'], // Base configuration
      browserName: browserName as any,
    });
    
    test('Form interactions work correctly', async ({ page }) => {
      await page.goto('/contact');
      
      // Test form field focus
      await page.click('[data-testid="name-field"]');
      await page.fill('[data-testid="name-field"]', 'Test User');
      
      // Verify focus styles are applied
      const focusedField = page.locator('[data-testid="name-field"]:focus');
      await expect(focusedField).toBeVisible();
      
      // Test form submission
      await page.click('[data-testid="submit-button"]');
      await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    });
    
    test('Navigation works on all screen sizes', async ({ page }) => {
      // Test desktop navigation
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.goto('/');
      await expect(page.locator('[data-testid="desktop-nav"]')).toBeVisible();
      
      // Test mobile navigation
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page.locator('[data-testid="mobile-nav"]')).toBeVisible();
    });
  });
});
```

### Performance Optimization Guidelines for Mockup Implementations

#### Performance Budget and Metrics

```typescript
// Performance Budget
const performanceBudget = {
  // Core Web Vitals
  coreWebVitals: {
    LCP: '2.5s', // Largest Contentful Paint
    FID: '100ms', // First Input Delay
    CLS: '0.1', // Cumulative Layout Shift
  },
  
  // Loading Metrics
  loading: {
    TTFB: '600ms', // Time to First Byte
    FCP: '1.8s', // First Contentful Paint
    TTI: '3.8s', // Time to Interactive
  },
  
  // Resource Budgets
  resources: {
    totalPageSize: '1.5MB',
    imageSize: '800KB',
    jsSize: '400KB',
    cssSize: '100KB',
    fontSize: '100KB',
  },
  
  // Network Conditions
  networkConditions: {
    '3G': {
      downloadThroughput: '1.6Mbps',
      uploadThroughput: '750Kbps',
      latency: '300ms',
    },
    '4G': {
      downloadThroughput: '9Mbps',
      uploadThroughput: '9Mbps',
      latency: '170ms',
    },
  },
};
```

#### Image Optimization Guidelines

```typescript
// Image Optimization Specifications
const imageOptimization = {
  // Format Guidelines
  formats: {
    photos: 'WebP with JPEG fallback',
    illustrations: 'SVG preferred, PNG fallback',
    icons: 'SVG with proper viewBox',
    logos: 'SVG with PNG fallback',
  },
  
  // Size Guidelines
  sizes: {
    hero: {
      desktop: '1920x1080 (max 200KB)',
      tablet: '1024x768 (max 150KB)',
      mobile: '375x667 (max 100KB)',
    },
    cards: {
      desktop: '400x300 (max 50KB)',
      mobile: '300x225 (max 30KB)',
    },
    thumbnails: {
      size: '150x150 (max 20KB)',
      format: 'WebP with JPEG fallback',
    },
    icons: {
      size: '24x24, 32x32, 48x48',
      format: 'SVG preferred',
    },
  },
  
  // Responsive Images
  responsiveImages: {
    srcset: 'Required for all content images',
    sizes: 'Must match CSS breakpoints',
    lazyLoading: 'Required for below-fold images',
    placeholder: 'Low-quality placeholder or skeleton',
  },
};
```

#### CSS Performance Guidelines

```typescript
// CSS Performance Best Practices
const cssPerformance = {
  // Critical CSS
  criticalCSS: {
    inlineSize: 'Max 14KB inline critical CSS',
    aboveFold: 'Include all above-fold styles',
    loadingStrategy: 'Inline critical, async load remaining',
  },
  
  // CSS Organization
  organization: {
    structure: 'Component-based CSS modules',
    bundling: 'Split by route/page when possible',
    purging: 'Remove unused CSS in production',
    minification: 'Required for production builds',
  },
  
  // Animation Performance
  animations: {
    properties: 'Animate only transform and opacity',
    willChange: 'Use sparingly, remove after animation',
    gpuAcceleration: 'Use transform3d() for hardware acceleration',
    reducedMotion: 'Respect prefers-reduced-motion',
  },
  
  // CSS Custom Properties
  customProperties: {
    usage: 'Use for theming and dynamic values',
    fallbacks: 'Provide fallbacks for older browsers',
    performance: 'Avoid excessive nesting',
  },
};
```

#### JavaScript Performance Guidelines

```typescript
// JavaScript Performance Best Practices
const jsPerformance = {
  // Bundle Optimization
  bundling: {
    codesplitting: 'Split by route and component',
    treeshaking: 'Remove unused code',
    compression: 'Gzip/Brotli compression',
    caching: 'Long-term caching with content hashing',
  },
  
  // Loading Strategies
  loading: {
    critical: 'Inline critical JavaScript',
    nonCritical: 'Async/defer non-critical scripts',
    lazyLoading: 'Lazy load components below fold',
    preloading: 'Preload next route resources',
  },
  
  // Runtime Performance
  runtime: {
    eventListeners: 'Use passive listeners where possible',
    debouncing: 'Debounce scroll and resize handlers',
    memoization: 'Memoize expensive calculations',
    virtualScrolling: 'For long lists (>100 items)',
  },
  
  // Memory Management
  memory: {
    cleanup: 'Remove event listeners on unmount',
    references: 'Avoid memory leaks with closures',
    caching: 'Implement proper cache invalidation',
  },
};
```

#### Performance Testing Implementation

```typescript
// Lighthouse Performance Testing
const performanceTesting = {
  // Lighthouse Configuration
  lighthouse: {
    categories: ['performance', 'accessibility', 'best-practices', 'seo'],
    throttling: '3G network simulation',
    device: 'Mobile device simulation',
    audits: [
      'first-contentful-paint',
      'largest-contentful-paint',
      'cumulative-layout-shift',
      'total-blocking-time',
    ],
  },
  
  // Performance Monitoring
  monitoring: {
    realUserMetrics: 'Implement RUM tracking',
    syntheticTesting: 'Automated performance tests',
    alerting: 'Performance regression alerts',
    reporting: 'Weekly performance reports',
  },
};

// Example Performance Test
import { test, expect } from '@playwright/test';

test('Performance metrics meet budget', async ({ page }) => {
  // Navigate to page
  await page.goto('/');
  
  // Wait for page load
  await page.waitForLoadState('networkidle');
  
  // Measure performance metrics
  const metrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
      LCP: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime,
      TTFB: navigation.responseStart - navigation.requestStart,
      loadTime: navigation.loadEventEnd - navigation.navigationStart,
    };
  });
  
  // Assert performance budget
  expect(metrics.FCP).toBeLessThan(1800); // 1.8s FCP budget
  expect(metrics.TTFB).toBeLessThan(600); // 600ms TTFB budget
  expect(metrics.loadTime).toBeLessThan(3000); // 3s load time budget
});
```

### User Acceptance Testing Criteria Based on Mockups

#### Functional Testing Criteria

```typescript
// User Acceptance Test Scenarios
const uatScenarios = {
  // Landing Page UAT
  landingPage: [
    {
      scenario: 'Hero Section Engagement',
      criteria: [
        'Hero section loads within 2 seconds',
        'CTA buttons are clearly visible and clickable',
        'Value proposition is clearly communicated',
        'Navigation menu is accessible and functional',
      ],
      userJourney: 'New visitor discovers platform value',
      successMetrics: ['Click-through rate > 15%', 'Bounce rate < 40%'],
    },
    {
      scenario: 'Feature Discovery',
      criteria: [
        'Feature cards display correctly on all devices',
        'Hover effects work smoothly on desktop',
        'Touch interactions work on mobile',
        'Feature descriptions are clear and compelling',
      ],
      userJourney: 'User explores platform capabilities',
      successMetrics: ['Feature engagement > 60%', 'Scroll depth > 75%'],
    },
  ],
  
  // Dashboard UAT
  dashboard: [
    {
      scenario: 'New User Onboarding',
      criteria: [
        'Empty state is welcoming and actionable',
        'Onboarding prompts are clear',
        'Progress indicators work correctly',
        'Help resources are easily accessible',
      ],
      userJourney: 'New user completes initial setup',
      successMetrics: ['Onboarding completion > 80%', 'Time to first action < 5 minutes'],
    },
    {
      scenario: 'Returning User Experience',
      criteria: [
        'Dashboard loads user-specific content',
        'Progress tracking is accurate',
        'Recommendations are relevant',
        'Quick actions are easily accessible',
      ],
      userJourney: 'Returning user continues their journey',
      successMetrics: ['Session duration > 10 minutes', 'Feature usage > 3 actions'],
    },
  ],
  
  // Government Schemes UAT
  governmentSchemes: [
    {
      scenario: 'Scheme Discovery',
      criteria: [
        'Schemes load with proper Indian government branding',
        'Filtering works accurately',
        'Search returns relevant results',
        'Scheme details are comprehensive',
      ],
      userJourney: 'Entrepreneur finds relevant government schemes',
      successMetrics: ['Search success rate > 85%', 'Scheme application rate > 25%'],
    },
    {
      scenario: 'Application Process',
      criteria: [
        'Application forms are user-friendly',
        'Document upload works reliably',
        'Progress tracking is clear',
        'Status updates are timely',
      ],
      userJourney: 'User applies for government scheme',
      successMetrics: ['Application completion rate > 70%', 'Error rate < 5%'],
    },
  ],
};
```

#### Accessibility Testing Criteria

```typescript
// Accessibility Testing Requirements
const accessibilityTesting = {
  // WCAG 2.1 AA Compliance
  wcagCompliance: {
    level: 'AA',
    guidelines: [
      'Perceivable: All content is perceivable by all users',
      'Operable: All functionality is operable by all users',
      'Understandable: All information is understandable',
      'Robust: Content works with assistive technologies',
    ],
  },
  
  // Specific Test Cases
  testCases: [
    {
      category: 'Keyboard Navigation',
      tests: [
        'All interactive elements are keyboard accessible',
        'Tab order is logical and intuitive',
        'Focus indicators are clearly visible',
        'Keyboard shortcuts work as expected',
        'No keyboard traps exist',
      ],
    },
    {
      category: 'Screen Reader Support',
      tests: [
        'All images have appropriate alt text',
        'Form fields have proper labels',
        'Headings create logical document structure',
        'ARIA labels provide context where needed',
        'Dynamic content changes are announced',
      ],
    },
    {
      category: 'Color and Contrast',
      tests: [
        'Text meets 4.5:1 contrast ratio minimum',
        'Large text meets 3:1 contrast ratio minimum',
        'Color is not the only way to convey information',
        'Focus indicators meet 3:1 contrast ratio',
        'Interactive elements are distinguishable',
      ],
    },
    {
      category: 'Mobile Accessibility',
      tests: [
        'Touch targets are minimum 44px x 44px',
        'Content reflows properly when zoomed to 200%',
        'Orientation changes work correctly',
        'Voice control works with form fields',
        'Gesture alternatives are provided',
      ],
    },
  ],
};
```

#### Usability Testing Criteria

```typescript
// Usability Testing Framework
const usabilityTesting = {
  // Test Scenarios
  scenarios: [
    {
      task: 'Find and apply for a government scheme',
      userType: 'First-time entrepreneur',
      successCriteria: [
        'Completes task in under 10 minutes',
        'Requires no external help',
        'Expresses confidence in the process',
        'Successfully submits application',
      ],
      measuredMetrics: [
        'Task completion rate',
        'Time to completion',
        'Number of errors',
        'User satisfaction score',
      ],
    },
    {
      task: 'Complete learning path module',
      userType: 'Returning user',
      successCriteria: [
        'Navigates to learning section easily',
        'Understands progress tracking',
        'Completes module without confusion',
        'Knows how to continue learning',
      ],
      measuredMetrics: [
        'Navigation efficiency',
        'Content engagement',
        'Completion rate',
        'Return rate',
      ],
    },
    {
      task: 'Get help from AI assistant',
      userType: 'Business owner with specific question',
      successCriteria: [
        'Finds AI assistant quickly',
        'Asks question naturally',
        'Receives helpful response',
        'Knows how to ask follow-up questions',
      ],
      measuredMetrics: [
        'Discovery rate',
        'Query success rate',
        'Response satisfaction',
        'Continued usage',
      ],
    },
  ],
  
  // Testing Methods
  methods: {
    moderatedTesting: {
      participants: '5-8 users per user type',
      duration: '60 minutes per session',
      location: 'Remote or in-person',
      recording: 'Screen and audio recording required',
    },
    unmoderatedTesting: {
      participants: '15-20 users per scenario',
      platform: 'UserTesting or similar',
      tasks: 'Predefined task scenarios',
      metrics: 'Automated collection',
    },
    A_B_Testing: {
      variants: 'Test different design approaches',
      metrics: 'Conversion and engagement rates',
      duration: 'Minimum 2 weeks per test',
      significance: 'Statistical significance required',
    },
  },
};
```

#### Testing Implementation Checklist

```typescript
// Complete Testing Checklist
const testingChecklist = {
  // Pre-Launch Testing
  preLaunch: [
    '✓ Visual regression tests pass on all supported browsers',
    '✓ Cross-browser compatibility verified',
    '✓ Performance budgets met on 3G and 4G networks',
    '✓ Accessibility audit completed with WCAG AA compliance',
    '✓ Usability testing completed with target users',
    '✓ Security testing completed',
    '✓ Load testing completed for expected traffic',
  ],
  
  // Post-Launch Monitoring
  postLaunch: [
    '✓ Real User Monitoring (RUM) implemented',
    '✓ Error tracking and alerting configured',
    '✓ Performance monitoring dashboards created',
    '✓ User feedback collection system active',
    '✓ A/B testing framework ready for iterations',
    '✓ Analytics tracking verified',
    '✓ Conversion funnel monitoring active',
  ],
  
  // Ongoing Quality Assurance
  ongoing: [
    '✓ Weekly performance reports reviewed',
    '✓ Monthly accessibility audits conducted',
    '✓ Quarterly usability testing sessions',
    '✓ Continuous visual regression testing',
    '✓ Regular cross-browser testing',
    '✓ User feedback analysis and action items',
    '✓ Performance optimization iterations',
  ],
};
```

These comprehensive quality assurance and testing guidelines ensure that the Founder's Compass platform meets high standards for visual consistency, cross-browser compatibility, performance, and user experience, providing a solid foundation for successful implementation and ongoing maintenance.
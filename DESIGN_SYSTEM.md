# CCT Message Generator - Design System

## Overview

The CCT Message Generator now features a modern, professional tech-style design system with smooth animations, rich interactions, and enterprise-grade aesthetics.

## Color Palette

### Primary Colors
- **Primary Blue**: `#3b82f6` - Main actions, navigation, focus states
- **Primary Dark**: `#1e40af` - Darker shade for gradients
- **Emerald Green**: `#10b981` - Success states, send actions
- **Emerald Light**: `#34d399` - Secondary emerald for accents

### Background Colors
- **Main Background**: `#0f0f12` - Deep slate for body
- **Card Background**: `#1a1a1f` - Slightly lighter for cards
- **Hover State**: `#2d2d35` - Border color for subtle contrast
- **Input Background**: `#1a1a1f` - Same as cards for consistency

### Text Colors
- **Foreground**: `#ffffff` - Primary text
- **Muted**: `#6b7280` - Secondary text
- **Muted Foreground**: `#9ca3af` - Tertiary text
- **Status**: Uses semantic colors (green for success, red for error)

### Special Colors
- **Success**: `#10b981` - Green for positive states
- **Warning**: `#f59e0b` - Amber for cautions
- **Destructive**: `#ef4444` - Red for delete/clear
- **Info**: `#3b82f6` - Blue for information

## Typography

### Font Stack
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif
```

### Text Sizes & Hierarchy
- **Heading 1**: 36px / 2.25rem (page title)
- **Heading 2**: 24px / 1.5rem (section title)
- **Heading 3**: 20px / 1.25rem (card title)
- **Body**: 14px / 0.875rem (normal text)
- **Small**: 12px / 0.75rem (labels, captions)
- **Monospace**: `font-mono` for technical content

### Font Weights
- **Bold**: 700 (headings, important text)
- **Semibold**: 600 (subheadings)
- **Medium**: 500 (labels, buttons)
- **Regular**: 400 (body text)

## Spacing Scale

Consistent spacing using Tailwind's scale:
- `px-2` / `py-2` = 8px (8px)
- `px-3` / `py-3` = 12px (12px)
- `px-4` / `py-4` = 16px (16px)
- `px-6` / `py-6` = 24px (24px)
- `px-8` / `py-8` = 32px (32px)
- `px-12` / `py-12` = 48px (48px)

## Component Styles

### Buttons

#### Primary Button
```
Background: Gradient from #3b82f6 to #3b82f6
Text: White
Padding: px-4 py-2
Border Radius: lg (8px)
Hover: Shadow with blue tint
Active: Scale 95%
```

#### Success Button
```
Background: Gradient from #10b981 to #10b981
Text: White
Hover: Shadow with emerald tint
```

#### Ghost Button
```
Background: Transparent
Text: Slate gray
Hover: Light background overlay
```

### Form Elements

#### Text Input
```
Background: #1a1a1f with opacity 50%
Border: #2d2d35
Text: White
Focus: Border-blue-500, ring-blue-500/20
Radius: lg (8px)
```

#### Textarea
```
Same as input
Height: Adjustable (e.g., h-20)
Resize: None (explicit control)
```

#### Select
```
Same as input
Dropdown styling: Native browser
```

### Cards

#### Glass Morphism Card
```
Background: Semi-transparent (#1a1a1f with opacity)
Backdrop: Blur effect
Border: Slate-700/50
Radius: lg (8px)
Padding: p-4 or p-6
Hover: Slight background lift
```

### Badges

#### Primary Badge
```
Background: #3b82f6/20
Text: #93c5fd
Border: #3b82f6/30
Padding: px-3 py-1
Radius: full (pill shape)
```

#### Success Badge
```
Background: #10b981/20
Text: #6ee7b7
Border: #10b981/30
```

#### Destructive Badge
```
Background: #ef4444/20
Text: #fca5a5
Border: #ef4444/30
```

## Animations

### Transitions
All transitions use: `transition-all duration-300 ease-out`

### Keyframe Animations

#### Fade In
```css
from: opacity 0, translateY 10px
to: opacity 1, translateY 0
duration: 0.5s
```

#### Slide In Right
```css
from: opacity 0, translateX 20px
to: opacity 1, translateX 0
duration: 0.4s
```

#### Pulse Soft
```css
0%, 100%: opacity 1
50%: opacity 0.8
duration: 2s infinite
```

#### Shimmer
```css
Background movement across element
duration: 2s infinite
```

### Interactive States

#### Button Hover
- Shadow expansion
- Color deepening
- Smooth transition (200ms)

#### Button Active
- Scale to 95%
- Snappy feedback (100ms)

#### Input Focus
- Border color change to blue
- Ring effect with transparency
- Smooth transition (150ms)

#### Card Hover
- Slight background lightening
- Optional transform: translateY(-4px)
- Shadow enhancement

## Layout Patterns

### Grid Layouts
- **3-Column**: For batch form (Input, Issues, Preview)
- **2-Column**: For manual form (Input, Preview)
- **Responsive**: Auto-stacks on mobile/tablet

### Spacing Patterns
- **Header**: py-8, px-6
- **Content**: p-8 (main), p-4/p-6 (cards)
- **Sections**: mb-6, space-y-4 (internal)
- **Groups**: gap-4, gap-6

### Responsive Breakpoints
- **Mobile**: Single column, full width
- **Tablet** (md): 2 columns where applicable
- **Desktop** (lg): Full 3-column layouts

## Elevation (Shadows)

### Shadow Levels
1. **No Shadow**: Default state
2. **Subtle Shadow**: `shadow` on cards
3. **Medium Shadow**: `shadow-lg` on hover
4. **Elevated Shadow**: `shadow-xl` with color tint

### Color-Tinted Shadows
- Blue: `shadow-blue-500/20`
- Emerald: `shadow-emerald-500/20`
- Used on primary actions for branding

## States & Feedback

### Normal State
- Default colors and styling
- No animation
- Clear and calm appearance

### Hover State
- Color enhancement
- Shadow expansion
- Optional scale (1.02 for non-buttons)
- 300ms transition

### Focus State
- Clear focus ring (blue)
- Border highlight
- Used for keyboard navigation

### Active/Clicked State
- Scale reduction (95% for buttons)
- Immediate feedback (100ms)
- Visual confirmation

### Disabled State
- Opacity 50% or less
- Cursor not-allowed
- Grayed appearance

### Loading State
- Shimmer or pulse animation
- No interaction allowed
- Clear loading indication

## Accessibility

### Color Contrast
- Foreground vs Background: WCAG AA+ (7:1+)
- Focus rings: High contrast blue
- Text legibility: Ensured on all backgrounds

### Interactive Elements
- Minimum 44x44px tap target
- Clear focus states
- Semantic HTML structure
- ARIA labels where needed

### Motion
- Respect prefers-reduced-motion
- Essential animations only
- No auto-play videos
- Pause animations on demand

## Implementation

### CSS Approach
1. **Tailwind CSS**: Utility classes for styling
2. **Custom Variables**: CSS custom properties for theming
3. **Inline Styles**: Only for dynamic values
4. **CSS Modules**: None (utilities sufficient)

### File Organization
- **globals.css**: Theme variables and animations
- **Component files**: Utility classes inline
- **Responsive**: Tailwind's responsive prefixes (md:, lg:)

## Customization Guide

### Changing Theme Color
Edit `app/globals.css`:
```css
--primary: #your-color;
--primary-dark: #darker-shade;
```

### Adjusting Animations
Edit keyframes in `app/globals.css`:
```css
@keyframes fadeIn {
  /* Adjust duration and easing */
}
```

### Typography Changes
Modify Tailwind config (if needed):
```js
theme.extend.fontSize
theme.extend.fontFamily
```

## Browser Support

- **Chrome**: 90+ ✓
- **Firefox**: 88+ ✓
- **Safari**: 14+ ✓
- **Edge**: 90+ ✓
- **Mobile Browsers**: Full support

## Performance Notes

✅ GPU-accelerated animations (transform, opacity)
✅ No layout thrashing
✅ Minimal JavaScript for styling
✅ Efficient CSS selectors
✅ Smooth 60fps animations

## Future Enhancements

Potential additions without breaking current design:
- Dark/Light mode toggle
- Custom theme selector
- Animation preference option
- Additional color variants
- Extended component library

---

**Design System v1.0 - Professional, Modern, Accessible**

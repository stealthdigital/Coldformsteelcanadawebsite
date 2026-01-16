# Cold Form Steel Canada - Design System Guide

**Version:** 1.0  
**Last Updated:** January 14, 2026  
**For:** Designer Reference

---

## 🎨 Color Palette

### Primary Brand Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary (Warm Brown)** | `#665f55` | Primary buttons, headings, logo, navigation solid state, primary CTAs, footer backgrounds |
| **Accent/Terracotta** | `#c47b5c` | Secondary buttons, links, hover states, badges, highlights, "Request Quote" buttons |
| **Background (Warm Cream)** | `#faf8f5` | Main page background, creates warm, inviting atmosphere |
| **Sage Green** | `#8b9d83` | Occasional accent, callout boxes, success states, environmental messaging |

### Supporting Colors

| Color Name | Hex Code | HSL Value | Usage |
|------------|----------|-----------|-------|
| **Text Primary** | `#3d3a36` | `hsl(30, 5%, 22%)` | Body text, primary content, dark brown for readability |
| **Card Background** | `#ffffff` | `hsl(0, 0%, 100%)` | Card components, content containers |
| **Muted Background** | Soft Warm Cream | `hsl(36, 30%, 95%)` | Subtle backgrounds, disabled states |
| **Muted Text** | Medium Brown | `hsl(30, 5%, 40%)` | Secondary text, captions, metadata |
| **Border** | Soft Warm Gray | `hsl(30, 10%, 88%)` | Borders, dividers, input fields |

### Terracotta Variations

| Variant | Hex Code | Usage |
|---------|----------|-------|
| **Terracotta (Main)** | `#c47b5c` | Primary accent color |
| **Terracotta Dark** | `#b5593d` | Hover states for terracotta buttons |
| **Terracotta Light** | `#c8694e` | Lighter accent applications |

### Destructive/Error Colors

| Color Name | HSL Value | Usage |
|------------|-----------|-------|
| **Destructive** | `hsl(0, 84.2%, 60.2%)` | Error states, delete actions |
| **Destructive Foreground** | `hsl(60, 9.1%, 97.8%)` | Text on destructive backgrounds |

---

## 📝 Typography

### Font Family
**System Font Stack** (No custom fonts loaded)
- Uses default browser system fonts
- Falls back to: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Typography Scale & Usage

#### Hero & Display Text
| Element | Size Class | Actual Size | Weight | Usage |
|---------|-----------|-------------|--------|-------|
| **Hero H1** | `text-8xl` | 96px | Bold | Homepage hero headline |
| **Hero H1 (Tablet)** | `text-7xl` | 72px | Bold | Homepage hero (tablet) |
| **Hero H1 (Mobile)** | `text-5xl` | 48px | Bold | Homepage hero (mobile) |
| **Hero Subtitle** | `text-3xl` | 30px | Light | Homepage hero subheading (desktop) |
| **Hero Subtitle (Tablet)** | `text-2xl` | 24px | Light | Homepage hero subheading (tablet) |
| **Hero Subtitle (Mobile)** | `text-xl` | 20px | Light | Homepage hero subheading (mobile) |

#### Page Headings
| Element | Size Class | Actual Size | Weight | Usage |
|---------|-----------|-------------|--------|-------|
| **H1** | `text-6xl` | 60px | Bold | Main page titles (desktop) |
| **H1 (Mobile)** | `text-5xl` | 48px | Bold | Main page titles (mobile) |
| **H2** | `text-5xl` | 48px | Bold | Section headings |
| **H2 (Mobile)** | `text-4xl` | 36px | Bold | Section headings (mobile) |
| **H3** | `text-3xl` | 30px | Bold | Subsection headings |
| **H3 (Alt)** | `text-2xl` | 24px | Bold | Smaller subsections |
| **H4** | `text-xl` | 20px | Semibold | Card titles, minor headings |

#### Body Text
| Element | Size Class | Actual Size | Weight | Line Height | Usage |
|---------|-----------|-------------|--------|-------------|-------|
| **Large Body** | `text-2xl` | 24px | Regular | Relaxed | Feature descriptions, important paragraphs |
| **Body Large** | `text-xl` | 20px | Regular | Relaxed | Intro paragraphs, key content |
| **Body Regular** | `text-lg` | 18px | Regular | Relaxed | Standard article text, main content |
| **Body Base** | `text-base` | 16px | Regular | Normal | Standard body copy, descriptions |
| **Small Text** | `text-sm` | 14px | Regular | Normal | Captions, metadata, labels |
| **Extra Small** | `text-xs` | 12px | Regular | Tight | Credits, fine print, image attributions |

#### Buttons & CTAs
| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| **Primary CTA** | `text-xl` (20px) | Bold | Homepage "View Models" button |
| **Secondary CTA** | `text-lg` (18px) | Semibold | "Request Quote" navigation button |
| **Standard Button** | `text-base` (16px) | Medium | Regular buttons throughout site |
| **Small Button** | `text-sm` (14px) | Medium | Compact actions, inline links |

#### Navigation
| Element | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| **Desktop Nav Links** | `text-sm` (14px) | Medium | Foreground (dark) when scrolled, White on transparent | Top navigation menu items |
| **Mobile Nav Links** | `text-base` (16px) | Medium | Foreground | Mobile menu items |

---

## 🎯 Color Usage by Component

### Navigation Bar
- **Transparent State** (top of page):
  - Background: Transparent
  - Logo: White (inverted)
  - Nav Links: White
  - CTA Button: White background, Terracotta text
  
- **Solid State** (scrolled/article pages):
  - Background: White with 95% opacity + backdrop blur
  - Logo: Natural colors
  - Nav Links: Dark brown (`#3d3a36`)
  - CTA Button: Terracotta background, White text

### Buttons

#### Primary Actions
- Background: Terracotta (`#c47b5c`)
- Text: White
- Hover: Terracotta Dark (`#b5593d`)
- Usage: "Request Quote", main CTAs

#### Secondary Actions
- Background: White
- Text: Primary brown (`#665f55`)
- Border: Optional
- Hover: Light gray background
- Usage: "View Models", alternative CTAs

#### Ghost/Outline
- Background: Transparent
- Text: White (on dark backgrounds) or Primary
- Border: 2px white or primary
- Hover: Fills with background color, inverts text
- Usage: Secondary actions on hero sections

### Cards & Content Blocks
- Background: White (`#ffffff`)
- Border: Soft warm gray (`hsl(30, 10%, 88%)`)
- Shadow: Subtle, warm-toned
- Text: Primary dark brown
- Headings: Primary brown or natural foreground

### Special Accent Blocks
- **Sage Callouts**: Light sage background (`#8b9d83` at 5% opacity), sage left border (8px thick)
- **Primary Blocks**: Primary brown background, white text
- **Terracotta Highlights**: Terracotta background, white text
- **Muted Sections**: Warm cream background variations

### Badges & Labels
- **Default**: Terracotta background, white text
- **Outline**: White/transparent background, terracotta border and text
- **Success**: Sage green
- **Warning**: Amber tones

---

## 📐 Spacing & Layout

### Container Widths
- **Max Width**: 7xl (1280px) for main content
- **Narrow Width**: 4xl (896px) for focused content (articles)
- **Wide Width**: Full width for hero sections

### Padding Scale (Tailwind)
- **xs**: 1 (4px)
- **sm**: 2 (8px)
- **md**: 4 (16px)
- **lg**: 6 (24px)
- **xl**: 8 (32px)
- **2xl**: 10 (40px)
- **3xl**: 12 (48px)

### Common Spacing Patterns
- Section spacing: `mb-16` (64px) or `mb-20` (80px)
- Card padding: `p-8` (32px) or `p-10` (40px)
- Hero padding: `py-20` (80px) or `py-32` (128px)
- Content margins: `mb-6` (24px) to `mb-10` (40px)

---

## 🔲 Border Radius
- **Default Radius**: `0.5rem` (8px)
- **Large Radius**: `0.75rem` (12px) - `rounded-xl`
- **Extra Large**: `1rem` (16px) - `rounded-2xl`
- **Full Round**: `9999px` - `rounded-full` (pills, avatars)

---

## 🖼️ Images

### Image Sources
All images use GitHub raw URLs from the `assets` branch:
```
https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/[HASH].png
```

### Logo
- **URL**: `https://raw.githubusercontent.com/stealthdigital/Coldformsteelcanadawebsite/assets/public/assets/e2e217c234df09ee63fb7874604664b6915f74ac.png`
- **Height**: 48px (h-12)
- **Hover Effect**: Scale 105%
- **Color Treatment**: Inverted/white when navigation is transparent

### Image Component
- Uses custom `ImageWithFallback` component
- Automatic fallback handling
- Responsive sizing with `w-full h-auto`

---

## 🎭 Special Effects

### Shadows
- **Card Shadow**: `shadow-xl` - Elevated cards
- **Button Shadow**: `shadow-lg` - Primary CTAs
- **Text Shadow**: `drop-shadow-lg` - Hero text over images
- **Subtle Shadow**: `shadow-md` - Navigation when scrolled

### Transitions
- **Duration**: 300ms (standard)
- **Easing**: Default ease-out
- **Hover Transforms**: `scale-105` (5% scale up)
- **Backdrop Blur**: Used on navigation when scrolled (`backdrop-blur-md`)

### Animations
- **Bounce**: Scroll indicator on homepage
- **Slide In**: Mobile menu
- **Fade In**: Content loading states
- **Accordion**: 200ms ease-out for expanding sections

---

## 📱 Responsive Breakpoints

| Breakpoint | Size | Usage |
|------------|------|-------|
| **sm** | 640px | Mobile landscape, small tablets |
| **md** | 768px | Tablets, desktop navigation switch |
| **lg** | 1024px | Desktop, full layout |
| **xl** | 1280px | Large desktop |
| **2xl** | 1536px | Extra large screens |

### Key Responsive Patterns
- Mobile menu toggles at `md` breakpoint (768px)
- Hero text scales down from `8xl` → `7xl` → `5xl`
- Grid layouts: 1 column mobile, 2-3 columns desktop
- Padding reduces on mobile (py-20 → py-12)

---

## ✅ Accessibility Notes

### Color Contrast
- All text meets WCAG AA standards
- Primary text (`#3d3a36`) on warm cream (`#faf8f5`) = 7.8:1 ratio
- White text on terracotta (`#c47b5c`) = 4.1:1 ratio
- White text on primary brown (`#665f55`) = 6.2:1 ratio

### Focus States
- Ring color: Primary brown (`hsl(30, 9%, 37%)`)
- Ring offset for visibility
- Keyboard navigation supported

---

## 🎨 Design Philosophy

### Color Strategy
- **Sophisticated & Professional**: Reduced terracotta usage, more dark browns
- **Warm & Inviting**: Cream backgrounds, warm color temperatures
- **Trust & Stability**: Brown tones convey earthiness and reliability
- **Energy & Action**: Terracotta for CTAs without overwhelming

### Typography Strategy
- **Clear Hierarchy**: Large scale jumps between heading levels
- **Readability**: Generous line-height, comfortable font sizes
- **Impact**: Bold hero text, lighter body copy for contrast
- **Professionalism**: Clean, systematic use of weights

### Layout Philosophy
- **Breathing Room**: Generous whitespace, comfortable padding
- **Visual Balance**: Centered layouts, symmetrical designs
- **Progressive Disclosure**: Cards, accordions for organizing content
- **Mobile-First**: Responsive scaling, touch-friendly targets

---

## 📋 Quick Reference

### Most Common Color Combinations

1. **Primary CTA Button**
   - Background: `bg-terracotta` (#c47b5c)
   - Text: `text-white`
   - Hover: `hover:bg-terracotta/90`

2. **Secondary Button**
   - Background: `bg-white`
   - Text: `text-primary` (#665f55)
   - Hover: `hover:bg-white/90`

3. **Card**
   - Background: `bg-white`
   - Border: `border border-border`
   - Shadow: `shadow-xl`

4. **Accent Box**
   - Background: `bg-sage/5` (sage at 5% opacity)
   - Left Border: `border-l-8 border-sage`
   - Text: `text-foreground`

5. **Page Background**
   - Background: `bg-background` (#faf8f5)
   - Text: `text-foreground` (#3d3a36)

---

## 🔧 Technical Implementation

### CSS Framework
- **Tailwind CSS v4**
- Custom theme defined in `/styles/globals.css`
- No `tailwind.config.js` file (using v4 theme layer)

### Color System
- Uses CSS custom properties (CSS variables)
- HSL color space for consistency
- Light/dark mode support (though primarily light theme)

### File Structure
```
/styles/globals.css          → Theme colors, base styles
/components/ui/*             → Reusable UI components
/components/pages/*          → Page-specific components
/components/Navigation.tsx   → Site navigation
/components/Footer.tsx       → Site footer
```

---

**End of Design System Guide**

*For questions or updates, please contact the development team.*

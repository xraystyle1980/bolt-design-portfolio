# Design System Token Switcher Demo

This demo showcases how design tokens can be used to create consistent, themeable interfaces. It provides an interactive way to explore different combinations of colors, spacing, and border radius values.

## How It Works

### Color Schemes

The demo includes three predefined color schemes:

1. **Default Theme**
   - Uses system-level design tokens
   - `primary`: System primary color
   - `secondary`: System secondary color
   - `muted`: System muted color
   - `accent`: System accent color

2. **Vibrant Theme**
   - `primary`: #FF3366 (Bright Pink)
   - `secondary`: #33FF99 (Bright Green)
   - `muted`: #F0F0F0 (Light Gray)
   - `accent`: #9933FF (Purple)

3. **Earthy Theme**
   - `primary`: #8B4513 (Saddle Brown)
   - `secondary`: #556B2F (Dark Olive Green)
   - `muted`: #F5DEB3 (Wheat)
   - `accent`: #CD853F (Peru)

### Design Tokens

The demo showcases three types of design tokens:

1. **Spacing Tokens**
   - `gap-2`: Small spacing (0.5rem)
   - `gap-4`: Medium spacing (1rem)
   - `gap-8`: Large spacing (2rem)
   - `gap-12`: Extra large spacing (3rem)

2. **Border Radius Tokens**
   - `rounded-none`: No border radius
   - `rounded-md`: Medium border radius
   - `rounded-xl`: Extra large border radius
   - `rounded-full`: Fully rounded corners

3. **Color Tokens**
   - Demonstrates both system-level tokens and specific color values
   - Shows how tokens can be swapped out for different themes

## Interactive Controls

The demo provides three buttons to explore different token combinations:

1. **Change Colors**
   - Cycles through the color schemes
   - Demonstrates how a cohesive color palette works together

2. **Change Spacing**
   - Cycles through spacing values
   - Shows the importance of consistent spacing in layouts

3. **Change Radius**
   - Cycles through border radius options
   - Demonstrates how corner rounding affects visual style

## Visual Display

The demo uses a 2x2 grid layout to showcase the tokens:

- Each square represents a different color from the current scheme
- The gaps between squares show the current spacing value
- The corners of each square show the current border radius
- The layout maintains aspect ratio for consistent presentation

## Implementation Details

The demo is built using:
- React for state management and UI
- Tailwind CSS for styling and design tokens
- CSS Grid and Flexbox for layout
- Dynamic class composition for token switching

## Purpose

This demo illustrates several key design system concepts:
1. How design tokens create consistent, reusable styles
2. The relationship between different types of tokens
3. How themes can be built using token swapping
4. The importance of systematic spacing and radius scales
5. How small token changes can create distinct visual styles

## Usage

Interact with the buttons to explore different combinations of:
- Color schemes (system tokens vs specific themes)
- Spacing values (from compact to spacious)
- Border radius values (from sharp to rounded)

This helps visualize how design tokens work together to create cohesive interfaces. 
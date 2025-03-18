# Design Tokens

This directory contains the raw design tokens for the design system.

## Files

- `primitives.json`: Contains the base color tokens and other primitive values
- `variables.json`: Contains semantic tokens that reference the primitive values

## Structure

### Primitives
The `primitives.json` file contains the foundational design tokens:
- Color scales (mint-cream, rose, zinc, etc.)
- Base colors (white, black)
- Other primitive values

### Variables
The `variables.json` file contains semantic tokens that reference the primitives:
- Text colors
- Background colors
- Border colors
- Other semantic values

## Usage

These tokens are processed by Style Dictionary to generate:
- CSS variables in `src/styles/tokens.css`
- Other platform-specific outputs as needed

## Adding New Tokens

1. Add primitive values to `primitives.json` if needed
2. Reference primitives in `variables.json` using the format `{category.token}`
3. Run `npm run build:tokens` to regenerate the output files 
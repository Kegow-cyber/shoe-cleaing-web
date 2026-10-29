# FreshKicks Shoe Cleaning Website - Part 2

## Project Overview
Website for a shoe cleaning company where customers can book to bring shoes, get instant quote, and receive notification when ready for collection.

## Part 2 Updates & Feedback from Part 1
- Added external stylesheet style.css linked to all pages (2.1)
- Implemented base styles, CSS reset, typography scales (2.2, 2.3)
- Built layout using Flexbox (header, footer) and Grid (hero, services) (2.4)
- Added visual styles: color, background-color, border, box-shadow, border-radius (2.5)
- Added pseudo-classes: :hover, :focus, :active for interactive elements
- Implemented responsive design for desktop, tablet, mobile (Section 3)

## 3.1 Breakpoints Implementation
- Desktop: >768px - 3 column layout
- Tablet: max-width 768px - 2 column layout, hero stacks to single column
- Mobile: max-width 480px - 1 column layout, navigation stacks vertically
- Font sizes and padding adjust for each breakpoint

## 3.2 Relative Units
Used rem for font sizes, em for padding/margins, % for widths to ensure responsiveness.

## 3.3 Responsive Images
Used srcset and sizes attributes to provide different image resolutions, plus CSS max-width:100% and height:auto.

## 3.4 Testing Evidence
Screenshots taken using Chrome DevTools Device Toolbar.

### Desktop View (1920px)
![Desktop](./desktop.png)

### Tablet View (768px)
![Tablet](./tablet.png)

### Mobile View (390px - iPhone 12 Pro)
![Mobile](./mobile.png)

Tested on: Chrome, Edge, Firefox. Layout works on all screen sizes.

## Changelog
- 2026-05-13: Created responsive CSS with media queries
- 2026-05-13: Added booking form with instant quote calculation (JS)
- 2026-05-13: Added notification system for collection
- 2026-05-13: Updated README with screenshots

## References
- MDN Web Docs - CSS Flexbox, Grid, Media Queries
- W3Schools - Responsive Images
- Unsplash - Demo images

## How to Run
1. Clone repository
2. Open index.html in browser
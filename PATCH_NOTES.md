# Manyaleza Suppliers — UX Refinement Patch

This patch refines the existing React/Vite project without adding dependencies or changing the business content.

## Changes

- Removed the global `100vh` minimum height and slow global section transitions.
- Replaced the 1.4-second page entrance with a subtle 260ms fade/slide transition.
- Added consistent reduced-motion handling.
- Improved desktop navigation active states and hover transitions.
- Reworked the mobile menu to animate open/closed, expose its expanded state, close on route changes and support Escape.
- Added restrained product-card hover and image transitions.
- Improved product modal entrance/exit, backdrop, scroll locking, Escape handling, focus trapping and focus restoration.
- Added a fallback category label to avoid a crash if a product category is missing.
- No new packages were introduced.

## Apply

1. Extract this ZIP.
2. Open the extracted project folder in your editor.
3. Run `npm install` (or `npm ci` if your lockfile is current).
4. Run `npm run dev` to preview.
5. Run `npm run build` before deployment.

## Validation note

The patch was created against the supplied ZIP. A production build could not be completed in the patching environment because the dependency installation did not finish and the local Vite executable was unavailable. Please run the build locally before deploying.

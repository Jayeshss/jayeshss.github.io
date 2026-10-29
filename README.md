# Jayesh S S — portfolio redesign

A responsive, buildless portfolio using Jayesh's existing logo, work, professional history, résumé, and contact details. The entirely rebuilt “Inside the Creative Studio” concept uses warm ivory, cobalt blue, pastel collection panels, an oversized personal wordmark, and a clickable postcard project wall. The experience is organized into seven real pages rather than a single scrolling portfolio.

## Files

- `dist/index.html`: creative-studio homepage, postcard wall, and filterable collections.
- `dist/studio.html`: about, capabilities, experience, and résumé.
- `dist/contact.html`: dedicated contact page and inquiry form.
- `dist/project-cgi.html`, `dist/project-branding.html`, `dist/project-motion.html`, `dist/project-packaging.html`: dedicated collection pages.
- `dist/styles.css`: complete responsive styles, including reduced-motion support.
- `dist/app.js`: filters, image lightboxes, studio accordions, 3D viewer, mobile navigation, and contact form.
- `dist/assets/`: local fonts, optimized artwork, six recovered videos, two original GLB models, the supplied CV, and the model-viewer runtime.
- The accompanying `Jayesh-Portfolio-Redesign.zip` is a complete static website export, ready to place at a GitHub Pages repository root.

## GitHub Pages

1. Extract `Jayesh-Portfolio-Redesign.zip`.
2. Copy its contents to the published root of `jayeshss/jayeshss.github.io` using a review branch or after retaining a backup.
3. Keep `index.html`, `styles.css`, `app.js`, and `assets/` together. The included `.nojekyll` file supports plain static hosting.
4. Update the Open Graph image URL in each HTML page to your final public domain when publishing there.
5. Deploy using the repository's GitHub Pages configuration.

This work created a separate private review site. The original GitHub repository was not modified.

## Local development

There is no build or package-install step. Serve `dist/` over HTTP rather than opening `index.html` directly from the file system, because 3D models load through browser requests.

## Content and service notes

Assets and career details were retrieved from https://jayeshss.github.io/ and its public repository on 29 October 2026. The original motion paths returned 404; six video files were recovered from the repository root. The original packaging subgallery files were also missing; the redesign shows the existing packaging concept image, clearly labelled as a concept. Source images are retained without changing their artwork and optimized to WebP.

The contact form retains the site's existing FormSubmit destination, `2119jayesh@gmail.com`. It handles validation, confirmed success responses, timeouts, and failures with a direct email fallback. Account activation and actual email delivery must be verified by the owner; no test message was sent. Direct email and professional profile links remain available.

Interactive 3D uses Google's model-viewer 4.3.1 and the two original embedded-asset GLB files. A WebGL-capable browser is required. The review browser had WebGL disabled, so rendering and rotation could not be visually verified. The fallback, model selection, model metadata, downloadable files, and GLB integrity were checked. Normal browsing never waits on 3D initialization.

## Verification

Checked all seven pages for local references and unique headings, desktop and 320/390-pixel mobile layouts, horizontal overflow, category filters, gallery/lightbox open and close, Escape behavior, focus return, seven branding images, video playback, mobile navigation, required-field validation, all HTML asset references, JavaScript syntax, video codecs, and GLB embedded dependencies. Full contact delivery and WebGL rotation remain unverified for the reasons above.

Fonts: Bricolage Grotesque and DM Sans from Google Fonts. The model-viewer runtime retains its original embedded license notices. Portfolio media and branding belong to their respective owners.

## CV and career update

Work experience, education, and the LinkedIn URL are aligned with the user-supplied `Jayesh CV ats.pdf`. The website serves a byte-identical copy at `assets/Jayesh-CV-ATS.pdf`. Download links are available in desktop navigation, the mobile menu, homepage, Studio page, and Contact page. The homepage also introduces both roles; the Studio page includes detailed responsibilities. The earlier public résumé has been replaced by the supplied CV.

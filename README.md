# IRLP Lab website

This is a static HTML, CSS, and JavaScript website. There is no build step or package installation. Page URLs, content, and layout are preserved.

## Run locally

```powershell
cd E:\IR_lab\irlab_website\IRLP-LAB.github.io
python -m http.server 8000
```

Open http://localhost:8000. Press Ctrl+C to stop the server. After changing styles, use Ctrl+F5 in your browser to refresh cached files.

## File structure

```text
IRLP-LAB.github.io/
  index.html                  Home
  people_current.html         Faculty, PhD, PG, UG students, and staff
  people-alumni.html          Alumni
  research-projects.html      Research projects
  research-resources.html     Computing resources
  publications.html           Publications by year
  events.html                 Events
  gallery.html                Gallery albums and viewer markup
  media.html                  Media coverage
  contact.html                Contact information
  assets/
    css/
      style.css               Existing layout and responsive rules
      theme.css               Visual colors, backgrounds, and hover effects
    js/
      main.js                 Shared navigation and homepage slideshow
      gallery.js              Gallery image lists and viewer controls
      media.js                Newspaper clipping viewer
    people/
      faculty/                Faculty photos
      phd/                    Current PhD student photos
      pg/                     Current PG student photos
      ug/                     Current UG student photos
      staff/                  Staff photos
      alumni/                 Alumni photos
      unassigned/             Photos whose identities are not established
    event/                    Event images
    gallary/                  Existing gallery images; spelling retained for compatibility
    gif/                      Existing animated illustrations
    media/                    Newspaper clippings
  docs/
    EDITING.md                Instructions and templates for future changes
```

See [the editing guide](docs/EDITING.md) for adding people, replacing photos, and changing other content. Adding a photo to a folder does **not** automatically create a person on the website; add their card to the appropriate HTML page as well.

## Styling and scripts

Every page loads `assets/css/style.css` followed by `assets/css/theme.css`. Edit the theme for visual changes; edit the base stylesheet only when a layout change is intended. Preserve the loading order.

Page-specific scripts load after their HTML controls, followed by the shared script. The shared script is scoped to avoid name conflicts with gallery functions.

Keep the HTML pages at the repository root to preserve existing links and GitHub Pages URLs. Shared header and footer markup is included in each page: apply navigation edits consistently across all pages. Local changes are not published until committed and pushed through the repository's publishing workflow.

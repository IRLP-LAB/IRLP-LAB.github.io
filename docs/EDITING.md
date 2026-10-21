# Editing the website

## People photos

Use the folder matching the person's category. Existing photo filenames have been preserved exactly, including spaces, underscores, capitalization, and file extensions.

| Category | Photo folder | Page to edit |
| --- | --- | --- |
| Faculty | `assets/people/faculty/` | `people_current.html`, Faculty section |
| PhD students | `assets/people/phd/` | `people_current.html`, Ph.D. Students section |
| PG students | `assets/people/pg/` | `people_current.html`, PG Students section |
| UG students | `assets/people/ug/` | `people_current.html`, UG Students section |
| Staff | `assets/people/staff/` | `people_current.html`, Staff Members section |
| Alumni | `assets/people/alumni/` | `people-alumni.html` |

`Sandeep Modha.png` is used by both Faculty and Alumni. Both pages reference the same image in `faculty/`; update that one photo to change both appearances.

The two `IMG-20250111-WA0002.jpg` and `IMG-20250111-WA0003.jpg` photos are retained in `unassigned/`. They have not been associated with a person by guessing. Once identified, move them to the correct category and update any HTML reference.

### Add a current member

1. Copy the person's photo into the correct category folder. For new files, a name such as `First_Last.jpg` is easy to maintain.
2. Open `people_current.html` and find the category heading, for example `<h2>PG Students</h2>`.
3. Insert a card inside that section's `<div class="people-grid">`, alongside the existing cards:

```html
<div class="person-card">
  <img src="assets/people/pg/First_Last.jpg" alt="First Last" loading="lazy">
  <div class="person-info">
    <h3>First Last</h3>
  </div>
</div>
```

Replace the example name and image path with the actual details. Use the same classes to keep the existing card dimensions and layout. For staff, include the role in the heading as on the existing staff card.

If social links are supplied, add this inside `person-info`, below the heading, using the real profile URLs:

```html
<div class="social-icons">
  <a href="https://www.linkedin.com/in/PROFILE/" aria-label="LinkedIn">
    <i class="fab fa-linkedin"></i>
  </a>
  <a href="https://github.com/USERNAME" aria-label="GitHub">
    <i class="fab fa-github"></i>
  </a>
</div>
```

Omit links that are not available. Match the filename and extension exactly: GitHub Pages paths are case-sensitive.

### Replace a photo

Replace the file in its existing folder using the same filename to avoid changing the HTML. If the filename changes, update every page that references it. Do not remove a photo until checking whether another section uses it.

### Move a student to alumni

Remove their card from the current page and add an entry inside `mtech-grid` on `people-alumni.html`, matching the existing alumni layout:

```html
<div class="alumni-card">
  <h3>First Last</h3>
  <p>Role, Organization, Location.</p>
</div>
```

Use only confirmed role and organization details. If retaining the photo, move it to `assets/people/alumni/` and update any references. The general alumni list currently uses text cards; PhD alumni use photo cards in `phd-grid`.

## Other website changes

| Change | File or folder |
| --- | --- |
| Homepage content and section order | `index.html` |
| Homepage rotating photos | `images` list in `assets/js/main.js` |
| Colors, shadows, borders, and hover styling | `assets/css/theme.css` |
| Layout, spacing, card sizes, and responsive breakpoints | `assets/css/style.css` |
| Faculty, PhD students, PG students, UG students, or staff | `people_current.html` |
| Alumni names and roles | `people-alumni.html` |
| Research projects and grants | `research-projects.html` |
| Computer specifications | `research-resources.html` |
| Publications | `publications.html`, inside the relevant `year-section` |
| Event names, dates, and images | `events.html` and `assets/event/` |
| Gallery albums | `gallery.html` and `galleryData` in `assets/js/gallery.js` |
| Newspaper items | `media.html` and `assets/media/` |
| Contact details and map | `contact.html` |

Gallery folder keys in `openFolder(...)` must match keys in `galleryData`. Gallery and slideshow image paths resolve from the HTML page, so retain paths starting with `assets/`. CSS image URLs, if added later, resolve relative to `assets/css/` instead.

## Before publishing

Run the local server from the repository root. Review the affected page on desktop and a narrow browser window, check that photos load, and click any changed links or controls. Refresh with Ctrl+F5 when replacing photos or styles. Commit the HTML and its referenced assets together so the published website has all required files.

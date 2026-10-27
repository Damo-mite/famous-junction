# Famous Junction

Static landing page for Famous Junction Restaurant in Belgravia, Harare. It is a single page so it can be hosted on GitHub Pages. GitHub Pages cannot run PHP, so bookings, specials, inventory, shifts, and deliveries stay for a later phase on a host that runs PHP.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. The site will be at `https://<username>.github.io/famous-junction/`.

The canonical URL, Open Graph tags, structured data, `robots.txt`, and `sitemap.xml` use `https://damoh.github.io/famous-junction/`. If the GitHub username or a custom domain is different, replace that URL in:

- `index.html` (canonical link, Open Graph tags, Twitter tags, and the Restaurant JSON-LD)
- `robots.txt`
- `sitemap.xml`

## After the site is live

Search ranking is not something the page can guarantee. These steps give Google a consistent name, address, and phone, which is what local results use:

1. In [Google Search Console](https://search.google.com/search-console), add the Pages URL, verify it, and submit `sitemap.xml`.
2. Claim the [Google Business Profile](https://business.google.com/) with the same details as the page: Famous Junction Restaurant, No. 8 Lanack Road, Belgravia, Harare, +263 77 527 2831, open daily 11:00–23:00.
3. Ask guests for reviews on that profile, and link to this site from the Instagram and Facebook pages.

## Images

The page uses the web-ready files in `assets/images`:

- `logo-transparent.png` and `logo-sm.png`: the logo with its white background removed
- `chicken-stew.jpg`, `beef-stew.jpg`, `sadza-pork-chops.jpg`, `matemba-plate.jpg`: cropped food photos
- `favicon.svg` and `apple-touch-icon.png`: browser and phone home-screen icons

The `*-uncropped` files and `logo.png` are the originals and are not used by the page.

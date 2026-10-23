# Common Ground — deploy guide

A static, no-build website. Every page is plain HTML with one shared stylesheet and one
shared script. There is nothing to compile, no framework, no server, no database.

---

## 1. Set your real domain (do this first)

Four files contain the placeholder `https://example.org`. Find and replace it with your
real domain, including `https://` and no trailing slash:

- `sitemap.xml`
- `robots.txt`
- every `index.html` (in the `canonical`, `og:url` and `og:image` tags)

On macOS or Linux, from inside this folder:

```bash
grep -rl "https://example.org" . | xargs sed -i '' 's|https://example.org|https://YOURDOMAIN.org|g'   # macOS
grep -rl "https://example.org" . | xargs sed -i    's|https://example.org|https://YOURDOMAIN.org|g'   # Linux
```

Also replace `hello@example.org` in `contact/index.html` with your real address.

---

## 2. Deploy

### Netlify (fastest)
1. Go to app.netlify.com, sign up
2. Drag this whole folder onto the deploy area
3. Live in about twenty seconds at a `*.netlify.app` address
4. Site settings → Domain management → add your custom domain

`_headers` and `_redirects` are read automatically.

### Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Upload assets
2. Upload this folder
3. Custom domains → add yours (instant if the domain is already on Cloudflare)

`_headers` and `_redirects` are supported here too.

### GitHub Pages
1. Create a repository, commit the contents of this folder to the root of `main`
2. Settings → Pages → Source: `main` / root
3. Add a `CNAME` file containing your domain

Note: GitHub Pages ignores `_headers` and `_redirects`, so you lose the security headers
and the custom 404 behaves slightly differently. Netlify or Cloudflare is the better fit.

### Any ordinary web host
Upload the contents by SFTP to the web root. Make sure the server serves
`directory/index.html` for `/directory/` — nearly all do by default.

---

## 3. After it's live

- [ ] Submit `https://YOURDOMAIN.org/sitemap.xml` to Google Search Console and Bing Webmaster Tools
- [ ] Test the share card by pasting a URL into Slack, Facebook or LinkedIn
- [ ] Run Lighthouse (Chrome DevTools → Lighthouse) and aim for 100 on Accessibility
- [ ] Run WAVE at wave.webaim.org against the live URL
- [ ] Check every page in Arabic to confirm right-to-left layout survived
- [ ] Navigate the whole site with the keyboard only, and once with a screen reader

---

## 4. Before you call it published

These are content tasks, not code tasks, and they matter more than the deploy:

1. **Verify all 51 state entries.** Programme names are accurate as general guidance but
   agencies rename and reorganise. Replace the Google-search links with real agency URLs
   and remove the "draft content" notice on `/states/` once done.
2. **Get the translations reviewed by native speakers**, starting with the crisis text.
3. **Fill in `/about/`** — who you are, funding, conflicts of interest. The placeholders
   are marked in amber boxes on the page.
4. **Fill in `/privacy/`** — your host's log retention, and whether you added analytics.
5. **Fill in `/contact/`** — a real email address.
6. **Choose a content licence** and state it on `/about/`.

---

## 5. Optional hardening

**Self-host the fonts.** Right now Fraunces, Karla and Noto Sans Arabic load from Google
Fonts, which sends your visitors' IP addresses to Google. Download the woff2 files, put
them in `/assets/fonts/`, replace the `<link>` tags with `@font-face` rules in
`site.css`, and drop the two `preconnect` lines. Then tighten the CSP in `_headers` by
removing the `fonts.googleapis.com` and `fonts.gstatic.com` entries.

**Analytics, if you want them.** Plausible or Cloudflare Web Analytics are cookieless and
need no consent banner. Add the domain to `script-src` in `_headers` if you do.

---

## 6. File map

```
index.html              Start here (home)
understanding/          What autism is, evaluation, co-occurring conditions
kinds/                  Old labels, support levels, profiles
history/                Timeline
research/               Evidence: settled, open, and to be wary of
support/                Therapies, first 90 days, bilingual families
activities/             Everyday activities, meltdowns, sleep, safety
stigma/                 Stigma, language, masking, advocacy
states/                 All 50 states + DC, interactive
resources/              National orgs, language rights, glossary
about/  contact/  privacy/
404.html                Custom not-found page
assets/site.css         All styles
assets/site.js          Language engine, state data, theme and text-size controls
assets/favicon.svg, icon-*.png, share.png
sitemap.xml  robots.txt  site.webmanifest  _headers  _redirects
```

### Editing content
Article text lives directly in each page's `index.html`, inside
`<div class="i18nbody" data-lang="en">`. To add a translation of a page, duplicate that
div, change `data-lang` to the language code, translate the text, and add `hidden`.
The script shows the matching language if it exists and falls back to English with a
notice if it doesn't.

### Editing state data or interface strings
Both live in `assets/site.js`: the `T` object holds every interface string per language,
and the `S` array holds the 51 state entries as
`[abbreviation, name, early-intervention programme, DD/waiver agency, note]`.

---

## Connecting the feedback form (one-time, 3 minutes)

The feedback page at `/feedback/` has a working form, but it needs a free
delivery service before submissions reach you.

1. Go to **formspree.io** and sign up with **yuvanautismhelp@gmail.com** (free tier
   allows 50 submissions/month)
2. Create a new form. Formspree gives you an ID that looks like `xbljdkqw`
3. Open `feedback/index.html`, find `YOUR_FORM_ID`, replace it with your ID
4. Re-upload the site

Until you do this, the form will fail on submit — but the email link directly
underneath it still works, so the page is useful either way.

If you'd rather not use a third party, delete the `<form>` block entirely and
leave the email link.

---

## Changing the stylesheet or script (important)

`/assets/*` is cached for a year (`_headers`), so browsers and Cloudflare never re-check those files.
Every time `assets/site.*.css`, `assets/site.*.js` or `assets/theme.*.js` changes, give it a **new
date stamp in the file name** (e.g. `site.202610231300.css` → `site.202611051200.css`) and update
the references in every page:

```bash
grep -rl "OLDSTAMP" --include='*.html' . | xargs sed -i '' 's/OLDSTAMP/NEWSTAMP/g'
```

Keeping the old name means visitors keep the old file (this once left the homepage's infinity loop black).

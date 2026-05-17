# Queen's Club — Website

Dark editorial luxury website for **Queen's Club Augsburg-Oberhausen** (Nagelstudio · Eyelash · Pediküre · SPA).

**Aesthetic:** Vogue × high-end spa — warm black + cream + brushed gold.

---

## 📁 Files

| File | Was es macht |
|---|---|
| `index.html` | Markup mit allen Sections, Daten, Texten |
| `style.css` | Dark editorial luxury styling, alle Animationen CSS |
| `script.js` | Loader, custom cursor, scroll reveals, counter, marquee, parallax |

## 🚀 Sofort testen

Doppelklick auf `index.html` → öffnet sich im Browser. Fertig.

Falls Fonts nicht laden → Internet aktiv? Google Fonts werden online geladen.

---

## ✨ Was die Seite kann

- **Loader** mit "Queen's Club" rise-up Animation
- **Custom Cursor** (Gold-Punkt + magnetic ring) auf Desktop
- **Hero** mit Staggered Text-Reveal + Slow-Zoom Hintergrundbild
- **Marquee** ("Nails · Eyelash · Pediküre · SPA" Endlos-Scroll)
- **Stats** mit Counter-Animation (0 → 510 Reviews etc.)
- **Service-Liste** mit Gold-Fill von unten beim Hover
- **Galerie** mit Tag-Fade-in + Zoom on hover
- **Komplette Preisliste** vom Flyer (alle 8 Kategorien)
- **Mobile responsive** (alles funktioniert auch am Handy)
- **Smooth scroll** zwischen Sections
- **Accessibility:** semantische Tags, alt-Texte, reduced-motion friendly

---

## 🖼️ Bilder

Aktuell sind **Unsplash-Placeholder** drin (Hero + Galerie).

**Zum Anpassen:**

1. Eigene Fotos in Ordner `images/` legen (am besten 1800×1200 px, JPG)
2. In `index.html` die `<img src="https://images.unsplash.com/...">` URLs ersetzen durch `images/dein-foto.jpg`

Optimale Bilder für QueensClub:
- **Hero:** Foto vom Salon-Innenraum oder Detail von Nail-Art Hand
- **Galerie 6 Bilder:** Long Nails, French, Glitzer, Lashes Close-up, Babyboomer, Pediküre-Detail
- Bevor du fotografierst: gute Lichtquelle (natürliches Licht von vorne), neutrale Hintergrund

---

## 🌐 Online stellen (kostenlos)

### Option A: Netlify (5 Minuten, einfachster)

1. Auf https://app.netlify.com/drop gehen
2. Den gesamten Ordner `QueensClub-Website` per Drag-and-Drop reinziehen
3. Fertig! Du bekommst eine URL wie `https://random-name-12345.netlify.app`
4. In Netlify-Dashboard → Site settings → Change site name → `queensclub-augsburg` → URL wird `queensclub-augsburg.netlify.app`

### Option B: Eigene Domain (z.B. queens-club-augsburg.de)

1. Domain kaufen bei **Namecheap / IONOS / Strato** (~10 €/Jahr)
2. Netlify → Domain settings → Add custom domain → `queens-club-augsburg.de`
3. DNS-Records vom Anbieter auf Netlify zeigen lassen (Netlify zeigt dir die Anleitung)
4. Warten 1-24h → fertig

### Option C: Vercel

1. https://vercel.com → Sign up
2. New Project → Drag-and-Drop Ordner
3. Deploy → URL fertig

---

## 🔧 Was du noch anpassen kannst

In `index.html` Strg+F (Cmd+F) suchen:

| Suchen | Ersetzen mit |
|---|---|
| `0821 470 189 48` | Wenn Nummer ändert |
| `0155 6900 6820` | Wenn WhatsApp-Nummer ändert |
| `Donauwörther Str. 66` | Wenn Adresse ändert |
| `queens_club_augsburg54` | IG-Handle |
| Service-Texte | Wenn du andere Beschreibungen willst |

---

## 📊 Nach Launch: zwingend einbauen

### 1. Google Analytics / Plausible (Tracking)

Wer kommt auf die Seite? Welche Buchungs-Button wird geklickt?

**Empfehlung: Plausible (DSGVO-konform, keine Cookies, ~9 €/Monat)**

In `<head>` einfügen:
```html
<script defer data-domain="queens-club-augsburg.de" src="https://plausible.io/js/script.js"></script>
```

### 2. Cookie-Banner (DSGVO)

Wenn Google Fonts + Tracking → Pflicht in DE.

Empfehlung: https://www.iubenda.com (ab 9 €/Monat) oder selbst-hosted mit "klaro!" (kostenlos).

### 3. Impressum + Datenschutz

**Pflicht in Deutschland.** Generator: https://www.e-recht24.de/impressum-generator.html

### 4. Google Search Console

Verifizieren → Sitemap einreichen → Indexing checken.

### 5. Strukturierte Daten (Schema.org)

In `<head>` einfügen für besseres Google-Ranking (lokale Suche):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Queen's Club",
  "image": "https://queens-club-augsburg.de/og.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Donauwörther Str. 66",
    "addressLocality": "Augsburg",
    "postalCode": "86154",
    "addressCountry": "DE"
  },
  "telephone": "+498214701894 8",
  "openingHours": "Mo-Sa 10:00-20:00",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "510"
  }
}
</script>
```

---

## 🎨 Aesthetic-Erklärung

**Warum dark editorial luxury, nicht pink-rose-gold?**

- 95% der deutschen Nagelstudios verwenden pink/rose/glitter — **Differenzierung**
- Dark + gold signalisiert **Premium** (wie Vogue, Chanel, Tom Ford)
- Spricht **Frauen 25-45** an, die nicht "ein normales Nagelstudio" wollen, sondern ein **Statement-Studio**
- Funktioniert auch für **Männer-Kunden** (60-70€ VIP-Pediküre target)

---

## ✅ Test-Checkliste vor Launch

- [ ] Alle Links funktionieren (Tel, WhatsApp, IG, TikTok)
- [ ] Auf Mobile getestet (Cmd+Opt+I → iPhone-Ansicht)
- [ ] Preisliste stimmt mit aktuellem Flyer überein
- [ ] Eigene Fotos statt Unsplash
- [ ] Impressum + Datenschutz verlinkt
- [ ] Lädt < 3 Sekunden (Test: https://pagespeed.web.dev/)
- [ ] Google Search Console verifiziert
- [ ] SEO Title + Description checked

---

## 🐛 Bekannte Limits (aktueller Stand)

- Bilder sind Unsplash-Placeholder → eigene Fotos einbauen
- Kein Online-Booking integriert → Termine laufen via WhatsApp Click-to-Chat (`wa.me/4915569006820`)
- Kein Impressum/Datenschutz seite → **vor Launch zwingend ergänzen**

---

*Built with care for Queen's Club Augsburg. May 2026.*

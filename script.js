/* ============================================
   Queen's Club — Animation Script
   ============================================ */

(function () {
  "use strict";

  /* -----------------------------------------
     1. LOADER (hide after 900ms)
     ----------------------------------------- */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => {
        loader.classList.add("hidden");
        // trigger hero animations
        document.querySelectorAll(".rise-on-load").forEach((el) => {
          el.classList.add("in");
        });
      }, 900);
    }
  });

  /* -----------------------------------------
     2. CUSTOM CURSOR (desktop only)
     ----------------------------------------- */
  if (window.matchMedia("(min-width: 769px)").matches) {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    });

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover-grow on interactive elements
    const hoverSelectors = "a, button, .service-item, .gallery-item, [data-cursor=hover]";
    document.querySelectorAll(hoverSelectors).forEach((el) => {
      el.addEventListener("mouseenter", () => ring && ring.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring && ring.classList.remove("hover"));
    });
  }

  /* -----------------------------------------
     3. NAV — scrolled state
     ----------------------------------------- */
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 60) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* -----------------------------------------
     4. INTERSECTION OBSERVER — reveal sections
     ----------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // also mark parent .split for delay
          const parent = entry.target.closest(".split, .stats-grid, .price-grid, .gallery-grid");
          if (parent) parent.classList.add("visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* -----------------------------------------
     5. COUNTER ANIMATION
     ----------------------------------------- */
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.counted === "1") return;
        el.dataset.counted = "1";

        const target = parseFloat(el.dataset.target);
        const divide = parseFloat(el.dataset.divide || "1");
        const duration = 1800;
        const startTime = performance.now();

        const easeOut = (t) => 1 - Math.pow(1 - t, 3);

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const value = target * easeOut(progress);

          if (divide > 1) {
            el.textContent = (value / divide).toFixed(1);
          } else {
            el.textContent = Math.floor(value).toLocaleString("de-DE");
          }

          if (progress < 1) requestAnimationFrame(tick);
          else {
            el.textContent = divide > 1
              ? (target / divide).toFixed(1)
              : target.toLocaleString("de-DE");
          }
        };

        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".counter").forEach((el) => counterObserver.observe(el));

  /* -----------------------------------------
     6. SMOOTH ANCHOR LINKS (compensate for nav)
     ----------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* -----------------------------------------
     7. PARALLAX — Hero image (subtle)
     ----------------------------------------- */
  const heroImg = document.querySelector(".hero-image img");
  if (heroImg) {
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          heroImg.style.transform = `scale(${1 + y * 0.0004}) translateY(${y * 0.15}px)`;
        }
      },
      { passive: true }
    );
  }

  /* -----------------------------------------
     8. PERFORMANCE — pause animations when tab inactive
     ----------------------------------------- */
  document.addEventListener("visibilitychange", () => {
    const marquee = document.querySelector(".marquee-track");
    if (marquee) {
      marquee.style.animationPlayState = document.hidden ? "paused" : "running";
    }
  });

  /* -----------------------------------------
     9. SAFETY: ensure all reveal elements show on
        browsers without IntersectionObserver (fallback)
     ----------------------------------------- */
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal, .rise-on-load").forEach((el) => {
      el.classList.add("visible", "in");
    });
  }
})();

"use client";

import { useEffect } from "react";

/**
 * ScrollReveal
 * Mounts a single IntersectionObserver that watches every element tagged with
 * [data-reveal]. When an element crosses the threshold it gains the class
 * "is-visible", triggering the fade-up transition defined in globals.css.
 *
 * Also re-observes on route changes by watching DOM mutations, so it works
 * across Next.js page navigations without any per-page setup.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const THRESHOLD = 0.12;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Once revealed, stop watching to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: THRESHOLD, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        observer.observe(el);
      });
    };

    // Observe elements already in the DOM
    observe();

    // Re-observe whenever new nodes are added (e.g. after route change)
    const mutationObserver = new MutationObserver(observe);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}

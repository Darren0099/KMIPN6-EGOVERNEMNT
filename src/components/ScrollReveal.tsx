"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll animations are optional enhancement: HTML remains readable without JS. */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const processed = new WeakSet<HTMLElement>();
    const completed = new WeakSet<HTMLElement>();
    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (completed.has(el)) return;
          completed.add(el);
          observer.unobserve(el);
          el.classList.remove("reveal-pending");
          const finish = (event: AnimationEvent) => {
            if (event.target !== el) return;
            el.classList.remove("reveal-enter");
            el.removeEventListener("animationend", finish);
          };
          el.addEventListener("animationend", finish);
          el.classList.add("reveal-enter");
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    function enhance() {
      document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        Array.from(group.children).forEach((child, index) => {
          if (!(child instanceof HTMLElement)) return;
          if (!child.dataset.reveal) child.dataset.reveal = group.dataset.revealGroup || "up";
          child.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 85}ms`);
        });
      });

      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (processed.has(el)) return;
        processed.add(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
          // Initial visible content: animate without waiting for a scroll event.
          el.classList.add("reveal-enter");
          completed.add(el);
          const finish = (event: AnimationEvent) => {
            if (event.target !== el) return;
            el.classList.remove("reveal-enter");
            el.removeEventListener("animationend", finish);
          };
          el.addEventListener("animationend", finish);
        } else {
          el.classList.add("reveal-pending");
          observer.observe(el);
        }
      });
    }

    enhance();
    // Handles filtering and "Tampilkan lebih banyak" without re-animating old cards.
    const mutations = new MutationObserver(() => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        frame = 0;
        enhance();
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      document.querySelectorAll<HTMLElement>(".reveal-pending, .reveal-enter").forEach((el) => {
        el.classList.remove("reveal-pending", "reveal-enter");
      });
    };
  }, [pathname]);

  return null;
}

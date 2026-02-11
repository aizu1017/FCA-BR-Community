// Copy buttons
document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.addEventListener("click", async () => {
    const target = btn.getAttribute("data-copy");
    const el = document.querySelector(target);
    if (!el) return;

    const text = el.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      const old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = old), 900);
    } catch {
      alert("Copy failed. Please copy manually:\n" + text);
    }
  });
});

// FAQ accordion
document.querySelectorAll(".faq-q").forEach(q => {
  q.addEventListener("click", () => {
    const a = q.nextElementSibling;
    const expanded = q.getAttribute("aria-expanded") === "true";

    // close all
    document.querySelectorAll(".faq-q").forEach(x => x.setAttribute("aria-expanded", "false"));
    document.querySelectorAll(".faq-a").forEach(x => (x.style.display = "none"));

    // open this one if it was closed
    if (!expanded) {
      q.setAttribute("aria-expanded", "true");
      a.style.display = "block";
    }
  });
});

// EU random tips
const tips = [
  "If WARP fixes ‘Check Version’ once, try reopening later without it.",
  "If you lag, try Ethernet (cable) instead of Wi-Fi.",
  "Close downloads/updates while the launcher is checking version.",
  "If it won’t open, run launcher as Admin first before anything else.",
  "Sometimes WARP helps login, but playing without it can give better ping."
];

const tipBox = document.getElementById("tipBox");
const refreshBtn = document.getElementById("refreshTip");

if (refreshBtn && tipBox) {
  refreshBtn.addEventListener("click", () => {
    const pick = tips[Math.floor(Math.random() * tips.length)];
    tipBox.textContent = "Tip: " + pick;
  });
}

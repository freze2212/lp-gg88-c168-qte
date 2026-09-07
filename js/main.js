let dynamicTargetUrl = "https://09llwin.com/?id=431604157";
let dynamicTeleUrl = "https://09llwin.com/?id=431604157";

function applyLinks(mainUrl, teleUrl) {
  if (mainUrl) dynamicTargetUrl = mainUrl;
  if (teleUrl) dynamicTeleUrl = teleUrl;

  // Cập nhật tất cả thẻ a dẫn link
  const links = document.querySelectorAll('a[href*="llwin"], a[href*="c168"], a.btn-experience, a.logo-hotspot');
  links.forEach((a) => {
    a.href = dynamicTargetUrl;
  });
}

function checkdomain() {
  const hostname = window.location.hostname || "c168hub.vip";
  const targetSpan = document.getElementById("dynamic-domain");
  if (targetSpan) {
    targetSpan.innerText = hostname.toUpperCase();
  }
}

function checklinkvn() {
  window.open(dynamicTargetUrl, "_blank");
}

function checklinktele() {
  window.open(dynamicTeleUrl || dynamicTargetUrl, "_blank");
}

// Nạp link động từ domains.json
async function loadDynamicConfig() {
  try {
    const res = await fetch("/domains.json?v=" + Date.now());
    if (res.ok) {
      const dj = await res.json();
      const host = (window.location.hostname || "").toLowerCase().replace(/^www\./, "");
      const entry = dj[host] || dj["www." + host] || dj[window.location.hostname];
      if (entry) {
        const main = entry.main_url || entry.url || entry.link;
        const tele = entry.telegram_url || entry.tele || entry.messenger_url || main;
        if (main) {
          applyLinks(main, tele);
          return;
        }
      }
    }
  } catch (e) {
    console.warn("Could not load dynamic config:", e);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  checkdomain();
  loadDynamicConfig();

  if (typeof VANTA !== "undefined" && typeof VANTA.GLOBE === "function") {
    VANTA.GLOBE({
      el: "body",
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.7,
      backgroundColor: 0x231d2c,
      color: 0xff9f01,
      color2: 0xffffff,
      size: 1.0,
      points: 10,
      spacing: 15,
      showDots: true,
      backgroundAlpha: 1,
      maxDistance: 20,
    });
  }
});

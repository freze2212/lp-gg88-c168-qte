function checkdomain() {
  const hostname = window.location.hostname || "c168hub.vip";
  const targetSpan = document.getElementById("dynamic-domain");
  if (targetSpan) {
    targetSpan.innerText = hostname.toUpperCase();
  }
}

function checklinkvn() {
  window.location.href = "reg.html";
}

function checklinktele() {
  window.location.href = "reg.html";
}

document.addEventListener("DOMContentLoaded", function () {
  checkdomain();

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

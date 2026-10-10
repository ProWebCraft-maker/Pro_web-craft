/* Pro Web Craft - إضافات فقط (مفيش أي تعديل في تصميم الصفحات الأصلي)
   لو عايز تشيل أي ميزة: امسح سطر <script src="enhancements.js"> من الصفحة. */
(function () {
  "use strict";
  var WA = "201553896282";
  var PHONE = "+201553896282";
  var page = document.title.split("|")[0].trim();
  var msg = encodeURIComponent("أهلاً Pro Web Craft، عايز أستفسر عن خدمة تصميم موقع (من صفحة: " + page + ")");

  var css = [
    ":root{--pwc-p:var(--primary-color,#00d5ff);--pwc-s:var(--secondary-color,#7b40ff)}",
    /* شريط تقدم السكرول */
    "#pwc-bar{position:fixed;top:0;right:0;height:3px;width:0;z-index:1100;background:linear-gradient(90deg,var(--pwc-s),var(--pwc-p));transition:width .1s linear}",
    /* أزرار عائمة */
    "#pwc-fab{position:fixed;left:16px;bottom:16px;z-index:900;display:flex;flex-direction:column;gap:10px;align-items:center;direction:ltr}",
    ".pwc-btn{width:52px;height:52px;border-radius:50%;border:0;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;text-decoration:none;box-shadow:0 8px 22px rgba(0,0,0,.35);transition:transform .25s,box-shadow .25s,opacity .25s}",
    ".pwc-btn:hover{transform:translateY(-4px) scale(1.06)}",
    ".pwc-btn{font-size:24px;line-height:1}",
    ".pwc-wa{background:#25d366;animation:pwcPulse 2.4s infinite}",
    ".pwc-call{background:linear-gradient(135deg,var(--pwc-s),var(--pwc-p))}",
    ".pwc-top{background:#1a1a40;border:1px solid rgba(255,255,255,.15);opacity:0;pointer-events:none;transform:translateY(10px)}",
    ".pwc-top.show{opacity:1;pointer-events:auto;transform:none}",
    "@keyframes pwcPulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.55)}70%{box-shadow:0 0 0 16px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}",
    /* فوتر */
    "#pwc-foot{margin-top:60px;padding:40px 5% 24px;background:rgba(8,8,24,.85);border-top:1px solid rgba(255,255,255,.08);color:#ccc;font-family:'Cairo',sans-serif;direction:rtl;position:relative;z-index:1}",
    "#pwc-foot .g{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:28px;max-width:1100px;margin:auto}",
    "#pwc-foot h4{margin:0 0 12px;color:#fff;font-size:17px}",
    "#pwc-foot a{display:block;color:#bbb;text-decoration:none;margin:7px 0;font-size:15px;transition:.25s}",
    "#pwc-foot a:hover{color:var(--pwc-p);transform:translateX(-4px)}",
    "#pwc-foot .c{text-align:center;margin-top:28px;padding-top:16px;border-top:1px solid rgba(255,255,255,.06);font-size:13px;color:#888}",
    /* ظهور الكروت تدريجياً */
    ".pwc-pre{opacity:0}",
    ".pwc-in{animation:pwcIn .7s ease both}",
    "@keyframes pwcIn{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}",
    "@media(max-width:768px){.pwc-btn{width:48px;height:48px}#pwc-fab{left:12px;bottom:12px}}",
    "@media(prefers-reduced-motion:reduce){.pwc-wa{animation:none}.pwc-pre{opacity:1}.pwc-in{animation:none}}"
  ].join("\n");
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var ico = { wa: "💬", call: "📞", up: "⬆" };

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    /* شريط التقدم */
    var bar = document.createElement("div");
    bar.id = "pwc-bar";
    document.body.appendChild(bar);

    /* الأزرار العائمة */
    var fab = document.createElement("div");
    fab.id = "pwc-fab";
    fab.innerHTML =
      '<button class="pwc-btn pwc-top" aria-label="للأعلى" title="للأعلى">' + ico.up + "</button>" +
      '<a class="pwc-btn pwc-call" href="tel:' + PHONE + '" aria-label="اتصل بنا" title="اتصل بنا">' + ico.call + "</a>" +
      '<a class="pwc-btn pwc-wa" href="https://wa.me/' + WA + "?text=" + msg + '" target="_blank" rel="noopener" aria-label="واتساب" title="كلمنا على واتساب">' + ico.wa + "</a>";
    document.body.appendChild(fab);
    var topBtn = fab.querySelector(".pwc-top");
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function onScroll() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var y = h.scrollTop || document.body.scrollTop;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      topBtn.classList.toggle("show", y > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* فوتر بروابط سريعة */
    var foot = document.createElement("footer");
    foot.id = "pwc-foot";
    foot.innerHTML =
      '<div class="g">' +
      '<div><h4>Pro Web Craft</h4><a style="pointer-events:none">نحول فكرتك إلى واقع رقمي</a></div>' +
      '<div><h4>روابط سريعة</h4><a href="index.html">الرئيسية</a><a href="services.html">أعمالنا</a><a href="pricing.html">الأسعار</a><a href="pay.html">طريقة الدفع</a><a href="contact.html">تواصل</a></div>' +
      '<div><h4>تواصل مباشر</h4><a href="https://wa.me/' + WA + '" target="_blank" rel="noopener">واتساب</a><a href="tel:' + PHONE + '">اتصل بنا</a><a href="mailto:pro.webcraft1@gmail.com">pro.webcraft1@gmail.com</a></div>' +
      '<div><h4>تابعنا</h4><a href="https://www.facebook.com/profile.php?id=61585305193974" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/pro.webcraft1/" target="_blank" rel="noopener">Instagram</a><a href="https://x.com/pro_webcra15857" target="_blank" rel="noopener">X</a></div>' +
      "</div>" +
      '<div class="c">© ' + new Date().getFullYear() + " Pro Web Craft - كل الحقوق محفوظة</div>";
    document.body.insertBefore(foot, document.body.querySelector("script") || null);

    /* ظهور الكروت تدريجياً عند السكرول */
    var sel = ".team-card,.price-card,.info-card,.payment-box,.social-section";
    var els = document.querySelectorAll(sel);
    if ("IntersectionObserver" in window && els.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.remove("pwc-pre");
            e.target.classList.add("pwc-in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(function (el, i) {
        el.classList.add("pwc-pre");
        el.style.animationDelay = (i % 3) * 0.08 + "s";
        io.observe(el);
      });
    }
  });
})();

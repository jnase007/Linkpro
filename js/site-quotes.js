(function () {
  var quotes = [
    {
      q: "He didn't just review structures — he connected them directly to specific techniques that can improve joint movement and function in our athletes.",
      a: "Taka",
      r: "Assistant Athletic Trainer, Atlanta Hawks"
    },
    {
      q: "This guy is easily above par with any other medical treatment I've ever received. His bedside manner is the best I've ever experienced.",
      a: "R.M.",
      r: "2014 Olympic Hopeful"
    },
    {
      q: "Dr. Amstutz was able to pinpoint where the issue was originating from, so I can work toward correcting it, rather than simply putting a bandaid on it.",
      a: "C.L.",
      r: "Age Group Athlete"
    }
  ];

  var roots = document.querySelectorAll("[data-quote-rotate]");
  if (!roots.length) return;

  var i = Math.floor(Math.random() * quotes.length);
  function paint(item, instant) {
    roots.forEach(function (el) {
      var q = el.querySelector("[data-quote-text]");
      var a = el.querySelector("[data-quote-attr]");
      function apply() {
        if (q) q.textContent = '"' + item.q + '"';
        if (a) a.innerHTML = item.a + ' <span>' + item.r + "</span>";
        el.style.opacity = "1";
      }
      if (instant) {
        apply();
        return;
      }
      el.style.opacity = "0";
      window.setTimeout(apply, 280);
    });
  }

  paint(quotes[i], true);
  window.setInterval(function () {
    i = (i + 1) % quotes.length;
    paint(quotes[i]);
  }, 6500);
})();

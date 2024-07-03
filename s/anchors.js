(function() {
  var hs = document.querySelectorAll("h2,h3");
  for (var h of hs) {
    var s = document.createElement("span");
    s.className = "anchor";
    s.style = "padding-left: 8px;";
    s.setAttribute("aria-hidden", "true");
    var l = document.createElement("a");
    l.setAttribute("href", "#" + h.id);
    l.textContent = "#";
    s.appendChild(l); h.appendChild(s);
  }
})();

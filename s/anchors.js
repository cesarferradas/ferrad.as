(function() {
  var hs = document.querySelectorAll("h2,h3");
  for (var h of hs) {
    var l = document.createElement("a");
    l.setAttribute("href", "#" + h.id);
    l.textContent = "#";
    l.className = "anchor";
    l.style = "padding-left: 8px; text-decoration: none;";
    h.appendChild(l);
  }
})();

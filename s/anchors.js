(function() {
  var headings = document.querySelectorAll("h2,h3");
  for (var heading of headings) {
    var l = document.createElement("a");
    l.setAttribute("href", "#" + heading.id);
    l.textContent = "#";
    l.className = "anchor";
    l.style = "padding-left: 8px; text-decoration: none;";
    heading.appendChild(l);
  }
})();

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },

  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },

  chtml: {
    // Disable dynamic CSS insertion to avoid the Mathjax-CSS error
    adaptiveCSS: false
  }
};

document$.subscribe(function() {
  if (MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
});
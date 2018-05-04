(function() {
  'use strict';

  var nav = document.getElementById('navDoc');
  var navToggle = document.getElementById('navDocToggle');
  var navUrl = window.location.pathname;
  var navAnchor = nav.getElementsByTagName('a');
  var navCurrent = navUrl.substring(navUrl.lastIndexOf('/')+1);

  for (var i = 0; i < navAnchor.length; i++) {
    var navHref = navAnchor[i].href.substring(navAnchor[i].href.lastIndexOf('/')+1);
    if ((navHref == navCurrent) && (navHref != '')) {
      navAnchor[i].classList.add('active');
    }
  }

  navToggle.addEventListener('click', function() {
    document.body.classList.toggle('is--doc-nav--active');
  }, false);
})();

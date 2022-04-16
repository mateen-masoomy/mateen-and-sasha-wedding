var loader = setInterval(function () {
    if(document.readyState !== "complete") return;
    window.clearInterval(loader);

    var navLinks = document.querySelectorAll('li');
    var drawer = document.querySelector('.drawer');

    drawer.classList.add('drawer-animated');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        var iframe = document.querySelector('#' + this.dataset.id);

        if (this.classList.contains('active')) {
          this.classList.remove('active');
          drawer.classList.remove('drawer-slide-in');
          iframe.classList.add('hidden');
          return;
        }

        var previousFrame = document.querySelector('iframe:not(.hidden)');
        iframe.classList.remove('hidden');

        if (previousFrame && previousFrame !== iframe) previousFrame.classList.add('hidden');
        deactivateNavs(navLinks);
        this.classList.add('active');
        drawer.classList.add('drawer-slide-in');
      })
    }
 }, 300);

 function deactivateNavs(navLinks) {
   for (var i = 0; i < navLinks.length; i++) {
     navLinks[i].classList.remove('active');
   }
 }

//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdw_dBNjWg4-0Ncn9zkTk4hDzS9mKlMR4l0hYt4iHKPOdRVrw/viewform?embedded=true" width="640" height="973" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

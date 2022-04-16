(function () {
  var rsvpUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdw_dBNjWg4-0Ncn9zkTk4hDzS9mKlMR4l0hYt4iHKPOdRVrw/viewform?embedded=true";

  window.onload = function () {
    checkForGuestName();

    var footerNavLinks = document.querySelectorAll("footer li");
    var menuNavLinks = document.querySelectorAll(".menu-drawer li");
    var iframeDrawer = document.querySelector(".iframe-drawer");
    iframeDrawer.classList.add("drawer-animated");

    var menuToggle = document.querySelector(".menu-toggle");
    var navMenu = document.querySelector(".menu-drawer");
    var menuDrawer = document.querySelector(".menu-drawer");
    menuDrawer.classList.add("drawer-animated");

    prepareNavLinks(footerNavLinks, menuDrawer, iframeDrawer);
    prepareNavLinks(menuNavLinks, menuDrawer, iframeDrawer);

    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("drawer-slide-in");
    });
  };

  function prepareNavLinks(navLinks, navDrawer, iframeDrawer) {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", function () {
        navDrawer.classList.remove("drawer-slide-in");
        var iframe = document.querySelector("#" + this.dataset.id);

        if (this.classList.contains("active")) {
          this.classList.remove("active");
          iframeDrawer.classList.remove("drawer-slide-in");
          iframe.classList.add("hidden");
          return;
        }

        var previousFrame = document.querySelector("iframe:not(.hidden)");
        iframe.classList.remove("hidden");

        if (previousFrame && previousFrame !== iframe)
          previousFrame.classList.add("hidden");
        deactivateNavs(navLinks);
        this.classList.add("active");
        iframeDrawer.classList.add("drawer-slide-in");
      });
    }
  }

  function checkForGuestName() {
    var params = new URLSearchParams(window.location.search);
    var guest = params.get("name");

    if (guest) {
      var rsvpIframe = document.querySelector("#rsvp");
      var nameParts = guest.split(" ");
      var formattedName = nameParts.join("+");
      rsvpIframe.src = rsvpUrl + "&usp=pp_url&entry.125665203=" + formattedName;
    } else {
      rsvpIframe.src = rsvpUrl;
    }
  }

  function deactivateNavs(navLinks) {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
  }
})();
//<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdw_dBNjWg4-0Ncn9zkTk4hDzS9mKlMR4l0hYt4iHKPOdRVrw/viewform?embedded=true" width="640" height="973" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
//https://docs.google.com/forms/d/e/1FAIpQLSdw_dBNjWg4-0Ncn9zkTk4hDzS9mKlMR4l0hYt4iHKPOdRVrw/viewform?usp=pp_url&entry.125665203=Mateen+Masoomy
//https://docs.google.com/forms/d/e/1FAIpQLSdw_dBNjWg4-0Ncn9zkTk4hDzS9mKlMR4l0hYt4iHKPOdRVrw/viewform?usp=pp_url&entry.125665203=Chevelle+Blackella
//https://docs.google.com/forms/d/e/1FAIpQLSdw_dBNjWg4-0Ncn9zkTk4hDzS9mKlMR4l0hYt4iHKPOdRVrw/viewform?usp=pp_url&entry.125665203=Elias+Masoomy

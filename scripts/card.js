var CardScript = (function () {
  var cardHeight = 700;
  var cardWidth = 600;
  var padding = 10;

  var envelopeBody = {
    selector: ".envelope-body-top",
    borderBottom: 50,
    borderSides: 5,
  };

  var flap = {
    selector: ".envelope-flap",
    borderBottom: 230,
    borderSides: 295,
  };

  var invite = {
    selector: ".invite",
    fontSize: 14,
  };

  var imagesLoaded = {
    drawing: false,
    rings: false,
  };

  document.querySelectorAll("img").forEach(function (img) {
    img.onload = imageLoaded(img);
  });

  var loader = window.setInterval(function () {
    if (!imagesLoaded.drawing || !imagesLoaded.rings) {
      return;
    }

    window.clearInterval(loader);

    var view = document.querySelector(".view-panel");
    var width = view.clientWidth;
    var height = view.clientHeight;

    var widthRatio = width / (cardWidth + padding * 2);
    var heightRatio = height / (cardHeight + padding * 2);

    if (widthRatio < heightRatio) {
      applyRatio(widthRatio);
    } else {
      applyRatio(heightRatio);
    }

    window.setTimeout(function () {
      applyAnimations();
    });
  }, 300);

  function applyRatio(ratio) {
    var envelopeBodyEls = document.querySelectorAll(envelopeBody.selector);
    for (var n = 0; n < envelopeBodyEls.length; n++) {
      var envelopeBodyEl = envelopeBodyEls[n];
      envelopeBodyEl.style.borderBottomWidth =
        envelopeBody.borderBottom * ratio + "px";
      var envelopeSideBorderWidth = envelopeBody.borderSides * ratio;
      envelopeBodyEl.style.borderLeftWidth = envelopeSideBorderWidth + "px";
      envelopeBodyEl.style.borderRightWidth = envelopeSideBorderWidth + "px";
    }

    var flapEls = document.querySelectorAll(flap.selector);
    for (var n = 0; n < flapEls.length; n++) {
      var flapEl = flapEls[n];
      flapEl.style.borderBottomWidth = flap.borderBottom * ratio + "px";
      var flapSideBorderWidth = flap.borderSides * ratio;
      flapEl.style.borderLeftWidth = flapSideBorderWidth + "px";
      flapEl.style.borderRightWidth = flapSideBorderWidth + "px";
    }

    var container = document.querySelector(".container");
    container.style.width = cardWidth * ratio + "px";
    container.style.height = cardHeight * ratio + "px";

    var inviteEl = document.querySelector(invite.selector);
    inviteEl.style.fontSize = invite.fontSize * (ratio * 1.5) + "px";
  }

  function applyAnimations() {
    document.querySelector(".container").classList.add("animate-container");
    document
      .querySelector(".envelope-back-container")
      .classList.add("animate-envelope-back");
    document
      .querySelector(".envelope-front-container")
      .classList.add("animate-envelope-front");
  }

  function imageLoaded(img) {
    imagesLoaded[img.id] = true;
  }
})();

// ==UserScript==
// @name         PP Checkpoints
// @version      2.0
// @description  touchedbydarkness.github.io
// @author       Darkness
// @include      *://pixelplanet.fun/*
// @include      *://fuckyouarkeros.fun/*
// ==/UserScript==

fetch('https://raw.githubusercontent.com/TouchedByDarkness/pixelplanet-checkpoints/raw/main/script.user.js')
.then(res => res.text())
.then(code => {
  const script = document.createElement('script');
  script.innerHTML = code;
  document.body.appendChild(script);
});

// PWA Tutorial for Beginners https://www.youtube.com/watch?v=egmwY9n6qWY
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/js/sw.js')
    .then((reg) => console.log('service worker registered', reg))
    .catch((err) => console.log('service worker not registered', err))
}

// This code is only used to remember theme selection
const themeSwitch = document.querySelector(".theme-switch");
themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";

themeSwitch.addEventListener("change", function (e) {
  if(e.currentTarget.checked === true) {
    // Add item to localstorage
    localStorage.setItem("switchedTheme", "true");
  } else {
    // Remove item if theme is switched back to normal
    localStorage.removeItem("switchedTheme");
  }
});
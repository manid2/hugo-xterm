const themeDark = "theme--dark";
const themeLight = "theme--light";
const bodyClassList = document.body.classList;
const isSystemDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;
const themeToggle = document.querySelector(".theme-toggle");
const preferTheme = "prefer-theme";

// Set theme from local storage
const localTheme = localStorage.getItem(preferTheme);
if (localTheme === themeDark) {
  bodyClassList.add(themeDark);
} else if (localTheme === themeLight) {
  bodyClassList.remove(themeDark);
} else if (isSystemDark) {
  bodyClassList.add(themeDark);
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  if (bodyClassList.contains(themeDark)) {
    bodyClassList.remove(themeDark);
    localStorage.setItem(preferTheme, themeLight);
  } else {
    bodyClassList.add(themeDark);
    localStorage.setItem(preferTheme, themeDark);
  }
});

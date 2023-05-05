const themeDark = "theme--dark";
const themeLight = "theme--light";
const bodyClassList = document.body.classList;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const localTheme = window.localStorage &&
  window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");

// Set theme from local storage
if (localTheme) {
  bodyClassList.add(localTheme);
} else {
  // Set theme from system theme
  const isSystemDark = systemDark.matches;
  if (isSystemDark) {
    bodyClassList.add(themeDark);
  } else {
    bodyClassList.add(themeLight);
  }
}

// Watch for system theme changes
systemDark.addEventListener('change', e => {
  if (e.matches === "dark") {
    bodyClassList.remove(themeDark);
    bodyClassList.add(themeLight);
  } else {
    bodyClassList.remove(themeLight);
    bodyClassList.add(themeDark);
  }
});

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  let currentTheme = themeDark;
  if (bodyClassList.contains(themeDark)) {
    bodyClassList.remove(themeDark);
    bodyClassList.add(themeLight);
    currentTheme = themeLight;
  } else {
    bodyClassList.remove(themeLight);
    bodyClassList.add(themeDark);
    currentTheme = themeDark;
  }

  window.localStorage &&
    window.localStorage.setItem( "theme", currentTheme);
});

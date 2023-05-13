const themeDark = "theme--dark";
const bodyClassList = document.body.classList;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const localStorage = window.localStorage;
const themeToggle = document.querySelector(".theme-toggle");

// Set theme from local storage
const localTheme = localStorage.getItem("theme");
if (localTheme) {
  bodyClassList.add(localTheme);
} else {
  // Set theme from system theme
  const isSystemDark = systemDark.matches;
  if (isSystemDark) {
    bodyClassList.add(themeDark);
  }
}

// Watch for system theme changes
systemDark.addEventListener("change", e => {
  if (e.matches === "dark") {
    bodyClassList.add(themeDark);
  } else {
    bodyClassList.remove(themeDark);
  }
});

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  if (bodyClassList.contains(themeDark)) {
    bodyClassList.remove(themeDark);
    localStorage.removeItem("theme");
  } else {
    bodyClassList.add(themeDark);
    localStorage.setItem("theme", themeDark);
  }
});

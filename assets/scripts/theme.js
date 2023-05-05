const bodyClassList = document.body.classList;
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
const localTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");

// Set theme from local storage
if (localTheme) {
  bodyClassList.add(localTheme);
} else {
  // Set theme from system theme
  const isSystemDark = systemDark.matches;
  if (isSystemDark) {
    bodyClassList.add("theme--dark");
  } else {
    bodyClassList.add("theme--light");
  }
}

// Watch for system theme changes
systemDark.addEventListener('change', e => {
  if (e.matches === "dark") {
    bodyClassList.add("theme--dark");
  } else {
    bodyClassList.add("theme--light");
  }
});

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  if (bodyClassList.contains("theme--dark")) {
    bodyClassList.remove("theme--dark");
    bodyClassList.add("theme--light");
  } else {
    bodyClassList.remove("theme--light");
    bodyClassList.add("theme--dark");
  }

  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      bodyClassList.contains("theme--dark") ? "theme--dark" : "theme--light",
    );
});

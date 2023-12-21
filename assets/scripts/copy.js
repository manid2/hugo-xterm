const hiTextBlock = document.querySelectorAll(".highlight-wrapper");

hiTextBlock.forEach(function (hiTextBlock) {
  const hiToolbar = hiTextBlock.querySelector(".highlight-toolbar");
  if (!hiToolbar) return;

  const hiText = hiTextBlock.querySelector(".highlight");
  if (!hiText) return;

  const copyButton = hiToolbar.querySelector(".js-btn-copy-code");
  if (!copyButton) return;

  copyButton.classList.remove("hide");

  /* Borrowed from adityatelange/hugo-PaperMod theme. */
  function copyingDone() {
    copyButton.innerHTML = "Copied!";
    setTimeout(() => {
      copyButton.innerHTML = "Copy";
    }, 2000);
  }

  /* copy code in pre > code blocks */
  copyButton.addEventListener("click", () => {
    // Fallback to selection and copy
    const range = document.createRange();
    range.selectNodeContents(hiText);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    try {
      document.execCommand("copy");
      copyingDone();
    } catch (e) {}
    selection.removeRange(range);
  });
});

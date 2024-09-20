$(document).ready(function () {
  function updateElementTextFromStorage(storageKey, elementSelector) {
    const storedValue = localStorage.getItem(storageKey);

    if (storedValue !== null) {
      document.querySelector(elementSelector).textContent = storedValue;
    }
  }

  updateElementTextFromStorage("articleCount", ".explore .tags .all span");
  updateElementTextFromStorage("cppArts", ".explore .tags .cpp span");
  updateElementTextFromStorage("linuxArts", ".explore .tags .linux span");
  updateElementTextFromStorage("devOpsArts", ".explore .tags .devOps span");
  updateElementTextFromStorage("gitArts", ".explore .tags .git span");
  updateElementTextFromStorage("webDevArts", ".explore .tags .webDev span");
  updateElementTextFromStorage("cssArts", ".explore .tags .css span");
  updateElementTextFromStorage("careerArts", ".explore .tags .career span");
  updateElementTextFromStorage(
    "accessabilityArts",
    ".explore .tags .accessability span"
  );
});

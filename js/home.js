$(document).ready(function () {
  function updateArticlesCount(storageKey, className) {
    // Initialize TagArts in localStorage if not already done
    if (localStorage.getItem(storageKey) === null) {
      localStorage.setItem(storageKey, 0);
    }

    let storedCount = parseInt(localStorage.getItem(storageKey), 10);
    let currentCount = document.querySelectorAll(className).length;

    // Update gitArts in localStorage if there are more articles
    if (currentCount > storedCount) {
      localStorage.setItem(storageKey, currentCount);
    } else {
      localStorage.setItem(storageKey, currentCount);
    }
  }
  updateArticlesCount("articleCount", ".all-articls a");
  updateArticlesCount("cppArts", ".all-articls a.cpp");
  updateArticlesCount("linuxArts", ".all-articls a.linux");
  updateArticlesCount("devOpsArts", ".all-articls a.devOps");
  updateArticlesCount("gitArts", ".all-articls a.git");
  updateArticlesCount("webDevArts", ".all-articls a.webDev");
  updateArticlesCount("cssArts", ".all-articls a.css");
  updateArticlesCount("careerArts", ".all-articls a.career");
  updateArticlesCount("accessabilityArts", ".all-articls a.accessability");
});

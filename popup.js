document.addEventListener("DOMContentLoaded", () => {
    const YOUTUBE_URL = "https://www.youtube.com";
    const searchInput = document.getElementById("searchInput");
    const youtubeIcon = document.getElementById("youtubeIcon");
  
    searchInput.focus();
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        search();
      }
    });
  
    youtubeIcon.addEventListener("click", () => {
      goToYoutube();
    });
  
    function search() {
      const query = searchInput.value.trim();
      if (isValidQuery(query)) {
        window.open(getYoutubeSearchURL(query), "_blank");
      } else {
        goToYoutube();
      }
    }
  
    function getYoutubeSearchURL(query = "") {
      const searchParams = new URLSearchParams();
      searchParams.set("search_query", query);
      return `${YOUTUBE_URL}/results?${searchParams.toString()}`;
    }
  
    function goToYoutube() {
      window.open(YOUTUBE_URL, "_blank");
    }
  
    function isValidQuery(query) {
      return query !== "";
    }
  });
  
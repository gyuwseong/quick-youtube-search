const YOUTUBE_URL = "https://www.youtube.com";

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "myContextMenu",
        title: "Search %s in Youtube",
        contexts:["selection"],
    });
});

chrome.contextMenus.onClicked.addListener((info) => {
    const selectedText = info.selectionText;
    chrome.tabs.create({
        url: `${YOUTUBE_URL}/results?search_query=${encodeURIComponent(selectedText)}`
    });
});

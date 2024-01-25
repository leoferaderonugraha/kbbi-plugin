let createData = {
  type: "detached_panel",
  url: "index.html",
  width: 500,
  height: 700
};
let creating = browser.windows.create(createData);


// Delete history
function onVisited(historyItem) {
  if (historyItem.url === browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);

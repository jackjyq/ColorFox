const defaultIcon = "./svg/www.mozilla.org.svg";
let theme = {
    "images": {
      "theme_frame": ""
    },
    "colors": {
      "bookmark_text": "rgb(71, 71, 71)",
      "frame": "rgb(210, 210, 210)",
      "frame_inactive": "rgb(244, 244, 244)",
      "tab_line": "rgb(47,124,246)",
      "tab_background_text": "black",
      "toolbar_field": "rgb(250, 250, 250)",
      "toolbar_field_text": "black",
      "toolbar_field_highlight_text": "black",
      "toolbar_field_border": "rgb(167,167,167)",
      "popup": "rgb(250, 250, 250)",
      "popup_text": "rgb(71, 71, 71)"
    }
};


function setTheme(url) {
  // check url
  if (typeof(url) !== 'string') {
    return;
  }
  // special url
  if (url === "about:newtab"
      || url === "about:home"
      || url === "about:preferences"
      || url === "about:addons") {
    loadDefaultTheme();
    return;
  }
  // check host name
  const hostname = new URL(url).hostname;
  if (hostname.length < 1) {
    return;
  }
  // update logo
  let icon = './svg/' + hostname + '.svg';
  if (theme.images.theme_frame === icon) {
    return;
  }
  let image = new Image();
  // image exists and is loaded
  image.onload = function() {
    // update theme
    theme.images.theme_frame = icon;
    browser.theme.update(theme);
  }
  // image does ot exist
  image.onerror = function() {
    loadDefaultTheme();
  }
  image.src = icon;
}


function loadDefaultTheme(){
  // check logo
  if (theme.images.theme_frame === defaultIcon) {
    return;
  }
  // update theme
  theme.images.theme_frame = defaultIcon;
  browser.theme.update(theme);
}


function handleUpdated(tabId, changeInfo, tabInfo) {
  const url = changeInfo.url;
  setTheme(url);
}


function handleActiveChange() {
  browser.tabs.query({currentWindow: true, active: true})
    .then(tabInfo => {
      const url = tabInfo[0].url;
      setTheme(url);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
    });
}


loadDefaultTheme();
browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onActivated.addListener(handleActiveChange);
browser.tabs.onRemoved.addListener(handleActiveChange);
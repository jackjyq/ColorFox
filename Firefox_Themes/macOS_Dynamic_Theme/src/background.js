const macOS_colors = {
  'blue': "47,124,246",
  'purple': "138,69,146",
  'pink': "229,93,156",
  'red': "207,71,69",
  'orange': "232,135,58",
  'yellow': "242,186,7",
  'green': "120,183,86",
  'graphite': "152,152,152"
  }

function getLightTheme(color_name){
  return {
    "colors": {
      "toolbar": "rgb(250, 250, 250)",
      "bookmark_text": "rgb(71, 71, 71)",
      "frame": "rgb(210, 210, 210)",
      "frame_inactive": "rgb(244, 244, 244)",
      "tab_background_text": "black",
      "toolbar_field": "rgb(250, 250, 250)",
      "toolbar_field_text": "black",
      "toolbar_field_highlight_text": "black",
      "toolbar_field_border": "rgb(167,167,167)",
      "popup": "rgb(250, 250, 250)",
      "popup_text": "rgb(71, 71, 71)",
      "popup_highlight_text": "white",
      "sidebar_highlight_text": "white",
      "tab_line": "rgb(" + macOS_colors[color_name] + ")",
      "tab_loading": "rgb(" + macOS_colors[color_name] + ")",
      "icons_attention": "rgb(" + macOS_colors[color_name] + ")",
      "popup_highlight": "rgb(" + macOS_colors[color_name] + ")",
      "sidebar_highlight": "rgb(" + macOS_colors[color_name] + ")",
      "icons_attension": "rgb(" + macOS_colors[color_name] + ")",
      "toolbar_field_border_focus": "rgb(" + macOS_colors[color_name] + ")",
      "toolbar_field_highlight": "rgba(" + macOS_colors[color_name] +", 0.2)"
    }
  };
}

function getPrivateTheme(color_name){
  return {
    "colors": {
      "toolbar": "rgb(250, 250, 250)",
      "bookmark_text": "rgb(71, 71, 71)",
      "frame": "rgb(37, 0, 62)",
      "frame_inactive": "rgb(71, 34, 96)",
      "tab_background_text": "white",
      "toolbar_field": "rgb(250, 250, 250)",
      "toolbar_field_text": "black",
      "toolbar_field_highlight_text": "black",
      "toolbar_field_border": "rgb(167,167,167)",
      "popup": "rgb(250, 250, 250)",
      "popup_text": "rgb(71, 71, 71)",
      "popup_highlight_text": "white",
      "sidebar_highlight_text": "white",
      "tab_line": "rgb(" + macOS_colors[color_name] + ")",
      "tab_loading": "rgb(" + macOS_colors[color_name] + ")",
      "icons_attention": "rgb(" + macOS_colors[color_name] + ")",
      "popup_highlight": "rgb(" + macOS_colors[color_name] + ")",
      "sidebar_highlight": "rgb(" + macOS_colors[color_name] + ")",
      "icons_attension": "rgb(" + macOS_colors[color_name] + ")",
      "toolbar_field_border_focus": "rgb(" + macOS_colors[color_name] + ")",
      "toolbar_field_highlight": "rgba(" + macOS_colors[color_name] +", 0.2)"
    }
  };
}

const color_sequence = ['blue', 'purple', 'pink', 'red',
                        'orange', 'yellow', 'green', 'graphite']

function updateTheme(window) {
  const date = new Date();
  const hours = date.getHours();
  // Check if the window is in private browsing
  if (window.incognito) {
    const theme = getPrivateTheme(color_sequence[hours % 8]);
    browser.theme.update(window.id, theme);
  }
  // apply light theme when not in private browsing
  else {
    const theme = getLightTheme(color_sequence[hours % 8]);
    browser.theme.update(window.id, theme);
  }
}

function updateAllThemes() {
  browser.windows.getAll().then(wins => wins.forEach(updateTheme));
}

// setup listeners
// update all themes regularly
browser.alarms.onAlarm.addListener(updateAllThemes);
browser.alarms.create('updateAllThemes', {periodInMinutes: 1});
// update theme when opening a new windows
browser.windows.onCreated.addListener(updateAllThemes);

// Initialization
updateAllThemes()
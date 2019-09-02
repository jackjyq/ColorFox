var currentTheme = '';

const themes = {
  'blue': {
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
      "tab_line": "rgb(47,124,246)",
      "tab_loading": "rgb(47,124,246)",
      "icons_attention": "rgb(47,124,246)",
      "popup_highlight": "rgb(47,124,246)",
      "sidebar_highlight": "rgb(47,124,246)",
      "icons_attension": "rgb(47,124,246)",
      "toolbar_field_border_focus": "rgb(47,124,246)",
      "toolbar_field_highlight": "rgba(47,124,246, 0.2)"
    }
  },
  'purple': {
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
      "tab_line": "rgb(138,69,146)",
      "tab_loading": "rgb(138,69,146)",
      "icons_attention": "rgb(138,69,146)",
      "popup_highlight": "rgb(138,69,146)",
      "sidebar_highlight": "rgb(138,69,146)",
      "icons_attension": "rgb(138,69,146)",
      "toolbar_field_border_focus": "rgb(138,69,146)",
      "toolbar_field_highlight": "rgba(138,69,146,0.2)"
    }
  },
  'pink': {
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
      "tab_line": "rgb(229,93,156)",
      "tab_loading": "rgb(229,93,156)",
      "icons_attention": "rgb(229,93,156)",
      "popup_highlight": "rgb(229,93,156)",
      "sidebar_highlight": "rgb(229,93,156)",
      "icons_attension": "rgb(229,93,156)",
      "toolbar_field_border_focus": "rgb(229,93,156)",
      "toolbar_field_highlight": "rgba(229,93,156,0.2)"
    }
  },
  'red': {
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
      "tab_line": "rgb(207,71,69)",
      "tab_loading": "rgb(207,71,69)",
      "icons_attention": "rgb(207,71,69)",
      "popup_highlight": "rgb(207,71,69)",
      "sidebar_highlight": "rgb(207,71,69)",
      "icons_attension": "rgb(207,71,69)",
      "toolbar_field_border_focus": "rgb(207,71,69)",
      "toolbar_field_highlight": "rgba(207,71,69, 0.2)"
    }
  },
  'orange': {
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
      "tab_line": "rgb(232,135,58)",
      "tab_loading": "rgb(232,135,58)",
      "icons_attention": "rgb(232,135,58)",
      "popup_highlight": "rgb(232,135,58)",
      "sidebar_highlight": "rgb(232,135,58)",
      "icons_attension": "rgb(232,135,58)",
      "toolbar_field_border_focus": "rgb(232,135,58)",
      "toolbar_field_highlight": "rgba(232,135,58, 0.2)"
    }
  },
  'yellow': {
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
      "tab_line": "rgb(242,186,75)",
      "tab_loading": "rgb(242,186,75)",
      "icons_attention": "rgb(242,186,75)",
      "popup_highlight": "rgb(242,186,75)",
      "sidebar_highlight": "rgb(242,186,75)",
      "icons_attension": "rgb(242,186,75)",
      "toolbar_field_border_focus": "rgb(242,186,75)",
      "toolbar_field_highlight": "rgba(242,186,75,0.2)"
    }
  },
  'green': {
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
      "tab_line": "rgb(120,183,86)",
      "tab_loading": "rgb(120,183,86)",
      "icons_attention": "rgb(120,183,86)",
      "popup_highlight": "rgb(120,183,86)",
      "sidebar_highlight": "rgb(120,183,86)",
      "icons_attension": "rgb(120,183,86)",
      "toolbar_field_border_focus": "rgb(120,183,86)",
      "toolbar_field_highlight": "rgba(120,183,86,0.2)"
    }
  },
  'graphite': {
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
      "tab_line": "rgb(152,152,152)",
      "tab_loading": "rgb(152,152,152)",
      "icons_attention": "rgb(152,152,152)",
      "popup_highlight": "rgb(152,152,152)",
      "sidebar_highlight": "rgb(152,152,152)",
      "icons_attension": "rgb(152,152,152)",
      "toolbar_field_border_focus": "rgb(152,152,152)",
      "toolbar_field_highlight": "rgba(152,152,152,0.2)"
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  switch(hours % 8) {
    case 0:
      setTheme('yellow');
      break;
    case 1:
      setTheme('blue');
      break;
    case 2:
      setTheme('pink');
      break;
    case 3:
      setTheme('green');
      break;
    case 4:
      setTheme('orange');
      break;
    case 5:
      setTheme('graphite');
      break;
    case 6:
      setTheme('red');
      break;
    case 7:
      setTheme('purple');
      break;
    default:
      break;
  }
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 1});
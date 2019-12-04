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

function updateTheme() {
  let date = new Date();
  let hours = date.getHours();
  let theme = ""
  switch(hours % 8) {
    case 0:
      theme = getLightTheme('yellow')
      break;
    case 1:
      theme = getLightTheme('blue')
      break;
    case 2:
      theme = getLightTheme('pink')
      break;
    case 3:
      theme = getLightTheme('green')
      break;
    case 4:
      theme = getLightTheme('orange')
      break;
    case 5:
      theme = getLightTheme('graphite')
      break;
    case 6:
      theme = getLightTheme('red')
      break;
    case 7:
      theme = getLightTheme('purple')
      break;
    default:
      return;
  }
  browser.theme.update(theme);
}

// On start up, check the time to see what theme to show.
updateTheme();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(updateTheme);
browser.alarms.create('updateTheme', {periodInMinutes: 1});
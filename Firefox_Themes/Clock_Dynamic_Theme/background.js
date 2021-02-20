let currentThemeHour = '';
let currentThemeMinute = '';

let theme = {
    "images": {
      "additional_backgrounds": [null, null]
    },
    "colors": {
      "frame": "rgb(40, 40, 40)",
      "icons_attention": "rgb(222, 88, 51)",
      "ntp_background": "rgb(34, 34, 34)",
      "ntp_text": "rgb(201, 201, 201)",
      "popup": "rgb(27, 27, 27)",
      "popup_text": "rgb(201, 201, 201)",
      "popup_highlight": "white",
      "popup_highlight_text": "rgb(0, 120, 215)",
      "popup_border": "rgb(27, 27, 27)",
      "sidebar": "rgb(27, 27, 27)",
      "sidebar_text": "rgb(201, 201, 201)",
      "tab_background_separator": "rgb(188, 188, 188)",
      "tab_background_text": "rgb(161, 172, 37)",
      "toolbar": "rgb(34, 34, 34, 0)",
      "toolbar_text": "rgb(188, 188, 188)",
      "toolbar_field": "rgb(27, 27, 27)",
      "toolbar_field_border_focus": "rgb(27, 27, 27)",
      "toolbar_field_text": "rgb(80, 241, 72)",
      "tab_line": "rgb(222, 88, 51)",
      "tab_loading": "rgb(222, 88, 51)"
    }
};

function setTheme(currentHour, currentMinute) {
  if (currentThemeHour === currentHour
        && currentThemeMinute === currentMinute) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentThemeHour === currentHour;
  currentThemeMinute === currentMinute;
  theme.images.additional_backgrounds[0] = currentHour;
  theme.images.additional_backgrounds[1] = currentMinute;
  browser.theme.update(theme);
}


function checkTime() {
  const date = new Date();
  // A Number, from 0 to 23, representing the hour
  let hour = date.getHours() % 12; // convert to 0 - 11
  if (hour === 0) {
    hour = 12; // convert to 1 - 12
  }
  const currentHour = './hours/' + hour + '.png'
  // A Number, from 0 to 59, representing the hour
  // convert to 5 10 15 ...
  let minute = parseInt(date.getMinutes() / 5) * 5; 
  const currentMinute = './minutes/' + minute + '.png'
  setTheme(currentHour, currentMinute);
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 1});
// Sits in the event loop waiting for keypress, then updates page to display its info:
document.addEventListener("keydown", function (event) {
  if (event.which === 32) {
    document.getElementsByTagName("h2")[0].textContent =
      "Last recorded keypress: Space Bar";
  } else {
    document.getElementsByTagName(
      "h2"
    )[0].textContent = `Last recorded keypress: ${event.key}`;
  }
  document.getElementById(
    "location"
  ).textContent = `Location: ${event.location}`;
  document.getElementById("which").textContent = `Which: ${event.which}`;
  document.getElementById("code").textContent = `Code: ${event.code}`;
});

// Sits in the event loop waiting for keypress, then updates page to display its info:
document.addEventListener("mouseup", function (event) {
  switch (event.button) {
    case 0:
      mButton = "Left Click";
      break;
    case 1:
      mButton = "Middle Click";
      break;
    case 2:
      mButton = "Right Click";
      break;
    case 3:
      mButton = "Side Button 2";
      break;
    case 4:
      mButton = "Side Button 1";
      break;
    default:
      mButton = "You have lots of mouse buttons!";
  }
  document.getElementsByTagName(
    "h2"
  )[0].textContent = `Last recorded mouse click: ${mButton}`;
  document.getElementById("location").textContent = "Location: Mouse";
  document.getElementById("which").textContent = `Which: ${event.which}`;
  document.getElementById("code").textContent = `Code: ${event.button}`;
});

// Disables all keyboard shortcuts e.g. CTRL + F5 for full functionality and key testing - prevents possible disruption:

document.onkeydown = function (event) {
  return false;
};

// Disables action upon mouse click e.g. context menu for full functionality and mouse testing - prevents possible disruption:

document.addEventListener("contextmenu", (event) => event.preventDefault());

window
  .open(
    "https://www.google.com/search?q=related%3A" +
      encodeURIComponent(location.hostname),
    "_blank",
  )
  .focus();

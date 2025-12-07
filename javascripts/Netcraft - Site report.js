window
  .open(
    `https://sitereport.netcraft.com/?url=${encodeURIComponent(location.href)}`,
    "_blank",
  )
  .focus();

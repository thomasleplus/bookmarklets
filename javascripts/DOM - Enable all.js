const e = document.getElementsByTagName("*");
let i;
for (i = 0; i < e.length; i += 1) {
  if (e[i].disabled) {
    e[i].disabled = "false";
  }
}

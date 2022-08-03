document
  .querySelector("button[name=triangle]")
  .addEventListener("click", () => {
    output.innerHTML = triangle();
  });

document.querySelector("button[name=pyramid]").addEventListener("click", () => {
  document.querySelector("#output").innerHTML = pyramid();
});
document
  .querySelector("button[name=reverse-pyramid]")
  .addEventListener("click", () => {
    document.querySelector("#output").innerHTML = reversePyramid();
  });

document.querySelector("button[name=clear]").addEventListener("click", () => {
  document.querySelector("#output").innerHTML = "";
});

function triangle() {
  var i, j;
  for (i = 1; i < 7; i++) {
    for (j = 1; j <= i; j++) {
      document.write("&nbsp *");
    }
    document.write("<br/>");
  }
}

function pyramid() {
  var i, j, k;
  for (i = 1; i <= 7; i++) {
    for (k = 1; k <= 7 - i; k++) {
      document.write("&nbsp");
    }
    for (j = 1; j <= i; j++) {
      document.write("&nbsp*");
    }
    document.write("<br/>");
  }
}

function reversePyramid() {
  var i, j, k;
  for (i = 0; i <= 7; i++) {
    for (k = 0; k <= i; k++) {
      document.write("&nbsp");
    }
    for (j = 0; j <= 7 - i; j++) {
      document.write("&nbsp*");
    }
    document.write("<br/>");
  }
}

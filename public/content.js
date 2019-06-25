console.log("Chrome extension to go");

let paragraphs = document.getElementsByTagName("p");

for (let elt of paragraphs) {
  elt.style["background-color"] = "#FF00FF";
}

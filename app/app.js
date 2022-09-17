import * as model from "./model.js";

function initListeners() {
  $("nav a").click((e) => {
    e.preventDefault();
    let btnId = e.currentTarget.id;
    model.setCurrentPageContent(btnId);
  });
}

$(document).ready(function () {
  //model.setCurrentPageContent("home");
  initListeners();
});

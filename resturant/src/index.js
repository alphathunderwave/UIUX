import _ from "lodash";
import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import hours from "./hours.js";

const content = document.querySelector(".content");

var nav = document.createElement("div");
nav.classList.add("nav");
var page = document.createElement("div");
page.classList.add("page");

var homeTab = document.createElement("div");
var menuTab = document.createElement("div");
var hoursTab = document.createElement("div");

homeTab.classList.add("tab");
menuTab.classList.add("tab");
hoursTab.classList.add("tab");

homeTab.addEventListener("click", function () {
    homeTab.classList.add("select")
    menuTab.classList.remove("select")
    hoursTab.classList.remove("select")
  home(page);
});
menuTab.addEventListener("click", function () {
    homeTab.classList.remove("select")
    menuTab.classList.add("select")
    hoursTab.classList.remove("select")
  menu(page);
});
hoursTab.addEventListener("click", function () {
    homeTab.classList.remove("select")
    menuTab.classList.remove("select")
    hoursTab.classList.add("select")
  hours(page);
});

homeTab.textContent = "Home";
menuTab.textContent = "Menu";
hoursTab.textContent = "Hours";

nav.appendChild(homeTab);
nav.appendChild(menuTab);
nav.appendChild(hoursTab);

content.appendChild(nav);
content.appendChild(page);

homeTab.classList.add("select")
home(page)

import _ from "lodash";
import "./style.css";
import home from "./home.js";
import menu from "./menu.js";
import hours from "./hours.js";

const content = document.querySelector(".content")

home(content);
menu(content);
hours(content);

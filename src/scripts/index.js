import "../styles/normalize.css";
import "../styles/styles.css";
import home from "./home.js";
import about from "./about";
import menu from "./menu";

const contentContainer = document.getElementById("content");

const homeBtn = document.querySelector("button:nth-child(1)");
const menuBtn = document.querySelector("button:nth-child(2)");
const aboutBtn = document.querySelector("button:nth-child(3)");

homeBtn.addEventListener("click", (event) => {
    contentContainer.replaceChildren();
    home(contentContainer);
});

menuBtn.addEventListener("click", (event) => {
    contentContainer.replaceChildren();
    menu(contentContainer);
});

aboutBtn.addEventListener("click", (event) => {
    contentContainer.replaceChildren();
    about(contentContainer);
});

import "../styles/normalize.css";
import "../styles/styles.css";
import DOM from "./managers/DOM";

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded..")
    new DOM();
})
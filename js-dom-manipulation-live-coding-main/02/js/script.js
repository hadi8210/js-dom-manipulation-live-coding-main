"use strict";

const nightColorBtn = document.getElementById("nightColorBtn");
const lightColorBtn = document.getElementById("lightColorBtn");

nightColorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white";
});
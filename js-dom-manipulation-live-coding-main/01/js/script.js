"use strict";
// websiteBody variablen tager fat on <body> elementet i HTML dokumentet
const websiteBody = document.body;


// Ændrer baggrundsfarven på <body> elementet til gul
websiteBody.style.backgroundColor = "yellow";

// headingOne variablen tager fat i det første <h1> element i HTML dokumentet
const headingOne = document.querySelector("h1");
// ændre font størrelsen på <h1> elementet til 3rem
headingOne.style.fontSize = "3rem";
// ændre farven på teksten i <h1> elementet til pink
headingOne.style.color = "pink";
// paragraph variablen tager fat i det første <p> element i HTML dokumentet
const paragraph = document.querySelector("p");
// ændre font størrelsen på <p> elementet til 1.5rem
paragraph.style.fontSize = "1.5rem";
// ændre farven på teksten i <p> elementet til blå
paragraph.style.color = "blue";
// ændre font vægten på teksten i <p> elementet til 800
paragraph.style.fontWeight = "800";
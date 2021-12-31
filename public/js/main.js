/* -------------------------------- Couleurs -------------------------------- */
let w = document.querySelector(".white");
let r = document.querySelector(".red");
let g = document.querySelector(".green");
let b = document.querySelector(".blue");
// let blanc = "white";
// let rouge = "red";
// let vert = "green";
// let bleu = "blue";
/* ---------------------------- Tout Les Bouttons --------------------------- */
let allBtn = document.querySelectorAll("button");
/* -------------------------------- Resultat -------------------------------- */
let resultat = document.querySelector(".resultat");
/* --------------------------------- Control -------------------------------- */
// **Color**
w.addEventListener("click", () => {
    resultat.style.backgroundColor = "white";
});
r.addEventListener("click", () => {
    resultat.style.backgroundColor = "red";
});
g.addEventListener("click", () => {
    resultat.style.backgroundColor = "green";
});
b.addEventListener("click", () => {
    resultat.style.backgroundColor = "blue";
});
/* ------------------------------ Border Stylle ----------------------------- */
let styleLine= document.querySelectorAll(".styleLine")
for (let i = 0; i < styleLine.length; i++) {
    styleLine[i].addEventListener("click", () => {

        if (i == 0) {

            resultat.style.border = "solid";
        } else if (i == 1) {
            resultat.style.border = "dashed";
            console.log(heuu);
        } else if (i == 2) {
            resultat.style.border = "dotted";
        }
    });
    
}

/* ------------------------------- Border Top ------------------------------- */
let tops = document.querySelectorAll(".top");
console.log(tops);
for (let i = 0; i < tops.length; i++) {
    tops[i].addEventListener("click", () => {

        if (i == 0) {

            resultat.style.borderTop = "none";
        } else if (i == 1) {
            resultat.style.borderTop = "5px solid red";
            console.log(heuu);
        } else if (i == 2) {
            resultat.style.borderTop = "10px solid red";
        }
    });
}

let typeColor = document.getElementsByTagName("input")[0];
// console.log(typeColor);

typeColor.addEventListener("input", () => {
    resultat.style.borderColor = ` ${typeColor.value}`;
});
let borders = document.querySelectorAll(".border");
console.log(borders[0]);
for (let i = 0; i < borders.length; i++) {
    borders[i].addEventListener("click", () => {
        if (i == 0) {
            resultat.style.border = `${borders[i].value}px solid`;
        } else if (i == 1) {
            resultat.style.borderLeft = `${borders[i].value}px solid`;
        } else if (i == 2) {
            resultat.style.borderRight = `${borders[i].value}px solid`;
        } else if (i == 3) {
            resultat.style.borderTop = `${borders[i].value}px solid`;
        } else if (i == 4) {
            resultat.style.borderBottom = `${borders[i].value}px solid`;
            // resultat.style.borderRadius = `${rnd[i].value}px`;
        }
    });
}


let raduisAll = document.querySelectorAll(".radius");
console.log(raduisAll);
for (let i = 0; i < raduisAll.length; i++) {
    raduisAll[i].addEventListener("click", () => {
        if (i == 0) {
            console.log("test");
            resultat.style.borderRadius = `${raduisAll[i].value}px`;
        } else if (i == 1) {
            resultat.style.borderTopLeftRadius = `${raduisAll[i].value}px`;
        } else if (i == 2) {
            resultat.style.borderTopRightRadius = `${raduisAll[i].value}px`;
        } else if (i == 3) {
            resultat.style.borderBottomRightRadius = `${raduisAll[i].value}px`;
        } else if (i == 4) {
            resultat.style.borderBottomLeftRadius = `${raduisAll[i].value}px`;
        }
    });
}
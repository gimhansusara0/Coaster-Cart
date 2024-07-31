const tab = document.getElementById("tab");

const cartBtn = document.querySelectorAll(".icon");

cartBtn.forEach(btn => {btn.addEventListener("click", () => animateBtn(btn));});

function animateBtn(cartBtn){
    cartBtn.style.transition = "transform 0.6s";
    cartBtn.style.transition = "border-radius: 0.3s";
    cartBtn.style.borderRadius = "100px";
    cartBtn.style.transform = "rotate3d(1,10,1, 360deg)";
    setTimeout(() => {
        cartBtn.style.borderRadius = "";
    }, 300);
    setTimeout(() => {
        cartBtn.style.transition = "";
        cartBtn.style.transform = "";
    }, 600);
};

const fruits = document.getElementById("fruits");
const veges = document.getElementById("vegetables");
const dairy = document.getElementById("dairy");
const meat = document.getElementById("meat");
const baking = document.getElementById("baking");

const fruitBtn = document.getElementById("fruit-btn");
const vegeBtn = document.getElementById("vege-btn");
const dairyBtn = document.getElementById("dairy-btn");
const meatBtn = document.getElementById("meat-btn");
const bakingBtn = document.getElementById("baking-btn");

const fruitHead = document.getElementById("fruit-head");
const vegeHead = document.getElementById("vege-head");
const dairyHead = document.getElementById("dairy-head");
const meatHead = document.getElementById("meat-head");
const bakingHead = document.getElementById("baking-head");

function showFruit() {
    fruitHead.style.transform = "translateY(0)";
    vegeHead.style.transform = "translateY(-120%)";
    dairyHead.style.transform = "translateY(-120%)";
    meatHead.style.transform = "translateY(-120%)";
    bakingHead.style.transform = "translateY(-120%)";

    fruits.style.transform = "translateX(0)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(120%)";
}

function showVeges() {
    fruitHead.style.transform = "translateY(-120%)";
    vegeHead.style.transform = "translateY(0)";
    dairyHead.style.transform = "translateY(-120%)";
    meatHead.style.transform = "translateY(-120%)";
    bakingHead.style.transform = "translateY(-120%)";

    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(0)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(120%)";
}

function showDairy() {
    fruitHead.style.transform = "translateY(-120%)";
    vegeHead.style.transform = "translateY(-120%)";
    dairyHead.style.transform = "translateY(0)";
    meatHead.style.transform = "translateY(-120%)";
    bakingHead.style.transform = "translateY(-120%)";

    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(0)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(120%)";
}

function showMeat() {
    fruitHead.style.transform = "translateY(-120%)";
    vegeHead.style.transform = "translateY(-120%)";
    dairyHead.style.transform = "translateY(-120%)";
    meatHead.style.transform = "translateY(0)";
    bakingHead.style.transform = "translateY(-120%)";

    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(0)";
    baking.style.transform = "translateX(120%)";
}

function showBaking() {
    fruitHead.style.transform = "translateY(-120%)";
    vegeHead.style.transform = "translateY(-120%)";
    dairyHead.style.transform = "translateY(-120%)";
    meatHead.style.transform = "translateY(-120%)";
    bakingHead.style.transform = "translateY(0)";

    fruits.style.transform = "translateX(120%)";
    veges.style.transform = "translateX(120%)";
    dairy.style.transform = "translateX(120%)";
    meat.style.transform = "translateX(120%)";
    baking.style.transform = "translateX(0)";
}


function showTable() {
    tab.classList.toggle('active');
}
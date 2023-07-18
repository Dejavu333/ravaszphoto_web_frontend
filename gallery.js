//LOADING SCREEN//
window.onload = function () {
    document.querySelector(".wrapper").remove();
};


//GLOBAL VARIABLE, CONSTANT//
let imgs_ss = "";
let qt = 15;
for (i = 1; i <= qt; i = i + 1) {
    imgs_ss = imgs_ss + '<img class=galleryPix src="images/thumbs/galeriaKepKicsi (' + i + ').JPG" >';
}
document.getElementById("gallery").innerHTML = imgs_ss;

const imgs_vr = document.querySelectorAll(".galleryPix");

let lastOpened_ns;
let imgDiv;
let img_rs;


//EVENT//
imgs_vr.forEach(function (pic, index) {                         //index stores which one we clicked on
    pic.onclick = function () {

        lastOpened_ns = index + 1;

        imgDiv = document.createElement("div");                 //create a new div to store the original sized pic
        document.body.appendChild(imgDiv);
        imgDiv.setAttribute("class", "imgDiv");                 //we define the style in css
        imgDiv.setAttribute("onclick", "closeImg()");

        img_rs = document.createElement("img");                 //we define the style in css
        img_rs.setAttribute("src", "images/galeriaKep (" + lastOpened_ns + ").jpg");
        imgDiv.appendChild(img_rs);

        img_rs.onload = showBtns;                               //we need the image to be loaded first, otherwise we can't position the btn
    }
});


//FUNCTION//
function showBtns() {
    let imgEdge_ns = ((window.innerWidth - img_rs.width) / 2) - 60;

    let prevBtn = document.createElement("a");
    document.body.appendChild(prevBtn);
    prevBtn.setAttribute("class", "prevBtn");
    prevBtn.setAttribute("onclick", "changeImg(0)");
    prevBtn.style.cssText = "left:" + imgEdge_ns + "px";

    let nextBtn = document.createElement("a");
    document.body.appendChild(nextBtn);
    nextBtn.setAttribute("class", "nextBtn");
    nextBtn.setAttribute("onclick", "changeImg(1)");
    nextBtn.style.cssText = "right:" + imgEdge_ns + "px";

}

function closeImg() {
    let imgDiv = document.querySelector(".imgDiv");
    document.body.removeChild(imgDiv);
    removeBtns();
}

function removeBtns() {
    let nextBtn = document.querySelector(".nextBtn");
    let prevBtn = document.querySelector(".prevBtn");
    nextBtn.remove();
    prevBtn.remove();
}

function changeImg(p_direction_ns) {
    let imgDiv = document.querySelector(".imgDiv");    //eltüntetjük az aktuális full képet az egyik gombra kattintva
    imgDiv.firstChild.remove();
    removeBtns()

    if (p_direction_ns === 1) {
        lastOpened_ns = lastOpened_ns + 1;
        if (lastOpened_ns > imgs_vr.length) { lastOpened_ns = 1; }
        nextImg_rs = document.createElement("img");
        imgDiv.appendChild(nextImg_rs);
        nextImg_rs.setAttribute("src", "images/galeriaKep (" + lastOpened_ns + ").jpg");
        img_rs = nextImg_rs;
        img_rs.onload = showBtns;
    }
    else if (p_direction_ns === 0) {
        lastOpened_ns = lastOpened_ns - 1;
        if (lastOpened_ns < 1) { lastOpened_ns = imgs_vr.length; }
        nextImg_rs_rs = document.createElement("img");
        imgDiv.appendChild(nextImg_rs);
        nextImg_rs.setAttribute("src", "images/galeriaKep (" + lastOpened_ns + ").jpg");
        img_rs = nextImg_rs;
        img_rs.onload = showBtns;
    }
}

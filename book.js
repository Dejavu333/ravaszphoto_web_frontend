//GLOBAL VARIABLE, CONSTANT//
const optionSection = document.querySelector("#optionSection");
const typeList = document.body.querySelector("#typeList");
const types = document.body.querySelectorAll("#typeList a");
const form = document.querySelector("form");
const submitBtn = document.querySelector("#submitBtn");
let options = null;
let itemTotal = 0;


//INVOKE//
setup("engagementAndWedding");


//EVENT//
typeList.children[0].addEventListener("click", () => { setup("weddingOnly");          types[0].classList.add("underLined"); types[1].classList.remove("underLined"); types[2].classList.remove("underLined"); });
typeList.children[1].addEventListener("click", () => { setup("engagementOnly");       types[1].classList.add("underLined"); types[0].classList.remove("underLined"); types[2].classList.remove("underLined"); });
typeList.children[2].addEventListener("click", () => { setup("engagementAndWedding"); types[2].classList.add("underLined"); types[0].classList.remove("underLined"); types[1].classList.remove("underLined"); });


//FUNCTION//
function setup(p_type_ss) {
    generateHTML(p_type_ss);
    options = Array.from(optionSection.querySelectorAll("input"));
    for (const optionFromView of options) {
        optionFromView.addEventListener("click", calcTotal);
        optionFromView.addEventListener("click", checkDependency);
    }
    calcTotal();
    checkDependency();
}

function generateHTML(p_type) {
    const n_data = data[1][p_type].length;
    const indecies = data[1][p_type];
    let HTML = "";
    for (let i = 0; i < n_data; i++) {
        const currentInd = indecies[i];

        if (typeof currentInd == "number") {
            const optionFromModel = data[0][currentInd];
            if (optionFromModel.required == true) {
                HTML = HTML + `
                <br>    
                <label class="inputContainer" title=${optionFromModel.tooltip} for=${optionFromModel.id}>${optionFromModel.title}
                    <input required type=${optionFromModel.type} id=${optionFromModel.id} name=${optionFromModel.name}></input>
                    <span class="checkmark"></span>
                </label>`
            }
            else if (optionFromModel.required == false) {
                HTML = HTML + `
                <br>    
                <label class="inputContainer" title=${optionFromModel.tooltip} for=${optionFromModel.id}>${optionFromModel.title}
                    <input type=${optionFromModel.type} id=${optionFromModel.id} name=${optionFromModel.name}></input>
                    <span class="checkmark"></span>
                </label>`
            }
        }
        else if (currentInd == "break") {
            HTML = HTML + `  
            <br>`
        }
    }
    optionSection.innerHTML = HTML;
}

function calcTotal() {
    itemTotal = 0;
    let qt = 0;
    let total = document.getElementById("total");
    for (const optionFromView of options) {
        if (optionFromView.checked == true) {
            qt++;
            const optionFromModel = data[0][optionFromView.id];
            itemTotal += optionFromModel["price*"] * data[2].basePrice;
            total.innerText = "A szolgáltatás díja:  " + itemTotal + "Ft";
        }
        if (qt == 0) { total.innerText = ""; }
    }
}

function checkDependency() {
    for (const optionFromView of options) {
        const optionFromModel = data[0][optionFromView.id];

        if (optionFromModel.dependency == null) {
            optionFromView.disabled = false;
        }
        else if (optionFromModel.dependency != null) {

            const criterion = options.find(o => o.id == optionFromModel.dependency);
            if (criterion.checked == true) {
                optionFromView.disabled = false;
            }
            else if (criterion.checked == false) {
                optionFromView.checked = false;
                optionFromView.disabled = true;
            }
        }

        if (optionFromView.disabled == true) {
            optionFromView.parentElement.style.color = "red";
        }
        else if (optionFromView.disabled == false) {
            optionFromView.parentElement.style.color = "#2c2c2c";
        }
    }
}

function c(ar) { console.log(ar); }
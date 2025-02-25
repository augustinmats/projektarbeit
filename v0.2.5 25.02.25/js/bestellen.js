const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const div_1 = document.getElementById("div_1");
bestellmodus_update();
function bestellmodus(modus) {
    sessionStorage.setItem("bestellmodus", modus);
    bestellmodus_update();
}
function bestellmodus_update() {
    if (sessionStorage.bestellmodus == 2) {
        button_2.style.backgroundColor = "white";
        button_2.style.color = "rgb(0, 180, 0)";
        button_1.style.backgroundColor = "rgb(0, 180, 0)";
        button_1.style.color = "white";
        div_1.style.display = "none";
        div_2.style.display = "block";
    } else {
        button_1.style.backgroundColor = "white";
        button_1.style.color = "rgb(0, 180, 0)";
        button_2.style.backgroundColor = "rgb(0, 180, 0)";
        button_2.style.color = "white";
        div_1.style.display = "block";
        div_2.style.display = "none";
    }
}
function warenkorb_add(artikel) {
    /*localStorage.setItem("warenkorb", '["one", "two"]');*/
    let warenkorb_temp = [{}];
    if (localStorage.warenkorb) {
        warenkorb_temp = JSON.parse(localStorage.getItem("warenkorb"));
    }
    if (!warenkorb_temp.includes(artikel)) {
        warenkorb_temp.push(artikel);
    }
    if (warenkorb_temp[0][artikel] >= 1) {
        warenkorb_temp[0][artikel] = warenkorb_temp[0][artikel] + 1;
    } else {
        warenkorb_temp[0][artikel] = 1;
    }
    console.log(warenkorb_temp);
    localStorage.setItem("warenkorb", JSON.stringify(warenkorb_temp));
    zum_warenkorb();
}
function zum_warenkorb() {
    document.getElementById("zum_warenkorb").style.right = "2em";
    setTimeout(zum_warenkorb_off, 5000);
}
function zum_warenkorb_off() {
    document.getElementById("zum_warenkorb").style.right = "-8em";
}

let preise = {
    Artikel_1: 5.9,
    Artikel_2: 3.6,
    Produkt_1: 0.49,
    Produkt_2: 0.99,
    Produkt_3: 0.5,
    Produkt_4: 1
};
let gesamtsumme = 0;
warenkorb_laden();
function preis_to_string(num) {
    let string = "";
    if (Math.round(num) == num) {
        string = num + ",-";
    } else {
        let split = num.toFixed(2).split(".");
        string = split[0] + "," + split[1];
    }
    return string;
}
function append(produkt, anzahl, preis) {
    let element = document.createElement("tr");
    /*element.innerHTML =
        "<td class='td_produkt'>" +
        produkt +
        "</td><td class='td_anzahl'>" +
        anzahl +
        "</td><td class='td_preis'>" +
        preis_to_string(preis) +
        " €</td><td class='td_summe'>" +
        preis_to_string(anzahl * preis) +
        " €</td>";*/
    element.innerHTML = `
        <td class="td_produkt"> ${produkt} </td>
        <td class="td_anzahl"> 
            <button onclick="anzahl('${produkt}', -1)"> - </button>
            ${anzahl}
            <button onclick="anzahl('${produkt}', 1)"> + </button>
        </td>
        <td class="td_preis"> ${preis_to_string(preis)}€ </td>
        <td class="td_summe"> ${preis_to_string(anzahl * preis)}€ </td>
    `;
    document.getElementById("append").appendChild(element);
    gesamtsumme = gesamtsumme + anzahl * preis;
}
function warenkorb_laden() {
    let warenkorb = [];
    warenkorb = JSON.parse(localStorage.getItem("warenkorb"));
    gesamtsumme = 0;
    document.getElementById("append").innerHTML = "";
    if (warenkorb.length > 1) {
        let warenkorb = [];
        warenkorb = JSON.parse(localStorage.getItem("warenkorb"));
        for (let i = 1; i < warenkorb.length; i++) {
            console.log(i);
            let produkt = warenkorb[i];
            append(produkt, warenkorb[0][produkt], preise[produkt]);
            console.log(warenkorb[0][produkt]);
        }
        let gesamtsummenausgabe = document.getElementById("gesamtsumme");
        gesamtsummenausgabe.innerText = `${preis_to_string(gesamtsumme)}€`;
    } else {
        let element = document.createElement("tr");
        element.innerHTML = `
            <td> Noch nichts im Warenkorb? Bestellen Sie <a href="bestellen.html">hier</a>! </td>
        `;
        document.getElementById("warenkorb_leer").innerHTML = "Noch nichts im Warenkorb? Bestellen Sie <a href='bestellen.html'>hier</a>!";
    }
}
function anzahl(produkt, schritte) {
    let warenkorb = []; /*[[{Artikel_1: 1, Produkt_3: 1}, "Artikel_1", "Produkt_3"] (3)]*/
    warenkorb = JSON.parse(localStorage.getItem("warenkorb"));
    warenkorb[0][produkt] = warenkorb[0][produkt] + schritte;
    if (warenkorb[0][produkt] <= 0) {
        delete warenkorb[0][produkt];
        warenkorb.splice(warenkorb.indexOf(produkt), 1);
        console.log(warenkorb);
    }
    localStorage.setItem("warenkorb", JSON.stringify(warenkorb));
    warenkorb_laden();
}
function kasse(display) {
    document.getElementById("kasse").style.display = display;
}

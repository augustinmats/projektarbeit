const nav = `
    <nav id="nav_width">
        <a class="nav_aussen" id="nav_aussen_l" href="index.html"> <img id="logo" src="../img/icon_w.png"></a>
        <div class="nav_innen">
            <a href="ueber_uns.html">Über uns</a>
            <a href="bestellen.html">Bestellen</a>
            <a href="warenkorb.html">
                Warenkorb
                <img class="w" src="../img/warenkorb_w.png" />
                <img class="g" src="../img/warenkorb_g.png">
            </a>
        </div>
        <div class="nav_aussen" id="nav_aussen_r">
            <div class="img" onclick="nav_rechts()">
                <img class="close normal" src="../img/dreipunkte_w.png">
                <img class="close hover" src="../img/dreipunkte_g.png">
                <img class="open normal" src="../img/x_w.png">
                <img class="open hover" src="../img/x_g.png">
            </div>
            <div id="dreipunkt_menu">
                <a href="kontakt.html">Kontakt</a>
                <a href="impressum.html">Impressum</a>
            </div>
        </div>
    </nav>
    <nav id="nav_height">
        <div id="nav_top">
            <div class="img" onclick="nav_links()">
                <img class="normal a" src="../img/strich_w.png" />
                <img class="normal b" src="../img/strich_w.png" />
                <img class="normal c" src="../img/strich_2_w.png" />
                <img class="hover a" src="../img/strich_g.png" />
                <img class="hover b" src="../img/strich_g.png" />
                <img class="hover c" src="../img/strich_2_g.png" />
            </div>
            <a class="nav_logo" href="index.html"><h1>Frischeparadies</h1></a>
            <div class="spaceholder"></div>
        </div>
        <div id="nav_left">
            <div class="nav_innen top">
                <a href="ueber_uns.html">Über uns</a>
                <a href="bestellen.html">Bestellen</a>
                <a href="warenkorb.html">
                    Warenkorb
                    <img class="w" src="../img/warenkorb_w.png" />
                    <img src="../img/warenkorb_g.png" class="g"/>
                </a>
            </div>
            <div class="nav_innen bottom">
                <a href="kontakt.html">Kontakt</a>
                <a href="impressum.html">Impressum</a>
            </div>
        </div>
    </nav>
`;
document.getElementsByTagName("header")[0].innerHTML = nav + document.getElementsByTagName("header")[0].innerHTML;

const head = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../styles/main.css" />
    <link rel="stylesheet" type="text/css" href="../styles/nav_r_close.css" id="link_nav_r_close" />
    <link rel="stylesheet" type="text/css" href="../styles/nav_r_open.css" id="link_nav_r_open" disabled />
    <link rel="icon" type="image/png" href="../img/favicon.ico" sizes="192x192">
`;
document.getElementsByTagName("head")[0].innerHTML = head + document.getElementsByTagName("head")[0].innerHTML;

let zeige_nav_links = false;
function nav_links() {
    let a = document.getElementsByClassName("a");
    let b = document.getElementsByClassName("b");
    let c = document.getElementsByClassName("c");
    let nav_left = document.getElementById("nav_left");
    if (zeige_nav_links) {
        zeige_nav_links = false;
        for (let i = 0; i < 2; i++) {
            a[i].style.rotate = "";
            a[i].style.top = "";
            b[i].style.rotate = "";
            c[i].style.opacity = "";
        }
        nav_left.style.left = "";
    } else {
        zeige_nav_links = true;
        for (let i = 0; i < 2; i++) {
            a[i].style.rotate = "45deg";
            a[i].style.top = "calc(50% - 0.15em)";
            b[i].style.rotate = "-45deg";
            c[i].style.opacity = "0";
        }
        nav_left.style.left = "0";
    }
}
let zeige_nav_rechts = true;
function nav_rechts() {
    let open = document.getElementById("link_nav_r_open");
    let close = document.getElementById("link_nav_r_close");
    let menu = document.getElementById("dreipunkt_menu");
    if (zeige_nav_rechts) {
        zeige_nav_rechts = false;
        open.disabled = false;
        close.disabled = true;
        menu.style.display = "flex";
    } else {
        zeige_nav_rechts = true;
        close.disabled = false;
        open.disabled = true;
        menu.style.display = "none";
    }
}
var initialTxt = document.createElement("textarea");
initialTxt.className = "initial";
document.body.appendChild(initialTxt);
var txtEnter = initialTxt.value;

var translateTxt = document.createElement("textarea");
translateTxt.className = "translate";
document.body.appendChild(translateTxt);
var txtChange = translateTxt.value;

var btn = document.createElement("button");
btn.setAttribute("type", "button");
document.body.appendChild(btn);
btn.innerText = "Traduction";

var initialAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (var i = 0; i < initialAlpha.length; i++) {
    btn.addEventListener('click', trad)
    function trad() {
        

    }
}

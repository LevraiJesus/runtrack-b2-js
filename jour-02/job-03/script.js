function myDisplayText() {
    document.getElementById("text-displayer").textContent = document.getElementById("input-text").value;
}

function myTurnBold() {
    document.getElementById("text-displayer").style.fontWeight = "bold";
}

function myTurnItalic() {
    document.getElementById("text-displayer").style.fontStyle = "italic";
}

function myClearText() {
    const textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontWeight = "";
    textDisplayer.style.fontStyle = "";
    textDisplayer.textContent = "";
    document.getElementById("input-text").value = "";
}

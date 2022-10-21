document.getElementById("placeorder").onclick = function() {
    document.getElementById("modal").style.display = "block";
}
document.getElementById("close").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById("modal").style.display = "none";
    }
}
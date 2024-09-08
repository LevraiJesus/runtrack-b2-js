let count = 0;
function myAddCount() {
    count++;
    document.getElementById("count-displayer").textContent = count;
}

document.getElementById("add-count-btn").addEventListener("click", myAddCount);

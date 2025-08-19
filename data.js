let data = JSON.parse(localStorage.getItem("excelData")) || [["Number", "Time"]];

function save() {
    localStorage.setItem("excelData", JSON.stringify(data));
}

function addData() {
    const number = document.getElementById("number").textContent.trim();
    const timeText = document.querySelector(".time").textContent.trim(); 
    const time = parseFloat(timeText);
    data.push([number, time]);
    save();
}

function exportToExcel() {
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "times");
    XLSX.writeFile(wb, "times.xlsx");
}
document.getElementById("download").addEventListener("click", exportToExcel);
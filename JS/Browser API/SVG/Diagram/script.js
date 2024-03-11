let sales = [12000, 14500, 15000, 13800, 12400, 10000, 11300, 13900, 15800, 15000, 14700, 13200];

drawChart(sales);

function drawChart(array) {
    const svg = document.getElementById("chart");
    let rectHTML = "", valuesHTML = "";
    let width = +svg.getAttribute("width") / array.length;

    array.forEach((item, index) => {
        let coordX = +svg.getAttribute("width") / array.length * index;
        let coordY = +svg.getAttribute("height") - item / 100;
        let height = +svg.getAttribute("height") - coordY;
        rectHTML += `<rect x="${coordX}" y="${coordY}" width="${width}" height="${height}" fill="yellow" stroke="black" />`;
        valuesHTML += `<text x="${coordX + 5}" y="${coordY - 5}">${item}</text>`;
    });

    svg.innerHTML = rectHTML + valuesHTML;
}
var data = {};
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";

//elementos del HTML
var tbody = document.getElementById("tableBodyData");
var btnRemove = document.getElementById("btnRemove");
var btnLoad = document.getElementById("btnLoad");
var btnSearch = document.getElementById("btnSearch");
var input = document.getElementById("inputSearch");

//limpiar tabla
btnRemove.addEventListener("click", function () {
    tbody.innerHTML = "";
});

//generar una fila
function genTr(json) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.innerText = json.id;
    td2.innerText = json.title;
    td3.innerText = json.price;
    td4.innerText = json.description;
    td5.innerText = json.category;

    tr.append(td1, td2, td3, td4, td5);
    return tr;
}

//pintar tabla
function renderTable(array) {
    tbody.innerHTML = "";
    array.forEach(element => {
        tbody.append(genTr(element));
    });
}

//consumir API
function getData() {
    xhr.open("GET", requestUrl, true);

    xhr.onload = function () {
        let array = JSON.parse(xhr.responseText);
        data.json = array;
        renderTable(data.json);
    };

    xhr.send();
}

//Load Data
btnLoad.addEventListener("click", getData);

//Filtro por título
btnSearch.addEventListener("click", function () {

    let filtered = data.json.filter(function (e) {
        return e.title.toLowerCase().includes(input.value.toLowerCase());
    });

    renderTable(filtered);
});

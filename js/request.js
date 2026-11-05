var data = {};
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody = document.getElementById("tableBodyData");
btnRemove = document.getElementById("btnRemove");
btnLoad = document.getElementById("btnLoad");
btnSearch = document.getElementById("btnSearch");
inputSearch = document.getElementById("inputSearch");

btnRemove.addEventListener("click", function (e) {
    tbody.innerHTML = "";
});

// Paso 2: genera una fila <tr> a partir de un objeto JSON
function genTr(json) {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td5 = document.createElement("td");

    td1.innerText = json.id;
    td2.innerText = json.title;
    td3.innerText = json.price;
    td4.innerText = json.description;
    td5.innerText = json.category;
    tr.append(td1, td2, td3, td4, td5);
    return tr;
}

// consumir api
function getData(url) {
    xhr.open("GET", requestUrl, true);
    xhr.onload = function () {
        console.log(xhr.responseText);
        array = JSON.parse(xhr.responseText);
        data.json = array;
        tbody.innerHTML = "";
        array.forEach(element => {
            console.log(element);
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}

// Paso 3: conectar el boton Load Data sin modificar el HTML
btnLoad.addEventListener("click", function (e) {
    getData();
});

// Pasos 3 y 4: buscar por titulo y llenar la tabla solo con las coincidencias
btnSearch.addEventListener("click", function (e) {
    e.preventDefault();
    if (!data.json) {
        return;
    }
    filtered = data.json.filter(function (item) {
        return item.title.toLowerCase().includes(inputSearch.value.toLowerCase());
    });
    console.log(filtered);
    tbody.innerHTML = "";
    filtered.forEach(element => {
        tbody.append(genTr(element));
    });
});

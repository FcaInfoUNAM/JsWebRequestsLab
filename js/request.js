var data = {};
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";

var tbody = document.getElementById("tableBodyData");
var btnLoad = document.getElementById("btnLoad");
var btnRemove = document.getElementById("btnRemove");
var btnSearch = document.getElementById("btnSearch");
var inputSearch = document.getElementById("inputSearch");

btnRemove.addEventListener("click", function (e) {
    tbody.innerHTML = "";
});

function genTr(json) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.innerText = json.id;
    td2.innerText = json.title;
    td3.innerText = json.price;
    td4.innerText = json.description;
    td5.innerText = json.category;

    tr.append(td1, td2, td3, td4, td5);
    return tr;
}

// Consumir API
function getData(url) {
    xhr.open("GET", requestUrl, true);
    xhr.onload = function () {
        console.log(xhr.responseText);
        const array = JSON.parse(xhr.responseText);
        data.json = array;

        tbody.innerHTML = "";
        array.forEach(element => {
            console.log(element);
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}

// Paso 3.1: Asociar getData al botón Load Data sin modificar el HTML
btnLoad.addEventListener("click", function () {
    getData(requestUrl);
});

// Paso 3.2 y Paso 4: Filtrar data.json al hacer clic en Search y actualizar la tabla
btnSearch.addEventListener("click", function (e) {
    e.preventDefault();
    if (!data.json) return;

    const filtered = data.json.filter(function (item) {
        return item.title.includes(inputSearch.value);
    });
    console.log(filtered);

    tbody.innerHTML = "";
    filtered.forEach(element => {
        tbody.append(genTr(element));
    });
});
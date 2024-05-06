
var data = {}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
var tbody = document.getElementById("tableBodyData");
var btnRemove = document.getElementById("btnRemove");
var btnLoadData = document.getElementById("btnLoadData");
var searchButton = document.getElementById("btnSearch");
var input = document.getElementById("searchInput");

btnRemove.addEventListener("click", function (e) {
    tbody.innerHTML = "";
});

function genTr(json) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td1.innerText = json.id;
    td2.innerText = json.title;
    td3.innerText = json.price;
    td4.innerText = json.description;
    td5.innerText = json.category;

    tr.append(td1, td2, td3, td4, td5);
    return tr;
}

function getData(url) {
    xhr.open("GET", requestUrl, true);
    xhr.onload = function (url) {
        console.log(xhr.responseText);
        // Handle data
        var array = JSON.parse(xhr.responseText);
        data.json = array;

        // Recorrer el array y agregar filas a la tabla
        array.forEach(element => {
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}

getData();

btnLoadData.addEventListener("click", function (e) {
    getData();
});

searchButton.addEventListener("click", function () {
    tbody.innerHTML = ''; // Vacía la tabla
    var filtered = data.json.filter(function (item) {
        return item.title.includes(input.value);
    });
    filtered.forEach(element => {
        tbody.append(genTr(element));
    });
});
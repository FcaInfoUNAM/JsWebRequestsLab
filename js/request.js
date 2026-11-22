var data = {};
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";

var tbody = document.getElementById("tableBodyData");
var btnRemove = document.getElementById("btnRemove");
var btnLoad = document.getElementById("btnLoad");
var btnSearch = document.getElementById("btnSearch");
var inputSearch = document.getElementById("inputSearch");

btnRemove.addEventListener("click", function () {
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
    xhr.open("GET", url, true);
    xhr.onload = function () {
        console.log(xhr.responseText);

        var array = JSON.parse(xhr.responseText);
        data.json = array;

        array.forEach(element => {
            console.log(element);
        });

        tbody.innerHTML = "";
        array.forEach(element => {
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}

btnLoad.addEventListener("click", function () {
    getData(requestUrl);
});

btnSearch.addEventListener("click", function (event) {
    event.preventDefault();

    if (!Array.isArray(data.json)) {
        console.error("Carga los datos antes de realizar una búsqueda.");
        return;
    }

    var filtered = data.json.filter(function (element) {
        return element.title.includes(inputSearch.value);
    });

    console.log(filtered);
    tbody.innerHTML = "";
    filtered.forEach(function (element) {
        tbody.append(genTr(element));
    });
});

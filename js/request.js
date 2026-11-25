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

function renderRows(items) {
    tbody.innerHTML = "";
    items.forEach(element => {
        console.log(element);
        tbody.append(genTr(element));
    });
}

function getData() {
    xhr.open("GET", requestUrl, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var array = JSON.parse(xhr.responseText);
            data.json = array;
            renderRows(data.json);
        }
    };
    xhr.send();
}

btnLoad.addEventListener("click", getData);

btnSearch.addEventListener("click", function () {
    if (!data.json) return;

    var filtered = data.json.filter(function (e) {
        return e.title.includes(inputSearch.value);
    });

    console.log(filtered);
    renderRows(filtered);
});

getData();
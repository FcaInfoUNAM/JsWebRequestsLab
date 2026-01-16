
var data = {}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody = document.getElementById("tableBodyData");
btnRemove = document.getElementById("btnRemove");
btnLoad = document.getElementById("btnLoad");
btnSearch = document.getElementById("btnSearch");
inputSearch = document.getElementById("inputSearch");

// Función para generar una fila de la tabla
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

// Botón para remover datos
btnRemove.addEventListener("click", function(e) {
    tbody.innerHTML = "";
});

// Botón para cargar datos
btnLoad.addEventListener("click", function(e) {
    getData();
});

// Botón para buscar/filtrar
btnSearch.addEventListener("click", function(e) {
    if (data.json) {
        filtered = data.json.filter(function(e) {
            return e.title.toLowerCase().includes(inputSearch.value.toLowerCase());
        });
        console.log(filtered);
        // Vaciar tabla y llenar con resultados filtrados
        tbody.innerHTML = "";
        filtered.forEach(element => {
            tbody.append(genTr(element));
        });
    }
});

// Consumir API
function getData(url) {
    xhr.open("GET", requestUrl, true); 
    xhr.onload = function(url) {
        console.log(xhr.responseText);
        // Handle data
        array = JSON.parse(xhr.responseText);
        data.json = array;
        
        // Recorrer el arreglo e imprimir cada elemento en consola
        array.forEach(element => {
            console.log(element);
        });
        
        // Llenar la tabla con los datos
        tbody.innerHTML = ""; // Limpiar tabla primero
        array.forEach(element => {
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}
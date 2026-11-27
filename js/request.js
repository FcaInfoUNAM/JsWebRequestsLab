var data ={}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody= document.getElementById("tableBodyData");
btnRemove=document.getElementById("btnRemove");
btnLoad=document.getElementById("btnLoad");
btnSearch=document.getElementById("btnSearch");
input=document.getElementById("inputSearch");

btnRemove.addEventListener("click",function(e){
    tbody.innerHTML = "";
});

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

function getData(url){
    xhr.open("GET", requestUrl, true); 
    xhr.onload = function(url){
        console.log(xhr.responseText);
        array = JSON.parse(xhr.responseText);
        data.json=array;

        tbody.innerHTML = "";

        array.forEach(element => {
            console.log(element);
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}

btnLoad.addEventListener("click", getData);

btnSearch.addEventListener("click", function(e){
    if (!data.json) {
        alert("Primero carga los datos con el boton Load Data.");
        return;
    }
    filtered = data.json.filter(function(e) {
        return e.title.includes(input.value);
    });
    console.log(filtered);

    tbody.innerHTML = "";
    filtered.forEach(element => {
        tbody.append(genTr(element));
    });
});
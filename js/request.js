
var data ={}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody= document.getElementById("tableBodyData");
btnRemove=document.getElementById("btnRemove");

var btnLoad = document.getElementById("btnLoad");
var searchInput = document.getElementById("searchInput");
var btnSearch = document.getElementById("btnSearch");

btnRemove.addEventListener("click",function(e){
    tbody.innerHTML = "";
});

if (btnLoad) {
    btnLoad.addEventListener("click", function(e){
        getData();
    });
} 

//consumir api
function getData(url){
    xhr.open("GET", requestUrl, true); 
    xhr.onload = function(url){
        console.log(xhr.responseText);

        // Handle data
        array = JSON.parse(xhr.responseText);
        data.json=array;

        array.forEach(element => {
            console.log(element); //Imprime cada elemento en consola
            tbody.append(genTr(element));
        });
    };
    xhr.send();
}
getData();

if (btnSearch) {
    btnSearch.addEventListener("click", function(e){
        e.preventDefault();
        
        if (!data.json) {
            alert("Primero carga los datos haciendo clic en Load Data");
            return;
        } 

        var filtered = data.json.filter(function(item) {
            return item.title.toLowerCase().includes(inputSearch.value.toLowerCase());
        }); 

        tbody.innerHTML = ""; 

        filtered.forEach(element => {
            tbody.append(genTr(element));
        });
    });
} 


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
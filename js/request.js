
var data = {}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody = document.getElementById("tableBodyData");
btnRemove =document.getElementById("btnRemove");
searchInput = document.getElementById("inputSearch");
btnLoad = document.getElementById("btnLoad");
btnLoad.addEventListener("click", function(){
    getData();
});

btnRemove.addEventListener("click",function(e){
    tbody.innerHTML = "";
});

searchInput.addEventListener("click", function(e){
    var input = e.target.value.toLowerCase();

    filtered = data.json.filter(function(e){ 
        return e.title.toLowerCase().includes(input);
    });

    console.log(filtered);

    tbody.innerHTML = "";

    filtered.forEach(element => {
        tbody.append(genTr(element));
    });
});

//consumir api
function getData(url){
    xhr.open("GET", requestUrl, true); 
    xhr.onload = function(evt){
        console.log(xhr.responseText);
        // Handle data
        array = JSON.parse(xhr.responseText);
        data.json=array;

        array.forEach(element => {
            console.log(element);
    });

        array.forEach(element => {
            tbody.append(genTr(element));
        });

    };

    xhr.send();
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
    tr.append(td1,td2,td3,td4,td5);
    return tr;
}

getData();
var data ={}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody= document.getElementById("tableBodyData");
btnRemove=document.getElementById("btnRemove");
btnRemove.addEventListener("click",function(e){
    tbody.innerHTML = "";
});

//consumir api
function getData(url){
    xhr.open("GET", requestUrl, true); 
    xhr.onload = function(url){
        // console.log(xhr.responseText);
        // Handle data
        array = JSON.parse(xhr.responseText);
        data.json=array;
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

btnLoad= document.getElementById("btnLoad");
btnLoad.addEventListener("click",function(e){
    getData();
})

btnSearch = document.getElementById("btnSearch");
input = document.getElementById("inputSearch");
btnSearch.addEventListener("click",function(e){
    tbody.innerHTML="";
    filtered = data.json.filter(e=>e.title.includes(input.value));
    filtered.forEach(function(i){
        tbody.append( genTr(i));
    });
});
getData();

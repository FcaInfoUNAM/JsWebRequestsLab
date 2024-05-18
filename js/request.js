var data ={}
var xhr = new XMLHttpRequest();
var requestUrl = "https://fakestoreapi.com/products";
tbody= document.getElementById("tableBodyData");
btnRemove=document.getElementById("btnRemove");
btnRemove.addEventListener("click",function(e){
    tbody.innerHTML = "";
});



//consumir api
function getData(url) {
    xhr.open("GET", requestUrl, true);
    xhr.onload = function(url) {
      // console.log(xhr.responseText);
  
      // Handle data
      array = JSON.parse(xhr.responseText);
      data.json = array;
  
      // Recorrer el array y generar filas de tabla HTML
      array.forEach(element => {
        tbody.append(genTr(element));
       });
       filtered = data.json.filter(function(e){
        return e.title.includes(input.value);
    });
    console.log(filtered);
    
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

getData();



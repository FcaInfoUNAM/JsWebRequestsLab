
const requestUrl = "https://fakestoreapi.com/products"; 
const tbody = document.getElementById("tableBodyData"); 
const btnRemove = document.getElementById("btnRemove"); 
const btnLoad = document.getElementById("btnLoad");
const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");

let data = []; 

function genTr(json) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td1.innerText = json.id;
    td2.innerText = json.title;
    td3.innerText = json.price;
    td4.innerText = json.description;
    td5.innerText = json.category;

    tr.append(td1, td2, td3, td4, td5);
    return tr;
}


function getData() {
    const xhr = new XMLHttpRequest(); 
    xhr.open("GET", requestUrl, true); 

    xhr.onload = function () {
        if (xhr.status === 200) {
            
            data = JSON.parse(xhr.responseText); 
        
            tbody.innerHTML = "";

            data.forEach(element => {
                console.log(element); 
                tbody.append(genTr(element));
            });

            btnLoad.disabled = true;
        }
    };
    xhr.send(); 
}

btnRemove.addEventListener("click", function () {
    tbody.innerHTML = ""; 
    btnLoad.disabled = false; 
});

btnLoad.addEventListener("click", getData);

btnSearch.addEventListener("click", function (e) {
    e.preventDefault(); 

    const text = inputSearch.value.toLowerCase();

    const filtered = data.filter(function (element) {
        return element.title.toLowerCase().includes(text);
    });

    console.log(filtered);

    tbody.innerHTML = "";
    filtered.forEach(element => {
        tbody.append(genTr(element));
    });
});
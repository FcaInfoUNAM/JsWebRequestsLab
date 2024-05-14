[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/kHokarMw)
# Creación de elementos con JS

Este repositorio tiene como objetivo revisar y comprender el llamado de elementos, listeners y la modificación de HTML mediante JS

Escribe en un archivo de texto llamado entregable.txt las respuestas a las preguntas del laboratrorio

## Paso1

Clona el repositorio en tu local
```cmd
git clone "{url}"
```

1. Abre en un navegador el archivo index.html
2. Revisa el código fuente en VS Code
3. Haz click en el botón remove data
4. Revisa el código del archivo request.js y responde las siguientes preguntas en entregable.txt
    - ¿qué es el objeto generado por XMLHttpRequest?
    - ¿Qué hace el método open de xhr?
    - ¿Qué hace el método onload de xhr?
5. Abre la consola en tu navegador web y escribe ```data``` y presiona enter ¿Qué muestra la consola?

## Paso2

1. dentro de la función getData cuando se manda a llamar xhr.onload recorre el arreglo devuelto por el api e imprimelo cada elemento en la consola
``` js
array.forEach(element => {
            console.log(element);
        });
```
2. Explica qué significa => en el código de ejemplo en entregable.txt
3. Crea una función que reciba como parametro un objeto de los elementos y genere la columna de una tabla en html
```js
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
```
4. Incorpora esta función en el recorrido del array previamente reañlizado
``` js
array.forEach(element => {
            tbody.append(genTr(element));
        });
```

## paso3
1. Manda a llamar la función gen data cuando se haga click en el botón Load Data sin alterar el HTML
2. Agrega un evento que filtre los valores de data.json según el título del artículo, (invertiga la propuedad filter de los arreglos) y utiliza la función include de las cadenas
``` js
filtered = data.json.filter(function(e){
        return e.title.includes(input.value);
});
console.log(filtered);
```
4. explica cómo es que cambia de color el botón y cómo se deshabilita en entregable.txt

## paso4 

1. Utiliza el código de arriba como ejemplo para hacer que cuando uno de click en search filtre data.json vacíe la tabla y la llene solo con los valores filtrados

## Paso5
1. Guarda los cambios
2. Agrega los cambios a tu repositorio junto al archivo entregable.txt
``` git add entreganle.txt ```
``` git add js/request.js ```
3. Haz una rama llamada entregable
``` git branch entregable ```
4. Cambiate a la rama recién creada
``` git checkout entregable ```
5. Realza un push sobre la rama
``` git commit -m "entregable" ```
``` git push origin entregable ```
6. solicita un pullrequest en github
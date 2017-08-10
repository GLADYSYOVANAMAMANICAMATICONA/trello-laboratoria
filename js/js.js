//el buton que parece input... al hacer click hara que aparesca un nuevo contenedor con un input buton: guardar Y buton: X
    btnañadir.onclick = function () {
      var lista = document.getElementById("lista");//donde se mostrara mi input, button: Guardar button: X
      var inputText = document.createElement("input");//creando un input
        inputText.setAttribute("type", "text");
        inputText.setAttribute("id", "texto");
        inputText.setAttribute("placeholder", "Añadir lista");
        lista.appendChild(inputText);

      var btn = document.createElement("button");//creando el boton guardar
      var t = document.createTextNode("Añadir Tarjeta");//es lo que me aparecera en el buton escrito Guardar
        btn.setAttribute("id","btnGuardar");
        btn.appendChild(t);
        contenedorinput.appendChild(btn);

      var btnx = document.createElement("button");//creando el boton de eliminar si funcionalidad
      var x = document.createTextNode("X");//es lo que me aparecera en el buton escrito Guardar
        btnx.setAttribute("id","btnx");
        btnx.appendChild(x);
        contenedorinput.appendChild(btnx);

//boton Guardar... al momento de hacer click en guardar
    btnGuardar.onclick = function () {
      var divcontenedor = document.createElement("div")
      divcontenedor.setAttribute("id", "divcontenedor");
      var div = document.createElement("div");//creando la lista
      div.setAttribute("id", "divtarjetas");
      
      var inputT = document.getElementById("texto").value;//capturando lo que ingresa por el input
      var ntext = document.createTextNode(inputT);//es lo que se muestra en mi tarjeta previa captura del valor ingresado por el input
          div.appendChild(ntext);
          divcontenedor.appendChild(div)

      ///////////////////////////////////////////////////////////////(////////////////////////////////////)
      var inputText = document.createElement("input");//creando un input
         inputText.setAttribute("type", "text");
         inputText.setAttribute("id", "texto");
         inputText.setAttribute("placeholder", "Añadir lista");
         divcontenedor.appendChild(inputText);

      var btn = document.createElement("button");//creando el boton guardar
      var t = document.createTextNode("Añadir Tarjeta");//es lo que me aparecera en el buton escrito Guardar
        btn.setAttribute("id","btnGuardar");
        btn.appendChild(t);
        divcontenedor.appendChild(btn);

      var btnx = document.createElement("button");//creando el boton de eliminar si funcionalidad
      var x = document.createTextNode("X");//es lo que me aparecera en el buton escrito Guardar
        btnx.setAttribute("id","btnx");
        btnx.appendChild(x);
        divcontenedor.appendChild(btnx);

        //////////////////////////////////////////////////////////////////////
          if (inputT === "") {//si el input esta vacio me manda un alert para que ingrese nueva lista
            alert("Añadir lista!!!");
          } else {
            contenedormaster.appendChild(divcontenedor);//es en donde se mostrara mi lista... dentro de mi contenedor 
          }
          document.getElementById("texto").value = "";//al momento de guardar el imput me aparesca como al momento de cargar
        }
    }

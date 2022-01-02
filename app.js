const btnArea = document.getElementById("btnArea"),
      btnPerimetro = document.getElementById("btnPerimetro");


function updateForm() {
        
    // hide all inputs
    //ocultar todas las entradas o inputs
    document.getElementById("id_inputs_circle").hidden = true;
    document.getElementById("id_inputs_triangle").hidden = true;
    document.getElementById("id_inputs_square").hidden = true;
    document.getElementById("id_inputs_rectangle").hidden = true;
    document.getElementById("id_inputs_diamond").hidden = true;

    document.getElementById("perimetroCirculo").hidden = true;
    document.getElementById("perimetroCuadrado").hidden = true;
    document.getElementById("perimetroTriangulo").hidden = true;
    document.getElementById("perimetroRectangulo").hidden = true;
    document.getElementById("perimetroRombo").hidden = true;
    
                     //AREA
    // get the selected shape and show its inputs
    //obtener la forma seleccionada y mostrar sus entradas
    let shape = document.getElementById("id_shapes").value;
    switch (shape) {
        case "circle":
            document.getElementById("id_inputs_circle").hidden = false;
            break;
        case "triangle":
            document.getElementById("id_inputs_triangle").hidden = false;
            break;
        case "square":
            document.getElementById("id_inputs_square").hidden = false;
            break;
        case "rectangle":
            document.getElementById("id_inputs_rectangle").hidden = false;
            break; 
        case "diamond":
            document.getElementById("id_inputs_diamond").hidden = false;     
    }

                  
             //PERIMETRO
    // get the selected shape and show its inputs
    //obtener la forma seleccionada y mostrar sus entradas
    let figura = document.getElementById("figura").value;
    switch (figura){
        case "circulo":
             document.getElementById("perimetroCirculo").hidden = false;
             break;
        case "cuadrado":
             document.getElementById("perimetroCuadrado").hidden = false;
             break;
        case "triangulo":
             document.getElementById("perimetroTriangulo").hidden = false;
             break;
        case "rectangulo":
             document.getElementById("perimetroRectangulo").hidden = false;
             break;  
        case "rombo":
            document.getElementById("perimetroRombo").hidden = false;     
      }

}

          // addEventListener de Area() 
btnArea.addEventListener('click',()=>  {

    let shape = document.getElementById("id_shapes").value;// obtener la forma (shape) seleccionada
    
                     //formula para calcular el área de la figura o forma (shape)
    let area = 0;
    switch (shape) {
        case "circle":
            let radius = document.getElementById("id_radius").value;
            area = Math.PI * radius * radius;
            break;
        case "triangle":
            let base = document.getElementById("id_base").value;
            let height = document.getElementById("id_height").value;
            area = base * height / 2;
            break;
        case "square":
            let side = document.getElementById("id_side").value;
            area = side * side;
            break;  
        case "rectangle":
            let length = document.getElementById("id_length").value;
            let width = document.getElementById("id_width").value;
            area = length * width;
            break;
        case "diamond":
            let diagMayor = document.getElementById("DM").value;
            let diagMenor = document.getElementById("dm").value;
            area = diagMayor * diagMenor / 2;
            break;   
    }

    // output o salida de área
    document.getElementById("id_output").innerHTML = "Area = " + area + ' cms²' ;
});

    //addEventListener de PERIMETRO
btnPerimetro.addEventListener('click',()=> {
    let figura = document.getElementById("figura").value; // obtener la figura seleccionada

    let perimetro = 0;
    switch (figura) {
        case 'circulo':
            let diam = document.getElementById("diam").value;
            perimetro = Math.PI * diam;
            break;
        case 'triangulo':
            let lado1 = document.getElementById("lado1").value;
            perimetro =  lado1 * 3;
            break;
        case 'cuadrado':
            let lado = document.getElementById("lado").value;
            perimetro = lado * 4;
            break; 
        case 'rectangulo':
            let longitud = document.getElementById("longitud").value;
            let ancho = document.getElementById("ancho").value;
            perimetro = longitud*2 + ancho*2;
            break;  
        case "rombo":
            let ladoR = document.getElementById('ladoR').value;
            perimetro =  ladoR * 4;
            break;     
    }
    
    // output o salida de perimetro
    document.getElementById("botonPerim").innerHTML = "Perimetro = " + perimetro + ' cms';
})


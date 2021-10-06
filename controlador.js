let doctor1=document.getElementById("doctor1");
let fotodoctor1=document.getElementById("fotodoctor1");
let doctor2=document.getElementById("doctor2");
let fotodoctor2=document.getElementById("fotodoctor2");
let contadorDoctor=0;

let ingeniero1=document.getElementById("ingeniero1");
let fotoingeniero1=document.getElementById("fotoingeniero1");
let ingeniero2=document.getElementById("ingeniero2");
let fotoingeniero2=document.getElementById("fotoingeniero2");
let contadorIngeniero=0;

let profesor1=document.getElementById("profesor1");
let fotoprofesor1=document.getElementById("fotoprofesor1");
let profesor2=document.getElementById("profesor2");
let fotoprofesor2=document.getElementById("fotoprofesor2");
let contadorProfesor=0;

let contador1=document.getElementById("contador1");
let fotocontador1=document.getElementById("fotocontador1");
let contador2=document.getElementById("contador2");
let fotocontador2=document.getElementById("fotocontador2");
let contadorContador=0;




doctor1.addEventListener("click", activardoctor1);
doctor2.addEventListener("click", activardoctor2);
ingeniero1.addEventListener("click", activaringeniero1);
ingeniero2.addEventListener("click", activaringeniero2);
profesor1.addEventListener("click", activarprofesor1);
profesor2.addEventListener("click", activarprofesor2);
contador1.addEventListener("click", activarcontador1);
contador2.addEventListener("click", activarcontador2);



function activardoctor1() {

    console.log("hice clic en el boton1");
    doctor1.classList.remove("bg-dark");
    fotodoctor1.classList.remove("invisible");
    contadorDoctor++;

    setTimeout(function () {

        if(contadorDoctor != 2){

            doctor1.classList.add("bg-dark");
            fotodoctor1.classList.add("invisible");
            contadorDoctor++;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();
            let resultadoDoctor=document.getElementById("resultadoDoctor");
            resultadoDoctor.classList.remove("invisible");
            resultadoDoctor.classList.add("visible");
        }
        
        
    },3000)
} 

function activardoctor2() {

    console.log("hice clic en el boton2");
    doctor2.classList.remove("bg-dark");
    fotodoctor2.classList.remove("invisible");
    contadorDoctor++;

    setTimeout(function () {

        if(contadorDoctor != 2){

            doctor2.classList.add("bg-dark");
            fotodoctor2.classList.add("invisible");
            contadorDoctor--;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();

            let resultadoDoctor=document.getElementById("resultadoDoctor");
            resultadoDoctor.classList.remove("invisible");
            resultadoDoctor.classList.add("visible");
        }
        
    },3000)
}

// ingenieros 

function activaringeniero1() {

    console.log("hice clic en el boton1");
    ingeniero1.classList.remove("bg-dark");
    fotoingeniero1.classList.remove("invisible");
    contadorIngeniero++;

    setTimeout(function () {

        if(contadorIngeniero != 2){

            ingeniero1.classList.add("bg-dark");
            fotoingeniero1.classList.add("invisible");
            contadorIngeniero++;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();
            let resultadoIngeniero=document.getElementById("resultadoIngeniero");
            resultadoIngeniero.classList.remove("invisible");
            resultadoIngeniero.classList.add("visible");
        }
        
        
    },3000)
} 

function activaringeniero2() {

    console.log("hice clic en el boton2");
    ingeniero2.classList.remove("bg-dark");
    fotoingeniero2.classList.remove("invisible");
    contadorIngeniero++;

    setTimeout(function () {

        if(contadorIngeniero != 2){

            ingeniero2.classList.add("bg-dark");
            fotoingeniero2.classList.add("invisible");
            contadorIngeniero--;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();

            let resultadoIngeniero=document.getElementById("resultadoIngeniero");
            resultadoIngeniero.classList.remove("invisible");
            resultadoIngeniero.classList.add("visible");
        }
        
    },3000)
}

// Profesores

function activarprofesor1() {

    console.log("hice clic en el boton1");
    profesor1.classList.remove("bg-dark");
    fotoprofesor1.classList.remove("invisible");
    contadorProfesor++;

    setTimeout(function () {

        if(contadorProfesor != 2){

            profesor1.classList.add("bg-dark");
            fotoprofesor1.classList.add("invisible");
            contadorProfesor++;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();
            let resultadoProfesor=document.getElementById("resultadoProfesor");
            resultadoProfesor.classList.remove("invisible");
            resultadoProfesor.classList.add("visible");
        }
        
        
    },3000)
} 

function activarprofesor2() {

    console.log("hice clic en el boton2");
    profesor2.classList.remove("bg-dark");
    fotoprofesor2.classList.remove("invisible");
    contadorProfesor++;

    setTimeout(function () {

        if(contadorProfesor != 2){

            profesor2.classList.add("bg-dark");
            fotoprofesor2.classList.add("invisible");
            contadorProfesor--;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();

            let resultadoProfesor=document.getElementById("resultadoProfesor");
            resultadoProfesor.classList.remove("invisible");
            resultadoProfesor.classList.add("visible");
        }
        
    },3000)
}

function activarcontador1() {

    console.log("hice clic en el boton1");
    contador1.classList.remove("bg-dark");
    fotocontador1.classList.remove("invisible");
    contadorContador++;

    setTimeout(function () {

        if(contadorContador != 2){

            contador1.classList.add("bg-dark");
            fotocontador1.classList.add("invisible");
            contadorContador++;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();
            let resultadoContador=document.getElementById("resultadoContador");
            resultadoContador.classList.remove("invisible");
            resultadoContador.classList.add("visible");
        }
        
        
    },3000)
} 

function activarcontador2() {

    console.log("hice clic en el boton2");
    contador2.classList.remove("bg-dark");
    fotocontador2.classList.remove("invisible");
    contadorContador++;

    setTimeout(function () {

        if(contadorContador != 2){

            contador2.classList.add("bg-dark");
            fotocontador2.classList.add("invisible");
            contadorContador--;

        }else{
            let audio=new Audio("audio/aplausos.mp3");
            audio.play();

            let resultadoContador=document.getElementById("resultadoContador");
            resultadoContador.classList.remove("invisible");
            resultadoContador.classList.add("visible");
        }
        
    },3000)
}

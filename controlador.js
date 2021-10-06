let doctor1=document.getElementById("doctor1");
let fotodoctor1=document.getElementById("fotodoctor1");
let doctor2=document.getElementById("doctor2");
let fotodoctor2=document.getElementById("fotodoctor2");
let contadorDoctor=0;

doctor1.addEventListener("click", activardoctor1);
doctor2.addEventListener("click", activardoctor2);

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
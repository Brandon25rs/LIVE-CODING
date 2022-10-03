/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 5 seconds
 * 5. Optional: add loading/error states
 *
 */
// API
const API_ENDPOINT = 'https://yesno.wtf/api';
answer=document.getElementById("answer");
pregunta=document.getElementById("input");
btnRespuesta=document.getElementById("button");

btnRespuesta.addEventListener("click", function name (e){

    if (pregunta.value.length >4){
        let promise =fetch('https://yesno.wtf/api', {
            method:"GET"
}
); 

promise.then((response)=>{
    response.json().then((data)=>{
        
        answer.innerText=data.answer;
        answer.innerHTML += `<img src="${data.image}" alt="">  `;
        const Tiempo = setTimeout(limpiaPregunta, 5000);

      }).catch((error)=>{
        console.error("ERROR AL OBTENER LOS DATOS"+error);

    } 
    )
}
). catch((error)=>{
    console.error("ERROR ELABORANDO LA SOLICITUD"+error);

}
);
}else {console.log("LA PREGUNTA NO PUEDE ESTAR VACÍA");}
    
}
)

function limpiaPregunta (){
    answer.innerText= "";
    pregunta.value= "";

}





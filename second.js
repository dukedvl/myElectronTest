let counter=0

function myClickFunc(){

    document.getElementById('counter').innerText= "You've clicked me " + (counter++) + " times.";    

}

function clearCounter(){
    
    counter = 0;
    
    let counterReference= document.getElementById('counter');
    
    if(counterReference.innerText != "")
        {
            counterReference.innerText= "Counter reset";
        }
}

function notifyMe(){
    
    let myNotification = new Notification("Swagger", { body: "swagger notified."});

    myNotification.onclick = ()=>{
        console.log('Swagger acknowledged.');
    }    
    
}
const inputs = document.getElementById("inputs");
const todolists = document.getElementById("todolists");

function add(){
    if(inputs.value === '')
        {
            alert('enter task');
        }else{
            let li=document.createElement("li");
            li.innerHTML = inputs.value;
            todolists.appendChild(li);  // display lists

            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span)  //display wrong mark
        }

        inputs.value=''; 
        saveData();  
        // to remove/clear the bar after adding the task
}
todolists.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data",todolists.innerHTML);
}

function display(){
    todolists.innerHTML = localStorage.getItem("data");
}
display();
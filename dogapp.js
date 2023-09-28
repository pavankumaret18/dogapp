const listUrl="https://dog.ceo/api/breeds/list/all";
const select=document.querySelector(".select");
const loader=document.querySelector(".lds-hourglass");
const img=document.querySelector(".doggie");
let url="";

fetch(listUrl).then(
    function(response){
        return response.json();
    }
).then(function(data){
    return data.message;
}
).then(function(list){
    for(let element in list){
        const ele=document.createElement('Option');
        ele.innerText=element;
        select.appendChild(ele);
    }
});

function init(){
    select.addEventListener("change", function(event){
        optionSelect(event.target.value);
    });
}

function optionSelect(value){
    img.classList.remove("show");
    loader.classList.add("show");
    if(value==="Select-Breed"){
        img.src="./images/intial.jpg";
    }
    else{
        url="https://dog.ceo/api/breed/"+value+"/images/random";
        fetch(url).
        then(function(response){
            return response.json();
        }).
        then(function(data){
            img.src=data.message;
            document.querySelector(".lds-hourglass").classList.remove("show");
        });
    }
}

img.addEventListener("load", function(){
    loader.classList.remove('show');
    img.classList.add('show');
});

init();
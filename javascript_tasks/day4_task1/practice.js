window.addEventListener("load",function(){

    let divObject=this.document.querySelector("body");
    let ulObject=this.document.querySelectorAll("ul");
    let liList=this.document.querySelectorAll("ul li");

    // Event Bubbling
    divObject.onclick=function(){
        console.log("DIV");
    }

    ulObject.onclick=function(event){
        // console.log("UL",event);
        if(event.target.localName=="li")
        console.log(event.target.innerText);
        else
        console.log("ul")
        event.stopPropagation();
;    }

   

});
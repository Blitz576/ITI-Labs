//getting all of the elemnets 
window.addEventListener("load",function(){

    //select the container div
    let contain=this.document.querySelector(".container");
    let element=contain.children; //returns Html collection

    contain.addEventListener("click", function (event) {
        if (event.target.localName == "span") {
            
            //hide the message if you're selecting the element for the first time
            let message = document.querySelector(".warn");
            message.style.visibility = "hidden";

            // Clone the node and its descendants
            let clone = event.target.cloneNode(true);

            // Append the cloned node to the parent of the original node
            this.appendChild(clone);
            
            // prevent users from clicking on the prevoius node
            event.target.addEventListener("click", function (event) {

                message.style.visibility = "visible";
                event.stopPropagation();
            });
        }
    });
    
    
})


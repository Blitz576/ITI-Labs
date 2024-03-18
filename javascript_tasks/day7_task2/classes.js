class Element{
    constructor(left,style={width:"100px",height:"100px"},imgSrc){
        if(this.constructor.name=="Element")
        throw new Error("forbidden to create");   //Abstraction Principle 
    
    this.image=document.createElement("img");
    this.image.src=imgSrc;  
    this.img_style(style);   
    
    this.image.style.left=left;
    this.imageLeft=parseInt(this.image.style.left); //value of my currnet position   
    
    this.image.style.position="absolute";
}

img_style(object){
    
    for(let key in object){
        this.image.style[key]=object[key];
    }
    // this.imageWidth=parseInt(this.image.clientWidth);    //value of container
        
}

appendPhoto(container){
    
    container.appendChild(this.image);
    this.container=container; 
    this.container.style.overflow="hidden";
    this.containerWidth=parseInt(this.container.clientWidth);
    this.containerHeight=parseInt(this.container.clientHeight);
}
}


class Egg extends Element{
    constructor(_left="155px",_style={width:"80px",height:"80px"},_imgSrc="images/egg.png",top="0px",){
        super(_left,_style,_imgSrc);
        this.image.style.top=top;
        this.rect=this.image.getBoundingClientRect();
    }
    
    eggRain(step){
        
            this.rect=this.image.getBoundingClientRect();
            
            if(parseInt(this.image.style.top)>=this.containerHeight-this.image.clientHeight){
                this.image.src="images/broken.png";
                return 1;
            }
            
            this.image.style.top=parseInt(this.image.style.top) + step+"px";    
            
        
        return 0;
    }
    
}




class Basket extends Element{
    constructor(_left="155px",_style={width:"100px",height:"100px"},_imgSrc="images/basket.png"){
        super(_left,_style,_imgSrc);   
        this.image.style.bottom="0px";
    }

    move(step){
        
        this.rect=this.image.getBoundingClientRect();
        document.addEventListener("keydown",(event)=>{
            if(event.key=="ArrowRight"){
                console.log(event);
                
                console.log(this.image.style.left);
                console.log(this.container);
                console.log(this.container.style.clientWidth);
                if(parseInt(this.image.style.left) > (parseInt(this.container.clientWidth)) )
                  this.image.style.left= 0 - (this.image.clientWidth)+step+"px";
            
                else
                  this.image.style.left=parseInt(this.image.style.left)+(step)+"px";

    }
    
});

document.addEventListener("keydown",(event)=>{
    
    if(event.key=="ArrowLeft"){
        console.log(event.key);
        
        if(parseInt(this.image.style.left)< 0 - (parseInt(this.image.clientWidth)))
        this.image.style.left=(parseInt(this.container.clientWidth)) + "px";
    
    this.image.style.left=parseInt(this.image.style.left)-step+"px";
}

});

}
}


const catchEgg = function (egg, basket) {
    let step = 10;

    console.log(parseInt(egg.image.style.left));
    
    basket.move(step);

    let endId = setInterval(() => {
        touchGround = egg.eggRain(step);
        
        // Check for collision between the egg and the basket

        if (
            parseInt(egg.image.style.top)+parseInt(egg.image.style.width)/2  >= basket.containerHeight - parseInt(basket.image.style.height) &&
            parseInt(egg.image.style.left) >= parseInt(basket.image.style.left) &&
            parseInt(egg.image.style.left) + parseInt(egg.image.style.width) <= parseInt(basket.image.style.left) + parseInt(basket.image.style.width)
        ) {
            egg.container.removeChild(egg.image);
            clearInterval(endId);
            console.log("Egg caught!");
        }
    }, 500);
};


















// class Basket {
    //     constructor(right="158px",style={width:"100px",height:"100px"},imgSrc="images/basket.png"){
        //       this.image=document.createElement("img");
        //       this.image.src=imgSrc;  
        //       this.img_style(style);
        //       this.image.style.right=right;   
        //     }
        
        //     img_style(object){
            
            //         for(let key in object){
                //             this.image.style[key]=object[key];
                //         }
                //         this.image.style.position="absolute";
                //         this.image.style.bottom="0px";
                
                //     }
                //     appendPhoto(container){
                    
                    //         container.appendChild(this.image);
                    
                    //      }
                    
                    // }
                    
                    
                    
                    
                    
                    // class Egg{
                        //     constructor(top="0px",left="158px",style={width:"100px",height:"100px"},imgSrc="images/egg.png"){
                            //         this.image=document.createElement("img");
                            //         this.image.src=imgSrc;  
                            //         this.img_style(style);
                            //         this.image.style.top=top;
                            //         this.image.style.left=left;
                            
                            //     }
                            
                            //     img_style(object){
                                
                                //         for(let key in object){
                                    //             this.image.style[key]=object[key];
                                    //         }
                                    //         this.image.style.position="absolute";
                                    //         this.image.style.top="0px";
                                    
                                    //     }
                                    
                                    //     appendPhoto(container){
                                        
                                        //         container.appendChild(this.image);
                                        
                                        //      }
                                        
                                        // }
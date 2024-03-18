window.onload=function(){
    //getting the buttons 
    let buttons=document.getElementsByTagName("button"); //returns Html collection of elements
    let buttonIndex=0; //index of buttons
    
    let photoes=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg"];
    let photoIndex=0; //photo index
    let imgId=document.querySelector("img");

    let processId;

    //getting the next photo   
    buttons[buttonIndex++].addEventListener("click",function(){
        imgId.src=getPhoto(photoes,++photoIndex % photoes.length);
    });
   
    // buttons[buttonIndex++].addEventListener("click",nextPhoto(++photoIndex,photoes,imgId));
   

    //getting the previous photo
    buttons[buttonIndex++].addEventListener("click",function(){

        if(photoIndex-1<0)
            photoIndex= photoes.length-1 ; //returns the last element
           
           imgId.src=getPhoto(photoes,--photoIndex);

    });

   //slide show
   
   const getNext=function(){
      imgId.src=getPhoto(photoes,++photoIndex % photoes.length);
   }

   buttons[buttonIndex++].addEventListener("click",function(){
        
        processId= setInterval(getNext , 1000);               
   });
   
   //stop interval
   buttons[buttonIndex].addEventListener("click",function(){
     clearInterval(processId);
   });
}




window.addEventListener("load",function(){

    let my_div=document.querySelector("#one");
    let contry="";
    
 
    getDataFromUrl("Egypt").then((object)=>{
    contry= new Country(object[0].name,object[0].region,object[0].population,object[0].languages[0].name,object[0].flags.png);
    contry.appendPhoto(my_div);
    contry.appendCard(my_div);
    }).catch((error)=>new Error(error));
    


    getNeighbourData("Egypt").then((nobject)=>{

    contry= new Country(nobject.name,nobject.region,nobject.population,nobject.languages[0].name,nobject.flags.png);
    
    contry.appendPhoto(my_div);
    
    contry.appendCard(my_div);
    
    }).catch((error)=>new Error(error));


})
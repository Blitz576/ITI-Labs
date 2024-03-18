class Flag{
    
    #userName;

    
    //constructor
    constructor(inputName,continent,img_src="",style={width:"200px",height:"200px"}){
       
        if(this.constructor.name=="Flag")
        {
            throw new Error("can't create new instance from this class");
        } 
        
       
       this.userName=inputName;  //goes to line code 30
       this.continent=continent;
       //creating new flag image 
       this.image=document.createElement("img");
       
       this.image.src=img_src;
       this.image.style.display="block";
       this.img_style(style);
    }
     
    
    set userName (inputName)
    {
        this.#userName=inputName;
        
    }
    get userName()
    {
        return this.#userName;
    }
    
    img_style(object){

        for(let key in object){
            this.image.style[key]=object[key];
        }

    }

    appendPhoto(container){

       container.appendChild(this.image);

    }
    
}

class Country extends Flag{
    
    constructor(_inputName,_continent,salary,language,_img_src){
        super(_inputName,_continent,_img_src);
        this.language=language;
        this.salary=salary;
    }
    appendCard(container){ 
       let element = document.createElement("pre");
       element.innerHTML=`
       Name: ${this.userName}      
       
       Continent: ${this.continent}    
       
       Population: ${this.salary}   
       
       language: ${this.language} 
       `
       element.style.backgroundColor="yellowgreen"
       container.appendChild(element);
    }
}
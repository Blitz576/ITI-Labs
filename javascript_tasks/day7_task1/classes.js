
class Person{
    
    static #persons=0;

    // _nickName; //protected to use 
    //private section
    #userName;

    
    //constructor
    constructor(inputName,gender,img_src="",style={width:"200px",height:"200px"}){
       
        if(this.constructor.name=="Person")
        {
            throw new Error("can't create new instance from this class");
        } 
        
       Person.#persons++;
       
       this.userName=inputName;
       this.gender=gender;

       //creating new person image 
       this.image=document.createElement("img");
       
       console.log(img_src);
       if(img_src === "")
       {
        if(gender == "male"){
             img_src = "images/person.jpg";
        }
        else if(gender == "female")
        {
         img_src = "images/momo.jpg";   
        }
       }
       this.image.src=img_src;
       this.image.style.display="block";
       this.img_style(style);
    }
     
    
    set userName (inputName)
    {
        this.#userName=capitalize(inputName);
        
    }
    get userName()
    {
        return this.#userName;
    }
    
    get persons(){
        return Person.#persons;
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

class Employee extends Person{
    
    constructor(_inputName,_gender,salary,language,_img_src={male:"images/7.jpg",female:"images/3.jpg"}){
        super(_inputName,_gender,_img_src[_gender]);
        this.language=language;
        this.salary=salary;
        // this.#nickName="zero"; 
        // console.log(this._nickName);     // //try to uncomment the following line code
    }
    appendCard(container){
       let element = document.createElement("pre");
       element.innerHTML=`       Gender: ${this.gender}
       Name: ${this.userName}
       Salary: ${this.salary}
       language: ${this.language} `
       element.style.backgroundColor="yellowgreen"
       container.appendChild(element);
    }
    // set _nickName(value){
    //    this._nickName=value;
    // }
    // get _nickName(){
    //     return this._nickName;
    // }
    //can be accessialbe with child classes
}














//={male:"images/person.jpg",female:"images/momo.jpg"}
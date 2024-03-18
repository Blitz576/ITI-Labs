const ball = {
    top: 50,       
    left: 50,      
    radius: 20,    
    color: 'blue'

    ,calcArea(){
       return this.radius*(3.14)*2;
    }
    ,toString(){
        return `${this.left} ${this.top} ${this.radius} ${this.color}`;
    }  
  };
  
  const ball1 = {
    top: 60,       
    left: 50,      
    radius: 40,    
    color: 'yellow'

    ,calcArea(){
       return this.radius*(3.14)*2;
    }
    ,toString(){
        return `${this.left} ${this.top} ${this.radius} ${this.color}`;
    }  
  };
  
  const ball2 = {
    top: 50,       
    left: 60,      
    radius: 30,    
    color: 'red'

    ,calcArea(){
       return this.radius*(3.14)*2;
    }
    ,toString(){
        return `${this.left} ${this.top} ${this.radius} ${this.color}`;
    }  
  };
    

let newBall =[{...ball},{...ball1},{...ball2}];
console.log(newBall);


for(i in newBall){
  console.log(`${i} ${newBall[i].color} ${newBall[i].calcArea()}` );
}

newBall.sort((a,b)=>{
    if(a.top>b.top)
      return 1;
    if(a.top<b.top)
      return -1;
    if(a.top==b.top)
      {return a.left-b.left};
    
})  

console.log(newBall);

const getDataFromUrl= async function(country_name){
  
    let response=await fetch(`https://restcountries.com/v2/name/${country_name}`);
    let result= await response.json(); //result is equal to object 

    return result;   ///returns a promise before the operation is completed?!!
}


const getNeighbourData= async function(parentName){

return getDataFromUrl(parentName).then((object)=>{
    
    return fetch(`https://restcountries.com/v2/alpha/LBY`);
    
    
 }).then((neighbourData)=>neighbourData.json());

}


const switchCase=function(input){

        input=new String(input);
        let result="";
        for(let i=0;i<input.length;i++)
        {
            
            if(input[i]==input[i].toLowerCase())
            {
               result+= input[i].toUpperCase();
            }else
            {
                result+=input[i].toLowerCase();

            }
        }
            return result;

}

const filterGreaterThan=function(array,limit)
{
    let result=[];

    for(let i=0;i<array.length;i++)
    {
        if(array[i]>limit)
        result.push(array[i]);
    }
    return result;
}


const filter=function(array,condition) // var array=[3,2,1,3,],{callback function} condition=function(element){return  element<6 }
{
    let result=[];

    for(let i=0;i<array.length;i++)
    {
        if(condition(array[i],i,array))
        result.push(array[i]);
    }
    return result;
}






const getPhoto= function(arr,index){
    return arr[index];
}


const nextPhoto=function (index,arr,imgId){
    index++;
    console.log(index);
    index = index %  arr.length; //cyclic array

    imgId.src=getPhoto(arr,++index);
    console.log(index);
    return index;
}
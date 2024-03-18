const createList=function (listName,parentId){
    
    newList=document.createElement("ul");
    newList.innerText=listName;

    parentId.appendChild(newList);

    return newList;
}


const addCourse=function(courseName,parentId){
   
    elementList=document.createElement("Li");
    elementList.innerText=courseName;

    parentId.appendChild(elementList);
    
    return elementList;
}



//function to search for a course and return its reference
const searchCourse=function(courseName,parentId)
{
    for(let i=0;i<parentId.childElementCount;i++)
    {
        if(courseName==parentId.children.textContent)
        {
           return parentId.children[i];
        }
    }
    return -1;
}

//so what's difference between NodeList and HTMLCollection

/*

[Node Lists]
-In our Html Page every thing in our Page considered as Node Object 

-that Node may be text comment and element 

-NodeList can be a result from methods like .querySelectorAll("")

-it returns collections of Nodes

-NodeList have many features that can make you contorlling the elements tree (i.e ParentNode sibblings etc)

- NodeList is a static type that not automatically affected by Html changes in your page

*/


/*

[Html collections]
-If you are Not interested in text or comments in your treatment with a Html page you'd better use an Api that Helps you to treat with elements

-Html collection is an array-like object (simallry like arguments)

-generally Html collections and NodeList share a lot of features

-it had some features for iteration like item() and namedItem()

- it have firstChildElement , ChildElementsCount

- you can't directly acess to your parent element through an Html collection you must specify an element (list[1].parent element)

- Html collection is a live list that is automatically changed changing the Html document

*/

//parentElement and parentNode are almost same but there's a key point difference is that the parentElement returns Null if the parent element wasn't an element 








//another function to search for a course and return its reference
//using array built in functions 
//lower performance than the previous function
//gives me more fleixibilty to deal with elements
const anotherSearchWay=function(courseName,parentId)
{
    
    let result=[...parentId.childNodes];  ///array of objects
    result=result.findIndex(element=> element.innerText==courseName);

    if(result==-1)
        return -1;

    return parentId.childNodes[result];
}



const removeCourse=function(courseName,parentId){
    
    let result=searchCourse(courseName,parentId);
    
    if(result!=-1)
       result.remove();
    else
       console.warn("element is not found");
}


//removeCourse("vanillaPhp",listId);


const moveCourse=function(courseName,targetId){
    
    let trackLists= document.querySelectorAll("ul");
    
    for(let i=0;i<trackLists.length;i++){
        let elementId = searchCourse(courseName,trackLists[i]);

        if(elementId!=-1)
            targetId.appendChild(elementId);      
    }
    
}






// //calculate the function performance (supported with Fire Fox)

// const iterations=1000;
// const startTime = performance.now();

// for (let i = 0; i < iterations; i++) {
//       searchCourse("vanilliaPhp",parentIdd1);
// }

// // Stop measuring
// const endTime = performance.now();

// // Calculate and log the elapsed time
// const elapsedTime = endTime - startTime;
// console.log(`Time taken for ${iterations} iterations: ${elapsedTime} milliseconds`);
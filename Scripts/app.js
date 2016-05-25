/* main JavaScript file */



//IIFE  - Immediately Invoked Function Expression
(function(){  
    "use strict";
    var firstPTag = document.getElementById("firstParagraph");
    
    //event listener
    firstPTag.addEventListener("click", firstParagraphClicked);
    
    var firstParagraphIsClicked = false;
    
    //code goes in here
    console.log("App Started...");
    
    var myFirstParagraph = "This is my first paragraph. I am writing for demonstration. " +
    "This is the second second sentence.";
    
    
    //declare named function
    function writeToFirstParagraph(){
        //for debugging only
        console.log ("Executing writeToFirstParagraph");
        
        //create a reference to a p element with an id of "first paragraph""
    
        
     firstPTag.textContent = myFirstParagraph;
   
    
    }
    //event handler for firstParagraph clicked
    function firstParagraphClicked(){
        if (firstParagraphClicked){
            firstPTag.style.color = "black";
            firstParagraphClicked = false;
        }else{
             firstPTag.style.color = "red";
             firstParagraphClicked = true;
        }
       
    }
    
    /*
    //declare a variable that points to anonymous function
    var writeToFirstParagraph = function (){
        
         //for debugging only
        console.log ("Executing writeToFirstParagraph");
        
        //create a reference to a p element with an id of "first paragraph""
    var firstPTag = document.getElementById("firstParagraph");
        
    firstPTag.textContent = "It's alive!";
    }
    */
    
    // Execute function
    writeToFirstParagraph();
    
  // console.log(firstPTag);
   
 
})();
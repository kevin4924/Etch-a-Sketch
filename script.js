let container=document.querySelector(".container");
let sizeButton=document.querySelector('.size');

makeGrid(16);

//Function that creates a grid
function makeGrid(num){

    let squareSize= 650/(num);
    
    for (let i = 0 ; i<num*num ; i++){

    let square= document.createElement("div");
    square.setAttribute("class", "individual");
    
    square.style.height=squareSize+"px";
    square.style.width=squareSize+"px";

    

    //Add the pixels
    square.addEventListener('mouseenter',()=>{
        

        let r = (Math.random()*256);
        let g = (Math.random()*256);
        let b = (Math.random()*256);
        
        square.style.backgroundColor="rgb("+r+","+g+","+b+")";

        

        }, {once: true});


    container.appendChild(square);
}

}


//Creates a ew grid and replaces the old one
sizeButton.addEventListener("click", () => {
    let input = prompt("Please enter the number of squares per side you would like.", "16");
    let num = parseInt(input);

    if(num>100){
        alert("You cannot enter a number greater than 100.");
        return;
    }

    let rm = document.querySelectorAll('.individual');

    console.log(num);
    
    //Removal
    for (const square of rm){
        square.remove();
    }

    makeGrid(num);
    
});
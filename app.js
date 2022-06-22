'use strict';
//holds all product objects
let allProducts = [];
//sets click limit to 25 times
let maxClicks = 25; 
let totalClicks = 0;
//holds all product names
let productNames = ['bag', 'banana', 'bathroom', 'boots'];

//create constructor function that creates an object associated with each product
function Product(name, path){
this.timesShown=0;
this.timesClicked=0;
this.name=name;
this.path=path;
allProducts.push(this); //passes products through function
}

//algorithm is a step by step list of instructions to be executed
//algorithms are functions
function getRandomImage(){
    return Math.floor(Math.random()*productNames.length); //math dot floor gives a whole number and math dot random gives me random value; return makes it do something
    //run this on every product
    //dot length returns random index number of names array
}


//global variables to represent div
//get elements from html file
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let img_one = document.querySelector('#image-container img:first-child');
let img_two = document.querySelector('#image-container img:nth-child(2)');
let resultsButton = document.getElementById('results-button')

//add event listener
resultsButton.addEventListener('click', showResults)

//below:instance variables -> object
let bag = new Product('bag', './assets/bag.jpg')
//or
//let bag0 = new Product(productNames[0], './assets' + productNames[0] + '.jpg')
let banana = new Product('banana', './assets/banana.jpg')

//makes stuff
function constructImages(){
    //make an image for every name in name array
   // for(let i=0;i<productNames.length;i++){
   
    //add src attrubute to images
    img_one.setAttribute('src',bag.path);
    img_two.setAttribute('src',banana.path);
    //something wrong in above set attributs
    img_one.setAttribute('alt',bag.name);
    img_two.setAttribute('alt',banana.name);

    img_one.addEventListener('click', trackClicks(bag));
    img_two.addEventListener('click', trackClicks(banana));

    

    timesShown(bag) //put here bc this is where alt is
}

//make a function to randomly display images
function displayRandomImage(){
    //call the randomizer algorithm
}

//make method to track clicks
function trackClicks(product){
    //whatever is in parameters is a placeholder
    //check the timesClicked property against the max clicks
    if (product.timesClicked < 25){
        product.timesClicked++
        totalClicks++
        console.log(product.timesClicked);
    }
    else{
        alert('too many clicks')
    }
    //IF the object is clicked ->
    //THEN increase the value by one
    } //make this apply to every picture

//how many times it was shown
function timesShown(product){
    //check if the image is here
    if(product.name === img_one.alt){
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }else if
    (product.name === img_two.alt){
    console.log(product.name + ' is on the page')
    product.timesShown++
    console.log(product.timesShown)
    }else{
        console.log('there is no image here')
    }
}

//display results on the results div
function displayResults(productsArray){
for (let i=0;i<productsArray.length;i++){
   let product =productsArray[i]
   //console.log(product)
  let resultMessage = `this product was clicked ${product.timesClicked} times
  this product was shown ${product.timesShown} times
  this product is called ${product.name}
  you can find this product at : ${product.path} !!!`
  
  let p = document.createElement('p');
  p.textContent = resultMessage;
  resultContainer.appendChild(p)
} 
//change above function based on pic on phone
}

function showResults(){
    //check to see if the max clicks are met
    if (totalClicks === maxClicks){
        displayResults(allProducts)
    }
}

//add event listeners

//executable code

constructImages()


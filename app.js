'use strict';

//list of problems so far:
//console shows "there is no image here" on bathroom despite the image being there
//clicks are not being counted
//randomizer function does not work
//for only three things at a time: use js not html (for loop)



//holds all product objects
let allProducts = [];
//sets click limit to 25 times
let maxClicks = 25; 
let totalClicks = [];
//holds all product names
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];
//create constructor function that creates an object associated with each product
function Product(name, path){
this.timesShown=0;
this.timesClicked=0;
this.name=name;
this.path=path;
this.trackClicks = function(event){
    console.log(`you clicked this product ${this.timesClicked} times`) //finish this
}
allProducts.push(this); //passes products through function
}

//algorithm is a step by step list of instructions to be executed
//algorithms are functions
function getRandomImage(){
    //for(let i=0; i <3; i++){
    return Math.floor(Math.random()*productNames.length);
    //} //math dot floor gives a whole number and math dot random gives me random value; return makes it do something
    //run this on every product
    //dot length returns random index number of names array
}


//global variables to represent div
//get elements from html file
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let img_one = document.querySelector('#image-container img:first-child');
let img_two = document.querySelector('#image-container img:nth-child(2)');
let img_three = document.querySelector('#image-container img:nth-child(3)');
let img_four = document.querySelector('#image-container img:nth-child(4)');
let resultsButton = document.getElementById('results-button')

//add event listener
resultsButton.addEventListener('click', showResults)



//below:instance variables -> object
let bag = new Product('bag', './assets/bag.jpg')
//or
//let bag0 = new Product(productNames[0], './assets' + productNames[0] + '.jpg')
let banana = new Product('banana', './assets/banana.jpg');
let bathroom = new Product('bathroom', './assets/bathroom.jpg');
let boots = new Product('boots', './assets/boots.jpg');
//let breakfast = new Product('breakfast', './assets/breakfast.jpg');
// let bubblegum = new Product('bubblegum', './assets/bubbulegum.jpg');
// let chair = new Product('chair', './assets/chair.jpg');
// let cthulhu = new Product('cthulhu', './assets/cthulhu.jpg');
// let dog_duck = new Product('dog-duck', './assets/dog-duck.jpg');
// let dragon = new Product('dragon', './assets/dragon.jpg');
// let pen = new Product('pen', './assets/pen.jpg');
// let pet_sweep = new Product('pet-sweep', './assets/pet-sweep.jpg');
// let scissors = new Product('scissors', './assets/scissors.jpg');
// let shark = new Product('shark', './assets/shark.jpg');
// let sweep = new Product('sweep', './assets/sweep.jpg');
// let tauntaun = new Product('tauntaun', './assets/tauntaun.jpg');
// let unicorn = new Product('unicorn', './assets/unicorn.jpg');
// let water_can = new Product('water-can', './assets/water-can.jpg');
// let wine_glass = new Product('wine-glass', './assets/wine-glass');

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
    } //make this apply to every picturels
    

//makes stuff
function constructImages(){
    //make an image for every name in name array
   // for(let i=0;i<productNames.length;i++){
   //i mightve been on the right track here
    //add src attrubute to images
    img_one.setAttribute('src',bag.path);
    img_two.setAttribute('src',banana.path);
    img_three.setAttribute('src', bathroom.path);
    
    
    img_one.setAttribute('alt',bag.name);
    img_two.setAttribute('alt',banana.name);
    img_three.setAttribute('alt', bathroom.name);

    img_one.addEventListener('click', trackClicks(bag));
    img_two.addEventListener('click', trackClicks(banana));
    img_three.addEventListener('click', trackClicks(bathroom));


    //put here bc this is where alt is
    timesShown(bathroom)
    timesShown(bag)
    timesShown(banana) 

}

//make a function to randomly display images
function displayRandomImage(){
    getRandomImage() //call the randomizer algorithm
}



//how many times it was shown
function timesShown(product){
    //check if the image is here
    if(product.name === img_one.alt){
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }else if
    (product.name === img_two.alt || product.name === img_three.alt || product.name === img_four.alt ){
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
resultsButton.addEventListener('click', function () {
    alert('Here are your results');
    //pull canvas element from html
    let canvas = document.getElementById('canvas');
    //make a chart
    const ctx = canvas.getContext('2d'); //draws in 2d

    //create a bar chart that shows the amount of clicks and times shown
    const myChart = new CharacterData(ctx, {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [{
                label: '# of Clicks',
                data: allClicks,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
              label: '# of View',
              data: timesSeen,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    } 
            });
        }
)
    

//executable code
showResults();
constructImages();




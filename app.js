'use strict';

//list of problems so far:
//lines 120-129
//line 79


let imgArray = [];
//holds all product objects
let allProducts = [];
//sets click limit to 25 times
let maxClicks = 25; 
//starts total clicks at 0 to count up everytime an image is clicked
let totalClicks = 0;
//an array that elements are pushed into at a later time 
let allClicks = [];
//holds all product names
let productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

//create constructor function that creates an object associated with each product
function Product(name, path){
this.timesShown=0;
this.timesClicked=0;
//allows me to use name and path at a later time:
this.name=name;
this.path=path;

allProducts.push(this); //passes products through function
}

//go through every product and attach image stuff to it
function makeNewProduct(){
    //for loop goes through every product
    for(let i=0; i<productNames.length; i++){
        //refer to the only png image (sweep)
        if(productNames[i] === 'sweep'){
            //make sweep an image
            new Product(`${productNames[i]}`, `./assets/${productNames[i]}.png`);
        }else{
            //make every other item an image
            new Product(`${productNames[i]}`, `./assets/${productNames[i]}.jpg`); 
        }
    }
}
makeNewProduct();



//global variables to represent div
//get elements from html file
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
//the three images to be displayed on the page:
let img_one = document.getElementById('img-one');
let img_two = document.getElementById('img-two');
let img_three = document.getElementById('img-three');

//get the rest of the image info from html
//let src = document.getElementById('src');

//the result button from html
let resultsButton = document.getElementById('results-button');

imgArray.push(img_one);
imgArray.push(img_two);
imgArray.push(img_three);

console.log(imgArray);

//generate a random image:
function getRandomImage(image){
    let mathAlgorithm = Math.floor(Math.random() * allProducts.length);
    //} //math dot floor gives a whole number and math dot random gives me random value; return makes it do something
    //run this on every product
    //dot length returns random index number of names array
    //to return object
    let selectedImage = allProducts[mathAlgorithm];
    //add object requirements
    image.src = selectedImage.path; //this is where my problem is once again
    image.alt = selectedImage.name;
    //increment times shown
    selectedImage.timesShown++;
}

//put the images into an array to be used when randomizing three images:



getRandomImage(productNames);
//connects results to the results button
resultsButton.addEventListener('click', showResults)

//make a function to randomly display 3 images
function showImage(){
//use image array made earlier
    for ( let i=0; i < imgArray.length; i++) {
        getRandomImage(imgArray[i]); //use i as a placeholder for specific product
    }
}
showImage();
//make method to track clicks
function trackClicks(product){
    //whatever is in parameters is a placeholder
    //check the timesClicked property against the max clicks
    if (totalClicks < maxClicks){
        product.timesClicked++
        totalClicks++
        console.log(product.timesClicked);
    }
    else{
        alert('too many clicks')
        allClicks.push(productNames.timesClicked)//adds images to allClicks array
        console.log(allClicks) //displays the array allClicks in log when there have been 25 clicks
    }
    //IF the object is clicked ->
    //THEN increase the value by one
    } //make this apply to every picturels
  
//how many times it was shown
function timesShown(product){
    //check if the image is here
    if(product.name === img_one.alt || product.name === img_two.alt || product.name === img_three.alt){
        console.log(product.name + ' is on the page')
        product.timesShown++
        console.log(product.timesShown)
    }else{
        console.log('there is no image here')
    }
}
timesShown(Product.name);

img_one.addEventListener('click', trackClicks);
img_two.addEventListener('click', trackClicks);
img_three.addEventListener('click', trackClicks);

img_one.addEventListener('click', Product.timesClicked)
img_two.addEventListener('click', Product.timesClicked)
img_three.addEventListener('click', Product.timesClicked)
//display results on the results div
function displayResults(productsArray){

for (let i=0;i<productsArray.length;i++){
   let product = productsArray[i]
   //console.log(product)
  let resultMessage = `this product was clicked ${product.timesClicked} times
  this product was shown ${product.timesShown} times
  this product is called ${product.name}
  you can find this product at : ${product.path} !!!`
  let p = document.createElement('p');
  p.textContent = resultMessage;
  resultContainer.appendChild(p)

} 
}


//add event listeners
resultsButton.addEventListener('click', function () {
    alert('Here are your results');
    //pull canvas element from html
    let canvas = document.getElementById('myChart')
    
    //make a chart
    const ctx = canvas.getContext('2d'); //draws in 2d

    //create a bar chart that shows the amount of clicks and times shown
    const myChart = new Chart(ctx, {
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
              data: timesShown,
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
    
//storage
for(let i=0; i<allProducts.length; i++){
    //puts results aka product and times clicked into storage
    localStorage.setItem(`Product: ${allProducts[i].name}`, `Times Clicked: ${allProducts[i].timesClicked}`);
}

function showResults(){
    //check to see if the max clicks are met
    if (totalClicks === maxClicks){
        displayResults(allProducts)
    }
}

//executable code
showResults();
getRandomImage(imgArray);




//task 1: creating an array that contains the information of 5 different products
const inventory= [
    {name: 'Pixel 9 Pro',price: 1099.99,quantity: 712,lowStockLevel: 100},
    {name: 'P9P Clear Case',price: 29.99,quantity: 467,lowStockLevel: 65},
    {name: '30W Charger', price: 44.99, quantity: 52,lowStockLevel: 60 },
    {name: 'Screen protector', price: 34.99, quantity:15, lowStockLevel: 58},
    {name: 'Pixel buds', price: 199.99, quantity: 175, lowStockLevel: 20},
];
//If we want to display all the information in the array we can use: console.log ('The inventory information is:', inventory)

//task 2: determining whether a product is in stock or has low stock
function displayProductDetails(product){//defining the function with the product parameter
    const stockstatus= product.quantity <= product.lowStockLevel? "Low stock": "In Stock";
    //creating a variable to store the result of whether product.quantity is less than or equal to low stock level. Then, I have used a ternary operator to check if something is in stock or low stock
    
    return `${product.name}: Price- ${product.price}, Quantity- ${product.quantity}, Status- ${stockstatus}`;
    // creating a string to show the product name and its stock status
}


console.log (displayProductDetails(inventory[0]));
console.log (displayProductDetails(inventory[1]));
console.log (displayProductDetails(inventory[2]));
console.log (displayProductDetails(inventory[3]));
console.log (displayProductDetails(inventory[4])); // displaying stock levels of all products

//task 3: creating a function to update product stock after sales
function updateStock(product, unitsSold){//defining updateStock function
product.quantity -= unitsSold; //subtracting units sold from the number of products in stock
if (product.quantity<=0){
    console.log(`${product.name} is out of stock.`);
} else if (product.quantity <= product.lowStockLevel){
console.log (`${product.name} is low in stock.`);
}else {
    console.log (`${product.name} is in stock.`);// using if else to show what to display if the stock reaches or goes under certain values
}
}
updateStock(inventory[0], 50);
updateStock(inventory[1], 200);
updateStock(inventory[2], 52);
updateStock(inventory[3], 15);
updateStock(inventory[4], 155);//updating the stock with units sold, which will be subtracted from product quantity.

//task 4: creating a function to check low stock products
function checkLowStock(inventory){// defining the function with inventory as the parameter

 console.log ('The products with a low stock level are:');
 inventory.forEach(product=> { //usingforEach to iterate over the array
    if (product.quantity<= product.lowStockLevel){
        console.log( `${product.name}`);  //if the quantity of the product reaches the low stock level, the name of the product will be displayed
    }
 });
}
checkLowStock(inventory);//calling the function

// creating a function to calculate total inventory value
function calculateInventoryValue(inventory){
    return inventory.reduce((total, product)=>{ //using reduce to get the total value of the products
        return total+ (product.price* product.quantity);// adding the value of a product to the total
        
    },0)//starting the total with 0
}
const totalValue= calculateInventoryValue(inventory);//calculating the total value
console.log (`The total inventory value is: ${totalValue}`);//logging the results

//creating a function to process a sale
function processSale (productName, unitsSold){//defining the function with productName and unitsSold as parameters
    const product= inventory.find (item=> item.name=== productName);//finding the product by name from the inventory
 
//checking if the the product is found
 if (product){
     updateStock(product, unitsSold);// if it is found, the stock value is updated
 } else {
     console.log (`Error: ${productName} is not in the inventory. `)// if not found, an error message is displayed
 }
 }
 processSale('Screen protector',20)//logging the results after proccessing sales for different products
 processSale('Pixel buds',1)
 processSale('50W Charger',20)//there is no 50W charger in the inventory, so an error message will be displayed.

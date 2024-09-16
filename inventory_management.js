//task 1: creating an array that contains the information of 5 different products
const inventory= [
    {name: 'Pixel 9 Pro',price: 1099.99,quantity: 712,lowStockLevel: 100},
    {name: 'P9P Clear Case',price: 29.99,quantity: 467,lowStockLevel: 65},
    {name: '30W Charger', price: 44.99, quantity: 52,lowStockLevel: 60 },
    {name: 'Screen protector', price: 34.99, quantity:15, lowStockLevel: 58},
    {name: 'Pixel buds', price: 199.99, quantity: 175, lowStockLevel: 20},
];
//If we want to display the information we can use: console.log ('The inventory information is:', inventory)

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
        console.log( `${product.name}`);  //if the quantity of the product reaches the low stock level, it the name of the product will be displayed
    }
 });
}
checkLowStock(inventory);//calling the function

// creating a function to calculate total inventory value
function calculateInventoryValue(inventory){
    return inventory.reduce((total, product)=>{
        return total+ (product.price* product.quantity);
        
    },0)
}
const totalValue= calculateInventoryValue(inventory);
console.log (`The total inventory value is: ${totalValue}`);



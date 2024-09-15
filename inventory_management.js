//task 1: creating an array that contains the information of 5 different products
const inventory= [
    {name: 'Pixel 9 Pro',price: 1099.99,quantity: 712,lowStocklevel: 100},
    {name: 'P9P Clear Clase',price: 29.99,quantity: 467,lowStocklevel: 65},
    {name: '30W Charger', price: 44.99, quantity: 52,lowStocklevel: 60 },
    {name: 'Screen protector', price: 34.99, quantity:15, lowStocklevel: 58},
    {name: 'Pixel buds', price: 199.99, quantity: 175, lowStocklevel: 20},
];
//console.log ('The inventory information is:', inventory)
// determining whether a product is in stock or has low stock
function displayProductDetails(product){//defining the function with the product parameter
    const stockstatus= product.quantity <= product.lowStocklevel? "Low stock": "In Stock";
    //creating a variable to store the result of whether product.quantity is less than or equal to low stock level. Then, I have used a ternary operator to check if something is in stock or low stock
    return `${product.name} is ${stockstatus}`;
    // creating a string to show the product name and its stock status
}
console.log (displayProductDetails(inventory[0]));
console.log (displayProductDetails(inventory[1]));
console.log (displayProductDetails(inventory[2]));
console.log (displayProductDetails(inventory[3]));
console.log (displayProductDetails(inventory[4]));

// displaying stock levels of all products

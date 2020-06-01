let faker = require("faker");

for (let i = 0; i < 10; i++) {
  product = faker.commerce.productName();
  price = faker.commerce.price();

  console.log(product, " - $", price);
}

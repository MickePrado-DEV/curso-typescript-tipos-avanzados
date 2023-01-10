import { faker } from '@faker-js/faker';

import {
  addProduct,
  products,
  updateProduct,
  findProducts,
} from './products/product.service';
for (let index = 0; index < 50; index++) {
  addProduct({
    // id: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    title: faker.commerce.productName(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
  });
}

//console.log(products);
const product = products[0];
console.log('product => ', product);
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
});

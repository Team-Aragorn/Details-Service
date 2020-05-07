const faker = require('faker');

const data = [];


const fillData = () => {
  for (let i = 0; i < 100; i += 1) {
    const obj = {
      id: i,
      name: faker.commerce.productName(),
      details: faker.lorem.paragraphs(5),
      images: [],
    };

    const max = Math.floor(Math.random() * 4) + 5;
    for (let j = 0; j < max; j += 1) {
      const picIndex = Math.floor(Math.random() * 30) + 1;
      const picUrl = `https://aragorn-images.s3-us-west-2.amazonaws.com/${picIndex}.jpg`;
      obj.images.push(picUrl);
    }
    data.push(obj);
  }
};


fillData();


module.exports = data;

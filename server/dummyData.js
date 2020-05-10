const faker = require('faker');

const data = [];

let imageCounter = 1;

const getRandomImages = () => {
  const results = [];
  const max = Math.floor(Math.random() * 8) + 3;
  for (let j = 1; j <= max; j += 1) {
    const picUrl = `https://aragorn-images.s3-us-west-2.amazonaws.com/${imageCounter}.jpg`;
    imageCounter += 1;
    if (imageCounter > 30) {
      imageCounter = 1;
    }
    results.push(picUrl);
  }
  return results;
};

const fillData = () => {
  for (let i = 1; i <= 100; i += 1) {
    const obj = {
      id: i,
      name: faker.commerce.productName(),
      details: faker.lorem.paragraphs(5),
      images: getRandomImages(),
    };
    data.push(obj);
  }
};

fillData();


module.exports = data;

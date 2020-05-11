const faker = require('faker');
const db = require('./database/index.js');

db.deleteAll();

let imageCounter = 1;

const getRandomImages = () => {
  const results = [];
  const limit = faker.random.number({ min: 4, max: 7 });

  for (let j = 0; j < limit; j += 1) {
    const imgURL = `https://aragorn-images.s3-us-west-2.amazonaws.com/${imageCounter}.jpg`;
    results.push(imgURL);
    imageCounter += 1;
    if (imageCounter > 30) {
      imageCounter = 1;
    }
  }
  return results;
};

const seed = () => {
  for (let i = 1; i <= 100; i += 1) {
    const newGame = new db.Game({
      id: i,
      name: faker.commerce.productName(),
      details: faker.lorem.paragraphs(3),
      images: getRandomImages(),
    });
    db.save(newGame);
  }
  console.log('DONE SEEDING!');
};

seed();

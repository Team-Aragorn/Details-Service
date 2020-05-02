const db = require('./database/index.js');
const data = require('./dummyData.js');


db.deleteAll();

const seedDB = () => {
  for (let i = 0; i < data.length; i += 1) {
    db.save(data[i]);
  }
};

seedDB();

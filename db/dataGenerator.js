const faker = require('faker');

const data = [];

const fillData = () => {
  for (var i = 1; i <= 100; i++) {
    const gameObj = {
      id: i,
      gameId: i,
      title: faker.fake('{{company.catchPhraseAdjective}} {{company.bsNoun}}'),
      reviewScore: Math.ceil(Math.random() * 5),
      ageRating: Math.ceil(Math.random() * 6), //E, E10+, T, M, A, RP
      newPrice: 60,
      usedPrice: Math.ceil(Math.random() * 55),
      digitalPrice: Math.floor(Math.random() * (60 - 45 + 1) + 45),
      storeLocation: faker.fake('{{address.streetAddress}} {{address.streetName}} {{address.city}}, {{address.state}} {{address.zipCode}} '),
      inStock: faker.random.boolean(),
    };
    data.push(gameObj);
  }
};

fillData();

module.exports = data;

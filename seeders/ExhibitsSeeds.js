'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Exhibit', [{

      exhibit_name: "Impressionism: Reflections of Monet",
      date: "January 20, 2021",
      time: "8:30- 10:00 PM",
      exhibit_descript: "Come see the works of Monet. Oscar-Claude Monet was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting",
      exhibit_image: "",
      exhibit_address: "6370 Timber Glen, Houston, Texas, 77084",
      createdAt: new Date(),
      updatedAt: new Date(),
  }, {
    exhibit_name: "For Realism, isn't it Surreal?",
    date: "January 27, 2021",
    time: "8:30- 10:00 PM",
    exhibit_descript: "",
    exhibit_image: "",
    exhibit_address: "6370 Timber Glen, Houston, Texas, 77084",
    createdAt: new Date(),
    updatedAt: new Date(),
}, {
  exhibit_name: "Lifes a Bunch of Palettes",
  date: "February 3, 2021",
  time: "8:30- 10:00 PM",
  exhibit_descript: "",
  exhibit_image: "",
  exhibit_address: "6370 Timber Glen, Houston, Texas, 77084",
  createdAt: new Date(),
  updatedAt: new Date(),
}]);
},

  down: async (queryInterface, Sequelize) => {

  }
};

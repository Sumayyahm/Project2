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
            exhibit_descript: "realism is a concern for fact or reality and rejection of the impractical and visionary while surrealism is an artistic movement and an aesthetic philosophy that aims for the liberation of the mind by emphasizing the critical and imaginative powers of the subconscious.",
            exhibit_image: "",
            exhibit_address: "6370 Timber Glen, Houston, Texas, 77084",
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            exhibit_name: "Lifes a Bunch of Palettes",
            date: "February 3, 2021",
            time: "8:30- 10:00 PM",
            exhibit_descript: "Color theory is a massive field of study because colors influences the way we think and perceive things. Colors interact with each other, so one color in your palette can completely change the way we perceive others.",
            exhibit_image: "",
            exhibit_address: "6370 Timber Glen, Houston, Texas, 77084",
            createdAt: new Date(),
            updatedAt: new Date(),
        }]);
    },

    down: async (queryInterface, Sequelize) => {

    }
};

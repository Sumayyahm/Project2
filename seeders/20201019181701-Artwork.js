'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Artist", [{
      artwork_name: "Women in Garden",
      artist_name: "Claude Monet",
      artwork_size: "205 x 255 cm",
      artwork_descript: "Women in the Garden (French: Femmes au jardin) is an oil painting begun in 1866 by French artist Claude Monet when he was 26. It is a large work painted en plein air; the size of the canvas necessitated Monet painting its upper half with the canvas lowered into a trench he had dug, so that he could maintain a single point of view for the entire work. The setting is the garden of a property he was renting. His companion Camille posed for the figures. Monet finished the work indoors, and used magazine illustrations to render fashionable clothing.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"green",
      artwork_price: "200,000.00",
      artwork_image: "",
      artwork_pubID: "",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Impression, Sunrise",
      artist_name: "Claude Monet",
      artwork_size: "63 x 48 cm",
      artwork_descript: "Impression, Sunrise (French: Impression, soleil levant) is a painting by Claude Monet. Shown at what would later be known as the 'Exhibition of the Impressionists' in April 1874, the painting is attributed to giving rise to the name of the Impressionist movement. Impression, Sunrise depicts the port of Le Havre, Monet's hometown, and is his most famous painting of the harbor.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"blue",
      artwork_price: "200,000.00",
      artwork_image: "",
      artwork_pubID: "",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "House of Parliament",
      artist_name: "Claude Monet",
      artwork_size: "81 x 92 cm",
      artwork_descript: "Claude Monet painted a series of oil paintings of the Palace of Westminster, home of the British Parliament, in the fall of 1899 and the early months of 1900 and 1901 during stays in London.[1] All of the series' paintings share the same viewpoint from Monet's window or a terrace at St Thomas' Hospital overlooking the Thames and the approximate canvas size of 81 cm × 92 cm (32 in × 36 3/8 in).[2][3] They are, however, painted during different times of the day and weather conditions.",
      artwork_medium: "oil, canvas",
      artwork_colortone:"orange",
      artwork_price: "200,000.00",
      artwork_image: "",
      artwork_pubID: "",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Sailing Boats at Honfleur",
      artist_name: "Claude Monet",
      artwork_size: "81 x 92 cm",
      artwork_descript: "",
      artwork_medium: "oil, canvas",
      artwork_colortone:"white",
      artwork_price: "200,000.00",
      artwork_image: "",
      artwork_pubID: "",
      createdAt:new Date (),
      updatedAt:new Date ()
    },{
      artwork_name: "Fishing Boats, Calm Sea",
      artist_name: "Claude Monet",
      artwork_size: "81 x 92 cm",
      artwork_descript: "",
      artwork_medium: "oil, canvas",
      artwork_colortone:"blue",
      artwork_price: "200,000.00",
      artwork_image: "",
      artwork_pubID: "",
      createdAt:new Date (),
      updatedAt:new Date ()
    }
  ]);
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

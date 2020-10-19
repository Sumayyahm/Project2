'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Artist", [{
      artist_name: "Claude Monet",
      artist_phone: 8327731981,
      artist_email: "claude.e@gmail.com",
      artist_bio: "Oscar-Claude Monet was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting",
      artist_portrait:"", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Vincent Van Gogh",
      artist_phone: 8327731982,
      artist_email: "vincent.v@gmail.com",
      artist_bio: "Vincent Willem van Gogh was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Édouard Manet",
      artist_phone: 8327731983,
      artist_email: "edouard.e@gmail.com",
      artist_bio: "Édouard Manet was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Edgar Degas",
      artist_phone: 8327731984,
      artist_email: "edgar.e@gmail.com",
      artist_bio: "Edgar Degas was a French artist famous for his pastel drawings and oil paintings of ballerinas. Degas also produced bronze sculptures, prints, and drawings. Degas is especially identified with the subject of dance; more than half of his works depict dancers.",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Paul Cézanne",
      artist_phone: 8327731985,
      artist_email: "paul.e@gmail.com",
      artist_bio: "Paul Cézanne was a French artist and Post-Impressionist painter whose work laid the foundations of the transition from the 19th-century conception of artistic endeavor to a new and radically different world of art in the 20th century.",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
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

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Artist", [{
      artist_name: "Claude Monet",
      artist_phone: "8327731981",
      artist_email: "claude.e@gmail.com",
      artist_bio: "Oscar-Claude Monet was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting",
      artist_portrait:"", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Vincent Van Gogh",
      artist_phone: "8327731982",
      artist_email: "vincent.v@gmail.com",
      artist_bio: "Vincent Willem van Gogh was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Édouard Manet",
      artist_phone: "8327731983",
      artist_email: "edouard.e@gmail.com",
      artist_bio: "Édouard Manet was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Edgar Degas",
      artist_phone: "8327731984",
      artist_email: "edgar.e@gmail.com",
      artist_bio: "Edgar Degas was a French artist famous for his pastel drawings and oil paintings of ballerinas. Degas also produced bronze sculptures, prints, and drawings. Degas is especially identified with the subject of dance; more than half of his works depict dancers.",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Paul Cézanne",
      artist_phone: "8327731985",
      artist_email: "paul.e@gmail.com",
      artist_bio: "Paul Cézanne was a French artist and Post-Impressionist painter whose work laid the foundations of the transition from the 19th-century conception of artistic endeavor to a new and radically different world of art in the 20th century.",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Salvador Dali",
      artist_phone: "8327731986",
      artist_email: "salv.e@gmail.com",
      artist_bio: "Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marquess of Dalí de Púbol was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship and the striking and bizarre images in his work. Born in Figueres, Catalonia, Dalí received his formal education in fine arts at Madrid.",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Pablo Picasso",
      artist_phone: "8327731987",
      artist_email: "pab.e@gmail.com",
      artist_bio: "Pablo Picasso (25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a dramatic portrayal of the bombing of Guernica by German and Italian air forces during the Spanish Civil War.",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Diego Velazquez",
      artist_phone: "8327731988",
      artist_email: "diego.e@gmail.com",
      artist_bio: "Diego Rodríguez de Silva y Velázquez[a] (baptized June 6, 1599 – August 6, 1660) was a Spanish painter, the leading artist in the court of King Philip IV and of the Spanish Golden Age. He was an individualistic artist of the contemporary Baroque period. He began to paint in a precise tenebrist style, later developing a freer manner characterized by bold brushwork. In addition to numerous renditions of scenes of historical and cultural significance, he painted scores of portraits of the Spanish royal family and commoners, culminating in his masterpiece Las Meninas (1656).",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Andy Warhol",
      artist_phone: "8327731989",
      artist_email: "andy.e@gmail.com",
      artist_bio: "Andy Warhol (/ˈwɔːrhɒl/;[1] born Andrew Warhola; August 6, 1928 – February 22, 1987) was an American artist, film director, and producer who was a leading figure in the visual art movement known as pop art. His works explore the relationship between artistic expression, advertising, and celebrity culture that flourished by the 1960s, and span a variety of media, including painting, silkscreening, photography, film, and sculpture.",
      artist_portrait: "", 
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      artist_name: "Edvard Munch",
      artist_phone: "8327731990",
      artist_email: "edvard.e@gmail.com",
      artist_bio: "Edvard Munch (/mʊŋk/ MUUNK,[1] Norwegian: [ˈɛ̀dvɑʈ ˈmʊŋk] (About this soundlisten); 12 December 1863 – 23 January 1944) was a Norwegian painter. His best known work, The Scream, has become one of the most iconic images of world art. His childhood was overshadowed by illness, bereavement and the dread of inheriting a mental condition that ran in the family. Studying at the Royal School of Art and Design in Kristiania (today's Oslo), Munch began to live a bohemian life under the influence of nihilist Hans Jæger, who urged him to paint his own emotional and psychological state ('soul painting'). From this emerged his distinctive style.",
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

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Style", [{
      style_name: 'Surrealism',
      style_description: "Surrealism was a cultural movement which developed in Europe in the aftermath of World War I and was largely influenced by Dada. The movement is best known for its visual artworks and writings and the juxtaposition of uncommon imagery. Artists painted unnerving, illogical scenes, sometimes with photographic precision, creating strange creatures from everyday objects, and developing painting techniques that allowed the unconscious to express itself. Its aim was, according to leader André Breton, to 'resolve the previously contradictory conditions of dream and reality into an absolute reality, a super-reality', or surreality",
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      style_name: 'Cubism',
      style_description: "Cubism is an early-20th-century avant-garde art movement that revolutionized European painting and sculpture, and inspired related movements in music, literature and architecture. Cubism has been considered the most influential art movement of the 20th century. The term is broadly used in association with a wide variety of art produced in Paris (Montmartre and Montparnasse) or near Paris (Puteaux) during the 1910s and throughout the 1920s. The movement was pioneered by Pablo Picasso and Georges Braque, joined by Jean Metzinger, Albert Gleizes, Robert Delaunay, Henri Le Fauconnier, and Fernand Léger. One primary influence that led to Cubism was the representation of three-dimensional form in the late works of Paul Cézanne. A retrospective of Cézanne's paintings had been held at the Salon d'Automne of 1904, current works were displayed at the 1905 and 1906 Salon d'Automne, followed by two commemorative retrospectives after his death in 1907.[5] In Cubist artwork, objects are analyzed, broken up and reassembled in an abstracted form—instead of depicting objects from a single viewpoint, the artist depicts the subject from a multitude of viewpoints to represent the subject in a greater context.",
      createdAt: new Date(),
      updatedAt: new Date(),
        }, {
      style_name: 'Impressionism',
      style_description: "Baroque is a style of architecture, music, dance, painting, sculpture and other arts that flourished in Europe from the early 17th century until the 1740s. In the territories of the Spanish and Portuguese empires including the Iberian Peninsula it continued, together with new styles, until the first decade of the 1800s. It followed Renaissance art and Mannerism and preceded the Rococo (in the past often referred to as 'late Baroque') and Neoclassical styles. It was encouraged by the Catholic Church as a means to counter the simplicity and austerity of Protestant architecture, art and music, though Lutheran Baroque art developed in parts of Europe as well.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      style_name: 'Boroque',
      style_description: "Impressionism is a 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities (often accentuating the effects of the passage of time), ordinary subject matter, inclusion of movement as a crucial element of human perception and experience, and unusual visual angles. Impressionism originated with a group of Paris-based artists whose independent exhibitions brought them to prominence during the 1870s and 1880s.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      style_name: 'Conceptual Art',
      style_description: "Conceptual art, also referred to as conceptualism, is art in which the concept(s) or idea(s) involved in the work take precedence over traditional aesthetic, technical, and material concerns. Some works of conceptual art, sometimes called installations, may be constructed by anyone simply by following a set of written instructions. This method was fundamental to American artist Sol LeWitt's definition of conceptual art, one of the first to appear in print: In conceptual art the idea or concept is the most important aspect of the work. When an artist uses a conceptual form of art, it means that all of the planning and decisions are made beforehand and the execution is a perfunctory affair. The idea becomes a machine that makes the art.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      style_name: 'Expressionism',
      style_description: "Expressionism is a modernist movement, initially in poetry and painting, originating in Germany at the beginning of the 20th century. Its typical trait is to present the world solely from a subjective perspective, distorting it radically for emotional effect in order to evoke moods or ideas. Expressionist artists have sought to express the meaning of emotional experience rather than physical reality. Expressionism developed as an avant-garde style before the First World War. It remained popular during the Weimar Republic, particularly in Berlin. The style extended to a wide range of the arts, including expressionist architecture, painting, literature, theatre, dance, film and music. The term is sometimes suggestive of angst. In a historical sense, much older painters such as Matthias Grünewald and El Greco are sometimes termed expressionist, though the term is applied mainly to 20th-century works. The Expressionist emphasis on individual and subjective perspective has been characterized as a reaction to positivism and other artistic styles such as Naturalism and Impressionism.",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      style_name: 'Rococo',
      style_description: "Rococo less commonly Roccoco or Late Baroque, is an exceptionally ornamental and theatrical style of architecture, art and decoration which combines asymmetry, scrolling curves, gilding, white and pastel colors, sculpted molding, and trompe l'oeil frescoes to create surprise and the illusion of motion and drama. It is often described as the final expression of the Baroque movement. The Rococo style began in France in the 1730s as a reaction against the more formal and geometric Style Louis XIV. It was known as the style rocaille, or rocaille style. It soon spread to other parts of Europe, particularly northern Italy, Austria, southern Germany, Central Europe and Russia. It also came to influence the other arts, particularly sculpture, furniture, silverware and glassware, painting, music, and theatre. Although originally a secular style primarily used for interiors of private residences the Rococo had a spiritual aspect to it which led to its widespread use in church interiors, particularly in Central Europe, Portugal, and South America.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
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

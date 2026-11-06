// Mock movie data. Each id is also used in the URL, e.g. "/movies/inception".
// Posters are loaded from the public/posters folder.
export const movies = [
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Drama'],
    durationMinutes: 152,
    score: 8.5,
    overview:
      'Batman faces his greatest test when the Joker pushes Gotham City into chaos and forces its heroes to choose what they are willing to sacrifice.',
    poster: '/posters/the-dark-knight.jpg',
  },
  {
    id: 'mad-max-fury-road',
    title: 'Mad Max: Fury Road',
    year: 2015,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    durationMinutes: 120,
    score: 7.6,
    overview:
      'In a desert wasteland, Max joins the rebel driver Furiosa on a high-speed escape from a tyrant and his army of war machines.',
    poster: '/posters/mad-max-fury-road.jpg',
  },
  {
    id: 'john-wick',
    title: 'John Wick',
    year: 2014,
    genres: ['Action', 'Thriller'],
    durationMinutes: 101,
    score: 7.4,
    overview:
      'A retired hitman returns to the criminal underworld to take revenge on the men who took everything he had left.',
    poster: '/posters/john-wick.jpg',
  },
  {
    id: 'top-gun-maverick',
    title: 'Top Gun: Maverick',
    year: 2022,
    genres: ['Action', 'Drama'],
    durationMinutes: 131,
    score: 8.2,
    overview:
      'After decades as a Navy pilot, Maverick returns to train a new generation of graduates for a nearly impossible mission.',
    poster: '/posters/top-gun-maverick.jpg',
  },
  {
    id: 'inception',
    title: 'Inception',
    year: 2010,
    genres: ['Sci-Fi', 'Action'],
    durationMinutes: 148,
    score: 8.4,
    overview:
      'A thief who steals secrets from inside dreams is offered one last job: planting an idea in the mind of a powerful heir.',
    poster: '/posters/inception.jpg',
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    year: 2014,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    durationMinutes: 169,
    score: 8.5,
    overview:
      'With Earth running out of food, a former pilot leaves his family to travel through a wormhole in search of a new home for humanity.',
    poster: '/posters/interstellar.jpg',
  },
  {
    id: 'dune',
    title: 'Dune',
    year: 2021,
    genres: ['Sci-Fi', 'Adventure'],
    durationMinutes: 155,
    score: 7.8,
    overview:
      'Paul Atreides travels to the dangerous desert planet Arrakis, where his family becomes caught in a war over the most valuable resource in the universe.',
    poster: '/posters/dune.jpg',
  },
  {
    id: 'jurassic-park',
    title: 'Jurassic Park',
    year: 1993,
    genres: ['Adventure', 'Sci-Fi'],
    durationMinutes: 127,
    score: 8.0,
    overview:
      'A visit to an island theme park filled with cloned dinosaurs turns into a fight for survival when the security systems fail.',
    poster: '/posters/jurassic-park.jpg',
  },
  {
    id: 'raiders-of-the-lost-ark',
    title: 'Raiders of the Lost Ark',
    year: 1981,
    genres: ['Adventure', 'Action'],
    durationMinutes: 115,
    score: 7.9,
    overview:
      'Archaeologist Indiana Jones races around the world to find the legendary Ark of the Covenant before the Nazis can claim it.',
    poster: '/posters/raiders-of-the-lost-ark.jpg',
  },
  {
    id: 'superbad',
    title: 'Superbad',
    year: 2007,
    genres: ['Comedy'],
    durationMinutes: 113,
    score: 7.2,
    overview:
      'Two inseparable high school friends plan one wild night before graduation, and almost nothing goes the way they hoped.',
    poster: '/posters/superbad.jpg',
  },
  {
    id: 'the-grand-budapest-hotel',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genres: ['Comedy', 'Drama'],
    durationMinutes: 100,
    score: 8.0,
    overview:
      'A legendary hotel concierge and his loyal lobby boy are pulled into a murder mystery over a priceless painting.',
    poster: '/posters/the-grand-budapest-hotel.jpg',
  },
  {
    id: 'get-out',
    title: 'Get Out',
    year: 2017,
    genres: ['Horror', 'Thriller'],
    durationMinutes: 104,
    score: 7.6,
    overview:
      "A young man visits his girlfriend's family for the weekend and slowly uncovers a disturbing secret behind their friendly welcome.",
    poster: '/posters/get-out.jpg',
  },
  {
    id: 'a-quiet-place',
    title: 'A Quiet Place',
    year: 2018,
    genres: ['Horror', 'Thriller'],
    durationMinutes: 91,
    score: 7.4,
    overview:
      'A family must live in complete silence to survive creatures that hunt by sound.',
    poster: '/posters/a-quiet-place.jpg',
  },
  {
    id: 'the-conjuring',
    title: 'The Conjuring',
    year: 2013,
    genres: ['Horror', 'Thriller'],
    durationMinutes: 112,
    score: 7.5,
    overview:
      'Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence in their isolated farmhouse.',
    poster: '/posters/the-conjuring.jpg',
  },
  {
    id: 'the-shawshank-redemption',
    title: 'The Shawshank Redemption',
    year: 1994,
    genres: ['Drama'],
    durationMinutes: 142,
    score: 8.7,
    overview:
      'A banker sentenced to life in prison for a crime he says he did not commit forms a lasting friendship and holds on to hope.',
    poster: '/posters/the-shawshank-redemption.jpg',
  },
  {
    id: 'whiplash',
    title: 'Whiplash',
    year: 2014,
    genres: ['Drama'],
    durationMinutes: 107,
    score: 8.4,
    overview:
      'An ambitious young jazz drummer is pushed to his limits by a ruthless instructor at an elite music school.',
    poster: '/posters/whiplash.jpg',
  },
  {
    id: 'parasite',
    title: 'Parasite',
    year: 2019,
    genres: ['Drama', 'Thriller'],
    durationMinutes: 133,
    score: 8.5,
    overview:
      'A struggling family gradually works its way into the home of a wealthy household, until their scheme takes an unexpected turn.',
    poster: '/posters/parasite.jpg',
  },
  {
    id: 'spirited-away',
    title: 'Spirited Away',
    year: 2001,
    genres: ['Animation', 'Adventure'],
    durationMinutes: 125,
    score: 8.5,
    overview:
      'A young girl becomes trapped in a world of spirits and must work in a magical bathhouse to free herself and her parents.',
    poster: '/posters/spirited-away.jpg',
  },
  {
    id: 'coco',
    title: 'Coco',
    year: 2017,
    genres: ['Animation', 'Adventure'],
    durationMinutes: 105,
    score: 8.2,
    overview:
      'A boy who dreams of becoming a musician crosses into the Land of the Dead and uncovers the truth about his family.',
    poster: '/posters/coco.jpg',
  },
  {
    id: 'knives-out',
    title: 'Knives Out',
    year: 2019,
    genres: ['Mystery', 'Comedy'],
    durationMinutes: 130,
    score: 7.8,
    overview:
      'When a famous crime novelist dies after his birthday party, a detective questions his scheming family to find out what really happened.',
    poster: '/posters/knives-out.jpg',
  },
]

// Every genre used above, without duplicates, in alphabetical order
export const genres = [...new Set(movies.flatMap((movie) => movie.genres))].sort()

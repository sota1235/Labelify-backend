const artists = [
  {
    artistId: 'a1111',
    name: 'aiko',
    genre: [
      {
        artistGenreId: 'ag1111',
        name: 'J-POP',
      },
    ],
  },
  {
    artistId: 'a1112',
    name: 'Base Ball Bear',
    genre: [
      {
        artistGenreId: 'ag1112',
        name: 'J-ROCK',
      },
      {
        artistGenreId: 'ag1113',
        name: 'ROCK',
      }
    ]
  },
];

export default () => artists;

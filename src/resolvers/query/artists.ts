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
    labels: [
      {
        labelId: 'l1112',
        name: 'ラブソング',
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
    ],
    labels: [
      {
        labelId: 'l1111',
        name: '夜',
      },
      {
        labelId: 'l1112',
        name: 'ラブソング',
      },
    ],
  },
];

export default () => artists;

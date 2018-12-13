const disks = [
  {
    diskId: 'd1111',
    name: 'まとめ1',
    type: 'Album',
    artist: [
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
    ],
    musics: [
      {
        musicId: 'm1111',
        name: '花火',
        albumName: '花火',
        artist: [
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
        ],
      },
    ],
    released: 1544674509804,
  },
];

export default () => disks;

import { gql } from 'apollo-server';
import artists from './artists';
import disks from './disks';
import labels from './labels';
import musics from './musics';
import playlists from './playlists';

const schema = gql`
  scalar Date

  ${artists}
  ${musics}
  ${labels}
  ${playlists}
  ${disks}

  type Query {
    artists: [Artist!]
    musics: [Music!]
    labels: [Label!]
    playlists: [Playlist!]
    disks: [Disk!]
  }
`;

export default schema;

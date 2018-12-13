import { gql } from 'apollo-server';
import artists from './artists';
import labels from './labels';
import musics from './musics';
import playlists from './playlists';

const schema = gql`
  ${artists}
  ${musics}
  ${labels}
  ${playlists}

  type Query {
    artists: [Artist!]
    musics: [Music!]
    labels: [Label!]
    playlists: [Playlist!]
  }
`;

export default schema;

import { gql } from 'apollo-server';
import artists from './artists';
import musics from './musics';

const schema = gql`
  ${artists}
  ${musics}

  type Query {
    artists: [Artist!]
    musics: [Music!]
  }
`;

export default schema;

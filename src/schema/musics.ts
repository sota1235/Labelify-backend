import { gql } from 'apollo-server';

const schema = gql`
  # Music object
  type Music {
    musicId: String!
    name: String!
    albumName: String!
    artist: [Artist!]
  }
`;

export default schema;

import { gql } from 'apollo-server';

const schema = gql`
  # Playlist object
  type Playlist {
    playlistId: String!
    name: String!
    labels: [Label!]
  }
`;

export default schema;

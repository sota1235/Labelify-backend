import { gql } from 'apollo-server';

const schema = gql`
  # Artist object
  type Artist {
    artistId: String!
    name: String!
    genre: [ArtistGenre!]
    labels: [Label!]
  }

  # Artist genre, such as J-POP, J-ROCK and so on
  type ArtistGenre {
    artistGenreId: String!
    name: String!
  }
`;

export default schema;

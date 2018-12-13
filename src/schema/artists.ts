import { gql } from 'apollo-server';

const schema = gql`
  # Artist object
  type Artist {
    artistId: String!
    name: String!
    genre: [ArtistGenre!]
  }

  # Artist genre, such as J-POP, J-ROCK and so on
  type ArtistGenre {
    artistGenreId: String!
    name: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    artists: [Artist!]
  }
`;

export default schema;

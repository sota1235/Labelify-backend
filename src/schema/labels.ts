import { gql } from 'apollo-server';

const schema = gql`
  # Label object
  type Label {
    labelId: String!
    name: String!
  }
`;

export default schema;

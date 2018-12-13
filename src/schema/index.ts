import { gql } from 'apollo-server';
import artists from './artists';

const schema = gql`
  ${artists}
`;

export default schema;

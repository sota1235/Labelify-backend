import { gql } from 'apollo-server';

const schema = gql`
  # Disk object
  type Disk {
    diskId: String!
    name: String!
    type: String! # Album or Single
    artist: [Artist!]
    musics: [DiskMusic!]
    released: Date!
  }

  type DiskMusic {
    order: Int
    music: Music!
  }
`;

export default schema;

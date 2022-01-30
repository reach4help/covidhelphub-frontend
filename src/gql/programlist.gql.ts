import { gql } from '@apollo/client';

export default gql`
  query PROGRAM_LIST {
    organization(name: "somename") {
      id
      name
    }
  }
`;

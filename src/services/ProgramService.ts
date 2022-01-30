import { useQuery } from '@apollo/client';

import ProgramModel from '../objectModel/ProgramModel';
import PROGRAM_LIST_QUERY from '../gql/programlist.gql';
import { PROGRAM_LIST } from '../gql/types/PROGRAM_LIST';

class ProgramService {
  static async saveMany(programs: ProgramModel[]) {
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(programs),
    // };
    // fetch('http://localhost:8080/program/savemany', requestOptions).then(
    //   res => {
    //     return res.json();
    //   },
    // );
    localStorage.setItem('programs', JSON.stringify(programs));
  }

  static list() {
    return useQuery<PROGRAM_LIST>(PROGRAM_LIST_QUERY);
  }
}

export default ProgramService;

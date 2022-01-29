import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ProgramModel from '../../objectModel/ProgramModel';
import ProgramService from '../../services/ProgramService';

function ProgramListComponent() {
  const { data: programs, loading, refetch } = ProgramService.list();
  const [newProgramCode, setNewProgramCode] = useState('');
  const [programCount] = useState(0);
  // forceUpdateCount used to update key of table row
  // If key is not changed, even though value of input field changes, React only refreshes
  // new rows or reduces number of rows, but does not update
  const [forceUpdateCount] = useState(0);

  function addProgramToArray() {
    // programs.push(new ProgramModel(newProgramCode));
    // setPrograms(programs);
    // setNewProgramCode('');
    // setProgramCount(programs.length);
    // setForceUpdateCount(forceUpdateCount + 1);
  }

  function deleteArrayRow() {
    // programs.splice(i, 1);
    // setPrograms(programs);
    // setProgramCount(programs.length);
    // setForceUpdateCount(forceUpdateCount + 1);
  }

  function refreshNewProgramCode(e: React.ChangeEvent<HTMLInputElement>) {
    setNewProgramCode(e.target.value);
  }

  function revertPrograms() {
    refetch();
  }

  function updateArrayRow() {
    // programs[i].code = e.target.value;
    // setPrograms(programs);
  }

  async function savePrograms() {
    // await ProgramService.saveMany(programs);
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  let ProgramLinks = [];

  // demo purposes only
  const orgs = [programs!.organization];

  ProgramLinks = orgs.map((org) => (
    // eslint-disable-next-line react/no-array-index-key
    <tr key={`item-${org.id}=${forceUpdateCount}`}>
      <td>
        <input
          type="text"
          defaultValue={org.name}
          onChange={() => updateArrayRow()}
        />
      </td>
      <td>
        <button type="button" onClick={() => deleteArrayRow()}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Link to="request/list">Requests</Link>
      <p>
        Count:
        {programCount}
      </p>
      <table className="">
        <thead>
          <tr>
            <th>Program</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ProgramLinks}</tbody>
      </table>
      <hr />
      <div>
        <input
          key={`addnewprogramvalue-${forceUpdateCount}`}
          aria-label="Value for new program"
          type="text"
          defaultValue={newProgramCode}
          onChange={(e) => refreshNewProgramCode(e)}
        />
        <button type="button" onClick={addProgramToArray}>
          Add Item
        </button>
      </div>
      <br />
      <button type="button" onClick={savePrograms}>
        Save
      </button>
      <button type="button" onClick={revertPrograms}>
        Revert
      </button>
    </div>
  );
}

export default ProgramListComponent;

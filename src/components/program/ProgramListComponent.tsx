import React, { useState, useEffect } from 'react';
import ProgramModel from '../../objectModel/ProgramModel';
import ProgramService from '../../services/ProgramService';

const ProgramListComponent = function () {
  const [programs, setPrograms] = useState([] as ProgramModel[]);
  const [newProgramCode, setNewProgramCode] = useState('');
  const [programCount, setProgramCount] = useState(0);
  // forceUpdateCount used to update key of table row
  // If key is not changed, even though value of input field changes, React only refreshes
  // new rows or reduces number of rows, but does not update
  const [forceUpdateCount, setForceUpdateCount] = useState(0);

  useEffect(() => {
    async function getData() {
      const programData = await ProgramService.list();
      setPrograms(programData);
      setProgramCount(programData.count);
    }
    getData();
  }, []);

  function addProgramToArray() {
    programs.push(new ProgramModel(newProgramCode));
    setPrograms(programs);
    setNewProgramCode('');
    setProgramCount(programs.length);
    setForceUpdateCount(forceUpdateCount + 1);
  }

  function deleteArrayRow(i: number) {
    programs.splice(i, 1);
    setPrograms(programs);
    setProgramCount(programs.length);
    setForceUpdateCount(forceUpdateCount + 1);
  }

  function refreshNewProgramCode(e: React.ChangeEvent<HTMLInputElement>) {
    setNewProgramCode(e.target.value);
  }

  function revertPrograms() {
    async function getData() {
      const programData = await ProgramService.list();
      setPrograms(programData);
      setProgramCount(programData.length);
      setForceUpdateCount(forceUpdateCount + 1);
    }
    getData();
  }

  function updateArrayRow(e: React.ChangeEvent<HTMLInputElement>, i: number) {
    programs[i].code = e.target.value;
    setPrograms(programs);
  }

  async function savePrograms() {
    await ProgramService.saveMany(programs);
  }

  let ProgramLinks = {};

  ProgramLinks = programs.map((program, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <tr key={`item-${program.code}-${i}=${forceUpdateCount}`}>
      <td>
        <input
          type="text"
          defaultValue={program.code}
          onChange={(e) => updateArrayRow(e, i)}
        />
      </td>
      <td>
        <button type="button" onClick={() => deleteArrayRow(i)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <p>
        Count:
        {' '}
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
        <button type="button" onClick={addProgramToArray}>Add Item</button>
      </div>
      <br />
      <button type="button" onClick={savePrograms}>Save</button>
      <button type="button" onClick={revertPrograms}>Revert</button>
    </div>
  );
};

export default ProgramListComponent;

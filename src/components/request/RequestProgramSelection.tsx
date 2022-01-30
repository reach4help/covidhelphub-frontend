import React from 'react';
import { Link } from 'react-router-dom';
// import ProgramModel from '../../objectModel/ProgramModel';
import ProgramService from '../../services/ProgramService';

function RequestProgramSelection() {
  const { data: programs } = ProgramService.list();
  // forceUpdateCount used to update key of table row
  // If key is not changed, even though value of input field changes, React only refreshes
  // new rows or reduces number of rows, but does not update

  let ProgramLinks = {};

  // demo purposes
  const orgs = [programs!.organization];

  ProgramLinks = orgs.map((org) => (
    <p key={`programlink-${org.id}`}>
      <Link to={`/request/list/${org.id}`}>{org.name}</Link>
    </p>
  ));

  return <div>{ProgramLinks}</div>;
}

export default RequestProgramSelection;

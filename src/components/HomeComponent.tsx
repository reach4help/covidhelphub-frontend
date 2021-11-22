import React from 'react';

// eslint-disable-next-line func-names
const HomeComponent = function ({ location }: { location: any }) {
  return (
    <h1>
      Content for
      {`"
      ${location.pathname}
      "`}
      TBD
    </h1>
  );
};

export default HomeComponent;

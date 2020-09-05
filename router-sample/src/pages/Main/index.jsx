import React from 'react';

import InternalRoutes from '../../routes/InternalRoutes';
import Header from '../../components/Header';

const Main = props => {
  return (
    <div>
      <Header />
      <InternalRoutes />
    </div>
  );
}

export default Main;

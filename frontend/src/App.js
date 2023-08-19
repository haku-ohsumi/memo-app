import React, { useState, useEffect } from 'react';

import Header from './modules/Header';
import Form from './modules/Form';
import List from './modules/List';

function App() {
 return (
    <React.StrictMode>
      <Header/>
      <Form/>
      <List/>
    </React.StrictMode>
  );
}

export default App;

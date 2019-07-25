import React, { useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </>
  );
};

export default App;

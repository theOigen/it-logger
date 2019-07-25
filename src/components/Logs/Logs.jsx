import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';

import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/logs');
      setLogs(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Preloader />;
  }

  const isNoLogs = !loading && logs.length === 0;

  const NoLogs = () => <p className='center'>No logs to show...</p>;
  const LogsComponent = () => {
    return logs.map(log => (
      <LogItem key={log.id} log={log}>
        {log.message}
      </LogItem>
    ));
  };

  return (
    <>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {isNoLogs ? <NoLogs /> : <LogsComponent />}
      </ul>
    </>
  );
};

export default memo(Logs);

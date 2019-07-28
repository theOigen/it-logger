import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestLogs } from '../../actions/logActions';

import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = ({ logState: { logs, loading }, requestLogs }) => {
  useEffect(() => {
    requestLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
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

Logs.propTypes = {
  logState: PropTypes.object.isRequired,
  requestLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  logState: state.logState
});

const mapDispatchToProps = {
  requestLogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Logs));

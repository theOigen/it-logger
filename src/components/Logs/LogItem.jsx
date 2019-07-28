import React, { memo } from 'react';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const logClass = log.attention ? 'red-text' : 'blue-text';

  const onDelete = e => {
    e.preventDefault();
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };

  const onSelect = e => {
    e.preventDefault();
    setCurrent(log);
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          onClick={onSelect}
          className={`modal-trigger ${logClass}`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by{' '}
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  deleteLog,
  setCurrent
};

export default connect(
  null,
  mapDispatchToProps
)(memo(LogItem));

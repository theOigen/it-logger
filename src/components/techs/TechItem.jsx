import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onDelete = e => {
    e.preventDefault();
    deleteTech(id);

    M.toast({ html: `Technician ${firstName} ${lastName} deleted` });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  deleteTech
};

export default connect(
  null,
  mapDispatchToProps
)(TechItem);

import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestTechs } from '../../../actions/techActions';
import TechItem from '../TechItem';

const TechListModal = ({ requestTechs, techState: { techs, loading } }) => {
  useEffect(() => {
    requestTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div id='tech-list-modal' className='modal'>
        <div className='modal-content'>
          <h4>Technician List</h4>
          <ul className='collection'>
            {!loading &&
              techs !== null &&
              techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
          </ul>
        </div>
      </div>
    </>
  );
};

TechListModal.propTypes = {
  techState: PropTypes.object.isRequired,
  requestTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techState: state.techState
});

const mapDispatchToProps = {
  requestTechs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(TechListModal));

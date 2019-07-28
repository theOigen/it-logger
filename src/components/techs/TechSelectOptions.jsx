import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestTechs } from '../../actions/techActions';

const TechSelectOptions = ({ techState: { techs, loading }, requestTechs }) => {
  useEffect(() => {
    requestTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  requestTechs: PropTypes.func.isRequired,
  techState: PropTypes.object.isRequired
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
)(memo(TechSelectOptions));

import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => <div>{title}</div>;

App.defaultProps = {
  title: '',
};

App.propTypes = {
  title: PropTypes.string,
};

export default App;

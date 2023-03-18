import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

function Details({ page }) {
  return (
    <Layout route="details" page={page} />
  );
}

export default Details;

Details.propTypes = {
  page: PropTypes.objectOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.shape({
      img: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      activeUsers: PropTypes.number.isRequired,
      bounceRate: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

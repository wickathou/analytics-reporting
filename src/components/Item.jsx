import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Item({ page, styler }) {
  return (
    <li className={`w-full h-full p-2 flex flex-col ${styler % 2 === 0 ? 'bg-sky-600' : 'bg-sky-700'}`}>
      <Link to={`/${page.itemId}`}>
        <div className="relative">
          <FontAwesomeIcon className="absolute top-0 right-0" icon={faCircleRight} />
        </div>
        <span>{styler}</span>
        <div className="lg:h-52 h-28 flex justify-center items-center">
          <img src={page.data.img} className="lg:h-24 md:h-12 h-8" alt="" srcSet="" />
        </div>
        <div className="flex flex-col items-end">
          <h3>
            {page.title}
          </h3>
          <p>
            Views
            {' '}
            {page.data.views}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default Item;

Item.propTypes = {
  styler: PropTypes.number.isRequired,
  page: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
      img: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      activeUsers: PropTypes.number.isRequired,
      bounceRate: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

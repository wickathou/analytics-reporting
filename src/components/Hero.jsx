import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Hero({ route, page }) {
  const { totalViews } = useSelector((store) => store.pages);
  let heroStyle = '';
  const heroContent = {
    img: 'Block',
    title: 'Title',
    value: 'Values',
    titleAlign: '',
  };
  switch (route) {
    case 'home':
      heroStyle = 'justify-end';
      heroContent.img = 'https://raw.githubusercontent.com/wickathou/client-assets/3e0efe090c41f2ef7f772534c0056b92849fd49f/end-design/temporal/end-design-logo-white.svg';
      heroContent.title = 'Total views';
      heroContent.titleAlign = '';
      heroContent.value = totalViews;
      break;
    case 'details':
      heroStyle = 'items-end justify-center';
      heroContent.img = page.data.img;
      heroContent.title = page.title;
      heroContent.titleAlign = 'text-right';
      heroContent.value = `Total views ${page.data.views}`;
      break;
    default:
      heroContent.img = 'Error';
      heroContent.title = 'Something';
      heroContent.value = 'when wrong';
      break;
  }

  return (
    <>
      <div className="flex w-full">
        <div className="lg:w-3/4 w-1/2 p-2 flex justify-center items-center">
          <img className="lg:h-36 md:h-24 h-8" src={heroContent.img} alt="" srcSet="" />
        </div>
        <div className={`w-1/2 p-2 flex flex-col ${heroStyle}`}>
          <h2 className={heroContent.titleAlign}>
            {heroContent.title}
          </h2>
          <p>
            {heroContent.value}
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;

Hero.propTypes = {
  route: PropTypes.string.isRequired,
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

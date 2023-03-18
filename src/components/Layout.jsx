import React from 'react';
import PropTypes from 'prop-types';
import CategorySelector from './CategorySelector';
import DetailList from './DetailList';
import Header from './Header';
import Hero from './Hero';
import ItemList from './ItemList';

function Layout({ route, page }) {
  const content = {
    mainContent: '',
    spacerContent: '',
  };
  switch (route) {
    case 'home':
      content.mainContent = <ItemList />;
      content.spacerContent = <CategorySelector />;
      break;
    case 'details':
      content.mainContent = <DetailList page={page} />;
      content.spacerContent = `Detailed stats for ${page.title}`;
      break;
    default:
      content.mainContent = <h2>The route is not valid</h2>;
      content.spacerContent = 'Nothing to display';
      break;
  }
  return (
    <>
      <Header route={route} />
      <main className="w-full">
        <section className="lg:container mx-auto p-2 bg-sky-600">
          <Hero route={route} page={page} />
        </section>
        <div className="lg:container mx-auto p-2 bg-sky-800">
          <p>{content.spacerContent}</p>
        </div>
        <section className="lg:container mx-auto bg-sky-900">
          {content.mainContent}
        </section>
      </main>
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  page: {},
};

Layout.propTypes = {
  route: PropTypes.string.isRequired,
  page: PropTypes.objectOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    data: PropTypes.objectOf(PropTypes.shape({
      img: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      activeUsers: PropTypes.number.isRequired,
      bounceRate: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })),
  })),
};

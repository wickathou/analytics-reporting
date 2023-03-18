import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

function ItemList() {
  const { pageList } = useSelector((store) => store.pages);
  const { categoryFilter } = useSelector((store) => store.categories);
  let content = '';
  if (categoryFilter !== 'All categories') {
    const filtedPageList = pageList.filter((page) => page.data.category === categoryFilter);
    content = filtedPageList;
  } else {
    content = pageList;
  }
  const sequencer = [1, 2, 2, 1];
  let counter = -1;
  return (
    <>
      <ul className="grid grid-cols-2">
        {content.map((page) => {
          if (counter < 3) {
            counter += 1;
          } else if (counter > 2) {
            counter = 0;
          }
          return <Item key={page.itemId} page={page} styler={sequencer[counter]} />;
        })}
      </ul>
    </>
  );
}

export default ItemList;

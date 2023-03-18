import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

function ItemList() {
  const {pageList} = useSelector((store) => store.pages)
  const {categoryFilter} = useSelector((store) => store.categories)
  let content = ''
  if (categoryFilter !== 'All categories') {
    const filtedPageList = pageList.filter((page) => page.data.category === categoryFilter)
    content = filtedPageList;
  } else {
    content = pageList
  }
  return (
    <>
      <ul className='grid grid-cols-2'>
        {content.map((page) => <Item page={page}/>)}
      </ul>
    </>
  )
}

export default ItemList
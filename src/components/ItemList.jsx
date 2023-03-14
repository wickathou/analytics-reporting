import React from 'react'
import Item from './Item'

function ItemList() {
  return (
    <>
      <ul className='grid grid-cols-2'>
        <Item/>
        <Item/>
        <Item/>
      </ul>
    </>
  )
}

export default ItemList
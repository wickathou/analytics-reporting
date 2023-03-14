import React from 'react'
import Detail from './Detail'

function DetailList() {
  return (
    <>
      <ul className='flex flex-col'>
        <Detail styler={1}/>
        <Detail styler={2}/>
        <Detail styler={3}/>
      </ul>
    </>
  )
}

export default DetailList
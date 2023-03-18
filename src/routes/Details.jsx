import React from 'react'
import Layout from '../components/Layout'

function Details({page}) {
  console.log(page);
  return (
    <Layout route='details' page={page}/>
  )
}

export default Details
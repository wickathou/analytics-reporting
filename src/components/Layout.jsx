import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import CategorySelector from './CategorySelector'
import DetailList from './DetailList'
import Header from './Header'
import Hero from './Hero'
import ItemList from './ItemList'

function Layout({route, page}) {
  console.log(page);
  let content = {
    mainContent: '',
    spacerContent: '',
  }
  switch (route) {
    case 'home':
      content.mainContent = <ItemList/>
      content.spacerContent = <CategorySelector />
      break;
    case 'details':
      content.mainContent = <DetailList page={page} />
      content.spacerContent = `Detailed stats for ${page.title}`
      break;
    default:
      content.mainContent = <h2>The route is not valid</h2>
      content.spacerContent = 'Nothing to display'
      break;
  }
  return (
    <>
      <Header route={route}/>
      <main className='w-full'>
        <section className='lg:container mx-auto p-2 bg-sky-600'>
          <Hero route={route} page={page}/>
        </section>
        <div className="lg:container mx-auto p-2 bg-sky-800">
          <p>{content.spacerContent}</p>
        </div>
        <section className="lg:container mx-auto bg-sky-900">
          {content.mainContent}
        </section>
      </main>
    </>
  )
}

export default Layout
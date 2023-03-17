import React from 'react'
import { useSelector } from 'react-redux'
import DetailList from './DetailList'
import Header from './Header'
import Hero from './Hero'
import ItemList from './ItemList'

function Layout({route}) {
  const {categories} = useSelector((store) => store.categories)
  let content = {
    mainContent: '',
    spacerContent: '',
  }
  switch (route) {
    case 'home':
      content.mainContent = <ItemList/>
      content.spacerContent = `Category: ${categories[0]}`
      break;
    case 'details':
      content.mainContent = <DetailList />
      content.spacerContent = 'Detailed stats'
      break;
    default:
      content.mainContent = <h2>The route is not valid</h2>
      content.spacerContent = 'Nothing to display'
      break;
  }
  return (
    <>
      <Header/>
      <main className='w-full'>
        <section className='lg:container mx-auto p-2 bg-slate-300'>
          <Hero route={route}/>
        </section>
        <div className="lg:container mx-auto p-2 bg-slate-400">
          <p>{content.spacerContent}</p>
        </div>
        <section className="lg:container mx-auto p-2 bg-slate-400">
          {content.mainContent}
        </section>
      </main>
    </>
  )
}

export default Layout
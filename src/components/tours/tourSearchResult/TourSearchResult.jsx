import React from 'react'
import FilterSearch from './FilterSearch'
import TourSearchResultList from './TourSearchResultList'

const TourSearchResult = () => {
  return (
    <div
    className='max-w-[1170px] mx-auto flex gap-8'
    >
      <FilterSearch/>
      <TourSearchResultList/>
    </div>
  )
}

export default TourSearchResult
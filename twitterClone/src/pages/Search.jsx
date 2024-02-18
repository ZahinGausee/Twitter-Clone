import React from 'react'
import { Container } from '../components'

function Search() {
  return (
    <div className='w-full'>
      <Container>
        <div className="search m-3">
          <input type="text" className="w-full rounded-full bg-[#16181c] text-white px-4 py-2" placeholder="Search" />
        </div>
      </Container>
    </div>
  )
}

export default Search
import '../styles/Pagination.css'
import * as React from 'react'

export const Pagination = ({ djinn, setDjinn }) => {
  return (
    <div className='pagination pagination__top'>
      <div className='pagination__prev-box'>
        <span> &lt; </span>
      </div>

      <div className='pagination__pages'>
        <div className='pagination__page-box'>
          <span className='pagination__page pagination__page-current'>1</span>
        </div>
        <div className='pagination__page-box'>
          <span className='pagination__page'>2</span>
        </div>
        <div className='pagination__page-box'>
          <span className='pagination__page'>3</span>
        </div>
        <div className='pagination__page-box'>
          <span className='pagination__page'>4</span>
        </div>
        <div className='pagination__page-box'>
          <span className='pagination__page'>5</span>
        </div>
      </div>

      <div className='pagination__next-box'>
        <span> > </span>
      </div>
    </div>
  )
}

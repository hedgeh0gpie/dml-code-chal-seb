import '../styles/HomePage.css'
import * as React from 'react'

export const Sorting = ({ djinn, setDjinn }) => {
  const sortByNameDescending = () => {
    const sortedArr = Array.from(djinn).sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (b.name > a.name) {
        return -1
      }
      return 0
    })
    setDjinn(sortedArr)
  }

  const sortByNameAscending = () => {
    const sortedArr = Array.from(djinn).sort((a, b) => {
      if (a.name > b.name) {
        return -1
      }
      if (b.name > a.name) {
        return 1
      }
      return 0
    })
    setDjinn(sortedArr)
  }

  const sortByElementAscending = () => {
    const sortedArr = Array.from(djinn).sort((a, b) => {
      if (a.element < b.element) {
        return -1
      }
      if (a.element > b.element) {
        return 1
      }

      if (a.element === b.element) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }
    })
    setDjinn(sortedArr)
  }

  const sortByElementDescending = () => {
    const sortedArr = Array.from(djinn).sort((a, b) => {
      if (a.element < b.element) {
        return 1
      }
      if (a.element > b.element) {
        return -1
      }

      if (a.element === b.element) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }
    })
    setDjinn(sortedArr)
  }

  const handleSortOption = e => {
    switch (e.target.value) {
      case 'Name Ascending':
        sortByNameAscending()
        break
      case 'Name Descending':
        sortByNameDescending()
        break
      case 'Element Ascending':
        sortByElementAscending()
        break
      default:
        sortByElementDescending()
        break
    }
  }

  return (
    <div className='form__group'>
      <label htmlFor='sort' className='form__label form__label--sort'>
        Sort By:
      </label>
      <select
        className='form__input form__input--select'
        name='sort'
        id='sort'
        defaultValue='Element Descending'
        onChange={e => {
          handleSortOption(e)
        }}
      >
        <option value='Name Ascending'>Name Ascending</option>
        <option value='Name Descending'>Name Descending</option>
        <option value='Element Ascending'>Element Ascending</option>
        <option value='Element Descending'>Element Descending</option>
      </select>
    </div>
  )
}

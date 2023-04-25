import React from 'react'
import '../styles/HeadingStyles.css'
import { Link } from 'react-router-dom'

export function Heading () {
  return (
    <div className='heading'>
      <div className='heading-actions'>
        <Link to='/'>
          <button>
            Show list
          </button>
        </Link>
        <Link to='/add'>
          <button>Add employee</button>
        </Link>
      </div>
    </div>
  )
}

import React, { useState } from 'react'

function Input({ showDiv }) {

    const [searchWorld, setSearchWorld] = useState('')

    return (
      <div>
          <input 
            type="text"
            data-testid="searchBar"
            placeholder="Search..."
            onChange={(e) => { setSearchWorld(e.target.value) }}
          />

          <h1 data-testid="displaySearch">{searchWorld}</h1>

          {showDiv &&
            <div data-testid="randomText">
                Some text here ...
            </div>
          }
      </div>
    )
}

export default Input
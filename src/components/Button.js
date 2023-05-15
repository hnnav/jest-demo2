import React from 'react'
import { useState } from 'react'


function Button() {

    const [showAnotherButton, setShowAnotherButton] = useState(false)

    return (
        <div>
            <button
                data-testid="button"
                onClick={() => { setShowAnotherButton(true) 
                }}
            >
                Click here
            </button>
            {showAnotherButton && 
                <button data-testid="button">Click here</button>
            }
        </div>
    )
}

export default Button
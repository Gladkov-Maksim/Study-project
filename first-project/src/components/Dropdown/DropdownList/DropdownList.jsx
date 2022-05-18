import { useState } from 'react'

const items = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out'
]


const DropdownList = () => {

    const [ state, setState ] = useState(0)

    return (
        <ul data-id="dropdown" className="dropdown">
            {items.map((item, index) => <li
                key={item + index}
                onClick={() => setState(index)}
                className={state === index ? 'active' : ''}><a href="#">{item}</a></li>
            )}
        </ul> 
    )
}

export default DropdownList
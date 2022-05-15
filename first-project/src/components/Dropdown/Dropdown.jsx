import { useState } from 'react'
import styles from './Dropdown.css'
import DropdownList from './DropdownList/DropdownList'


const Dropdown = () => {

    const [ state, setState ] = useState(false)

    return (
        <div className="container">
        <div data-id="wrapper" className="dropdown-wrapper open">
          <button onClick={() => setState(!state)} data-id="toggle" className="btn">
            <span>Account Settings</span>
            <i className="material-icons">public</i>
          </button>
          {state ? <DropdownList /> : <></>}
        </div>
      </div>
    //   {const wrapperEl = document.querySelector('[data-id=wrapper]'); 
    //     const toggleEl = document.querySelector('[data-id=toggle]');
    //     const dropdownEl = document.querySelector('[data-id=dropdown]');
    
    //     toggleEl.addEventListener('click', e => {
    //       e.preventDefault();
    //       wrapperEl.classList.toggle('open');
    //     });
    // }
    )
}

export default Dropdown


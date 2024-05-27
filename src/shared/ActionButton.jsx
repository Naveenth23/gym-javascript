import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const ActionButton = ({link,children}) => {
  return (
    <Link to={link} className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white" smooth={true} offset={-260} duration={500}>
      {children}
    </Link>
  )
}

export default ActionButton
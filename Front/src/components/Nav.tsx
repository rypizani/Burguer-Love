import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pivot } from 'hamburger-react'

interface INav {
  show: boolean
  setMenu: (show: React.SetStateAction<boolean>) => void
}

interface ILink {
  name: string
  to: string
}

const links: ILink[] = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'Menu',
    to: '/menu'
  },
  {
    name: 'Services',
    to: '/service'
  },
  {
    name: 'About Us',
    to: '/about'
  },
  {
    name: 'Contact Us',
    to: '/contact'
  }
]

export const Nav: React.FC<INav> = ({ show, setMenu }) => {
  return (
    <nav className={show ? 'nav nav-show' : 'nav'}>
      <ul className='nav__list'>
        {
          links.map((link, index) => (
            <li key={index} className='nav__list__item'>
              <NavLink to={link.to} className={({ isActive }) => isActive ? 'nav__list__item__cta nav__list__item__cta-active' : 'nav__list__item__cta'}>{link.name}</NavLink>
            </li>
          ))
        }
      </ul>
      <div className='nav__button'>
        <Pivot toggle={setMenu} toggled={show} />
      </div>
    </nav>
  )
}

import React from 'react'
import { Logo } from '../components/Logo'
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'
import { SiYoutube } from 'react-icons/si'

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <Logo classes='footer__container__logo logo' />
        <nav className='footer__container__nav'>
          <h2 className='footer__container__nav__title'>Information</h2>
          <ul className='footer__container__nav__list'>
            <li className='footer__container__nav__list__item'><a href="#">Contact Us</a></li>
            <li className='footer__container__nav__list__item'><a href="#">About Us</a></li>
            <li className='footer__container__nav__list__item'><a href="#">Services</a></li>
            <li className='footer__container__nav__list__item'><a href="#">Frequent questions</a></li>
          </ul>
        </nav>
      </div>
      <ul className='footer__social'>
        <li className='footer__social__item'><a href="#" aria-label='Go to ##'><BiLogoInstagram aria-hidden='true' /></a></li>
        <li className='footer__social__item'><a href="#" aria-label='Go to ##'><SiYoutube /></a></li>
        <li className='footer__social__item'><a href="#" aria-label='Go to ##'><BiLogoFacebook aria-hidden='true' /></a></li>
        <li className='footer__social__item'><a href="#" aria-label='Go to ##'><BiLogoTwitter aria-hidden='true' /></a></li>
      </ul>
    </footer>
  )
}

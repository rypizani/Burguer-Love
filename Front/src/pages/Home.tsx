import React from 'react'
import Atropos from 'atropos/react'
import { OurProducts } from '../layout/OurProducts'
import { Menu } from './Menu'

export const Home: React.FC = () => {
  return (
    <>
      <div className='home'>
        <div className='home__info'>
          <h1 className='home__info__title'>
            The <span>Fastest Food</span>, For <span>Instant Hunger</span>
          </h1>
          <p className='home__info__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam delectus sed, vel quaerat, libero nesciunt debitis, architecto repudiandae accusamus aut exercitationem nisi non doloribus! Temporibus officia architecto reiciendis blanditiis.
          </p>
          <a href='#' className='home__info__cta'>
            Order Now
          </a>
        </div>
        <div className='home__image'>
          <Atropos
            shadow={false}
          >
            <img src={'https://firebasestorage.googleapis.com/v0/b/cdnmarcelo-c7f11.appspot.com/o/vale%20esse%20hambuereee.png?alt=media&token=e052310b-7adf-492f-bd1e-ff33c4c9ee13'} alt="Burger Burger Love" loading='lazy' className='home__image-img'/>
          </Atropos>
          <div className='home__image-effect' />
        </div>
      </div>
      <OurProducts />
      <Menu />
    </>
  )
}

import React from 'react'
import { type ProductType } from '../interface/types'

interface ITypes {
  image: string
  name: ProductType
  setType: React.Dispatch<React.SetStateAction<ProductType>>
}

export const Types: React.FC<ITypes> = ({ image, name, setType }) => {
  const handleClick = (): void => {
    setType(name)
  }

  return (
    <button className='type' onClick={handleClick} >
      <span className='type__div'>
        <img src={image} alt={'Icon' + name} className='type__div__image'/>
      </span>
      <span className='type__name'>{name}</span>
    </button>
  )
}

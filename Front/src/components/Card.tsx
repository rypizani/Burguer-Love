import { type IProduct } from '../interface/types'
import Atropos from 'atropos/react'
import { Dialog } from 'primereact/dialog'
import { useState } from 'react'

export const Card: React.FC<IProduct> = ({  image, name, price, information }) => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const onHide = () => {
    hideDialog();
  };


  return (
    <div>
      <div className='card' onClick={showDialog}>
        <Atropos
          shadow={false}
        >
          <img src={image} alt={name} className='card__img' />
        </Atropos>
        <h3 className='card__name'>{name}</h3>
        <p className='card__info'>{information}</p>
        <div className='card__container'>
          <span className='card__container__price'>$ {price}</span>
        </div>
      </div>
      <Dialog visible={visible} className='dialog'  onHide={onHide} modal={true}>
        <div className='dialog__geral'>
          <div className='dialog__geral__divimg'>
            <h3 className='dialog__geral__divimg__name' >{name}</h3>
            <img src={image} alt={name} className='dialog__geral__divimg__img' />
          </div>
          <div className='dialog__geral__info'>
            <div className='dialog__geral__info__container'>
              <span className='dialog__geral__info__container__price'>$ {price}</span>
            </div>
            <p className='m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </Dialog>
    </div>
    
  )
}

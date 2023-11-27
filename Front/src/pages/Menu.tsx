import React, { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import {  ProductType, type IProduct, Category } from '../interface/types'
import { getAll, getAllCategories } from '../services/BurguersApi'
import { TabMenu } from 'primereact/tabmenu';

interface IIconTypes {
  image: string
  name: ProductType
}

export const Menu: React.FC = () => {
  const [type, setType] = useState<ProductType>('Burger')
  /*Dados mocados
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(BURGER)*/
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setFilteredProducts(data);
      } catch (error) {
        console.log( 'Não foi possivel conexão com o banco')
      }
    };

    fetchData();

    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        // Trate os erros conforme necessário
        console.error('Error:', error);
      }
    };

    fetchCategories();
  }, []);

  

  return (
    <section >
      <div className='divList'>
        <ul className='divList__list'>
            {categories.map((category) => (
              // Utilize uma chave única (key) e corrija o tipo de 'category'
              <li key={category.id} className='divList__list__item'>
                {category.name}
              </li>
            ))}
          </ul>
      </div>
      <div className='menu'>
        <div className='menu__container'>
          {
            filteredProducts.map((product) => (
              <Card key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} information={product.information} />
            ))
          }
            </div>
      </div>
    </section>
  )
}

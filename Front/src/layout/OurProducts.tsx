import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { OURPRODUCTS } from '../data/data'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card } from '../components/Card'
import { IProduct } from '../interface/types'
import { getAll } from '../services/BurguersApi'

export const OurProducts: React.FC = () => {
  
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <section className='ourProducts'>
      <h2 className='subtitle'>
        Our Products
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1108: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
        modules={[Pagination]}
        className="ourProducts__swiper"
      >
        {
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card id={product.id} name={product.name} image={product.image} price={product.price} information={product.information} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

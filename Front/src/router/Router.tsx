import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Temporal } from '../layout/Temporal'
import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='service' element={<Temporal />} />
        <Route path='about' element={<Temporal />} />
        <Route path='contact' element={<Temporal />} />
      </Route>
    </Routes>
  )
}

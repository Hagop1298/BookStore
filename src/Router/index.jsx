import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home'
import BookDetails from '../page/bookdetails'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/bookdetails/:id" element={<BookDetails />} />
    </Routes>
  )
}

export default Router
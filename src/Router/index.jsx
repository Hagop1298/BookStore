import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home'
import BookDetails from '../page/bookdetails'
import Error from '../component/Error'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Router
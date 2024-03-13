import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import EditRant from './pages/EditRant'
import CreateRant from './pages/CreateRant'
import DeleteRant from './pages/DeleteRant'
import ShowRant from './pages/ShowRant'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rants/create' element={<CreateRant/>}/>
      <Route path='/rants/edit/:id' element={<EditRant/>}/>
      <Route path='/rants/delete/:id' element={<DeleteRant/>}/>
      <Route path='/rants/details/:id' element={<ShowRant/>}/>
    </Routes>
  )
}

export default App

import { Route, Routes } from 'react-router'
import './App.css'
import Main from './Layout/Main'
import Home from './pages/Home/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Main></Main>}>
            <Route index element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

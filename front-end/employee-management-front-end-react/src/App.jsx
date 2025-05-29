import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EmployeeListComponent from './Components/EmployeeListComponent'
import Footer from './Components/Footer'
import Header from './Components/Header'
import AddEmployee from './Components/AddEmployee'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<EmployeeListComponent />}></Route>
          <Route path='/read-employees' element={<EmployeeListComponent />}></Route>
          <Route path='add-employee' element={<AddEmployee />}></Route>
          <Route path='/update-employee/:id' element={<AddEmployee />}></Route>
        </Routes>
        
        <Footer /> 
      </BrowserRouter>
    </>
  )
}

export default App

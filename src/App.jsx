import './App.css'
import Header from './components/header';
import Accueil from './components/accueil'
import { Routes, Route } from 'react-router-dom';
import Hommes from './components/hommes';
import Femmes from './components/femmes';

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/accueil' element={<Accueil/>}/>
        <Route path='/hommes' element={<Hommes/>}/>
        <Route path='/femmes' element={<Femmes/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

import { Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { Overview } from './pages/DetailsPage/Overview/Overview';
import { Information } from './pages/DetailsPage/Information/Information';
import { Amenities } from './pages/DetailsPage/Amenities/Amenities';
import { Important } from './pages/DetailsPage/Important/Important';
import { Reviews } from './pages/DetailsPage/Reviews/Reviews';
import { RegisterYourPlace } from './pages/RegisterYourPlace/RegisterYourPlace';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { About } from './pages/About/About';

function App() {
  return (
    <div className='p-2'>
      <nav className='flex justify-between border border-slate-500 rounded p-2'>
        <div className='flex gap-2'>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/about">About</Link>
        </div>

        <div className='flex gap-2'>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/register-your-place">Register your place</Link>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/catalog/:id' element={<DetailsPage />}>
          <Route path='details' element={< Overview />} />
          <Route path='information' element={< Information />} />
          <Route path='amenities' element={< Amenities />} />
          <Route path='important' element={< Important />} />
          <Route path='reviews' element={< Reviews />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register-your-place' element={<RegisterYourPlace />} />
      </Routes>
    </div>
  )
}

export default App

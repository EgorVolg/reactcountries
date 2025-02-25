
import { Route, Routes } from 'react-router-dom';
import { CountryDetails } from './components/countries-components/сountry-item/country-details/CountryDetails';
import { Home } from './components/countries-components/home-components/Home';
 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </>
  )
}

export default App


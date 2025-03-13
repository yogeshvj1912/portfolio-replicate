
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import { AddProvider } from './contextApi/AddContext';


function App() {
  return (
    <BrowserRouter>
<AddProvider>
<Routes>
      <Route path='/' element={<Header/>} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      </Route>
    </Routes>
</AddProvider>
    </BrowserRouter>
  );
}

export default App;

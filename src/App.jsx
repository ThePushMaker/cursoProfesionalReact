import './App.css';
import Navbar from './components/Navbar';
import Events from './components/Events';
import { useRef, useState } from 'react';
import SignupForm from './components/SignupForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef();

  const handleNavbarSearch = (term) => {
    console.log(containerRef.current);
    setSearchTerm(term);
  };
  
  // console.log(searchTerm, 10);
  
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} /> 
      <Events searchTerm={searchTerm} />
      
      {/* <SignupForm /> */}
    </>
  )
}

export default App

import { useState, use, forwardRef } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState('');
  
  const handleInputChange = (evt) => {
    // console.log(evt.target.value);
    setSearch(evt.target.value);
  };
  
  const handleInputKeyDown = (evt) => {
    if(evt.key === 'Enter') {
      onSearch(search); 
    }
  };
  
  return (
    <div ref={ref}>
      <p>Mi boletera</p>
      <input 
        placeholder='busca tu evento favorito' 
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown} 
        value={search}
      />
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;  
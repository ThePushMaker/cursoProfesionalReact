import { useState } from "react";

const Navbar = ({ onSearch }) => {
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
    <div>
      <p>Mi boletera</p>
      <input 
        placeholder='busca tu evento favorito' 
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown} 
        value={search}
      />
    </div>
  );
};

export default Navbar;  
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState('');
  
  const handleInputChange = (evt) => {
    console.log(evt.target.value);
    setSearch(evt.target.value);
  };
  
  return (
    <div>
      <p>Mi boletera</p>
      <input 
        placeholder='busca tu evento favorito' 
        onChange={handleInputChange} 
        value={search}
      />
    </div>
  );
};

export default Navbar;  
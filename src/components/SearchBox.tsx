

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NewItemButton = () => {
  const location = useLocation();

  return (

<div className='content-start flex justify-end mb-10'>
        <div className="flex justify-end mt-5">
        <div className="flex relative">
            <span className="mr-4 mt-2 font-bold">Pesquisar:</span>
            <input
            type="text"
            className="search rounded-md px-3 py-1 mt-1 text-black border border-gray-300"
            placeholder="Digite aqui..."/>
        </div>
        </div>
    </div>


  );
};

export default NewItemButton;
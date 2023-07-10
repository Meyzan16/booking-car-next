"use client";


import Image from "next/image";
import React, { useState } from "react";
import {SearchManufacturer} from "./";
import { useRouter } from "next/navigation";


const SearchButton= ({otherClasses}: {otherClasses:string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ({setManufacturer, setModel}) => {
    const [searchmanufacturer,setsearchmanufacturer] = useState('');
    const [searchmodel,setsearchmodel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if(searchmanufacturer === '' && searchmodel === '') {
          return alert('Please fill in ther search bar')
        }

     
        setModel(searchmodel); 
        setManufacturer(searchmanufacturer);
        
    }

 

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                selected={searchmanufacturer}
                setselected={setsearchmanufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <Image 
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="car model icon"
          />

          <input type="text" name="model" value={searchmodel}
          placeholder="Tiguan"
          className="searchbar__input"
          onChange={(e) => setsearchmodel(e.target.value)}
          />

          <SearchButton otherClasses="sm:hidden"   />
        </div>
          <SearchButton otherClasses="max-sm:hidden"   />

    </form>
  )
}

export default SearchBar

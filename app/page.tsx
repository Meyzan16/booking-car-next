"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Hero,CarCard,SearchBar,CustomFilter,ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants';


export default function Home() {

  const [allcars, setallcars] = useState([]);
  const [loading, setloading] = useState(false);  

  //search state
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setmodel] = useState("");

  //filter state
  const [fuel, setfuel] = useState("");
  const [year, setyear] = useState(2022); 

  //pagination state
  const [limit, setlimit] = useState(8);

  const getCars = async () => {
    setloading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 8,
        model: model || '',
      });
  
      setallcars(result);
    } catch (error) {
      console.log(error);

    } finally {
      setloading(false);
    }
  }

  useEffect(()=> {
    console.log(fuel,year,limit,manufacturer,model);
    getCars();
  },[fuel,year,limit,manufacturer,model]);


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y   sm:px-16 px-6' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManufacturer={setmanufacturer} setModel={setmodel} />

          <div className='home__filter-container'>
            <CustomFilter  title="fuel" options={fuels} setFilter={setfuel} />
            <CustomFilter  title="year" options={yearsOfProduction} setFilter={setyear} />
          </div>
        </div>

      {allcars.length > 0 ? (
        <section>
          <div className='home__cars-wrapper'>
            {
              allcars?.map((car) => (
                <CarCard car={car} />
              ))
            }
          </div>

          {
            loading && (
              <div className='mt-16  w-full flex-center'>
                <Image 
                src="/loader.svg"
                alt='loader'
                width={50}
                height={50}
                className='object-contain'
                />
              </div>
            )
          }

          <ShowMore 
            pageNumber={limit / 8 }
            isNext = {limit > allcars.length}
            setlimit={setlimit}
          />
        </section>
      ):(
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>{allcars?.message}</p>
        </div>
      )}


        
      </div>
    </main>
  )
}

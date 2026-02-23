import { CarsCard, SkeletonCard } from '@/components'
import { Button } from '@/components/ui/button'
import { setCategory, setLoading, setSort } from '@/features/cars/carsSlice'
import { btn } from '@/styles/style'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cars = () => {
  const dispatch = useDispatch()
  const {filteredCars, loading} = useSelector(state => state.cars)

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(()=> {
      dispatch(setLoading(false))
    }, 1000)
  }, [dispatch]);
  return (
    <section className='pt-28 px-6 max-w-6xl mx-auto min-h-screen'>
        <h2 className="text-3xl font-bold text-secondary mb-6">Available Cars</h2>

        <div className='flex flex-wrap gap-4 mb-6'>
          <Button className={`${btn.btnStyle}`} onClick={() => dispatch(setCategory("All"))}>ALL</Button>
          <Button className={`${btn.btnStyle}`} onClick={() => dispatch(setCategory("SUV"))}>SUV</Button>
          <Button className={`${btn.btnStyle}`} onClick={() => dispatch(setCategory("Sedan"))}>Sedan</Button>

          <Button className={`${btn.btnStyle}`} onClick={() => dispatch(setSort("low"))}>
             Cheap → Expensive
          </Button>

           <Button className={`${btn.btnStyle}`} onClick={() => dispatch(setSort("high"))}>
             Expensive → Cheap
          </Button>

        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? Array.from({length: 6}).map((_, i) => (
              <SkeletonCard key={i}/>
            )) : filteredCars.map(car => (
              <CarsCard key={car.id} car={car}/>
            ))}
        </div>
    </section>
  )
}

export default Cars

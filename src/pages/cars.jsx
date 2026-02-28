import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CarsCard, SkeletonCard } from "@/components";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  setCategory,
  setLoading,
  setPriceRange,
  setSearch,
  setSort,
} from "@/features/cars/carsSlice";

const Cars = () => {
  const dispatch = useDispatch();

  const { loading, cars, category, sort, search, minPrice, maxPrice } =
    useSelector((state) => state.cars);

  // =========================
  // 🔥 FILTER + SORT LOGIC
  // =========================
  const filteredCars = useMemo(() => {
    let updatedCars = [...cars];

    // Category
    if (category !== "All") {
      updatedCars = updatedCars.filter((car) => car.category === category);
    }

    // Search
    if (search.trim() !== "") {
      updatedCars = updatedCars.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Price Range
    updatedCars = updatedCars.filter(
      (car) => car.price >= minPrice && car.price <= maxPrice,
    );

    // Sort (doim oxirida)
    if (sort === "low") {
      updatedCars.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      updatedCars.sort((a, b) => b.price - a.price);
    }

    return updatedCars;
  }, [cars, category, sort, search, minPrice, maxPrice]);

  // =========================
  // 🔥 FAKE LOADING
  // =========================
  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 800);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <section className="pt-28 px-6 max-w-6xl mx-auto min-h-screen">
      <h2 className="text-3xl font-bold text-secondary mb-8">Available Cars</h2>

      {/* ========================= */}
      {/* 🔎 FILTER SECTION */}
      {/* ========================= */}

      <div className="flex flex-wrap gap-4 mb-8 items-end">
        {/* 🔍 Search */}
        <div className="w-[220px]">
          <Input
            placeholder="Search car..."
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>

        {/* 🚗 Category */}
        <div className="w-[180px]">
          <Select
            value={category}
            onValueChange={(value) => dispatch(setCategory(value))}
          >
            <SelectTrigger className="bg-secondary text-foreground border-zinc-700">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-white border-zinc-700">
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="SUV">SUV</SelectItem>
              <SelectItem value="Sedan">Sedan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 💰 Sort */}
        <div className="w-[220px]">
          <Select
            value={sort}
            onValueChange={(value) => dispatch(setSort(value))}
          >
            <SelectTrigger className="bg-secondary text-foreground border-zinc-700">
              <SelectValue placeholder="Sort by Price" />
            </SelectTrigger>

            <SelectContent className="bg-zinc-900 text-white border-zinc-700">
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="low">Cheap → Expensive</SelectItem>
              <SelectItem value="high">Expensive → Cheap</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ========================= */}
      {/* 💰 PRICE RANGE */}
      {/* ========================= */}

      <div className="flex flex-col sm:flex-row gap-4 max-w-md mb-10 ">
        <div className="flex flex-col w-full">
          <label className="text-sm mb-1">Min Price</label>
          <input
            type="text"
            min="0"
            value={minPrice}
            onChange={(e) =>
              dispatch(
                setPriceRange({
                  min: Number(e.target.value) || 0,
                  max: maxPrice,
                }),
              )
            }
            className="border border-border px-4 py-2 rounded-lg bg-card"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm mb-1">Max Price</label>
          <input
            type="text"
            min="0"
            value={maxPrice}
            onChange={(e) =>
              dispatch(
                setPriceRange({
                  min: minPrice,
                  max: Number(e.target.value) || 0,
                }),
              )
            }
            className="border border-border px-4 py-2 rounded-lg bg-card"
          />
        </div>
      </div>

      {/* ========================= */}
      {/* 🚗 GRID */}
      {/* ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredCars.map((car) => <CarsCard key={car.id} car={car} />)}
      </div>
    </section>
  );
};

export default Cars;

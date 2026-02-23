import React from "react";
import { Button } from "@/components/ui/button";
import { car } from "@/assets";

const Hero = () => {
  return (
    <section className="relative pt-50 md:pt-28 pb-16 min-h-screen flex items-center 
bg-gradient-to-br from-background via-background to-secondary/10">

  <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute w-96 h-96 bg-secondary/20 blur-3xl rounded-full top-20 left-10"></div>
</div>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <p className="text-secondary font-medium tracking-wide">
            Premium Car Rental
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Drive Your Dream <br />
            <span className="text-secondary">Luxury Car</span>
          </h1>

          <p className="text-muted-foreground max-w-md">
            Experience the ultimate comfort and performance with our exclusive
            collection of luxury vehicles.
          </p>

          <div className="flex gap-4 pt-4">
            <Button className="bg-secondary text-background hover:bg-hover px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all
            cursor-pointer">
              Explore Cars
            </Button>

            <Button variant="outline" className="px-6 py-3 rounded-xl cursor-pointer">
              Learn More
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            src={car}
            alt="Luxury Car"
            className="w-full rounded-4xl  drop-shadow-2xl float-animation"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

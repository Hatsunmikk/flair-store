import { useEffect, useState } from "react";

const slides = [
  {
    title: "Welcome to FlairStore",
    subtitle: "Trendy products. Unbeatable prices. Delivered to your door.",
  },
  {
    title: "Uncover Unique Styles",
    subtitle: "Handpicked collections just for you.",
  },
  {
    title: "Fast & Free Shipping",
    subtitle: "Get your favorites at lightning speed.",
  },
  {
    title: "Shop With Confidence",
    subtitle: "Secure payments & easy returns.",
  },
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 2 seconds visible + 1 second transition = ~3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 sm:h-80 overflow-hidden bg-[#D5E5D5] text-[#343434]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center flex-col px-4 text-center pt-30"
            style={{ width: `${100 / slides.length}%` }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h1>
            <p className="text-md md:text-xl">{slide.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;




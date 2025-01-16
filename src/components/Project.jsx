import React from 'react';
import weatherImage from '../assets/Weather.jpg';
import FoodRecpie from '../assets/Food Recpie.jpg';
import eImage from '../assets/e-commerce.jpg';
import copyImage from '../assets/copy.jpg';

function Project() {
  return (
    <div className="bg-indigo-800 m-5 md:m-20 max-w-full">
      <div className="grid justify-items-center m-10">
        <h1 className="text-3xl text-white mt-5">Projects</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {/* Weather App */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <a href="https://weather-app-two-lyart.vercel.app" target="_blank">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Weather App
                </div>

                <p className="mt-2 text-slate-500">Stay updated with real-time weather forecasts.</p>
              </div>
              <div className="md:shrink-0 p-5">
                <img src={weatherImage} alt="weather app" width={150} height={150} />
              </div>
            </div>
          </a>
        </div>

        {/* Food Recipe App */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <a href="https://food-recipe-app-pied.vercel.app" target="_blank">
            <div className="md:flex">
              <div className="md:shrink-0 p-5">
                <img src={FoodRecpie} alt="Food Recipe app" width={150} height={150} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Food Recipe App
                </div>

                <p className="mt-2 text-slate-500">Discover, cook, and enjoy delicious recipes from around the world.</p>
              </div>
            </div>
          </a>
        </div>

        {/* E-Commerce App */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <a href="https://e-commerce-nine-gray-33.vercel.app" target="_blank">
            <div className="md:flex">
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  E-COMMERCE APP
                </div>

                <p className="mt-2 text-slate-500">Shop your favorite products anytime, anywhere.</p>
              </div>
              <div className="md:shrink-0 p-5">
                <img src={eImage} alt="E-Commerce app" width={150} height={150} />
              </div>
            </div>
          </a>
        </div>

        {/* Copy Paste App */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
          <a href="https://paste-app-six-topaz.vercel.app" target="_blank">
            <div className="md:flex">
              <div className="md:shrink-0 p-5">
                <img src={copyImage} alt="Copy Paste app" width={150} height={150} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Copy Paste App
                </div>

                <p className="mt-2 text-slate-500">Copy, paste, and store with ease and  Copy and paste made easy and efficient.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

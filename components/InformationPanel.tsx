import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

import CityPicker from "./CityPicker";

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
};

const InformationPanel = ({ city, lat, long, results }: Props) => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 p-10">
      <div className="pb-5">
        <h1 className="text-6xl font-bold text-white">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400 mt-5">
          Long/Lat: {long}, {lat}
        </p>
      </div>

      <CityPicker />

      <hr className="my-10" />

      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-2xl text-white">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-light text-slate-200">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase text-slate-200">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className="my-10 mb-5" />

      {/* TO FINISH WEATHER ICONS */}
      <div>
        <div>
          {/* Image */}
          <div>
            {/* <p>{results.current_weather.temperature.toFixed(1)}</p> */}

            <p>{/* weather code */}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border">
          <SunIcon className="h-10 w-10 text-yellow-400" />
          <div className="flex-1 flex justify-between items-center text-white">
            <p className="font-light">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-4 py-3 border">
          <MoonIcon className="h-10 w-10 text-yellow-400" />
          <div className="flex-1 flex justify-between items-center text-white">
            <p className="font-light">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      </div>

      <hr className="my-10 mb-5" />

      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3">
          <div className="text-white">
            <h1 className="font-light">
              Developed by{" "}
              <Link href="https://www.piotrmaciejewski.com" className="font-bold hover:text-rose-500" target="_blank">
                Piotr
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;

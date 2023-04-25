import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import getBasePath from "@/lib/getBasePath";
import cleanData from "@/lib/cleanData";

export const revalidate = 1440;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const WeatherPage = async ({ params: { city, lat, long } }: Props) => {
  const client = getClient();
  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;

  const dataToSend = cleanData(results, city);

  const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ weatherData: dataToSend }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  // console.log(results.hourly.time);

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Information Panel */}
      <InformationPanel city={city} lat={lat} long={long} results={results} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Udpated at:
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard message={content} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              color="yellow"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
            />
            <StatCard
              title="Maximum Temperature"
              color="green"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
            />
          </div>

          <div>
            <StatCard
              title="UV Index"
              metric={results.daily.uv_index_max[0].toFixed(1)}
              color="rose"
            />
            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <CalloutCard
                message="UV Index is high, please wear sun protection"
                warning
              />
            )}
          </div>

          <div className="flex space-x-3">
            <StatCard
              title="Wind Speed"
              metric={`${results.current_weather.windspeed.toFixed(1)} m/s`}
              color="cyan"
            />

            <StatCard
              title="Wind Direction"
              metric={`${results.current_weather.winddirection.toFixed(1)} deg`}
              color="violet"
            />
          </div>
        </div>
        <hr className="mb-5" />
        <div className="space-y-3">
          {/* TempChart */}
          <TempChart results={results} />

          {/* RainChart */}
          <RainChart results={results} />

          {/* HumidityChart */}
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;

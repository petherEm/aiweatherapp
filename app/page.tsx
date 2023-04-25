"use client";

import Link from "next/link";
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import Navbar from "@/components/Navbar";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 p-10 flex flex-col items-center">
        <Card className="max-w-4xl mx-auto mt-28">
          <div className="flex items-center">
            <SunIcon className="h-20 w-20 animate-pulse text-yellow-500" />
            <Text className="text-6xl font-bold text-left">AI Weather App</Text>
          </div>

          <Subtitle className="text-xl text-left font-semibold">
            <span className="text-black">Powered by </span>OpenAI, Next.js 13.3,
            Tailwind CSS, Tremor 2.0 and more
          </Subtitle>

          <Divider className="my-10" />

          <Card className="bg-gradient-to-br from-[#7d19d4] to-[rgb(221,17,65)]">
            {/* City Picker */}
            <CityPicker />
          </Card>
        </Card>
      </div>
    </div>
  );
}

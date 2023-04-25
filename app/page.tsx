"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 and More
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#7d19d4] to-[rgb(221,17,65)]">
          {/* City Picker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}

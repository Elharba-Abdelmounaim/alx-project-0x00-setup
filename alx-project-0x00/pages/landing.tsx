import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🚀 Landing Page</h1>

      <Card />
           
      <div>
        <h2 className="text-xl font-semibold mb-2">🔘 Button Variants</h2>

        <div className="space-x-3">
          <Button title="Small Rounded" style="text-sm rounded-sm" />
          <Button title="Medium Rounded" style="text-base rounded-md" />
          <Button title="Large Full" style="text-lg rounded-full" />
        </div>

        <div className="space-x-3 mt-4">
          <Button title="Small Full" style="text-sm rounded-full" />
          <Button title="Medium Sm" style="text-base rounded-sm" />
          <Button title="Large Md" style="text-lg rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

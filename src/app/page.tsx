import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button size={"lg"} className="rounded-full bg-custom-color">
        <CirclePlus />
        Click me
      </Button>
    </div>
  );
};

export default HomePage;

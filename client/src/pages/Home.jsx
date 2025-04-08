import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div className="flex items-center gap-4">
        <Button>Click me</Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Home;

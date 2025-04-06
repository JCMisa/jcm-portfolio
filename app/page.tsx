import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      My Protfolio
      <Button>Click Me</Button>
      <ModeToggle />
      <Image
        src={"/logo.svg"}
        width={1000}
        height={1000}
        alt="logo"
        className="w-10 h-10"
      />
    </div>
  );
}

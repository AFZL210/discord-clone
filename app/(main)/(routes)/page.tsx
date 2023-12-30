import { ModeToggle } from "@/components/mode_toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
      <div className="">
        this is a protected route
        <UserButton afterSignOutUrl="/" />
        <ModeToggle />
      </div>
  )
}

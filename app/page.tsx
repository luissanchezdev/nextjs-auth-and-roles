import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets:["latin"],
  weight: "600"
})

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      <div>
        <h1 className={cn("text-4xl font-bold text-white shadow-md", font.className )}>Inicio de sesión</h1>
        <LoginButton asChild>
          <Button variant={ "secondary" }>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
    
  );
}

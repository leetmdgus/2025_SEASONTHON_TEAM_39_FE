import { Sparkles } from "lucide-react"
import { Link } from "react-router-dom";
import profile_info from "@/assets/images/profile/profile.png"

export default function Header() {
  return (
     <header className="bg-[#F5F9FF] top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <Link to ="/">
                <h1 className="text-xl font-bold text-foreground text-[#0D519A]">MOODi</h1>
              </Link>
              
            </div>
            <Link to="/profile" className="text-muted-foreground">
              <div className="flex flex-row items-center gap-2">
                <img src={profile_info} alt="Profile" className="w-8 h-8 rounded-full" />
                <p className="text-[#0D519A]">김혜림</p>
              </div>
              
            </Link>
          </div>
        </div>
      </header>
  );
};


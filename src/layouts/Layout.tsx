import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import { ReactNode } from "react";

interface PostLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: PostLayoutProps) {
  return (
    <div className="whitespace-normal word-keep">
        <Header />
            {children}  
        <Footer />
    </div>
  );
}
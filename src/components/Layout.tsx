
import React from "react";
import { NavigationMenu } from "./NavigationMenu";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <main className="container mx-auto px-4 py-6">{children}</main>
      <footer className="mt-auto py-6 bg-purple-950/30 border-t border-purple-800/30">
        <div className="container mx-auto px-4 text-center text-purple-300">
          <p>© 2025 MedEgypt Care – Live Better with Diabetes & Hypertension</p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Layout;

import { ReactNode } from "react";
import FloatingDockDemo from "@/components/Sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Main content */}
      <div className="flex-grow w-full max-w-7xl pt-8">
        {/* Content will be displayed below the dock */}
        {children}
        {children}
        {children}
      </div>

      {/* Fixed Bottom Dock */}
      <div className="fixed bottom-5 left-0 right-0">
        <FloatingDockDemo />
      </div>
    </div>
  );
}

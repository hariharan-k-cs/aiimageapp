import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlexSans = IBM_Plex_Sans({ 
  subsets: ["latin"],
weight:['400','500','600','700'],
variable:'--font-ibm-plex' });

export const metadata: Metadata = {
  title: "Aitools",
  description: "Ai - powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} appearance={{variables:{colorPrimary:'blue'}}}>
      <html lang="en">
          <body 
          className={cn("font-IBMPlexSans antialiased",IBMPlexSans.variable)}>
            {children}
            </body>
        </html>
   </ClerkProvider>  
  );
}

import ReduxProvider from "@/providers/redux-provider";
import UserFetching from "@/components/user-fetching";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Inter } from "next/font/google";
import "./globals.css";
import Toaster from "@/components/toaster";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Inkspace",
  description: "A place to read, write, and deepen your understanding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">
          <ReduxProvider>
            <UserFetching />
            {children}
            <Toaster />
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}

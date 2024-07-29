import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono'  });

export const metadata = {
  title: "Arkh portfolio",
  description: "Alireza Khoshnami's personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}

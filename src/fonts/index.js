import { Montserrat, Urbanist } from "next/font/google";

export const fontNunito = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-nunito",
});

export const fontUrbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-urbanist",
});

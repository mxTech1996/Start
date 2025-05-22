"use client";

import Provider from "@/store/provider";
import { fontNunito, fontUrbanist } from "../fonts";
import "../styles/globals.css";
import { pageName } from "@/data";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{pageName}</title>
      </head>
      <Provider>
        <body
          className={`${fontUrbanist.variable} ${fontNunito.variable}  font-nunito`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}

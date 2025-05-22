"use client";
import React from "react";
import { ContactInfo } from "ecommerce-mxtech";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

export default function MoreInformation() {
  return (
    <main className="relative">
      <Navbar />
      <ContactInfo />
      <Footer />
    </main>
  );
}

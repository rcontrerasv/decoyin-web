import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Salud Naturista DECOYÍN — Iglesia de la Filosofía del Espíritu",
  description: "Proyecto espiritual, filosófico, educativo y terapéutico sin ánimo de lucro. Fundado por Julián Pérez Gutiérrez. Formación, crecimiento interior y salud integral.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

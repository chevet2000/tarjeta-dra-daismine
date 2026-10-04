import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // En Vercel, VERCEL_URL se inyecta automáticamente (sin protocolo).
  // Para dominio propio: definir NEXT_PUBLIC_SITE_URL = https://tudominio.com
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: "Dra. Daismine Pérez | Médico General — Atención Médica a Domicilio",
  description:
    "Atención médica personalizada, a domicilio y online por videollamada. Consulta de medicina general y familiar, salud mental, adulto mayor, curas de heridas, sueros y fluidoterapia. Tu mejor aliada. ¡Agenda tu cita hoy!",
  keywords: [
    "médico general",
    "médico a domicilio",
    "consulta médica",
    "consulta online",
    "médico por videollamada",
    "Dra. Daismine Pérez",
    "salud familiar",
    "curas de heridas",
    "fluidoterapia",
  ],
  authors: [{ name: "Dra. Daismine Pérez" }],
  openGraph: {
    title: "Dra. Daismine Pérez | Médico General a Domicilio y Online",
    description:
      "Atención médica personalizada, a domicilio y online. Tu mejor aliada. Agenda tu cita: 0412-8322910 / 0412-8814227",
    type: "profile",
    locale: "es_VE",
    siteName: "Dra. Daismine Pérez — Tarjeta Digital",
    images: [
      {
        url: "/og-tarjeta-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Daismine Pérez — Médico General. Atención personalizada, a domicilio y online. Teléfonos: 0412-8322910 / 0412-8814227",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Daismine Pérez | Médico General a Domicilio y Online",
    description:
      "Atención médica personalizada, a domicilio y online. Tu mejor aliada. ¡Agenda tu cita!",
    images: ["/og-tarjeta-v2.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

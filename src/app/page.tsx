"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Baby,
  Bandage,
  Brain,
  CalendarCheck2,
  Download,
  FileSearch,
  FileText,
  HeartPulse,
  HeartHandshake,
  Home as HomeIcon,
  MessageCircle,
  Phone,
  Plus,
  Scissors,
  Share2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Video,
} from "lucide-react";

/* ============================== DATOS ============================== */

const WHATS_MSG = encodeURIComponent(
  "Hola Dra. Daismine Pérez, quisiera agendar una cita médica. ¿Está disponible?"
);

const telefonos = [
  { label: "Línea 1", numero: "0412-8322910", tel: "04128322910", wa: "584128322910" },
  { label: "Línea 2", numero: "0412-8814227", tel: "04128814227", wa: "584128814227" },
];

const gradientes = [
  "from-teal-500 to-emerald-400",
  "from-emerald-500 to-teal-600",
  "from-amber-400 to-orange-400",
  "from-rose-400 to-pink-400",
  "from-lime-400 to-emerald-500",
  "from-orange-400 to-amber-400",
  "from-emerald-400 to-teal-500",
];

type Servicio = {
  icon: React.ElementType;
  titulo: string;
  desc: string;
  gradiente: string;
  suave: string;
};

const servicios: Servicio[] = [
  {
    icon: Stethoscope,
    titulo: "Consulta de Medicina General y Familiar",
    desc: "Presencial a domicilio u online, para ti y tu familia",
    gradiente: gradientes[0],
    suave: "bg-teal-50",
  },
  {
    icon: Video,
    titulo: "Consulta Online por Videollamada",
    desc: "Atención médica remota desde donde estés",
    gradiente: gradientes[6],
    suave: "bg-lime-50",
  },
  {
    icon: Brain,
    titulo: "Orientación y Seguimiento en Salud Mental",
    desc: "Acompañamiento con calidez y confidencialidad",
    gradiente: gradientes[2],
    suave: "bg-amber-50",
  },
  {
    icon: HeartHandshake,
    titulo: "Atención y Cuidado al Adulto Mayor",
    desc: "Cuidado especializado, paciente y respetuoso",
    gradiente: gradientes[3],
    suave: "bg-rose-50",
  },
  {
    icon: FileSearch,
    titulo: "Lectura e Interpretación de Exámenes Clínicos",
    desc: "Tus resultados explicados con claridad",
    gradiente: gradientes[1],
    suave: "bg-emerald-50",
  },
  {
    icon: FileText,
    titulo: "Órdenes Médicas e Informes",
    desc: "Documentos claros, precisos y oportunos",
    gradiente: gradientes[4],
    suave: "bg-lime-50",
  },
  {
    icon: Baby,
    titulo: "Constancia de Adulto y Niño Sano",
    desc: "Certificados de salud para tu tranquilidad",
    gradiente: gradientes[5],
    suave: "bg-orange-50",
  },
  {
    icon: Scissors,
    titulo: "Retiro de Puntos Post-Quirúrgicos",
    desc: "Procedimiento seguro, cuidadoso y oportuno",
    gradiente: gradientes[0],
    suave: "bg-teal-50",
  },
  {
    icon: Bandage,
    titulo: "Curas de Heridas, Escaras y Úlceras",
    desc: "Curas post-quirúrgicas con técnica experta",
    gradiente: gradientes[3],
    suave: "bg-rose-50",
  },
  {
    icon: Syringe,
    titulo: "Medicamentos, Sueros y Fluidoterapia",
    desc: "Terapias aplicadas en la comodidad de tu hogar",
    gradiente: gradientes[1],
    suave: "bg-emerald-50",
  },
];

const destacados = [0, 1, 8, 9, 3];

const marqueeItems = [
  { icon: Stethoscope, texto: "Consulta General y Familiar" },
  { icon: Video, texto: "Consultas Online" },
  { icon: HomeIcon, texto: "Atención a Domicilio" },
  { icon: Brain, texto: "Salud Mental" },
  { icon: HeartHandshake, texto: "Adulto Mayor" },
  { icon: FileSearch, texto: "Exámenes Clínicos" },
  { icon: FileText, texto: "Órdenes e Informes" },
  { icon: Baby, texto: "Niño y Adulto Sano" },
  { icon: Scissors, texto: "Retiro de Puntos" },
  { icon: Bandage, texto: "Curas de Heridas" },
  { icon: Syringe, texto: "Sueros y Fluidoterapia" },
];

/* ============================ ANIMACIONES ============================ */

const heroV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const gridV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

/* ============================== PÁGINA ============================== */

export default function Page() {
  const [index, setIndex] = useState(0);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % destacados.length);
    }, 4200);
    return () => clearInterval(t);
  }, [index]);

  async function compartir() {
    const data = {
      title: "Dra. Daismine Pérez — Médico General",
      text: "Atención médica personalizada y a domicilio. Tu mejor aliada.",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      }
    } catch {
      /* usuario canceló */
    }
  }

  const s = servicios[destacados[index]];

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-teal-50 via-white to-teal-100/70">
      {/* Decoración de fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute -right-24 top-2/3 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute left-1/2 top-4 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-md flex-1 px-4 pt-6">
        {/* ============================ HERO ============================ */}
        <motion.header
          variants={heroV}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-500 animate-gradient-pan px-5 pb-8 pt-9 text-white shadow-2xl shadow-teal-900/20"
        >
          {/* Iconos flotantes decorativos */}
          <Stethoscope aria-hidden className="absolute left-5 top-24 h-8 w-8 animate-float-y text-white/15" />
          <Activity aria-hidden className="absolute right-6 top-44 h-9 w-9 animate-float-y text-white/10" style={{ animationDelay: "1.2s" }} />
          <Plus aria-hidden className="absolute bottom-44 left-8 h-6 w-6 animate-float-y text-white/10" style={{ animationDelay: "2s" }} />
          <Plus aria-hidden className="absolute bottom-24 right-10 h-5 w-5 animate-float-y text-white/15" style={{ animationDelay: "0.6s" }} />

          {/* Insignia superior */}
          <motion.div variants={heroItem} className="relative z-10 mx-auto flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur">
            <Stethoscope className="h-4 w-4" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
              Médico General
            </span>
          </motion.div>

          {/* Foto con anillo giratorio */}
          <motion.div variants={heroItem} className="relative z-10 mx-auto mt-8 h-44 w-44">
            <div
              aria-hidden
              className="absolute -inset-2 animate-spin-slow rounded-full"
              style={{ background: "conic-gradient(from 0deg, #fbbf24, #34d399, #ffffff, #fbbf24)" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/90 bg-teal-100 shadow-2xl">
              <Image
                src="/foto-dra-daismine.png"
                alt="Dra. Daismine Pérez, Médico General"
                fill
                priority
                sizes="176px"
                className="object-cover object-top"
              />
            </div>
            <div aria-hidden className="absolute -right-2 top-2 flex h-10 w-10 animate-float-y items-center justify-center rounded-full bg-white text-rose-500 shadow-lg">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div aria-hidden className="absolute -left-2 bottom-3 flex h-9 w-9 animate-float-y items-center justify-center rounded-full bg-amber-300 text-teal-900 shadow-lg" style={{ animationDelay: "1.4s" }}>
              <ShieldCheck className="h-[18px] w-[18px]" />
            </div>
          </motion.div>

          {/* Nombre y eslogan */}
          <motion.div variants={heroItem} className="relative z-10 mt-6 text-center">
            <h1 className="font-display text-[28px] font-extrabold leading-tight tracking-tight drop-shadow-sm sm:text-3xl">
              Dra. Daismine Pérez
            </h1>
            <p className="text-shimmer-light mt-1 font-display text-lg font-semibold italic">
              «Tu mejor aliada»
            </p>
          </motion.div>

          {/* Banner a domicilio */}
          <motion.div
            variants={heroItem}
            className="relative z-10 mt-6 flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-teal-600 shadow-md">
              <HomeIcon className="h-5 w-5" />
              <span aria-hidden className="animate-ping-slow absolute -inset-1 rounded-xl bg-white/40" />
              <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-300 text-teal-900 shadow">
                <Video className="h-3 w-3" />
              </span>
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                Atención médica
              </p>
              <p className="font-display text-base font-bold leading-tight">
                Personalizada, a domicilio y Online
              </p>
            </div>
          </motion.div>

          {/* Botones CTA */}
          <motion.div variants={heroItem} className="relative z-10 mt-5 flex gap-3">
            <a
              href={`https://wa.me/${telefonos[0].wa}?text=${WHATS_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-1"
            >
              <span aria-hidden className="animate-ping-slow absolute inset-0 rounded-2xl bg-lime-300/70" />
              <span className="relative flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 font-display text-sm font-bold text-white shadow-lg transition hover:brightness-105 active:scale-[0.98]">
                <MessageCircle className="h-5 w-5" />
                Agenda por WhatsApp
              </span>
            </a>
            <a
              href={`tel:${telefonos[0].tel}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-4 py-3 font-display text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              Llamar
            </a>
          </motion.div>
        </motion.header>

        {/* ======================== CINTA MARQUEE ======================== */}
        <div className="mt-5 overflow-hidden rounded-2xl bg-teal-950 py-2.5 shadow-md">
          <div className="animate-marquee flex w-max items-center whitespace-nowrap">
            {[0, 1].map((copia) => (
              <div key={copia} aria-hidden={copia === 1} className="flex items-center gap-6 pr-6">
                {marqueeItems.map((item, i) => (
                  <span key={i} className="flex items-center gap-2 text-xs font-semibold text-teal-50">
                    <item.icon className="h-3.5 w-3.5 text-amber-300" />
                    {item.texto}
                    <span className="ml-4 h-1 w-1 rounded-full bg-amber-300/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ========================== SERVICIOS ========================== */}
        <section className="mt-8" aria-labelledby="titulo-servicios">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <h2 id="titulo-servicios" className="font-display text-xl font-extrabold text-teal-950">
              Nuestros servicios
            </h2>
            <Sparkles className="h-5 w-5 text-amber-500" />
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "76px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-2 h-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400"
          />
          <p className="mt-3 text-center text-sm leading-relaxed text-teal-800/70">
            Atención médica integral, a domicilio u online, con la calidez que mereces.
          </p>

          {/* --- Carrusel destacado (animación tipo publicidad) --- */}
          <div className="mt-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-600">
              Servicio destacado
            </span>
            <div className="relative mt-2 overflow-visible rounded-3xl shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 70, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -70, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`shine-sweep relative flex items-center gap-4 rounded-3xl bg-gradient-to-br ${s.gradiente} p-5 text-white shadow-lg`}
                >
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/25 backdrop-blur">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <div className="relative z-10 min-w-0">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                      <Sparkles className="h-3 w-3" />
                      A domicilio u Online
                    </span>
                    <h3 className="mt-1.5 font-display text-[15px] font-extrabold leading-snug">
                      {s.titulo}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/85">{s.desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Barra de progreso */}
              <div aria-hidden className="absolute bottom-0 left-2 right-2 h-1.5 overflow-hidden rounded-full bg-black/10">
                <motion.div
                  key={`bar-${index}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.2, ease: "linear" }}
                  className="h-full rounded-full bg-white/90"
                />
              </div>
            </div>

            {/* Puntos indicadores */}
            <div className="mt-3 flex items-center justify-center gap-1.5">
              {destacados.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver servicio destacado ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-teal-600" : "w-2 bg-teal-200 hover:bg-teal-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* --- Cuadrícula de servicios --- */}
          <motion.div
            variants={gridV}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-6 grid grid-cols-2 gap-3"
          >
            {servicios.map((sv, i) => (
              <motion.article
                key={sv.titulo}
                variants={gridItem}
                className={`group relative overflow-hidden rounded-2xl border border-teal-100/80 ${sv.suave} p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div
                  className={`animate-float-y mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${sv.gradiente} text-white shadow-md`}
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <sv.icon className="h-5 w-5" />
                </div>
                <h3 className="text-[13px] font-bold leading-snug text-teal-950">
                  {sv.titulo}
                </h3>
                <p className="mt-1.5 text-[11px] leading-relaxed text-teal-800/70">
                  {sv.desc}
                </p>
                <sv.icon
                  aria-hidden
                  className="absolute -bottom-4 -right-4 h-16 w-16 text-teal-900/5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-125"
                />
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ========================== CONTACTO ========================== */}
        <section className="mt-10" aria-labelledby="titulo-contacto">
          <div className="flex items-center justify-center gap-2">
            <CalendarCheck2 className="h-5 w-5 text-teal-600" />
            <h2 id="titulo-contacto" className="font-display text-xl font-extrabold text-teal-950">
              Agenda tu cita hoy
            </h2>
          </div>
          <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-teal-800/70">
            Escríbeme o llámame directamente. Atención personalizada en la comodidad
            de tu hogar u online, desde donde estés.
          </p>

          <div className="mt-5 space-y-3">
            {telefonos.map((t) => (
              <div
                key={t.tel}
                className="rounded-2xl border border-teal-100 bg-white p-4 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-600">
                    {t.label}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-semibold text-teal-700">
                    <HomeIcon className="h-3 w-3" />
                    Domicilio y Online
                  </span>
                </div>
                <p className="mt-1 font-display text-2xl font-extrabold tracking-tight text-teal-950">
                  {t.numero}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${t.tel}`}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-teal-200 bg-teal-50 px-3 py-2.5 text-sm font-bold text-teal-700 transition hover:bg-teal-100 active:scale-[0.98]"
                  >
                    <Phone className="h-4 w-4" />
                    Llamar
                  </a>
                  <a
                    href={`https://wa.me/${t.wa}?text=${WHATS_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-bold text-white shadow transition hover:brightness-105 active:scale-[0.98]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href="/contacto-dra-daismine-perez.vcf"
              download
              className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100 active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Guardar contacto
            </a>
            <button
              onClick={compartir}
              className="flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-sm font-bold text-amber-700 transition hover:bg-amber-100 active:scale-[0.98]"
            >
              <Share2 className="h-4 w-4" />
              {copiado ? "¡Enlace copiado!" : "Compartir"}
            </button>
          </div>
        </section>
      </div>

      {/* ============================ FOOTER ============================ */}
      <footer className="relative mt-12 bg-teal-950 py-8 text-center text-teal-200">
        <p className="font-display text-lg font-bold text-white">Dra. Daismine Pérez</p>
        <p className="mt-1 text-sm text-teal-300">
          Médico General · Atención personalizada, a domicilio y online
        </p>
        <p className="text-shimmer-light mt-3 font-display text-sm font-semibold italic">
          «Tu mejor aliada»
        </p>
        <p className="mx-auto mt-4 max-w-xs text-[11px] leading-relaxed text-teal-400/80">
          Consulta general y familiar · Online por videollamada · Salud mental ·
          Adulto mayor · Curas de heridas · Sueros y fluidoterapia
        </p>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <motion.a
        href={`https://wa.me/${telefonos[0].wa}?text=${WHATS_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbeme por WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
      >
        <span aria-hidden className="animate-ping-slow absolute inset-0 rounded-full bg-[#25D366]" />
        <MessageCircle className="relative h-7 w-7" />
      </motion.a>
    </div>
  );
}

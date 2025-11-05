import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "100%",
    title: "Accesible",
    desc: "Diseño inclusivo que cumple con estándares WCAG garantizando acceso para todos los usuarios."
  },
  {
    count: "24/7",
    title: "Disponibilidad",
    desc: "Sistema disponible las 24 horas del día para gestionar citas médicas sin limitaciones de horario."
  },
  {
    count: "70%",
    title: "Reducción de Tiempos",
    desc: "Optimización de procesos que reduce significativamente los tiempos de espera en la atención médica."
  },
  {
    count: "100%",
    title: "Seguro",
    desc: "Cumplimiento con normativas de protección de datos personales y seguridad de la información médica."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
              Aplicativo basado en Inteligencia Artificial
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Sistema de Gestión de Citas Médicas SOS EPS
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
              Todas las secciones y páginas del aplicativo están diseñadas para ser completamente responsivas y verse perfectas en todos los tipos de pantallas, incluyendo teléfonos, tablets o escritorios, garantizando acceso desde cualquier dispositivo.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                <a href="#pricing">
                  <Button color="black" className="flex items-center">
                     Conocer Más
                  </Button>
                </a>
              </div>
            </div>
            <img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;

import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Enfoque en la calidad y usabilidad
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Diseño centrado en el usuario para la gestión de citas médicas
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32">
              Aplicativo basado en inteligencia artificial diseñado específicamente para mejorar la experiencia del usuario en la SOS EPS Pereira, optimizando la accesibilidad y reduciendo los tiempos de espera en la atención médica.
            </Typography>
          </div>
          <img src="consistenly.png" alt="components" className="mx-auto hidden md:flex" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;

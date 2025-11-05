import React from "react";
import {
  Button,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5"
            >
              Solución tecnológica para la salud
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Inteligencia Artificial al servicio de los pacientes
            </Typography>
            <Typography color="blue-gray" className="lg:pr-20">
              Aplicativo innovador que utiliza procesamiento de lenguaje natural y aprendizaje automático para optimizar la gestión de citas médicas, mejorando la experiencia del usuario y reduciendo significativamente los tiempos de espera en la SOS EPS Pereira.
            </Typography>
            <a href="#examplePages">
              <Button color="black" variant="text" size="sm" className="flex items-center mx-auto md:mr-auto lg:ml-0 gap-2 mt-4">
                Ver Características <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </a>
          </div>
            <img src="code.png" alt="iphone" className="max-w-2xl rounded-3xl hidden md:flex mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;

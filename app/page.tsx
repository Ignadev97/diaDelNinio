"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  MapPin,
  Theater,
  Coffee,
  Music,
  Candy,
  Heart,
  Copy,
  Gift,
  DollarSign,
  Check,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Component() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Efecto de confeti al cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      launchConfetti();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Función para lanzar confeti
  const launchConfetti = () => {
    // Confeti desde la izquierda
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio: number, opts: any) {
      const confetti = (window as any).confetti;
      if (confetti) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
          colors: ["#3B82F6", "#FACC15", "#EF4444", "#10B981", "#8B5CF6"],
        });
      }
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  // Función para manejar el click del botón
  const handleConfirmAttendance = () => {
    launchConfetti();
    setShowModal(true);
  };

  const copyAlias = async () => {
    try {
      await navigator.clipboard.writeText("maxi.alejo.guada");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white font-nunito">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 leading-tight">
            ¡Gran Festejo del Día del Niño!
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-semibold">
            Organizado por la comunidad de conductores de Uber Moto Tucumán
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Te invitamos a compartir una tarde increíble llena de alegría,
            juegos y sorpresas para los más pequeños. ¡No te lo podés perder!
          </p>
          <Button
            size="lg"
            className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={handleConfirmAttendance}
          >
            Confirmar Asistencia
          </Button>
        </div>
      </section>

      {/* Actividades Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-16">
            ¿Qué vas a encontrar en el evento?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta 1 */}
            <Card className="border-2 border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Theater className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Personajes y Shows
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Superhéroes y princesas visitarán el evento para jugar y
                  sacarse fotos con los niños.
                </p>
              </CardContent>
            </Card>

            {/* Tarjeta 2 */}
            <Card className="border-2 border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Coffee className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Merienda
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Disfrutaremos de una chocolatada caliente, té, tortillas y
                  facturas.
                </p>
              </CardContent>
            </Card>

            {/* Tarjeta 3 */}
            <Card className="border-2 border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Music className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Música y Artistas
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bandas en vivo y artistas locales le pondrán ritmo y color a
                  nuestra tarde.
                </p>
              </CardContent>
            </Card>

            {/* Tarjeta 4 */}
            <Card className="border-2 border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <Candy className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Dulces y Sorpresas
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  ¡Una montaña de golosinas, sorteos y muchos regalos para todos
                  los chicos!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lugar y Fecha Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            ¡Te esperamos!
          </h2>

          <div className="space-y-8 mb-12">
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
              <Calendar className="w-8 h-8" />
              <span className="font-semibold">Domingo 10 de Agosto</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
              <Clock className="w-8 h-8" />
              <span className="font-semibold">A partir de las 15:00 hs</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
              <MapPin className="w-8 h-8" />
              <span className="font-semibold">
                España 1844, San Miguel de Tucumán, Argentina
              </span>
            </div>
          </div>
          <a href="https://maps.app.goo.gl/gLxVRcc7KLnVt8an7" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-full text-lg transition-all duration-300"
            >
              Ver en Google Maps
            </Button>
          </a>
        </div>
      </section>

      {/* Sección de Colaboración */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            ¿Querés aportar a este evento?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Aporte Monetario */}
            <Card className="border-2 border-slate-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <DollarSign className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Aporte Monetario
                </h3>
                <p className="text-gray-600 mb-6">
                  Podés colaborar monetariamente a este alias:
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <code className="text-lg font-mono text-blue-600 font-bold">
                    maxi.alejo.guada
                  </code>
                </div>
                <Button
                  onClick={copyAlias}
                  className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      ¡Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar Alias
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Aporte Físico */}
            <Card className="border-2 border-slate-200 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <Gift className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Colaboración Física
                </h3>
                <p className="text-gray-600 mb-4">
                  O bien podés llegar a la calle <strong>España 1844</strong>{" "}
                  para colaborar con:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    🧸 <strong>Juguetes</strong> para los niños
                  </p>
                  <p>
                    🍰 <strong>Comida</strong> para la merienda
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-100 rounded-xl p-6">
            <p className="text-lg text-blue-800 font-semibold">
              ¡Desde ya te agradecemos! 💙
            </p>
            <p className="text-blue-700 mt-2">
              Tu colaboración hace posible que más niños disfruten de este
              hermoso evento.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
            Un evento hecho con </p>
            <span><Heart className="w-5 h-5 text-red-500 fill-current" /></span>
            <p>  por y para
            la comunidad de conductores de Uber Moto en Tucumán.
          </p>
          <p className="text-gray-600 text-lg flex items-center justify-center gap-2 mt-4">
            Desarrollado por <a href="https://wa.me/+5492613421582" className="text-blue-700">Ignacio Tello</a>
          </p>
        </div>
      </footer>

      {/* Modal de confirmación */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-blue-600 mb-4">
              🎉 ¡Genial, te esperamos! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700">
              ¡Qué emoción tenerte en nuestro gran festejo!
            </p>
            <p className="text-gray-600">
              Recordá: <strong>Domingo 10 de Agosto a las 15:00 hs</strong>
            </p>
            <p className="text-gray-600">
              📍 España 1844, San Miguel de Tucumán
            </p>
            <Button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
            >
              ¡Perfecto!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

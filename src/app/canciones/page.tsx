import PageHeader from "@/components/PageHeader";
import Image from "next/image";

const videos = [
  { id: "CSHnDkT9bxc", title: "Canción Terapéutica" },
  { id: "FVtDb4c-EFw", title: "Canción para tu evolución" },
  { id: "afPdr6JMqtY", title: "Video-Canción DECOYÍN" },
  { id: "AhuKd2B2vrc", title: "Canción espiritual" },
  { id: "wBrQDgIMZug", title: "Música para el alma" },
  { id: "UjGaQq0gX6g", title: "Canción formativa" },
  { id: "1sMDSkW1lvc", title: "Canción de sanación" },
  { id: "vDwQar7K9O4", title: "Melodía terapéutica" },
  { id: "dEfTpeinR6E", title: "Canción de despertar" },
];

export default function Canciones() {
  return (
    <>
      <PageHeader
        title="🎵 Canciones"
        subtitle="Más de 963 canciones Filo-Psico-Sóficas Terapéuticas subidas a Internet, subvencionadas por nuestra ONG."
      />
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Portada principal */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <Image src="/images/cancion-terapeutica.jpg" alt="Canción Terapéutica para tu evolución" width={600} height={340} className="rounded-xl shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Tu Canción Filo-Psico-Sófica Terapéutica para tu Evolución</h2>
              <p className="text-gray-600 mb-4">
                Un proyecto formativo con canciones, subvencionado por nuestra ONG. Más de 1.000 vídeos subidos a Internet con 963 canciones para tu formación, crecimiento interior y salud.
              </p>
              <Image src="/images/album.jpg" alt="Álbum DECOYÍN" width={300} height={170} className="rounded-lg shadow-md" />
            </div>
          </div>

          {/* Canal de YouTube */}
          <div className="text-center mb-8">
            <a href="https://youtube.com/@PsicoAlquimia" target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              ▶️ Canal YouTube @PsicoAlquimia
            </a>
            <span className="mx-4 text-gray-400">·</span>
            <a href="https://www.youtube.com/playlist?list=UUgSDLJG0QrrIHxzSUXH9rIA" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              📋 Playlist Completa
            </a>
          </div>

          {/* Grid de videos */}
          <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Video-Canciones Destacadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-700">{v.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Facebook */}
          <div className="mt-12 text-center">
            <Image src="/images/facebook-canciones.jpg" alt="Facebook Salud Naturista" width={317} height={132} className="mx-auto rounded-lg shadow-md mb-4" />
            <a href="https://www.facebook.com/saludnaturista" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline font-medium">
              📘 Visita nuestra página de Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

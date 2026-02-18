import PageHeader from "@/components/PageHeader";

const news = [
  { date: "2024", title: "XV Congreso Internacional", desc: "Decimoquinta edición del Congreso Internacional del proyecto Salud Naturista DECOYÍN.", icon: "🌍" },
  { date: "2024", title: "Nueva edición de la Gaceta", desc: "Disponible la última publicación de la Gaceta del proyecto con artículos de formación y reflexión.", icon: "📰" },
  { date: "2024", title: "Más de 963 canciones publicadas", desc: "Se sigue ampliando el catálogo de canciones Filo-Psico-Sóficas Terapéuticas.", icon: "🎵" },
  { date: "2024", title: "Más de 1.000 vídeos en Internet", desc: "El proyecto supera los mil vídeos formativos subidos a plataformas de Internet.", icon: "🎬" },
  { date: "2024", title: 'Libro "Paloma"', desc: "La obra de Julián Pérez Gutiérrez sigue disponible para todos los interesados.", icon: "📖" },
];

export default function Novedades() {
  return (
    <>
      <PageHeader title="Novedades" subtitle="Noticias y actualizaciones del proyecto" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {news.map((n, i) => (
            <div key={i} className="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
              <span className="text-3xl shrink-0">{n.icon}</span>
              <div>
                <span className="text-xs text-gold-600 font-semibold">{n.date}</span>
                <h3 className="text-lg font-bold text-primary-800 mb-1">{n.title}</h3>
                <p className="text-gray-600">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

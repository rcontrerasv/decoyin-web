import PageHeader from "@/components/PageHeader";

export default function Formacion() {
  return (
    <>
      <PageHeader title="Formación" subtitle="Cursos y formación espiritual para tu crecimiento interior" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
          <p className="text-lg text-gray-700 leading-relaxed">
            La formación de Salud Naturista DECOYÍN abarca todas las dimensiones del ser humano: física, emocional, mental, energética y sutil. Nuestros programas están diseñados tanto para terapeutas avanzados como para personas que desean evolucionar y crecer interiormente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: "🧘", title: "Salud Integral", desc: "Formación en salud naturista abarcando las dimensiones física, emocional, mental, energética y sutil." },
            { icon: "📖", title: "Filosofía del Espíritu", desc: "Estudios sobre la filosofía espiritual y el crecimiento interior del ser humano." },
            { icon: "🎵", title: "Canciones Terapéuticas", desc: "Formación a través de las canciones Filo-Psico-Sóficas Terapéuticas como herramienta de evolución." },
            { icon: "💚", title: "Rehabilitación", desc: "Programas de rehabilitación integral para la superación de dolencias, enfermedades y crisis." },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <span className="text-3xl mb-3 block">{c.icon}</span>
              <h3 className="text-xl font-bold text-primary-800 mb-2">{c.title}</h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-800 text-white rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">¿Te interesa nuestra formación?</h3>
          <p className="text-blue-200 mb-4">Contacta con nosotros para más información sobre cursos y programas.</p>
          <a href="mailto:Info@saludnaturista.es" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Solicitar información
          </a>
        </div>
      </div>
    </>
  );
}

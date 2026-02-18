import Link from "next/link";

const highlights = [
  { icon: "📰", title: "Gaceta", desc: "Publicación oficial del proyecto Salud Naturista DECOYÍN.", href: "/novedades" },
  { icon: "📖", title: 'Libro "Paloma"', desc: "Obra publicada por Julián Pérez Gutiérrez.", href: "/cometidos" },
  { icon: "🎵", title: "Canciones Terapéuticas", desc: "Tu canción Filo-Psico-Sófica Terapéutica para tu evolución. Más de 963 canciones.", href: "/canciones" },
  { icon: "🌍", title: "XV Congreso Internacional", desc: "Decimoquinta edición del Congreso Internacional del proyecto.", href: "/novedades" },
  { icon: "🤝", title: "Voluntariado", desc: "Únete como voluntario y forma parte de esta labor sin ánimo de lucro.", href: "/colaboracion" },
  { icon: "🎓", title: "UPFED — Universidad", desc: "Universidad, PhD y PsicoAlquimia. Formación espiritual avanzada.", href: "/universidad" },
  { icon: "🎬", title: "Más de 1.000 Vídeos", desc: "Contenido audiovisual subido a Internet para tu formación y crecimiento.", href: "/canciones" },
  { icon: "💚", title: "Rehabilitación", desc: "Sección dedicada a la rehabilitación integral del ser humano.", href: "/formacion" },
];

const sections = [
  { href: "/cometidos", icon: "🎯", title: "Cometidos", desc: "Misión, visión y propósitos del proyecto." },
  { href: "/equipo", icon: "👥", title: "Equipo", desc: "Conoce al equipo de trabajo y al presidente." },
  { href: "/formacion", icon: "📚", title: "Formación", desc: "Cursos y formación espiritual para tu crecimiento." },
  { href: "/retiros", icon: "🏔️", title: "Retiros", desc: "Retiros espirituales y vacaciones para el alma." },
  { href: "/radio", icon: "📻", title: "Radio", desc: "Escucha la radio del proyecto." },
  { href: "/iglesia", icon: "✦", title: "IFE", desc: "Iglesia de la Filosofía del Espíritu." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold-400 text-sm md:text-base mb-4 tracking-widest uppercase">Iglesia de la Filosofía del Espíritu · IFE</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Salud Naturista <span className="gradient-gold">DECOYÍN</span>
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-10">
            <p className="text-base md:text-lg leading-relaxed text-blue-100">
              En hora buena por consultar Salud Naturista DECOYÍN. Aquí descubrirás un verdadero tesoro a tu alcance, para tu formación, crecimiento interior y salud: física, emocional, mental, energética y sutil. Muy útil para terapeutas avanzados y para personas que quieren evolucionar o superar una dolencia, enfermedad, crisis, etc.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formacion" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Formación y Cursos
            </Link>
            <Link href="/contacto" className="border-2 border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* ONG notice */}
      <section className="bg-gold-50 border-b border-gold-200 py-4">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base text-gold-600 font-medium">
            💛 Proyecto sin ánimo de lucro · ONG que subvenciona el proyecto formativo con canciones terapéuticas
          </p>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="py-16 bg-spirit-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">Descubre DECOYÍN</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((h) => (
              <Link key={h.title} href={h.href} className="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100 block">
                <span className="text-3xl mb-3 block">{h.icon}</span>
                <h3 className="font-bold text-primary-800 mb-1">{h.title}</h3>
                <p className="text-sm text-gray-600">{h.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">Explora las Secciones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="card-hover block bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold text-primary-800 mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber más?</h2>
          <p className="text-lg text-blue-200 mb-8">Contacta con nosotros para cualquier consulta sobre el proyecto, formación o colaboración.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Info@saludnaturista.es" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              ✉️ Info@saludnaturista.es
            </a>
            <a href="https://wa.me/34608823542" target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              📱 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

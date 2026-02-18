import Link from "next/link";
import Image from "next/image";

const highlights = [
  { img: "/images/gaceta-portada.jpg", title: "Gaceta", desc: "Publicación oficial del proyecto Salud Naturista DECOYÍN.", href: "/novedades" },
  { img: "/images/paloma-portada.jpg", title: 'Libro "Paloma"', desc: "Obra publicada por Julián Pérez Gutiérrez.", href: "/cometidos" },
  { img: "/images/cancion-terapeutica.jpg", title: "Canciones Terapéuticas", desc: "Tu canción Filo-Psico-Sófica Terapéutica para tu evolución. Más de 963 canciones.", href: "/canciones" },
  { img: "/images/congreso-xv.jpg", title: "XV Congreso Internacional", desc: "Decimoquinta edición del Congreso Internacional del proyecto.", href: "/novedades" },
  { img: "/images/retiros.jpg", title: "Retiros Espirituales", desc: "Retiros y vacaciones para el crecimiento interior y la salud integral.", href: "/retiros" },
  { img: "/images/logo-upfed.gif", title: "UPFED — Universidad", desc: "Universidad, PhD y PsicoAlquimia. Formación espiritual avanzada.", href: "/universidad" },
  { img: "/images/facebook-canciones.jpg", title: "Más de 1.000 Vídeos", desc: "Contenido audiovisual subido a Internet, subvencionado por nuestra ONG.", href: "/canciones" },
  { img: "/images/logo-rehabilitacion.jpg", title: "Rehabilitación", desc: "Sección dedicada a la rehabilitación integral del ser humano.", href: "/formacion" },
];

const sections = [
  { href: "/cometidos", title: "Cometidos", desc: "Misión, visión y propósitos del proyecto." },
  { href: "/equipo", title: "Equipo", desc: "Conoce al equipo de trabajo y al presidente." },
  { href: "/formacion", title: "Formación", desc: "Cursos, talleres, conferencias y técnicas avanzadas." },
  { href: "/retiros", title: "Retiros", desc: "Retiros espirituales y vacaciones para el alma." },
  { href: "/radio", title: "Radio", desc: "Escucha la radio del proyecto." },
  { href: "/iglesia", title: "IFE", desc: "Iglesia de la Filosofía del Espíritu." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <Image src="/images/escudo-snd.gif" alt="Salud Naturista DECOYÍN" width={80} height={120} />
            <Image src="/images/logo-ife.gif" alt="Iglesia de la Filosofía del Espíritu" width={200} height={140} />
            <Image src="/images/escudo-snd.gif" alt="SND" width={80} height={120} />
          </div>
          <p className="text-gold-400 text-sm md:text-base mb-4 tracking-widest uppercase">Iglesia de la Filosofía del Espíritu · IFE</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Salud Naturista <span className="text-gold-400">DECOYÍN</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-4">
            En hora buena por consultar Salud Naturista DECOYÍN. Aquí descubrirás un verdadero tesoro a tu alcance, para tu formación, crecimiento interior y salud: física, emocional, mental, energética y sutil.
          </p>
          <p className="text-md text-blue-200 max-w-2xl mx-auto mb-8">
            Muy útil para terapeutas avanzados y para personas que quieren evolucionar o superar una dolencia, enfermedad, crisis, etc.
          </p>
          <Image src="/images/por-una-sn.gif" alt="Por una Salud Naturista" width={613} height={87} className="mx-auto mb-8" />
          <p className="text-gold-400 text-sm">💛 Proyecto sin ánimo de lucro · ONG que subvenciona el proyecto formativo con canciones terapéuticas</p>
        </div>
      </section>

      {/* Logos institucionales */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex justify-center items-center gap-6 flex-wrap">
          <Link href="/universidad"><Image src="/images/logo-upfed.gif" alt="UPFED" width={120} height={130} /></Link>
          <Link href="/universidad"><Image src="/images/escudo-phd.png" alt="PhD" width={120} height={113} /></Link>
          <Link href="/universidad"><Image src="/images/escudo-psicoalquimia.png" alt="PsicoAlquimia" width={105} height={98} /></Link>
          <Link href="/formacion"><Image src="/images/logo-rehabilitacion.jpg" alt="Rehabilitación" width={110} height={113} /></Link>
          <Link href="/formacion"><Image src="/images/cometidos-snd.gif" alt="Cometidos SND" width={130} height={95} /></Link>
        </div>
      </section>

      {/* Highlights con imágenes reales */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Descubre Nuestro Proyecto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <Link key={h.title} href={h.href} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                <div className="relative w-full h-48 bg-gray-100">
                  <Image src={h.img} alt={h.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary-800 mb-1">{h.title}</h3>
                  <p className="text-sm text-gray-600">{h.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video destacado */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary-900">Vídeo Destacado</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/f6hwbYahgcI"
              title="Salud Naturista DECOYÍN"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center mt-4 text-gray-500">
            Visita nuestro canal: <a href="https://youtube.com/@PsicoAlquimia" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">YouTube @PsicoAlquimia</a>
          </p>
        </div>
      </section>

      {/* Secciones */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Explora Nuestras Secciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-gold-300">
                <h3 className="text-lg font-semibold text-primary-800 group-hover:text-gold-600 transition-colors mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber más?</h2>
          <p className="text-blue-100 mb-8">Contacta con nosotros para cualquier consulta sobre el proyecto, formación o colaboración.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:Info@saludnaturista.es" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              ✉️ Info@saludnaturista.es
            </a>
            <a href="https://api.whatsapp.com/send?phone=34608823542" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              📱 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

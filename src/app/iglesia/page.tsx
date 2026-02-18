import PageHeader from "@/components/PageHeader";

export default function Iglesia() {
  return (
    <>
      <PageHeader title="Iglesia de la Filosofía del Espíritu" subtitle="IFE — El marco espiritual y filosófico del proyecto DECOYÍN" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
          <p className="text-lg text-gray-700 leading-relaxed">
            La Iglesia de la Filosofía del Espíritu (IFE) es la institución que acoge el proyecto Salud Naturista DECOYÍN. No se trata de una iglesia en el sentido convencional, sino de un espacio de encuentro espiritual y filosófico abierto a todas las personas, independientemente de su tradición o creencias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-800 mb-3">✦ Filosofía</h3>
            <p className="text-gray-600 leading-relaxed">
              La IFE promueve una filosofía del espíritu basada en principios universales: el amor, la sabiduría, la trascendencia y la búsqueda de la verdad a través de la integración de ciencia, filosofía y espiritualidad.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary-800 mb-3">🕊️ Espiritualidad</h3>
            <p className="text-gray-600 leading-relaxed">
              Un camino espiritual que respeta todas las tradiciones y busca el crecimiento interior de cada persona, facilitando herramientas de formación, reflexión y práctica espiritual.
            </p>
          </div>
        </div>

        <div className="bg-primary-800 text-white rounded-xl p-8 text-center mb-10">
          <span className="text-gold-400 text-4xl block mb-4">✦</span>
          <blockquote className="text-xl italic leading-relaxed mb-4">
            &ldquo;La filosofía del espíritu es el camino hacia la comprensión profunda del ser humano y su conexión con el todo.&rdquo;
          </blockquote>
          <p className="text-gold-400 font-semibold">— Proyecto DECOYÍN</p>
        </div>

        <div className="bg-gold-50 rounded-xl p-8 text-center border border-gold-200">
          <h3 className="text-xl font-bold text-primary-800 mb-3">Conoce más sobre la IFE</h3>
          <p className="text-gray-600 mb-4">Si deseas profundizar en la filosofía del espíritu, no dudes en contactarnos.</p>
          <a href="/contacto" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Contactar
          </a>
        </div>
      </div>
    </>
  );
}

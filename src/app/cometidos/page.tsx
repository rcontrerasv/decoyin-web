import PageHeader from "@/components/PageHeader";

export default function Cometidos() {
  return (
    <>
      <PageHeader title="Cometidos" subtitle="Misión y propósitos del proyecto Salud Naturista DECOYÍN" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Nuestra Misión</h2>
            <p className="text-gray-700 leading-relaxed">
              Salud Naturista DECOYÍN es un proyecto sin ánimo de lucro dedicado a la formación, el crecimiento interior y la salud integral del ser humano en sus dimensiones: física, emocional, mental, energética y sutil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary-800 mb-3">🎯 Propósitos</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ofrecer formación espiritual y filosófica accesible a todos</li>
                <li>• Promover la salud naturista como camino de bienestar integral</li>
                <li>• Facilitar herramientas de crecimiento interior</li>
                <li>• Apoyar a terapeutas avanzados en su desarrollo profesional</li>
                <li>• Acompañar a personas en procesos de superación personal</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary-800 mb-3">💡 Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Servicio desinteresado y sin ánimo de lucro</li>
                <li>• Respeto a todas las tradiciones espirituales</li>
                <li>• Formación rigurosa y accesible</li>
                <li>• Amor, compasión y trascendencia</li>
                <li>• Integración de ciencia, filosofía y espiritualidad</li>
              </ul>
            </div>
          </div>

          <div className="bg-primary-800 text-white rounded-xl p-8 text-center">
            <p className="text-lg italic leading-relaxed">
              &ldquo;Muy útil para terapeutas avanzados y para personas que quieren evolucionar o superar una dolencia, enfermedad, crisis, etc.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

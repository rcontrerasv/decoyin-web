import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Iglesia() {
  return (
    <>
      <PageHeader title="✦ Iglesia de la Filosofía del Espíritu" subtitle="IFE — Un espacio de reflexión, estudio y crecimiento espiritual basado en la filosofía del espíritu." />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image src="/images/logo-ife.gif" alt="Logo Iglesia de la Filosofía del Espíritu" width={301} height={214} className="rounded-lg" />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              La Iglesia de la Filosofía del Espíritu (IFE) es un espacio de reflexión, estudio y crecimiento 
              espiritual que forma parte integral del proyecto Salud Naturista DECOYÍN.
            </p>
            <p className="text-gray-700 mb-4">
              Basada en principios filosóficos universales, la IFE promueve el estudio profundo del ser humano 
              en todas sus dimensiones: física, emocional, mental, energética y sutil.
            </p>
            <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-lg my-8">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Principios de la IFE</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Estudio filosófico del espíritu y la conciencia</li>
                <li>• Formación integral del ser humano</li>
                <li>• Investigación espiritual rigurosa</li>
                <li>• Comunidad de buscadores y estudiantes</li>
                <li>• Respeto por todas las tradiciones espirituales</li>
              </ul>
            </div>
            <div className="text-center">
              <a href="mailto:Info@saludnaturista.es" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                ✉️ Contactar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

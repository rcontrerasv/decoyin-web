import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Retiros() {
  return (
    <>
      <PageHeader title="🏔️ Retiros Espirituales" description="Retiros y vacaciones para el crecimiento interior, la formación y la salud integral." />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Image src="/images/retiros.jpg" alt="Retiros espirituales DECOYÍN" width={800} height={640} className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              Los retiros espirituales de Salud Naturista DECOYÍN son espacios de encuentro, formación y crecimiento interior. 
              En un ambiente de paz y naturaleza, los participantes pueden desconectar de la rutina y conectar con su esencia.
            </p>
            <p className="text-gray-700 mb-4">
              Ofrecemos vacaciones terapéuticas, talleres intensivos y convivencias donde se practican las técnicas 
              más avanzadas de sanación natural, meditación y desarrollo personal.
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
              <h3 className="text-xl font-bold text-primary-900 mb-3">¿Qué incluyen nuestros retiros?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Talleres de formación espiritual y terapéutica</li>
                <li>• Conferencias y charlas de crecimiento interior</li>
                <li>• Prácticas de sanación natural</li>
                <li>• Convivencia en comunidad</li>
                <li>• Entorno natural para la meditación y reflexión</li>
              </ul>
            </div>
            <div className="text-center">
              <a href="mailto:Info@saludnaturista.es" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                ✉️ Solicitar información sobre próximos retiros
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

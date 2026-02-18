import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Cometidos() {
  return (
    <>
      <PageHeader title="🎯 Cometidos y Finalidades" description="Misión, visión y propósitos del proyecto Salud Naturista DECOYÍN." />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image src="/images/cometidos-snd.gif" alt="Cometidos SND" width={205} height={149} />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary-900 mb-6">Cometidos y Finalidades de Salud Naturista DECOYÍN</h2>
            
            <p className="text-gray-700 mb-4">
              <strong>DECOYÍN</strong> es una Asociación – Centro – Escuela – Terapias – Despertar Iniciático, sin ánimo de lucro. 
              Sólo cuenta con la financiación de cada participante, quien colabora en los propios gastos que genera.
            </p>

            <p className="text-gray-700 mb-4">
              DECOYÍN no promociona, no vende, no anuncia gangas, solo te propone colaboración y participar en 
              investigaciones, para las que entre todos buscamos las subvenciones mayores posibles.
            </p>

            <p className="text-gray-700 mb-4">
              DECOYÍN te ayuda a descubrirte a ti mismo, a conocerte mejor, a entender tus procesos de salud y 
              enfermedad, y a tomar las riendas de tu propia vida.
            </p>

            <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-lg my-8">
              <h3 className="text-xl font-bold text-primary-900 mb-3">Nuestros Principios</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Formación espiritual, filosófica y educativa</li>
                <li>• Sin ánimo de lucro — financiación colaborativa</li>
                <li>• Investigación y subvención de proyectos formativos</li>
                <li>• Despertar iniciático y crecimiento interior</li>
                <li>• Salud integral: física, emocional, mental, energética y sutil</li>
                <li>• Útil para terapeutas avanzados y personas en búsqueda de evolución</li>
              </ul>
            </div>

            <div className="flex justify-center my-8">
              <Image src="/images/paloma-portada.jpg" alt='Libro "Paloma" por Julián Pérez Gutiérrez' width={250} height={350} className="rounded-lg shadow-lg" />
            </div>
            <p className="text-center text-gray-600 italic mb-8">Libro &ldquo;Paloma&rdquo; — Obra publicada por Julián Pérez Gutiérrez, fundador del proyecto.</p>
          </div>
        </div>
      </section>
    </>
  );
}

import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Universidad() {
  return (
    <>
      <PageHeader title="🎓 Universidad" subtitle="UPFED, PhD y PsicoAlquimia — Formación espiritual y terapéutica avanzada." />
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Logos institucionales */}
          <div className="flex justify-center items-center gap-8 flex-wrap mb-12">
            <div className="text-center">
              <Image src="/images/logo-upfed.gif" alt="UPFED" width={187} height={198} />
              <p className="text-sm font-semibold text-primary-800 mt-2">UPFED</p>
            </div>
            <div className="text-center">
              <Image src="/images/escudo-phd.png" alt="PhD" width={185} height={174} />
              <p className="text-sm font-semibold text-primary-800 mt-2">PhD</p>
            </div>
            <div className="text-center">
              <Image src="/images/escudo-psicoalquimia.png" alt="PsicoAlquimia" width={162} height={151} />
              <p className="text-sm font-semibold text-primary-800 mt-2">PsicoAlquimia</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              La formación universitaria del proyecto DECOYÍN abarca diversas disciplinas del conocimiento espiritual 
              y terapéutico, con programas de estudio rigurosos y profundos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-800 mb-2">UPFED</h3>
                <p className="text-gray-600 text-sm">Universidad del proyecto. Programas de formación integral y estudios avanzados en salud naturista y espiritualidad.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-800 mb-2">PhD</h3>
                <p className="text-gray-600 text-sm">Programa de doctorado. Investigación profunda en las áreas de conocimiento espiritual y terapéutico.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-800 mb-2">PsicoAlquimia</h3>
                <p className="text-gray-600 text-sm">Disciplina que integra la psicología profunda con la alquimia espiritual para la transformación interior.</p>
              </div>
            </div>

            {/* Video de PsicoAlquimia */}
            <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">Canal PsicoAlquimia</h3>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-4">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6jp_vkQqxSc"
                title="PsicoAlquimia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center mb-8">
              <a href="https://youtube.com/@PsicoAlquimia" target="_blank" rel="noopener noreferrer" className="text-primary-700 hover:underline">
                ▶️ Ver más en YouTube @PsicoAlquimia
              </a>
            </p>

            <div className="text-center">
              <a href="mailto:Info@saludnaturista.es" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                ✉️ Solicitar información sobre programas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

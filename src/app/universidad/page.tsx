import PageHeader from "@/components/PageHeader";

export default function Universidad() {
  return (
    <>
      <PageHeader title="Universidad — UPFED" subtitle="Formación universitaria, PhD y PsicoAlquimia" />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-spirit-50 rounded-xl p-8 mb-10 border-l-4 border-gold-500">
          <p className="text-lg text-gray-700 leading-relaxed">
            La UPFED (Universidad del Proyecto de Filosofía del Espíritu DECOYÍN) ofrece programas de formación avanzada en el ámbito espiritual, filosófico y terapéutico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-lg font-bold text-primary-800 mb-2">UPFED</h3>
            <p className="text-sm text-gray-600">Universidad del proyecto. Programas formativos en filosofía del espíritu y salud naturista.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">📜</span>
            </div>
            <h3 className="text-lg font-bold text-primary-800 mb-2">PhD</h3>
            <p className="text-sm text-gray-600">Programas de doctorado y estudios avanzados en el marco de la filosofía del espíritu.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🔮</span>
            </div>
            <h3 className="text-lg font-bold text-primary-800 mb-2">PsicoAlquimia</h3>
            <p className="text-sm text-gray-600">Formación en PsicoAlquimia: la integración de psicología y tradición alquímica espiritual.</p>
          </div>
        </div>

        <div className="bg-primary-800 text-white rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Solicita información sobre nuestros programas</h3>
          <p className="text-blue-200 mb-4">Escríbenos para conocer los requisitos y calendarios de formación.</p>
          <a href="mailto:Info@saludnaturista.es" className="inline-block bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Contactar
          </a>
        </div>
      </div>
    </>
  );
}

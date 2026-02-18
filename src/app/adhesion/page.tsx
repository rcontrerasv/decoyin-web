import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function Adhesion() {
  return (
    <>
      <PageHeader title="🙏 Adhesión" subtitle="Únete al Proyecto Salud Naturista DECOYÍN" />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <div className="flex justify-center mb-6">
                <Image src="/images/escudo-snd.gif" alt="Salud Naturista DECOYÍN" width={105} height={176} />
              </div>
              <h2 className="text-2xl font-bold text-primary-900 mb-4">¿Por qué adherirse?</h2>
              <p className="text-gray-700 mb-4">
                Salud Naturista DECOYÍN es un proyecto sin ánimo de lucro dedicado a la formación espiritual, 
                filosófica y educativa. Al adherirte, formas parte de una comunidad comprometida con el 
                crecimiento interior y la salud integral.
              </p>
              <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-lg my-6">
                <h3 className="font-bold text-primary-900 mb-3">Como miembro podrás:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Participar en cursos, talleres y conferencias</li>
                  <li>• Acceder a retiros espirituales y vacaciones terapéuticas</li>
                  <li>• Colaborar en investigaciones y proyectos formativos</li>
                  <li>• Formar parte de la comunidad DECOYÍN</li>
                  <li>• Recibir la Gaceta y publicaciones del proyecto</li>
                  <li>• Acceder a formación universitaria (UPFED, PhD, PsicoAlquimia)</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm italic">
                DECOYÍN sólo cuenta con la financiación de cada participante, quien colabora en los propios gastos que genera.
              </p>
            </div>

            {/* Formulario de adhesión */}
            <div>
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Formulario de Adhesión</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tu número de teléfono" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad / País</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Ej: Madrid, España" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">¿Cómo conociste el proyecto?</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">Selecciona una opción</option>
                    <option value="web">Página web</option>
                    <option value="youtube">YouTube</option>
                    <option value="facebook">Facebook</option>
                    <option value="amigo">Por un amigo/conocido</option>
                    <option value="evento">En un evento/retiro</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje de adhesión *</label>
                  <textarea rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Cuéntanos tus motivaciones para unirte al proyecto..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-semibold transition-colors text-lg">
                  🙏 Enviar Solicitud de Adhesión
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-4 text-center">
                También puedes contactarnos directamente por <a href="https://wa.me/34608823542" className="text-primary-700 hover:underline">WhatsApp</a> o 
                email a <a href="mailto:Info@saludnaturista.es" className="text-primary-700 hover:underline">Info@saludnaturista.es</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

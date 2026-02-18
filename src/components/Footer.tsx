import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-gold-400 font-bold text-lg mb-3">Salud Naturista DECOYÍN</h3>
          <p className="text-sm leading-relaxed">
            Iglesia de la Filosofía del Espíritu (IFE). Proyecto espiritual, filosófico, educativo y terapéutico sin ánimo de lucro.
          </p>
          <p className="text-sm mt-2 text-gray-400">Fundado por Julián Pérez Gutiérrez · España</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="text-sm space-y-2">
            <li>✉️ <a href="mailto:Info@saludnaturista.es" className="hover:text-gold-400 transition-colors">Info@saludnaturista.es</a></li>
            <li>📱 <a href="https://wa.me/34608823542" className="hover:text-gold-400 transition-colors">WhatsApp: +34 608 823 542</a></li>
            <li>📞 <a href="tel:+34660384965" className="hover:text-gold-400 transition-colors">Teléfono: +34 660 384 965</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Redes Sociales</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/saludnaturista" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors text-sm">📘 Facebook</a>
            <a href="https://x.com/JulinPrezGutir1" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors text-sm">🐦 X / Twitter</a>
          </div>
          <p className="text-xs mt-6 text-gray-500">Este sitio no tiene ánimo de lucro. Todo el contenido es de libre acceso.</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Salud Naturista DECOYÍN — Iglesia de la Filosofía del Espíritu (IFE). Todos los derechos reservados.
      </div>
    </footer>
  );
}

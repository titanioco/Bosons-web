import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://cdn-ai.onspace.ai/onspace/project/uploads/mqp2KphbPzvTPCB5c9ztXB/Asset_1@2x.png" 
                alt="Bosons Logo" 
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-xl font-bold">BOSONS</h3>
                <p className="text-xs opacity-90">Equipos Industriales</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Proveedor líder de equipos y suministros industriales en Colombia. 
              Calidad garantizada y servicio profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#servicios" className="hover:opacity-100 hover:underline transition-opacity">Servicios</a></li>
              <li><a href="#productos" className="hover:opacity-100 hover:underline transition-opacity">Productos</a></li>
              <li><a href="#materiales" className="hover:opacity-100 hover:underline transition-opacity">Materiales</a></li>
              <li><a href="#sobre-nosotros" className="hover:opacity-100 hover:underline transition-opacity">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:opacity-100 hover:underline transition-opacity">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Suministros Industriales</li>
              <li>Automatización de Procesos</li>
              <li>Soldadura Especializada</li>
              <li>Instalación y Consultoría</li>
              <li>Materiales Especializados</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+57" className="hover:opacity-100 hover:underline transition-opacity">
                  +57 (XXX) XXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@bosons.co" className="hover:opacity-100 hover:underline transition-opacity">
                  info@bosons.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Lun - Vie: 8:00 AM - 6:00 PM<br/>Sáb: 8:00 AM - 1:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Bosons. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#privacidad" className="hover:opacity-100 hover:underline transition-opacity">
                Política de Privacidad
              </a>
              <a href="#terminos" className="hover:opacity-100 hover:underline transition-opacity">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

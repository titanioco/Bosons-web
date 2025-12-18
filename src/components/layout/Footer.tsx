import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="bg-primary-900 text-primary-foreground dark:bg-primary-300">
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
                <p className="text-xs opacity-90">{translations.footer.industrialEquipment[language]}</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              {translations.footer.description[language]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{translations.footer.quickLinks.title[language]}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#servicios" className="hover:opacity-100 hover:underline transition-opacity">{translations.footer.quickLinks.services[language]}</a></li>
              <li><a href="#productos" className="hover:opacity-100 hover:underline transition-opacity">{translations.footer.quickLinks.products[language]}</a></li>
              <li><a href="#materiales" className="hover:opacity-100 hover:underline transition-opacity">{translations.footer.quickLinks.materials[language]}</a></li>
              <li><a href="#sobre-nosotros" className="hover:opacity-100 hover:underline transition-opacity">{translations.footer.quickLinks.about[language]}</a></li>
              <li><a href="#contacto" className="hover:opacity-100 hover:underline transition-opacity">{translations.footer.quickLinks.contact[language]}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{translations.footer.services.title[language]}</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>{translations.footer.services.industrial[language]}</li>
              <li>{translations.footer.services.automation[language]}</li>
              <li>{translations.footer.services.welding[language]}</li>
              <li>{translations.footer.services.installation[language]}</li>
              <li>{translations.footer.services.materials[language]}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{translations.footer.contactTitle[language]}</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{translations.contact.location.value[language]}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="https://wa.me/573164847047" className="hover:opacity-100 hover:underline transition-opacity">
                  +57 (316) 484-7047
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contacto@bosons.com.co" className="hover:opacity-100 hover:underline transition-opacity">
                  contacto@bosons.com.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span style={{ whiteSpace: 'pre-line' }}>{translations.footer.schedule[language]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} {translations.footer.rights[language]}</p>
            <div className="flex gap-6">
              <a href="#privacidad" className="hover:opacity-100 hover:underline transition-opacity">
                {translations.footer.privacy[language]}
              </a>
              <a href="#terminos" className="hover:opacity-100 hover:underline transition-opacity">
                {translations.footer.terms[language]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

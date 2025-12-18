import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';

export default function ContactSection() {
  const { language } = useLanguage();
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {translations.contact.title[language]}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {translations.contact.subtitle[language]}
            </p>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{translations.contact.location.title[language]}</h3>
                  <p className="text-muted-foreground">{translations.contact.location.value[language]}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{translations.contact.phone.title[language]}</h3>
                  <p className="text-muted-foreground">+57 (316) 484-7047</p>
                  <p className="text-muted-foreground">+57 (316) 447-5588</p>
                  <p className="text-sm text-muted-foreground">{translations.contact.phone.schedule[language]}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{translations.contact.email.title[language]}</h3>
                  <p className="text-muted-foreground">contacto@bosons.com.co</p>
                  <p className="text-muted-foreground">bosons.sas@gmail.com</p>
                  <p className="text-sm text-muted-foreground">{translations.contact.email.response[language]}</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <Card className="mt-8 bg-primary text-primary-foreground border-none">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">{translations.contact.whyChooseUs.title[language]}</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    {translations.contact.whyChooseUs.reason1[language]}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    {translations.contact.whyChooseUs.reason2[language]}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    {translations.contact.whyChooseUs.reason3[language]}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    {translations.contact.whyChooseUs.reason4[language]}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                {translations.contact.form.title[language]}
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {translations.contact.form.name[language]} *
                    </label>
                    <Input 
                      placeholder={translations.contact.form.namePlaceholder[language]}
                      required 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {translations.contact.form.company[language]}
                    </label>
                    <Input 
                      placeholder={translations.contact.form.companyPlaceholder[language]}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {translations.contact.form.email[language]} *
                    </label>
                    <Input 
                      type="email" 
                      placeholder={translations.contact.form.emailPlaceholder[language]}
                      required 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      {translations.contact.form.phone[language]} *
                    </label>
                    <Input 
                      type="tel" 
                      placeholder={translations.contact.form.phonePlaceholder[language]}
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {translations.contact.form.service[language]} *
                  </label>
                  <Input 
                    placeholder={translations.contact.form.servicePlaceholder[language]}
                    required 
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {translations.contact.form.message[language]} *
                  </label>
                  <Textarea 
                    placeholder={translations.contact.form.messagePlaceholder[language]}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-primary gap-2">
                  {translations.contact.form.send[language]}
                  <Send className="h-4 w-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos requeridos. Sus datos están protegidos según nuestra política de privacidad.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

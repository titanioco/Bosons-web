import { CreditCard, Building2, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function PaymentSection() {
  const paymentMethods = [
    {
      icon: Building2,
      title: 'Transferencia Bancaria',
      description: 'Bancolombia, Davivienda, BBVA',
      details: 'Procesos seguros y verificados',
    },
    {
      icon: CreditCard,
      title: 'PSE',
      description: 'Pagos en línea seguros',
      details: 'Desde todos los bancos colombianos',
    },
    {
      icon: Clock,
      title: 'Crédito Empresarial',
      description: 'Plazos de hasta 60 días',
      details: 'Para clientes corporativos',
    },
    {
      icon: Shield,
      title: 'Pago Contra Entrega',
      description: 'Disponible en ciudades principales',
      details: 'Paga cuando recibas tu pedido',
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Opciones de Pago Seguras
          </h2>
          <p className="text-lg text-muted-foreground">
            Múltiples opciones de pago para facilitar sus compras empresariales
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="border-border hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                  <p className="text-xs text-muted-foreground">{method.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-6 w-6" />
            <h3 className="text-xl font-bold">Transacciones 100% Seguras</h3>
          </div>
          <p className="opacity-90">
            Todos los pagos están protegidos con encriptación de nivel bancario
          </p>
        </div>
      </div>
    </section>
  );
}

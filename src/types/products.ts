export interface Product {
  id: string;
  name: string;
  category: string;
  material?: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  inStock: boolean;
  specifications?: {
    label: string;
    value: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export type MaterialType = 'Acero Inoxidable' | 'Acero al Carbono' | 'Hierro' | 'Galvanizado';

export type CategoryType = 
  | 'Herramientas'
  | 'Suministros'
  | 'Materiales'
  | 'Soldadura Industrial'
  | 'Automatización'
  | 'Mantenimiento';

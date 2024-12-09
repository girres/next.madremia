export interface FormValues {
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  has_digital_product: boolean;
  terms: boolean;
}

export interface StepProps {
  formik: any;
  next?: () => void;
  prev?: () => void;
}

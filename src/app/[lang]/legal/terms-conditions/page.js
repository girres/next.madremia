// Dictionary.
import { getDictionary } from '@/app/dictionaries';

export const metadata = {
  title: 'Términos y Condiciones | Madremía',
};

export default async function Page({ params: { lang = 'es' } }) {
  // eslint-disable-next-line no-unused-vars
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1 className='text-3xl font-bold mb-10'>Términos y Condiciones</h1>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>1. Introducción</h2>
        <p className='text-gray-700'>
          Bienvenido a Madremía. Al acceder y utilizar nuestro sitio web,
          aceptas cumplir con los siguientes términos y condiciones. Si no estás
          de acuerdo con ellos, te recomendamos no utilizar nuestros servicios.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          2. Propiedad Intelectual
        </h2>
        <p className='text-gray-700'>
          Todo el contenido del sitio, incluyendo imágenes, textos y logotipos,
          es propiedad de Madremía y está protegido por derechos de autor. No
          está permitido reproducir, distribuir o modificar el contenido sin
          previa autorización.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>3. Uso del Sitio Web</h2>
        <p className='text-gray-700'>
          Te comprometes a utilizar nuestro sitio de manera responsable y
          respetuosa, sin realizar actividades que puedan afectar su
          funcionamiento o seguridad. Queda prohibido el uso de la información
          para fines ilegales o no autorizados.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          4. Legislación Aplicable
        </h2>
        <p className='text-gray-700'>
          Estos términos se regirán e interpretarán de acuerdo con la
          legislación española, y cualquier disputa será resuelta en los
          tribunales de España.
        </p>
      </section>
    </div>
  );
}

export const metadata = {
  title: 'Política de Tratamiento de Datos | Madremía',
};

export default async function Page() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-10'>
        Política de Tratamiento de Datos
      </h1>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>1. Introducción</h2>
        <p className='text-gray-700'>
          Madremía se compromete a tratar los datos personales de los usuarios
          de acuerdo con la normativa vigente de protección de datos, incluyendo
          el RGPD y la LOPDGDD.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          2. Consentimiento para el Tratamiento
        </h2>
        <p className='text-gray-700'>
          El usuario otorga su consentimiento expreso para que tratemos sus
          datos con los fines establecidos en nuestra política de privacidad.
        </p>
      </section>

      <section className='mb-8' id='cookies'>
        <h2 className='text-2xl font-semibold mb-2'>3. Uso de Cookies</h2>
        <p className='text-gray-700'>
          Utilizamos cookies para mejorar la experiencia de usuario y para fines
          analíticos y publicitarios. Puedes gestionar tus preferencias de
          cookies en cualquier momento.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          4. Ejercicio de Derechos
        </h2>
        <p className='text-gray-700'>
          Puedes ejercer tus derechos de acceso, rectificación, eliminación y
          oposición enviando un correo electrónico a nuestro equipo de
          protección de datos. social@agenciamadremia.com
        </p>
      </section>
    </div>
  );
}

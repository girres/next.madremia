export const metadata = {
  title: 'Política de Privacidad | Madremía',
};

export default async function Page() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-10'>Política de Privacidad</h1>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          1. Responsable del Tratamiento
        </h2>
        <p className='text-gray-700'>
          La empresa responsable del tratamiento de tus datos es Madremía. Nos
          comprometemos a proteger la privacidad de nuestros usuarios y cumplir
          con el RGPD y la LOPDGDD.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          2. Datos que Recopilamos
        </h2>
        <p className='text-gray-700'>
          Recopilamos datos personales que los usuarios nos proporcionan, como
          nombre y correo electrónico. También recopilamos información de
          navegación mediante cookies.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>
          3. Finalidad del Tratamiento
        </h2>
        <p className='text-gray-700'>
          Los datos serán utilizados para fines comerciales, envío de
          promociones y mejorar la experiencia de usuario en nuestro sitio.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-2'>4. Derechos del Usuario</h2>
        <p className='text-gray-700'>
          Tienes derecho a acceder, rectificar, eliminar y oponerte al
          tratamiento de tus datos en cualquier momento. Puedes ejercer estos
          derechos enviándonos un correo electrónico.
        </p>
      </section>
    </div>
  );
}

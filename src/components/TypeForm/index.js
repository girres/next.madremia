'use client';

// import Script from 'next/script';

import { Widget } from '@typeform/embed-react';

export const FormEmbed = ({ id = 'EaPrJIbx' }) => {
  return (
    <div>
      <Widget
        id={id}
        className='madremia-typeform'
        style={{
          width: '100%',
          minHeight: 500,
        }}
      />
    </div>
  );
};

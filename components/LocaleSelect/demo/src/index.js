import React, { useState } from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';

import Toggle from '../../src';

const Demo = () => {
  const values = ['en', 'it', 'de'];
  const messages = {
    en: {
      id: 'demo.en',
      defaultMessage: 'en',
    },
    de: {
      id: 'demo.de',
      defaultMessage: 'de',
    },
    it: {
      id: 'demo.it',
      defaultMessage: 'it',
    },
  };
  const [value, setValue] = useState('it');
  return (
    <IntlProvider>
      {/* <h1>@NICOLA LOCALE TOGGLE Demo</h1> */}
      <Toggle
        values={values}
        messages={messages}
        value={value}
        onToggle={setValue}
      />
    </IntlProvider>
  );
};
render(<Demo />, document.querySelector('#demo'));

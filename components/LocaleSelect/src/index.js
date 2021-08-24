/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormattedMessage } from 'react-intl';

function Toggle({ values = [], messages, onToggle, value }) {
  const content = values.map(v => (
    <MenuItem key={v} value={v}>
      <FormattedMessage {...messages[v]} />
    </MenuItem>
  ));

  return (
    <Select
      labelId="select-label"
      id="select"
      value={value}
      onChange={e => onToggle(e.target.value)}
    >
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string.isRequired,
  messages: PropTypes.object,
};

export default Toggle;

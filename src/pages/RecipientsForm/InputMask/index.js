/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect } from 'react';
import ReactInputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

const InputMask = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
  );
};

InputMask.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputMask;

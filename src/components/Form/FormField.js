/* eslint-disable react/prop-types */
import React from 'react';
import Select from 'react-select';
import cx from 'classnames';
import { capitalize } from '@/utils/string';
import ErrMsg from './ErrMsg';

function selectField(props) {
  return (
    <div className="ReactSelect">
      <Select
        classNamePrefix="ReactSelect"
        name="color"
        isClearable
        {...props.field}
        onChange={option => {
          if (props.onFieldChange) {
            props.onFieldChange(option);
          }
          props.form.setFieldValue(props.field.name, option);
        }}
        onBlur={() => props.form.setFieldTouched(props.field.name)}
        options={props.options}
        placeholder={props.placeholder}
        isDisabled={props.disabled}
      />
    </div>
  );
}

function inputField(props) {
  return <input {...props.field} placeHolder={props.placeHolder} />;
}

function fieldByType(props) {
  switch (props.type) {
    case 'select':
      return selectField(props);
    default:
      return inputField(props);
  }
}

export default function FormField(props) {
  const { errors, touched } = props.form;
  const { name } = props.field;
  const cls = cx({
    [`${capitalize(name)}Field FormField`]: true,
    [`${capitalize(props.type || 'input')}Field`]: true,
    FieldErr: errors[name] && touched[name],
  });
  return (
    <div className={cls}>
      {props.label ? <span className="FieldLabel">{props.label}</span> : ''}
      {fieldByType(props)}
      <ErrMsg name={name} />
    </div>
  );
}

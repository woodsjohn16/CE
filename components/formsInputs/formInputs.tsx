import React, { useState } from 'react'

export default function FormInputs(props) {
  const { form, idx, onChangeHandler } = props
  const [inputData, setInputData] = useState({})

  const changeInputHandler = (e) => {
    let value = e.target.value

    if (e.target.type === 'checkbox') {
      value = e.target.checked
    }

    setInputData({
      ...inputData,
      [e.target.id]: {
        value: value,
      },
    })
  }

  const renderElements = (form) => {
    switch (form.type) {
      case 'field':
        return React.createElement(
          'div',
          {
            className: 'input-form',
          },
          React.createElement('label', null, `${form.label.en}`),
          React.createElement('input', {
            id: form.label.en,
            name: form.input,
            type: form.input === 'datepicker' ? 'date' : form.input,
            onChange: (e) => onChangeHandler(e),
          }),
        )
      case 'paragraph':
        return React.createElement(
          'p',
          {
            name: form.input,
          },
          form.text.en,
        )
      case 'header':
        return React.createElement(
          form.type,
          null,
          form.text.en,
        )
      default:
        return React.createElement('div', null, '')
    }
  }

  return (
    <>
      {renderElements(form)}
    </>
  )
}

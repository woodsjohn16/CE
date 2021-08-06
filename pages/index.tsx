import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeSelectForms } from '../redux/home/selector/formSelector'
import { getForms } from '../redux/home/actions/formActions'
import FormInputs from '../components/formsInputs/formInputs'
// import Link from 'next/link'
import Image from 'next/image'
import loader from '../assets/images/loader.svg'

const Home = () => {
  const dispatch = useDispatch()
  const { forms, loading } = useSelector(makeSelectForms)

  const [inputData, setInputData] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    dispatch(getForms())
  }, [])

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

  // const renderElements = (form, key) => {
  //   switch (form.type) {
  //     case 'field':
  //       return React.createElement(
  //         'div',
  //         {
  //           className: 'input-form',
  //           key: key,
  //         },
  //         React.createElement('label', null, `${form.label.en}`),
  //         React.createElement('input', {
  //           id: form.label.en,
  //           name: form.input,
  //           type: form.input === 'datepicker' ? 'date' : form.input,
  //           onChange: (e) => changeInputHandler(e),
  //         }),
  //       )
  //     case 'paragraph':
  //       return React.createElement(
  //         'p',
  //         {
  //           name: form.input,
  //           key: key,
  //         },
  //         form.text.en,
  //       )
  //     case 'header':
  //       return React.createElement(
  //         form.type,
  //         {
  //           onChange: (e) => changeInputHandler(e),
  //           key: key,
  //         },
  //         form.text.en,
  //       )
  //     default:
  //       return React.createElement('div', { key: key }, '')
  //   }
  // }

  const submitForm = () => {
    console.log(inputData)
    setSubmitted(true)
  }

  return (
    <>
      <div className="form-container">
        {loading && <Image src={loader} />}

        {!loading && forms.length > 0 && (
          <div className="form">
            {submitted && (
              <div className="confirm-message">Submitted Successfully</div>
            )}
            {forms.length > 0 &&
              forms.map((form, idx) => (
                <FormInputs
                  key={idx}
                  form={form}
                  onChangeHandler={(e) => changeInputHandler(e)}
                />
              ))}
            <button onClick={submitForm} className="submit-button">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Home

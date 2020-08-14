import React from 'react'
const SuicideFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    <form className="grid-form">
      {
        props.data.map((row, key) => {
          return <fieldset key={key}>
            <div data-row-span="3">
              <div data-field-span="1">
                <label>{row.question}</label>
                <p>{row.answer}</p>
              </div> <div data-field-span="1">
                <label>Date</label>
              <p>{row.date}</p>
              </div>
              <div data-field-span="1">
                <label>Method</label>
              <p>{row.method}</p>
              </div>
            </div>
          </fieldset>
        })
      }
    </form>
  )
}
export default SuicideFormData
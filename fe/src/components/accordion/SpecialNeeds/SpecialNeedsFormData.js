import React from 'react'
const SpecialNeedsFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    <form className="grid-form">
      {
        props.data.map((row, key) => {
          return <fieldset key={key}>
            <div data-row-span="1">
              <div data-field-span="1">
                <label>Needs</label>
                <p>{row.needs}</p>
              </div>
            </div>
          </fieldset>
        })
      }
    </form>
  )
}
export default SpecialNeedsFormData
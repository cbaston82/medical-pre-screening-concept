import React from 'react'

const AllergiesFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return(
    <form className="grid-form">
      {
        props.data.map((row, key) => {
          return <fieldset key={key}>
            <div data-row-span="2">
              <div data-field-span="1">
                <label>Allergy</label>
                <p>{row.allergy}</p>
              </div>
              <div data-field-span="1">
                <label>Allergic Response</label>
                <p>{row.allergicResponse}</p>
              </div>
            </div>
          </fieldset>
        })
      }
    </form>
  )
}
export default AllergiesFormData
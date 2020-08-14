import React from 'react'
const OtherMedicalConditionsFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    <form className="grid-form">
      {
        props.data.map((row, key) => {
          return <fieldset key={key}>
            <div data-row-span="4">
              <div data-field-span="1">
                <label>Other Medical Condition</label>
                <p>{row.condition}</p>
              </div>
              <div data-field-span="1">
                <label>Onset</label>
                <p>{row.onset}</p>
              </div>
              <div data-field-span="1">
                <label>Physician</label>
                <p>{row.physician}</p>
              </div>
              <div data-field-span="1">
                <label>Medical Records Requested</label>
                <p>{row.medicalRecordsRequested}</p>
              </div>
            </div>
          </fieldset>
        })
      }
    </form>
  )
}
export default OtherMedicalConditionsFormData
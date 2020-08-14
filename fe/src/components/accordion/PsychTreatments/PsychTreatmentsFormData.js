import React from 'react'

const PsychTreatmentsFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    <form className="grid-form">
      {
        props.data.map((row, key) => {
          return <fieldset key={key}>
            <div data-row-span="7">
              <div data-field-span="1">
                <label>Psych/CD Facility/Therapist</label>
                <p>Facility 1</p>
              </div>
              <div data-field-span="1">
                <label>Diagnosis</label>
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div data-field-span="1">
                <label>Medications</label>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div data-field-span="1">
                <label>Dates of Care</label>
                <p>2018-06-15</p>
              </div>
              <div data-field-span="1">
                <label>Discharge Type</label>
                <p>COMP</p>
              </div>
              <div data-field-span="1">
                <label>Hospitalized</label>
                <p>2 Months</p>
              </div>
              <div data-field-span="1">
                <label>Medical Records Requested</label>
                <p>Y</p>
              </div>
            </div>
          </fieldset>
        })
      }
    </form>
  )
}
export default PsychTreatmentsFormData
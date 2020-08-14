import React from 'react'

const EatingDisordersFormData = (props) => {
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
                <p>{row.facility}</p>
              </div>
              <div data-field-span="1">
                <label>Diagnosis</label>
                <p>{row.diagnosis}</p>
              </div>
              <div data-field-span="1">
                <label>Medications</label>
                <p>{row.medications}</p>
              </div>
              <div data-field-span="1">
                <label>Dates of Care</label>
                <p>{row.datesOfCare}</p>
              </div>
              <div data-field-span="1">
                <label>Discharge Type</label>
                <p>{row.dischargeType}</p>
              </div>
              <div data-field-span="1">
                <label>Hospitalized</label>
                <p>{row.hospitalized}</p>
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
export default EatingDisordersFormData
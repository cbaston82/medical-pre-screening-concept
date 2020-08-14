import React from 'react'
const PreviousHospitalizationsFormData = (props) => {
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
                <label>Hospital</label>
                <p>{row.hospital}</p>
              </div>
              <div data-field-span="1">
                <label>Date of Admission</label>
                <p>{row.dateOfAdmission}</p>
              </div>
              <div data-field-span="1">
                <label>Reason of Admission</label>
                <p>{row.reasonForAdmission}</p>
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
export default PreviousHospitalizationsFormData
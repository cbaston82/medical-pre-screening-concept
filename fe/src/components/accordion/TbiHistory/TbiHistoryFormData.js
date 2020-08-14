import React from 'react'
const TbiHistoryFormData = (props) => {
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
                <label>Date</label>
                <p>{row.date}</p>
              </div>
              <div data-field-span="1">
                <label>Evaludated By</label>
                <p>{row.evaluatedBy}</p>
              </div>
              <div data-field-span="1">
                <label>Results</label>
                <p>{row.results}</p>
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
export default TbiHistoryFormData
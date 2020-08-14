import React from 'react'

const MedicationsFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    <form className="grid-form">
      {
        props.data.map((row, key) => {
          return <fieldset key={key}>
            <div data-row-span="6">
              <div data-field-span="1">
                <label>Medication</label>
                <p>{row.name}</p>
              </div>
              <div data-field-span="1">
                <label>Dose</label>
                <p>{row.dose}</p>
              </div>
              <div data-field-span="1">
                <label>Ongoing Medical Condition</label>
                <p>{row.ongoingMedicationCondition}</p>
              </div>
              <div data-field-span="1">
                <label>How long?</label>
                <p>{row.howLong}</p>
              </div>
              <div data-field-span="1">
                <label>TAking as prescrived</label>
                <p>{row.takingAsPrescribed}</p>
              </div>
              <div data-field-span="1">
                <label>Prescrived/PCP</label>
                <p>{row.prescriber}</p>
              </div>
            </div>
          </fieldset>
        })
      }
    </form>
  )
}
export default MedicationsFormData
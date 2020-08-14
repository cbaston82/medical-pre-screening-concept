import React from 'react'
const SubstanceUseFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    <form className="grid-form">
      {
        props.data.map((row, key) => { 
          return <fieldset key={key}>
            <div data-row-span="8">
              <div data-field-span="1">
                <label>Substance</label>
                <p>{row.name}</p>
              </div>
              <div data-field-span="1">
                <label>Type</label>
                <p>{row.type}</p>
              </div>
              <div data-field-span="1">
                <label>1<sup>st</sup> use</label>
                <p>{row.firstUse}</p>
              </div>
              <div data-field-span="1">
                <label>Last Use</label>
                <p>{row.lastUse}</p>
              </div>
              <div data-field-span="1">
                <label>Amount</label>
                <p>{row.amount}</p>
              </div>
              <div data-field-span="1">
                <label>Frequency</label>
                <p>{row.frequency}</p>
              </div>
              <div data-field-span="1">
                <label>Method/Route</label>
                <p>{row.method}</p>
              </div>
              <div data-field-span="1">
                <label>WD Symptoms</label>
                <p>{row.symptoms}</p>
              </div>
            </div>
          </fieldset>
        })
      }
    </form>
  )
}
export default SubstanceUseFormData
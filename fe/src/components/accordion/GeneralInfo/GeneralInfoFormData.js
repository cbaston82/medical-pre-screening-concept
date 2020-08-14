import React from 'react'
const GeneralInfoFormData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    
    <form className="grid-form">
      <fieldset>
        <div data-row-span="7">
          <div data-field-span="1">
            <label>Name</label>
            {props.data.name}
          </div> <div data-field-span="1">
            <label>Age</label>
          <p>{props.data.age}</p>
          </div>
          <div data-field-span="1">
            <label>Gender</label>
          <p>{props.data.gender}</p>
          </div>
          <div data-field-span="1">
            <label>DOB</label>
            <p>{props.data.dob}</p>
          </div>
          <div data-field-span="1">
            <label>Height</label>
            <p>{props.data.height}</p>
          </div>
          <div data-field-span="1">
            <label>Weight</label>
            <p>{props.data.weight}</p>
          </div>
          <div data-field-span="1">
            <label>BMI</label>
            <p>{props.data.bmi}</p>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
export default GeneralInfoFormData
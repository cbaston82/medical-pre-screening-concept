import React from 'react'

const AddictionsData = (props) => {
  if (!props.data) {
    return <div />
  }
  return (
    <form className="grid-form">
      <fieldset>
        <div data-row-span="1">
          <div data-field-span="1">
            <label>Addictions</label>
            <ul>
              {
                props.data.map((name, key) => {
                  return <li key={key}>{name} </li>
                })
              }
            </ul>
          </div>
        </div>
      </fieldset>
    </form>
  )
}
export default AddictionsData
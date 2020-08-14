import * as React from 'react'
import CurrentMedicalConditionsFormData from './CurrentMedicalConditionsFormData';

const CurrentMedicalConditions = (props) => (
  <div className="card">
    <div className="card-header" id="headingCurrentMedicalConditions">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseCurrentMedicalConditions" aria-expanded="false" aria-controls="collapseCurrentMedicalConditions">
          Current Medical Conditions
        </button>
      </h5>
    </div>
    <div id="collapseCurrentMedicalConditions" className="collapse" aria-labelledby="headingCurrentMedicalConditions" data-parent="#accordion">
      <div className="card-body">
        <CurrentMedicalConditionsFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default CurrentMedicalConditions
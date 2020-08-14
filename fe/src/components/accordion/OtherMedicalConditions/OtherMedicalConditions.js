import * as React from 'react'
import OtherMedicalConditionsFormData from './OtherMedicalConditionsFormData';

const OtherMedicalConditions = (props) => (
  <div className="card">
    <div className="card-header" id="headingOtherMedicalConditions">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOtherMedicalConditions" aria-expanded="false" aria-controls="collapseOtherMedicalConditions">
          Other Medical Conditions
        </button>
      </h5>
    </div>
    <div id="collapseOtherMedicalConditions" className="collapse" aria-labelledby="headingOtherMedicalConditions" data-parent="#accordion">
      <div className="card-body">
        <OtherMedicalConditionsFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default OtherMedicalConditions
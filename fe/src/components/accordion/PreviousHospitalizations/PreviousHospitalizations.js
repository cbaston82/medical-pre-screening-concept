import * as React from 'react'
import PreviousHospitalizationsFormData from './PrevoushospitalizatiosFormData';

const PreviousHospitalizations = (props) => (
  <div className="card">
    <div className="card-header" id="headingPreviousHospitalizations">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsePreviousHospitalizations" aria-expanded="false" aria-controls="collapsePreviousHospitalizations">
          Previous Hospitalizations
        </button>
      </h5>
    </div>
    <div id="collapsePreviousHospitalizations" className="collapse" aria-labelledby="headingPreviousHospitalizations" data-parent="#accordion">
      <div className="card-body">
        <PreviousHospitalizationsFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default PreviousHospitalizations
import * as React from 'react'
import PsychTreatmentsFormData from './PsychTreatmentsFormData';

const PsychTreatments = (props) => (
  <div className="card">
    <div className="card-header" id="headingPsychTreatment">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapsePsychTreatment" aria-expanded="false" aria-controls="collapsePsychTreatment">
          Previous Psych Treatment History
        </button>
      </h5>
    </div>
    <div id="collapsePsychTreatment" className="collapse" aria-labelledby="headingPsychTreatment" data-parent="#accordion">
      <div className="card-body">
        <PsychTreatmentsFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default PsychTreatments
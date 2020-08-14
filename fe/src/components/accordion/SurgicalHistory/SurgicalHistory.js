import * as React from 'react'
import SurgicalHistoryFormData from './SurgicalHistoryFormData';

const surgicalHistory = (props) => (
  <div className="card">
    <div className="card-header" id="headingSurgicalHistory">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSurgicalHistory" aria-expanded="false" aria-controls="collapseSurgicalHistory">
          Surgical History
        </button>
      </h5>
    </div>
    <div id="collapseSurgicalHistory" className="collapse" aria-labelledby="headingSurgicalHistory" data-parent="#accordion">
      <div className="card-body">
        <SurgicalHistoryFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default surgicalHistory
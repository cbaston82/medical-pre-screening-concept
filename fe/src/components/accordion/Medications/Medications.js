import * as React from 'react'
import MedicationsFormData from './MedicationsFormData';

const Medication = (props) => (
  <div className="card">
    <div className="card-header" id="headingMedications">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseMedications" aria-expanded="false" aria-controls="collapseMedications">
          Medication
        </button>
      </h5>
    </div>
    <div id="collapseMedications" className="collapse" aria-labelledby="headingMedications" data-parent="#accordion">
      <div className="card-body">
        <MedicationsFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default Medication
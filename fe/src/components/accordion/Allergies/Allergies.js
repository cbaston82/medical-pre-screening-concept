import * as React from 'react'
import AllergiesFormData from './AllergiesFormData';

const Allergies = (props) => (
  <div className="card">
    <div className="card-header" id="headingAllergies">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseAllergies" aria-expanded="false" aria-controls="collapseAllergies">
          Allergies
        </button>
      </h5>
    </div>
    <div id="collapseAllergies" className="collapse" aria-labelledby="headingAllergies" data-parent="#accordion">
      <div className="card-body">
        <AllergiesFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default Allergies
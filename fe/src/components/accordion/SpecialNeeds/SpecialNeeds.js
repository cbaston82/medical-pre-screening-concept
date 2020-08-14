import * as React from 'react'
import SpecialNeedsFormData from './SpecialNeedsFormData';

const specialNeeds = (props) => (
  <div className="card">
    <div className="card-header" id="headingSpecialNeeds">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSpecialNeeds" aria-expanded="false" aria-controls="collapseSpecialNeeds">
          Special Needs
        </button>
      </h5>
    </div>
    <div id="collapseSpecialNeeds" className="collapse" aria-labelledby="headingSpecialNeeds" data-parent="#accordion">
      <div className="card-body">
       <SpecialNeedsFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default specialNeeds
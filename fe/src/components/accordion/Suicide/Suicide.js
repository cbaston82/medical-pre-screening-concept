import * as React from 'react'
import SuicideFormData from './SuicideFormData';

const suicide = (props) => (
  <div className="card">
    <div className="card-header" id="headingSelfHarm">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSelfHarm" aria-expanded="false" aria-controls="collapseSelfHarm">
          Suicide/Self Harm
        </button>
      </h5>
    </div>
    <div id="collapseSelfHarm" className="collapse" aria-labelledby="headingSelfHarm" data-parent="#accordion">
      <div className="card-body">
        <SuicideFormData data={props.data} />
      </div>
    </div>
  </div>
)


export default suicide
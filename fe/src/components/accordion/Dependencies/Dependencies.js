import * as React from 'react'
import DependenciesFormData from './DependenciesFormData'

const Dependencies = (props) => (
  <div className="card">
    <div className="card-header" id="headingChemicalDependency">
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseChemicalDependency" aria-expanded="true" aria-controls="collapseChemicalDependency">
          Chemical Dependency Treatment History 
        </button>
      </h5>
    </div>
    <div id="collapseChemicalDependency" className="collapse" aria-labelledby="headingChemicalDependency" data-parent="#accordion">
      <div className="card-body">
        <DependenciesFormData data={props.data} />
      </div>
    </div>
  </div>
)

export default Dependencies
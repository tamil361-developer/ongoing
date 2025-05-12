import React from 'react';

export default function Projects() {
  return (
    <section className="mb-5">
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Project One</h5>
              <p className="card-text">A brief description of your project goes here.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Project Two</h5>
              <p className="card-text">A brief description of your project goes here.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Project Three</h5>
              <p className="card-text">A brief description of your project goes here.</p>
              <a href="#" className="btn btn-primary">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

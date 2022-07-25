import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import React, {useState} from "react";

function App() {

  const [projects, setProjects] = useState([]);


  return (
    <div className="App">
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Table of content</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-responsive-xl">
                  <thead>
                  <tr>
                    <th>Project</th>
                    <th>Repo</th>
                    <th>Docs</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="alert" role="alert">
                    <td className="d-flex align-items-center">
                      <div className="img" style={{backgroundImage: 'url(logos/lsa-logo.png)' }}></div>
                      <div className="pl-3 email">
                        <span>Leading Swiss Agencies</span>
                      </div>
                    </td>
                    <td className="status"><a href="https://bitbucket.org/maxomedia/lsa-project/src/develop/"
                                              target="_blank"><span className="active">BitBucket</span></a></td>
                    <td className="status"><a href="https://maxomedia.bitbucket.io/lsa"><span
                        className="active">Docs</span></a></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

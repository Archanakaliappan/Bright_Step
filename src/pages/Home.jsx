import React from 'react'
import Dashboard from './Dashboard'

function home(){
    return (
       <div className="d-flex flex-column justify-content-center align-items-center text-center bg-light py-5" style={{ minHeight: "100vh" }}>

            <div>
            <div className="bg-light d-flex justify-content-center align-items-center py-4">
  <button className="btn btn-outline-primary rounded-pill d-flex align-items-center gap-2 px-4 py-2 shadow-sm">
    <i className="bi bi-geo-alt"></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
    <span>For Indian Students</span>
  </button>
</div>
 <div className="justify-content-center align-items-center bg-light">
    <h1 className="extra-big-text">Your Career Journey </h1>
    <h1 className="extra-big-text"> Starts Here</h1>
 </div>
    
                <h5>Personalized career guidance for 10th and 12th class students in Jammu & Kashmir.</h5>
                <h5>Discover your perfect stream, find the right colleges, </h5>
                <h5> and unlock scholarship opportunities.</h5>
                <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                    <div>
                        <button className="btn btn-primary btn-lg px-5 py-3">
      Continue Journey
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
    </button>
                    </div>
    
    <button className="btn btn-secondary btn-lg px-5 py-3">
      Browse Resources
    </button>
  </div>
  <h1 >Everything You Need for Career Success</h1>
 <h5>From stream selection to scholarship applications - we've </h5>
 <h5>got you covered with resources tailored specifically for J&K students.</h5>
 <div className="container mt-5">
  <div className="row justify-content-center g-4">
    <div className="col-md-3">
      <div className="card shadow border-0 text-center p-4">
        <div>
        <div className="bg-primary text-white rounded-4 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "100px", height: "100px", margin: "0 auto" }}   >
         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
        </div>
          <i className="bi bi-book" style={{ fontSize: "40px" }}></i>
        </div>

          <h4 className="fw-bold">Smart Assessment</h4>
          
        
        <p className="text-muted">Personalized questionnaire to discover your interests and strengths</p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card shadow border-0 text-center p-4">
        <div>
          <div className="bg-warning text-white rounded-4 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "100px", height: "100px", margin: "0 auto" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
</svg>
        </div>
        
          <i className="bi bi-award" style={{ fontSize: "40px" }}></i>
        </div>
        
        <h4 className="fw-bold">Stream Guidance</h4>
        <p className="text-muted">Get recommendations for Science, Commerce, Arts, or Vocational courses</p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card shadow border-0 text-center p-4">
        <div>
          <div className="bg-success text-white rounded-4 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "100px", height: "100px", margin: "0 auto" }}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
</svg>
        
          
        </div>
 <i className="bi bi-mortarboard" style={{ fontSize: "40px" }}></i>
        </div>
        <h4 className="fw-bold">College Directory</h4>
        <p className="text-muted">Complete list of government colleges across J&K with direct links</p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card shadow border-0 text-center p-4">
        <div>
          <div className="bg-purple text-white rounded-4 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "100px", height: "100px", margin: "0 auto", backgroundColor: "#9b59b6" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>
        </div>
          <i className="bi bi-people" style={{ fontSize: "40px" }}></i>
        </div>
        <h4 className="fw-bold">Scholarship Hub</h4>
        <p className="text-muted">Access all J&K scholarship schemes and application portals</p>
      </div>
    </div>
  </div>
</div>
<div className="">

</div>
<br/>
<br/>
<div
  className="d-flex flex-column justify-content-center align-items-center text-center text-white w-100"
  style={{
    background: "linear-gradient(90deg, #1e63f0, #e65100)",
    padding: "80px 0", // reduces height
  }}
>

  <h1 className="fw-bold display-4 mb-3">
    Ready to Shape Your Future?
  </h1>
  <p className="fs-5 mb-4">
    Join thousands of J&amp;K students who have discovered their perfect career path.
  </p>
  <button className="btn btn-light px-4 py-2 fw-semibold rounded-pill">
    Continue Assessment <span className="ms-2">→</span>
  </button>
</div>

               
            </div>
        </div>
    )
}
export default home

import Doctor from '../Assets/Doctor.jpeg'
const DashBoard=()=>
<>
{/* <Toast/> */}
<div className="login">
<div className="row justify-content-center">
    <img src={Doctor} alt="title" className="DoctorImage"/>
</div>


<div className="row">
  <div className="col">
  <iframe title="doctor"  src='https://dodxtx.shinyapps.io/EMSC/' style={{'overflow-x': 'hidden',
'overflow-y': 'vissible', height: '110vh',width:'100%'}} />

  </div>
</div>

</div>
  {/* {show &&<Alert content={content.current} show={show} variant={variant.current} closeAlert={closeAlert}/> } */}

</>


export default DashBoard
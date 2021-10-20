import loginimg from '../Assets/astronaut.png'

const DashBoard=()=>
<>
{/* <Toast/> */}
<div className="login">
<div className="row">
    <img src={loginimg} alt="title"/>
</div>


<div className="row">
  <div className="col">
  <iframe title="doctor"  src='https://dodxtx.shinyapps.io/EMSC/' style={{'overflow-x': 'hidden',
'overflow-y': 'vissible', height: '224vh',width:'100%'}} />

  </div>
</div>

</div>
  {/* {show &&<Alert content={content.current} show={show} variant={variant.current} closeAlert={closeAlert}/> } */}

</>


export default DashBoard
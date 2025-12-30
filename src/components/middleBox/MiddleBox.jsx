import "./middleBox.css";
export default function MiddleBox() {
  function makeSuper(){
    const mail=document.getElementById('email')
    mail.setAttribute('placeholder',)
  }
  return (
    <div className="middlebox">
      <h1 className="display-h1 fw-bold">Unlimited movies,</h1>
      <h1 className="fw-bold">shows, and more</h1>
      <h5>Starts at ₹149. Cancel at any time.</h5>
      <h6>
        Ready to watch? Enter your email to create or restart your membership.
      </h6>
      <div className="useremail">
        <input onClick={()=>makeSuper()} id='email' type="email" placeholder="Email address" className="fs-6 text-white"></input>
        <button className=" rounded register p-2 fs-6">Get Started </button>
      </div>
    </div>
  );
}

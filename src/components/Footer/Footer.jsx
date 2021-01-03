import Phone from "./phone.png"
import Fb from "./facebook.png"
import Web from "./web.png"
function Header(){
    return (
        <div className="footercont">
        <div className="fcont" id="fcont1"><a className="link" href=""><img className="icon" src= {Phone} alt=""/><p> Toll free <b>1800 200 1234</b></p></a></div>
        <div className="fcont" id="fcont2"><a className="link" href=""><img className="icon" src={Fb} alt=""/><p>  www.facebook.com/cripumps</p></a></div>
        <div className="fcont" id="fcont3"><a className="link" href=""><img className="icon" src={Web} alt=""/><p>  ww.crigroups.com</p></a></div>
             </div>
        );
}
export default Header;
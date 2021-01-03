import Trophy  from "./1.png";
import Headimg  from "./2.png";
import Dot  from "./dot.png";
function Body(){
    return(
    <div className="comp">
        <div className="headcont" id="headcont">
    <div className="cont" id="cont1"><img id="trophy" src={Trophy} alt=""/></div>

    <div className="cont" id="cont2">
        <div className="text">
            <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <p> <img className="dot" src={Dot} alt=""/> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
           <br></br> <img className="dot" src={Dot} alt=""/> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p>
        </div>
            <img id="im" src={Headimg} alt=""/>
            <div className="text"><p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p></div>
        </div>
        </div>
        <div className="t"><p  className="t">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p></div>
           <div className="img3"></div>
           <div className="t"><p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p></div>
            <div className="line"></div>
            <div className="t"><h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3><br/>
            <p className="t">CHEMICALS & PROCESS| POWER| WATER & WASTE| WATER OILS & GAS| PHARMA |SUGARS & DISTILLERIES |PAPER & PULP| MARINE & DEFENCE METAL & MINING |FOOD & BEVERAGE| PETROCHEMICAL & REFINERIES |SOLAR| BUILDING |HVAC| FIRE FIGHTING| AGRICULTURE & RESIDENTIAL</p>
            </div>   
        </div>
    )}

export default Body;
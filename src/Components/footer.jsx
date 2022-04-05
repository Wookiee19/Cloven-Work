import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Gmail from "../asset/envelope.svg";
import email from "../asset/email.png";
import './footer1.css'
import icon1 from '../asset/logo1.png';
import linkedin from "../asset/linkedin.png";
const FooterPage = () => {
  return (
   <>
   
<footer class="footer-distributed">

			<div class="footer-left">
            <p class="footer-company-about">
					<span>About the company</span>
					We at Cloven&Works are an education and research consultancy that offers
customized solutions tailored 
to the needs of educational
 institutions and research
organizations.
				</p>

				<div class="footer-icons">

                <a href="https://mobile.twitter.com/ClovenWorks"  target="_blank"><img src={linkedin} alt="HTML tutorial" style={{width:"42px",height:"42px"}}/></a> 
					

				</div>
            
			</div>

			<div class="footer-center">

				

				<div>
					<i class="fa fa-envelope"><img src={email} alt="HTML tutorial" style={{width:"42px",height:"42px"}}/></i>
					<p><a href="mailto:mailto:contact@cloven.works">contact@cloven.works</a></p>
				</div>

				<div>
					<i class="fa fa-envelope"><img src={email} alt="HTML tutorial" style={{width:"42px",height:"42px"}}/></i>
					<p><a href="mailto:project.cworks@gmail.com">project.cworks@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

            <img src={icon1} width="120px" height="120px"/>
            
				

            <p class="footer-company-name">Cloven&Works © 2022</p>

			</div>

		</footer>
   </>
  );
}

export default FooterPage;
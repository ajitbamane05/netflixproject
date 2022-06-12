import React from "react";
import Headerwrapper from "../Dump/header/headerwraper/Headerwrapper";
import Navbar from "../Dump/header/navbar/navbar";
import Logo from "../Dump/header/netflixlogo";
import Signinbutton from "../Dump/header/signIn/signinbutton";
import Featuretitle from "../Dump/header/Featuretitle/Featuretitle";
import Featurewrapper from "../Dump/header/Featurewraper/Featurewrapper";
import SubscribeMail from "../Dump/forms/subscribe/SubscribeMail/SubscribeMail";
import Subuscribebutton from "../Dump/forms/subscribe/subscribebutton/subscribebutton";
import SubscribeWrapper from "../Dump/forms/subscribe/Subscribewrapper/SubscribeWrapper";
import Featuretext from "../Dump/header/Featuretext/Featuretext";

function HeaderComponent(){
  return (
      <>
    <Headerwrapper>
        <Navbar className="navbar-Home">
         <Logo/>
         <Signinbutton/>
        </Navbar>
        <Featurewrapper className="feature-wrapper">
            <Featuretitle className="feature-title">
                Unlimited movies, TV shows & More
            </Featuretitle>
        </Featurewrapper>
             <Featuretext>
                 Watch anywhere. Cancel anytime.
            </Featuretext>
            <Featuretext className="second-text">
              Ready to watch? Enter your email to create or restart your membership.
            </Featuretext>
        <SubscribeWrapper>
            <SubscribeMail type="email"  className="subscribe-mail" />
                <Subuscribebutton className="subscribe-button">
                    {"Get Started"}   {">"}
                </Subuscribebutton>
        </SubscribeWrapper>
       
    </Headerwrapper>
    </>
  )
}
export default HeaderComponent;
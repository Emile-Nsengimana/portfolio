import React from "react";
import avatar from "../img/profil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";


export const Contact = () => {
  return (
    <div className="popup" id="popup-contact">
      <div className="popup-contact">
        <a href="#" id="close_login">&times;</a>
        <div className="popup-contact-content">
          <div className="popup-contact-content_msg">
            <form>
              <input className="input-txt" type="text" placeholder="Full name" />
              <input className="input-txt" type="email" placeholder="E-mail" />
              <textarea className="input-txt input-txt_area" placeholder="Message" />
              <button type="submit" className="btn-default">Send</button>
            </form>
          </div>
          <div className="popup-contact-content_more">
            <div>
              <h4>E-MAIL</h4>
              <label>emilereas7@gmail.com</label>
            </div>
            <div>
              <h4>PHONE</h4>
              <label>(+250) 782 057 791</label>
            </div>
            <div>
              <h4>LOCATION</h4>
              <label>KIGALI - RWANDA </label>
              <label>KK 270<sup>st</sup></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Chat = () => {
  return (
    <>
      <div className="chat-box" id="chat-box" style={{ width: "25%", height: "20rem", backgroundColor: "white", position: "fixed", right: "2rem", top: "61vh", borderRadius: ".7rem", padding: "1rem", boxShadow: " .2rem .1rem .2rem .2rem rgba(5, 47, 82, .3)" }}>
        <div><a style={{ fontSize: "35px", float: "right" }} href="#">&times;</a></div>
        <div style={{ borderBottom: "1px solid white", padding: "1rem", borderRadius: ".7rem", backgroundColor: "rgba(5, 47, 82, .4) " }}>
          Hi there :wave:,
          </div>
        <textarea placeholder=" Type your message here ..." style={{ width: "100%", resize: "none", height: "80%", fontSize: "1.5rem", letterSpacing: ".2rem", backgroundColor: "white", color: "rgb(5, 47, 82) ", borderRadius: ".7rem", border: "none", outline: "none", marginTop: ".1rem" }}></textarea>
      </div >
      <a href="#chat-box" className="chat-avatar">
        <img src={avatar} alt="" />
        <FontAwesomeIcon className="chat-avatar-icon" icon={faCircle} />
      </a>
    </>
  );
}

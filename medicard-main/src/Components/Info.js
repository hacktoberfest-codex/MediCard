import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
          <div className="about-text-step" style={{ border: '1px solid black', borderRadius: '0.5rem', padding: '2rem', margin: '1rem' }} >
            <p className="about-text-sTitle">

              <span>
                Patient / User
              </span>
            </p>
            <p className="about-text-description">
              Discover our comprehensive medicard services for all your medical needs, prioritizing your health and well-being
            </p>
          </div>
          <div className="about-text-step" style={{ border: '1px solid black', borderRadius: '0.5rem', padding: '2rem', margin: '1rem' }} >
            <p className="about-text-sTitle">
              <span>
                 Doctors / Provider
              </span>
            </p>
            <p className="about-text-description">
              We are dedicated to safeguarding your health, aiding recovery from all medical conditions
            </p>
          </div>
        </div>
      </div>

      <h1 style={{ color: '#9155fd' }} >Our Solutions</h1>
      <div className="info-cards-content">
        <InformationCard
          title="Efficient Healthcare Access"
          description="Patients access their medical
history via QR code, simplifying record retrieval."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Personalized Medical Recommendations:"
          description="Patients receive
expert advice based on their history and condition"
          icon={faHeartPulse}
        />

        <InformationCard
          title=" Streamlined Doctor Visits"
          description=" Doctors scan QR codes for
quick patient history access, improving consultation
efficiency.
"
          icon={faTooth}
        />

        <InformationCard
          title=" Convenient Healthcare Locator"
          description=" Find nearby doctors in
real-time for timely care.
"
          icon={faTooth}
        />

        <InformationCard
          title=" Easy Appointment Management"
          description=" Patients schedule
appointments conveniently, reducing cancellations and
clinic wait times
"
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;

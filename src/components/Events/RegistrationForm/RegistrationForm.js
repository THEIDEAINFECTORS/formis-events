import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [tentativeTime, setTentativeTime] = useState("");
  const [cabFacility, setCabFacility] = useState("");

  const handlePhoneSubmit = () => {
    setStep(2);
  };

  const handleOtpSubmit = () => {
    setStep(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      phoneNumber,
      email,
      age,
      gender,
      location,
      tentativeTime,
      cabFacility,
    });
  };

  return (
    <form
      className="w-full flex flex-col items-center gap-4 text-formisBlack14"
      onSubmit={handleSubmit}
    >
      {step === 1 && (
        <>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <div className="select w-full flex justify-between">
            <p className="text-sm text-[#545454]">Country</p>
            <p>🇮🇳 India</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={handlePhoneSubmit}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            name="otp"
            placeholder="Enter OTP"
            type="text"
            required
          />
          <button
            type="button"
            className="button"
            onClick={handleOtpSubmit}
          >
            Verify OTP
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="select w-full">
            <label className="w-[40%] text-sm text-[#545454]">Age</label>
            <select
              name="age"
              className="w-[60%] bg-transparent outline-none select-placeholder"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select your age
              </option>
              <option value="18-25">18-25</option>
              <option value="26-44">26-44</option>
              <option value="45-59">45-59</option>
              <option value="60+">60+</option>
            </select>
          </div>
          <div className="select w-full">
            <label className="w-[40%] text-sm text-[#545454]">Gender</label>
            <select
              name="gender"
              className="w-[60%] bg-transparent outline-none select-placeholder"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select your gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <input
            name="location"
            placeholder="Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            name="tentativeTime"
            placeholder="Tentative Time To Attend"
            type="text"
            value={tentativeTime}
            required
            onChange={(e) => setTentativeTime(e.target.value)}
          />
          <div className="select w-full">
            <label className="w-[40%] text-sm text-[#545454]">
              Cab Facility Required?
            </label>
            <select
              name="cabFacility"
              className="w-[60%] bg-transparent outline-none select-placeholder"
              value={cabFacility}
              onChange={(e) => setCabFacility(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button
            type="submit"
            className="button"
          >
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default RegistrationForm;
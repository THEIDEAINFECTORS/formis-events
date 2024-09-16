import { useEffect, useState } from "react";
import { toast } from "sonner";
import "./RegistrationForm.css";

const RegistrationForm = ({ reset }) => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [tentativeTime, setTentativeTime] = useState("");
  const [cabFacility, setCabFacility] = useState("");
  const [location, setLocation] = useState("America");
  const [address, setAddress] = useState("America");
  const [ticketType, setTicketType] = useState("");
  const [quantity, setQuantity] = useState("1");

  const [finalResponse, setFinalResponse] = useState();

  const [remainingTicketTypes, setRemainingTicketTypes] = useState([]);
  const [eventType, setEventType] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(finalResponse);
  }, [finalResponse]);

  // useEffect(() => {
  //   console.log({
  //     phoneNumber,
  //     name,
  //     email,
  //     age,
  //     gender,
  //     location,
  //     tentativeTime,
  //     cabFacility,
  //     ticketType,
  //     quantity,
  //   });
  // }, [
  //   phoneNumber,
  //   name,
  //   email,
  //   age,
  //   gender,
  //   location,
  //   tentativeTime,
  //   cabFacility,
  //   ticketType,
  //   quantity,
  // ]);

  // useEffect(() => {
  //   console.log("remainingTicketTypes: ", remainingTicketTypes);
  // }, [remainingTicketTypes]);

  useEffect(() => {
    if (reset) {
      setStep(1);
      setPhoneNumber("");
      setName("");
      setEmail("");
      setAge("");
      setGender("");
      setLocation("");
      setTentativeTime("");
      setCabFacility("");
    }
  }, [reset]);

  // const handlePhoneSubmit = () => {
  //   setStep(2);
  // };
  // const handleOtpSubmit = () => {
  //   setStep(3);
  // };

  const handlePhoneSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://3.109.200.32/event-registration/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: phoneNumber,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStep(2);
        toast.success("OTP sent successfully!");
      } else {
        toast.error(`Failed to send OTP: ${data.message}`);
      }
    } catch (error) {
      toast.error(`Error occurred while sending OTP: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://3.109.200.32/event-registration/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile: phoneNumber,
            otp: otp,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // localStorage.setItem(data.access);
        localStorage.setItem("accessToken", data.access);
        toast.success("OTP verified successfully!");
        setStep(3);
        fetchTicketTypes();
      } else {
        toast.error(`Incorrect OTP`);
      }
    } catch (error) {
      toast.error("Error occurred while sending OTP:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTicketTypes = async () => {
    try {
      const access = localStorage.getItem("accessToken");
      const response = await fetch(
        "http://3.109.200.32/event-registration/latest-event-details",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        setRemainingTicketTypes(data.tickets);
        setEventType(data.event);
        // toast.success("Ticket types fetched successfully!");
      } else {
        toast.error("Failed to fetch ticket types.");
      }
    } catch (error) {
      toast.error("Error occurred while fetching ticket types:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(access);
      console.log({
        mobile: phoneNumber,
        name,
        email,
        age,
        gender,
        location,
        address,
        event: eventType.id,
        attending_time: tentativeTime,
        cab_facility_required: cabFacility,
        ticket_quantity: quantity,
        ticket: ticketType,
      });
      const access = localStorage.getItem("accessToken");
      const response = await fetch(
        "http://3.109.200.32/event-registration/book-tickets",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access}`,
          },
          body: JSON.stringify({
            mobile: phoneNumber,
            name,
            address,
            email,
            age,
            gender,
            location,
            event: eventType.id,
            attending_time: tentativeTime,
            // cab_facility_required: cabFacility,
            ticket_quantity: quantity,
            ticket: ticketType,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setFinalResponse(data);
        window.open(data.payment_link, '_blank');
        window.location.href = "/events/ticket";
        // toast.success("Ticket types fetched successfully!");
      } else {
        // toast.error("Failed to fetch ticket types.");
      }
    } catch (error) {
      toast.error("Error: ", error);
    }
  };

  return (
    <form className="w-full flex flex-col items-center gap-4 text-formisBlack14">
      {step === 1 && (
        <>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            type="text"
            className="input"
            inputMode="numeric"
            value={phoneNumber}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                setPhoneNumber(value);
              }
            }}
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
            disabled={loading}
          >
            {loading ? <div className="loader mx-auto"></div> : "Next"}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            name="otp"
            placeholder="Enter OTP"
            type="text"
            value={otp}
            inputMode="numeric"
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,6}$/.test(value)) {
                setOtp(value);
              }
            }}
            required
            className="input"
          />
          <button type="button" className="button" onClick={handleOtpSubmit}>
            {loading ? <div className="loader mx-auto"></div> : "Verify OTP"}
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <input
            name="name"
            placeholder="Name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex items-center select w-full">
            <label className="w-[50%] flex items-center text-sm text-[#545454]">
              Age
            </label>
            <select
              name="age"
              className="w-[50%] cursor-pointer bg-transparent outline-none select-placeholder"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select your age
              </option>
              <option value="18-24">18-24</option>
              <option value="25-40">25-40</option>
              <option value="41-55">41-55</option>
              <option value="55+">55+</option>
            </select>
          </div>

          <div className="flex items-center select w-full">
            <label className="flex items-center w-[50%]  text-sm text-[#545454]">
              Gender
            </label>
            <select
              name="gender"
              className="w-[50%] cursor-pointer bg-transparent outline-none select-placeholder"
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

          <div className="flex items-center select w-full">
            <label className="flex items-center w-[50%]  text-sm text-[#545454]">
              Select time slot
            </label>
            <select
              name="tentativetime"
              className="w-[50%] cursor-pointer bg-transparent outline-none select-placeholder"
              value={tentativeTime}
              onChange={(e) => setTentativeTime(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select your slot
              </option>
              <option value="4PM-8PM">4PM to 8PM</option>
              <option value="8PM-12PM">8PM to 12PM</option>
            </select>
          </div>

          <div className="flex items-center select w-full">
            <label className="w-[50%] flex items-center text-sm text-[#545454]">
              Cab Required?
            </label>
            <select
              name="cabfacility"
              className="w-[50%] cursor-pointer bg-transparent outline-none select-placeholder"
              value={cabFacility}
              onChange={(e) => setCabFacility(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          {cabFacility === "Yes" && (
            <input
              name="location"
              placeholder="Location"
              type="text"
              className="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          )}

          <div className="flex items-center select w-full">
            <label className="w-[50%] flex items-center text-sm text-[#545454]">
              Ticket Type
            </label>
            <select
              name="tickettype"
              className="w-[50%] cursor-pointer bg-transparent outline-none select-box"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                Select ticket type
              </option>
              {remainingTicketTypes[0]?.total_tickets_available > 0 && (
                <option value={remainingTicketTypes[0]?.id}>
                  {remainingTicketTypes[0]?.name}
                </option>
              )}
              {remainingTicketTypes[1]?.total_tickets_available > 0 && (
                <option value={remainingTicketTypes[1]?.id}>
                  {remainingTicketTypes[1]?.name}
                </option>
              )}
              {remainingTicketTypes[2]?.total_tickets_available > 0 && (
                <option value={remainingTicketTypes[2]?.id}>
                  {remainingTicketTypes[2]?.name}
                </option>
              )}
            </select>
          </div>

          <div className="flex items-center select w-full">
            <label className="w-[50%] flex items-center text-sm text-[#545454]">
              Quantity
            </label>
            <div className="flex items-center w-[50%] bg-transparent outline-none">
              <button
                type="button"
                onClick={() =>
                  setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
                }
                className="quantity-button"
              >
                -
              </button>
              <input
                name="quantity"
                type="text"
                value={quantity}
                readOnly
                className="bg-transparent outline-none text-center"
              />
              <button
                type="button"
                onClick={() =>
                  setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10))
                  // setQuantity((prevQuantity) => prevQuantity+1)
                }
                className="quantity-button"
              >
                +
              </button>
            </div>
          </div>

          <button type="button" onClick={handleSubmit} className="button">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default RegistrationForm;

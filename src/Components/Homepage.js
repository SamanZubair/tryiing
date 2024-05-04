import React, { useState } from "react";
import myImage from "../Images/imgBjp.jpg";
const Homepage = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    // Your function logic here
    console.log("Button clicked!");
    console.log("Input value:", inputValue);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

    if (isValidEmail) {
      // Perform form submission logic here (e.g., sending data to Google Sheets)
      console.log("Form submitted with email:", inputValue);
      const currentDate = new Date();
      fetch(
        "https://sheet.best/api/sheets/3bdb1816-1212-4ff5-ab9b-442843871a11",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputValue,
            date: currentDate,
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      setInputValue(""); // Reset input field
    } else {
      alert("Please enter a valid email address.");
      setInputValue(""); // Reset input field
    }
  };

  return (
    <div className="container">
      <div className="box item1">
        <h3>
          Electoral bond scam: Ruling BJP scams 95% of funds. is not just the
          biggest scam in India but the biggest scam in the world.
        </h3>
      </div>
      <div className="box item2">
        <h3>Modi wants to turn India's election into a Hindu-Muslim war</h3>
      </div>

      <div className="box item3">
        <h3>
          Yogi Govt Enlists PR Firm to Push ‘Hathras Girl Was Not Raped’ Story
          Line With Foreign Media
        </h3>
      </div>

      <div className="box item4">
        <h3>
          No quota for Muslims as long as I am alive, says PM Modi. It seems
          like - BJP wants to turn India's election into a Hindu-Muslim war
        </h3>
      </div>
      <div
        className="box item5"
        style={{ backgroundImage: `url(${myImage})`, backgroundSize: "cover" }}
      >
        {/* <img src={myImage} alt="Description of the image" className=" box" /> */}
      </div>
      <div className="box item6">
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={inputValue}
            onChange={handleChange}
          ></input>
          <button type="submit" value="Submit" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>

      <div className="box item7">
        <h3>26% Increase in Rape Cases in Yogi's Rule</h3>
      </div>
      <div className="box item8">
        <h3>
          The Modi government has put Delhi Chief Minister Arvind Kejriwal in
          jail. Kejriwal has done good work in the education field and health
          sector. But he was put in jail since he spoke against Modi. This shows
          that Modi is bent on bringing dictatorship in the country.”
          ‘Dangerous’ to vote PM Modi back to power, he will impose dictatorship
          in India:
        </h3>
      </div>
    </div>
  );
};

export default Homepage;

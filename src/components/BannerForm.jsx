import { useForm } from "react-hook-form";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import { TbAddressBook } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";


const BannerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneCode: "",
    phoneNumber: "",
    email: "",
    city: "",
    country: "",
    board: "",
    passYear: "",
    agreeTerms: false,
  });

  const [isInputFocused, setIsInputFocused] = useState(null); 
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form validation failed.");
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.fullName = "Name is required";
      isValid = false;
    }

    if (!formData.phoneCode.trim()) {
      errors.phoneCode = "Code";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Mobile number is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required";
      isValid = false;
    }

    if (!formData.city.trim()) {
      errors.city = "City";
      isValid = false;
    }

    if (!formData.country.trim()) {
      errors.country = "Country";
      isValid = false;
    }

    if (!formData.board.trim()) {
      errors.board = "Board";
      isValid = false;
    }

    if (!formData.passYear.trim()) {
      errors.passYear = "Please select 12th passing Yr";
      isValid = false;
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = "You must agree to terms & conditions";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };
  
  const handleInputFocus = (inputName) => {
    setIsInputFocused(inputName);
  };

  const handleInputBlur = () => {
    setIsInputFocused(null);
  };

  return (
      <div className="p-3 bg-white bg-opacity-20 rounded-[18px] max-w-[520px] backdrop-blur-md">
        <form onSubmit={handleSubmit} className="rounded-[20px] py-12 pr-12 pl-14 bg-gradient-to-r from-blue-700 to-blue-400 bg-darkBlue">
          <div className="flex flex-col mb-8">
            <div className="flex items-center -ml-7">
              <LiaUserEditSolid className={`text-white text-[20px] ${isInputFocused === "Full Name" ? "text-[#009BD9]" : ""}`}/>
              <label className={`text-white text-[18px] font-medium ml-2 ${isInputFocused === "Full Name" ? "text-[#009BD9]" : ""}`}>Full Name</label>
            </div>
            <input 
              name="Full Name" 
              className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]"
              placeholder="Enter your Full Name" 
              value={formData.fullName}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("Full Name")} 
              onBlur={handleInputBlur}
            />
  
          {errors.fullName && (
            <span className="text-[#E06565] text-[13px] flex items-center mt-1">
              <RiErrorWarningFill className="mr-1" />
              {errors.fullName}
            </span>
          )}
          </div>

          <div className="flex flex-col mb-6">
            <div className="flex items-center -ml-7">
              <IoCallOutline className={`text-white text-[20px] ${isInputFocused === "Phone" ? "text-[#009BD9]" : ""}`}/>
              <label 
                className={`text-white text-[18px] font-medium ml-2 ${isInputFocused === "Phone" ? "text-[#009BD9]" : ""}`}>Phone Number</label>
            </div>

            <div className="flex gap-4">
              <div className="w-1/4">
                <input 
                  name="Phone Number" 
                  className="w-full bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]" 
                  placeholder="+91" 
                  onFocus={() => handleInputFocus("Phone")} 
                  onBlur={handleInputBlur}
                />

                {errors.phoneCode && (
                  <span className="text-[#E06565] text-[13px] flex items-center mt-1">
                    <RiErrorWarningFill className="mr-1" />
                    {errors.phoneCode}
                  </span>
                )}
              </div>

              <div className="w-3/4">
                <input 
                  name="Phone Number" 
                  className="w-full bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]" 
                  placeholder="xxx-xxx-xxxx" 
                  onFocus={() => handleInputFocus("Phone")} 
                  onBlur={handleInputBlur}
                />

                {errors.phoneNumber && (
                  <span className="text-[#E06565] text-[13px] flex items-center mt-1">
                    <RiErrorWarningFill className="mr-1" />
                    {errors.phoneNumber}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <div className="flex items-center -ml-7">
              <TbAddressBook className={`text-white text-[20px] ${isInputFocused === "Email" ? "text-[#009BD9]" : ""}`}/>

              <label className={`text-white text-[18px] font-medium ml-2 ${isInputFocused === "Email" ? "text-[#009BD9]" : ""}`}>E-mail Address</label>
            </div>

            <input 
              name="E-mail Address" 
              className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]"
              placeholder="you@company.com"
              onFocus={() => handleInputFocus("Email")} 
              onBlur={handleInputBlur}
            />

            {errors.email && (
              <span className="text-[#E06565] text-[13px] flex items-center mt-1">
                <RiErrorWarningFill className="mr-1" />
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex gap-8 mb-6">
            <div className="flex flex-col w-3/6">
              <div className="flex items-center -ml-7">
                <LuMapPin className={`text-white text-[20px] ${isInputFocused === "City" ? "text-[#009BD9]" : ""}`}/>
                <label className={`text-white text-[18px] font-medium ml-2 ${isInputFocused === "City" ? "text-[#009BD9]" : ""}`}>City</label>
              </div>
              <input 
                name="City" 
                className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]" 
                placeholder="Enter your city" 
                onFocus={() => handleInputFocus("City")} 
                onBlur={handleInputBlur}
              />

              {errors.city && (
                <span className="text-[#E06565] text-[13px] flex items-center mt-1">
                  <RiErrorWarningFill className="mr-1" />
                  {errors.city}
                </span>
              )}
            </div>

            <div className="flex flex-col w-3/6">
              <div className="flex items-center -ml-7">
                <LuMapPin className={`text-white text-[20px] ${isInputFocused === "Country" ? "text-[#009BD9]" : ""}`}/>
                <label className={`text-white text-[18px] font-medium ml-2 ${isInputFocused === "Country" ? "text-[#009BD9]" : ""}`}>Country</label>
              </div>

              <input 
                name="Country" 
                className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]" 
                placeholder="Enter your country"
                onFocus={() => handleInputFocus("Country")} 
                onBlur={handleInputBlur}
              />

              {errors.country && (
                <span className="text-[#E06565] text-[13px] flex items-center mt-1">
                  <RiErrorWarningFill className="mr-1" />
                  {errors.country}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-8 mb-6">
            <div className="flex flex-col w-3/6">
              <div className="flex items-center -ml-7">
                <LuGraduationCap  className={`text-white text-[20px] ${isInputFocused === "Board" ? "text-[#009BD9]" : ""}`}/>
                <label className={`text-white text-[18px] font-medium ml-2 ${isInputFocused === "Board" ? "text-[#009BD9]" : ""}`}>Board</label>
              </div>

              <input 
                name="City"
                className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]" 
                placeholder="Select your Board" 
                onFocus={() => handleInputFocus("Board")} 
                onBlur={handleInputBlur}
              />

              {errors.board && (
                <span className="text-[#E06565] text-[13px] flex items-center mt-1">
                  <RiErrorWarningFill className="mr-1" />
                  {errors.board}
                </span>
              )}
            </div>

            <div className="flex flex-col w-3/6">
              <div className="flex items-center -ml-7">
                <FaRegCalendarAlt className={`text-white text-[20px] ${isInputFocused === "PassYear" ? "text-[#009BD9]" : ""}`}/>
                <label className={`text-white text-[18px] font-medium ml-2 ${isInputFocused === "PassYear" ? "text-[#009BD9]" : ""}`}>12th Passing Yr</label>
              </div>

              <input 
                name="Country"
                className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white text-[14px]" 
                placeholder="Enter 12th passing Year"
                onFocus={() => handleInputFocus("PassYear")} 
                onBlur={handleInputBlur}
               />

              {errors.passYear && (
                <span className="text-[#E06565] text-[10px] flex items-center mt-1">
                  <RiErrorWarningFill className="mr-1" />
                  {errors.passYear}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-start mb-4 mt-10">
            <input 
              type="checkbox" 
              className="mr-3" 
              name="agreeTerms" 
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}/>
            <div>
            <p className="text-[11px] text-white">By checking this box, I agree to the terms and conditions.</p>

            {errors.agreeTerms && (
                <span className="text-[#E06565] text-[10px] flex items-center mt-1">
                  <RiErrorWarningFill className="mr-1" />
                  {errors.agreeTerms}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center text-white bg-red justify-center font-medium text-[15px] rounded-[50px] relative">
            <input 
              type="submit" 
              value="Register and Download Brochure"
              className="py-3 cursor-pointer w-full"
            />
            <GoArrowUpRight className="absolute right-[25px]"/>
          </div>
        </form>
      </div>
  );
};

export default BannerForm;
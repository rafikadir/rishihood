import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import { TbAddressBook } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";


const BannerForm = () => {
  const {
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
      <div className="p-3 bg-white bg-opacity-20 rounded-[18px] max-w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[20px] py-12 pr-12 pl-14 bg-gradient-to-r from-blue-700 to-blue-400 bg-darkBlue">
          <div className="flex flex-col mb-8">
            <div className="flex items-center -ml-7">
              <LiaUserEditSolid className="text-white text-[20px]"/>
              <label className="text-white text-[20px] font-medium ml-2">Full Name</label>
            </div>
            <input name="Full Name" className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="Enter your Full Name"/>
          </div>

          <div className="flex flex-col mb-6">
            <div className="flex items-center -ml-7">
              <IoCallOutline className="text-white text-[20px]"/>
              <label  className="text-white text-[20px] font-medium ml-2">Phone Number</label>
            </div>
            <div className="flex gap-4">
              <input name="Phone Number" className="w-1/4 bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="+91"/>
              <input name="Phone Number" className="w-3/4 bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="xxx-xxx-xxxx"/>
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <div className="flex items-center -ml-7">
              <TbAddressBook className="text-white text-[20px]"/>
              <label className="text-white text-[20px] font-medium ml-2">E-mail Address</label>
            </div>
            <input name="E-mail Address" className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="you@company.com"/>
          </div>

          <div className="flex gap-8 mb-6">
            <div className="flex flex-col w-3/6">
              <div className="flex items-center -ml-7">
                <LuMapPin className="text-white text-[20px]"/>
                <label className="text-white text-[20px] font-medium ml-2">City</label>
              </div>
              <input name="City" className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="Enter your city"/>
            </div>

            <div className="flex flex-col w-3/6">
            <div className="flex items-center -ml-7">
              <LuMapPin className="text-white text-[20px]"/>
              <label className="text-white text-[20px] font-medium ml-2">Country</label>
            </div>
              <input name="Country" className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="Enter your country"/>
            </div>
          </div>

          <div className="flex gap-8 mb-6">
            <div className="flex flex-col w-3/6">
              <div className="flex items-center -ml-7">
                <LuGraduationCap  className="text-white text-[20px]"/>
                <label className="text-white text-[20px] font-medium ml-2">Board</label>
              </div>
              <input name="City" className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="Enter your country"/>
            </div>
            <div className="flex flex-col w-3/6">
              <div className="flex items-center -ml-7">
                <LuMapPin className="text-white text-[20px]"/>
                <label className="text-white text-[20px] font-medium ml-2">12th Passing Yr</label>
              </div>
              <input name="Country" className="bg-darkBlue border-white border-b py-1 focus:outline-none text-white" placeholder="Enter your country"/>
            </div>
          </div>
          <div className="flex mb-4">
            <input type="checkbox" className="mr-1"/>
            <p className="text-[12px] text-white">By checking this box, I agree to the terms and conditions.</p>
          </div>

          <Button 
            type="submit" 
            text="Register and Download Brochure" 
            center={true}/>
        </form>

      </div>
  );
};

export default BannerForm;
import { useState } from "react";
import availabilityImg from "../assets/availability.png";

export default function BookFitCall() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    requirements: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;
    console.log("Form Submitted");
  };

  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-gray-200">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-4 bg-slate-950 relative">
            <img
              src={availabilityImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-8 p-8 md:p-12">
            <h2 className="text-4xl font-semibold">Book a Fit Call</h2>

            <p className="mt-4 text-gray-600 max-w-2xl">
              Speak with a solutions architect to discuss your goals, tech
              stack, and scalability needs.
            </p>

            <form className="mt-10" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-5">
                <input
                  type="text"
                  name="phone"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3 outline-none"
                />

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border rounded-lg px-4 py-3"
                >
                  <option value="">Select your Country</option>

                  <option value="India">India</option>
                </select>
              </div>

              <textarea
                rows="6"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Your Requirements"
                className="mt-5  w-full border rounded-lg p-4 resize-none"
              />

              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="  bg-blue-500  hover:bg-blue-600  text-white  px-8  py-3  rounded-full  transition "
                >
                  Request Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

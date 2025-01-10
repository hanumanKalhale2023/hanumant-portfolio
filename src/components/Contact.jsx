import { useState } from "react";
export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "783eae1a-cb8b-4e36-a657-9e9399f43aa3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <section id="Contact" className="">
            <div className='mt-20 ml-80 w-80 h-20 bg-zinc-100 border-zinc-950 rounded text-3xl font-semibold flex items-center justify-center'> Contact Me</div> 
            <p className="ml-80">Submit the form below to get in touch with me</p>
     <div className="ml-80  flex items-center justify-center mt-20 mb-20 shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600 w-80 h-80">
        <form onSubmit={onSubmit} >
            <fieldset className=" text-zinc-600">Get in Touch</fieldset>
          <input className="mt-4" type="text" name="name" placeholder="Enter your Name" required /> <br />
          <input className="mt-4" type="email" name="email" placeholder="Enter your Email " required/><br />
          <textarea className="mt-4" name="message" placeholder="Enter your Message" required></textarea> <br />
  
          <button type="submit" className="btn btn-light text-center">Let's Talk</button>
  
        </form>
        <span>{result}</span>
        </div>
      </section>
    );
  }
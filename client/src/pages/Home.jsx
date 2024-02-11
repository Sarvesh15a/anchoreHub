import React from 'react'
import Header from './../components/Header';
import FooterCom from './../components/Footer';
import  { useState } from 'react';

const Home = () => {

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    image: null,
    linkedin: '',
    github: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);
  };

  return (
    <>
        <Header/>

   <div class="max-w-md mx-auto  mb-10">
  <h2 class="text-xl font-bold mb-4">Job Application Form</h2>
  <form class="space-y-4" onSubmit={handleSubmit}>

    <label class="block" for="name">Name:</label>
    <input class="border border-gray-300 
    px-4 py-2 rounded-md w-full"
     type="text"
      id="name"
       name="name"
        value={formData.name} onChange={handleChange} 
        required />

    <label class="block" for="mobile">Mobile:</label>
    <input class="border border-gray-300 px-4 py-2 rounded-md w-full"
     type="tel"
      id="mobile"
       name="mobile"
        pattern="[0-9]{10}" 
        placeholder="Enter 10-digit mobile number" 
        value={formData.mobile} onChange={handleChange}
         required />

    <label class="block" for="image">Image:</label>
    <input class="border border-gray-300 px-4 py-2 rounded-md w-full"
     type="file" 
     id="image"
      name="image"
       accept="image/*" 
       onChange={handleFileChange} />

    <label class="block" for="linkedin">LinkedIn Link:</label>
    <input class="border border-gray-300 px-4 py-2 rounded-md w-full" 
    type="url" 
    id="linkedin" 
    name="linkedin"
     placeholder="https://www.linkedin.com/in/yourusername"
      value={formData.linkedin} onChange={handleChange}
       required />

    <label class="block" for="github">GitHub Link:</label>
    <input class="border border-gray-300 px-4 py-2 rounded-md w-full" 
    type="url" 
    id="github"
     name="github"
      placeholder="https://github.com/yourusername" value={formData.github}
       onChange={handleChange} required />

    <label class="block" for="resume">Resume:</label>
    <input class="border border-gray-300 px-4 py-2 rounded-md w-full"
     type="file" 
     id="resume"
      name="resume" 
      accept=".pdf,.doc,.docx"
       onChange={handleFileChange}
        required />

<label class="block" for="linkedin">project:</label>
    <input class="border border-gray-300 px-4 py-2 rounded-md w-full" 
    type="url" 
    id="linkedin" 
    name="linkedin"
     placeholder="https://www.linkedin.com/in/yourusername"
      value={formData.linkedin} onChange={handleChange}
       required />

    <button class="bg-blue-500 text-white px-4 py-2 rounded-md" 
    type="submit">Submit</button>
  </form>
</div>

      

        <FooterCom/>
    </>
  )
}

export default Home


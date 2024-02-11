import React from 'react'
import Header from './../components/Header';
import FooterCom from './../components/Footer';
const jobPostingsData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Co',
    location: 'City A',
    Discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Software Solutions',
    location: 'City B',
    Discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  
  {
    id: 3,
    title: 'full Stack Developer',
    company: 'Anchore ',
    location: 'City Rohtak',
    Discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihilLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Techieco  Solutions privete limited',
    location: 'City gurugram, hariyana ',
    Discription:"Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihilconsectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Software Solutions',
    location: 'City B',
    Discription:"Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Software Solutions',
    location: 'City B',
    Discription:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Software Solutions',
    location: 'City B',
    Discription:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Software Solutions',
    location: 'City B',
    Discription:"Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil adipisicing elit. Corrupti in assumenda aliquid ullam accusantium hic a officiis dolor dolorum esse! Cupiditate accusamus exercitationem nihil ab."
  },
  // Add more job postings here
];

const Project = () => {
  return (
    <>
      <Header/>
      <div className="job-list">
  <h2 className="text-2xl font-bold mb-4">Job Postings</h2>
  <div className="job-postings-list">
    {jobPostingsData.map((job) => (
      <div key={job.id} className="job-card bg-white shadow-md rounded-md p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
        <p className="text-gray-600">Company: {job.company}</p>
        <p className="text-gray-600">Location: {job.location}</p>
        <p className="text-gray-600">Discription: {job.Discription}</p>
        <button className="mt-2 bg-blue-500 hover:bg-blue-600 
        text-white font-semibold py-2 px-4 rounded-md">
          Apply Now
        </button>
        
      </div>
    ))}
  </div>
</div>

      <FooterCom/>
    </>
  )
}

export default Project




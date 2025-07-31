import React, { useEffect } from 'react';
import '../css/Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const educationData = [
  {
    level: 'Matriculation',
    field: 'Science (Computer Science)',
    institution: 'Muslim Model High School',
    year: '2009 - 2011',
    grade: 'A+',
    system: 'Annual',
    obtained: 893,
    total: 1100
  },
  {
    level: 'Intermediate',
    field: 'ICS',
    institution: 'Punjab College of Science Faisalabad',
    year: '2011 - 2013',
    grade: 'A+',
    system: 'Annual',
    obtained: 909,
    total: 1100
  },
  {
    level: 'Graduation',
    field: 'BS Computer Science (BSCS)',
    institution: 'University of the Punjab Lahore',
    year: '2015 - 2019',
    grade: '1st Division',
    system: 'Annual',
    obtained: 1362,
    total: 2200,
  }
];

const Education = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="education-section">
      <h2 className="section-title" data-aos="fade-down">Education</h2>
      <div className="table-container" data-aos="fade-up">
        <table className="education-table">
          <thead>
            <tr>
              <th data-aos="fade-right">Level</th>
              <th data-aos="fade-right" data-aos-delay="100">Field</th>
              <th data-aos="fade-right" data-aos-delay="200">Institution</th>
              <th data-aos="fade-right" data-aos-delay="300">Year</th>
              <th data-aos="fade-right" data-aos-delay="400">Grade</th>
              <th data-aos="fade-right" data-aos-delay="500">System</th>
              <th data-aos="fade-right" data-aos-delay="600">Marks Obtained</th>
              <th data-aos="fade-right" data-aos-delay="700">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((item, idx) => (
              <tr key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <td>{item.level}</td>
                <td>{item.field}</td>
                <td>{item.institution}</td>
                <td>{item.year}</td>
                <td>{item.grade}</td>
                <td>{item.system}</td>
                <td>{item.obtained}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Education;

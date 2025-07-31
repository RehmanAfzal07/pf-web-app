import  { useState, useEffect } from 'react';
import { Progress } from 'antd';
import '../css/Skills.css';

const ProgressBarWithSteps = ({ label, percent }) => (
  <div className="progress-wrapper">
    <div className="progress-label">{label}</div>
    <div className="progress-circle">
      <Progress type="dashboard" steps={8} percent={percent} trailColor="rgba(10, 20, 30, 0.2)" strokeWidth={20} />
    </div>
  </div>
);

const Skills = () => {
  const [progressValues, setProgressValues] = useState([0, 1, 2, 3,4,5,6,7]);

  useEffect(() => {
    const intervals = progressValues.map(( index) => {
      return setInterval(() => {
        setProgressValues(prevProgressValues => {
          const nextProgressValues = [...prevProgressValues];
          nextProgressValues[index] = nextProgressValues[index] + 10;
          if (nextProgressValues[index] >= 100) {
            nextProgressValues[index] = 0; 
          }
          return nextProgressValues;
        });
      }, 400 * (index + 1));
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const skills = [
    { label: 'HTML', index: 1 },
    { label: 'CSS', index: 2 },
    { label: 'JavaScript', index: 3 },
    { label: 'TypeScript', index: 4 },
    { label: 'React', index: 5 },
    { label: 'NextJS', index: 6 },
    { label: 'React Native', index: 7 },
    { label: 'UI-Libraries', index: 8 },
    { label: 'Git/Github', index: 9 },
  ];

  return (
    <>
     <div className='container-skill'>
     <h1 className='heading1' data-aos="fade-up" >TECH SKILLS</h1>
      <div id='skills' className="skills-container"  data-aos="flip-up" >
        {skills.map(skill => (
         <div className='sub-contaienr'>
           <ProgressBarWithSteps key={skill.label} label={skill.label} percent={progressValues[skill.index]} 
          data-aos="fade-up-left"
          />
         </div>
        ))}
      </div>
     </div>
     
    </>
  );
};

export default Skills;

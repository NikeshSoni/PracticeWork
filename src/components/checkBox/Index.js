import React, { useState } from 'react';

const Index = () => {
  const [values, setValues] = useState(['cricket', 'song' , 'nikesh', ]);
  const allOptions = ['cricket', 'song', 'movie',"nikesh", " Harry Was here"];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    
    if (checked) {
      setValues([...values, name]);
    } else {
      setValues(values.filter(value => value !== name));
    }
  };

 
  return (
    <div>
      {allOptions.map(option => (
        <label key={option} className='me-4'>
          <input
            type="checkbox"
            
            name={option}
            checked={values.includes(option)}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
      <div>
        <h3>Selected Values:</h3>
        <ul>
          {values.map(value => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
    
    </div>
  );
};

export default Index;

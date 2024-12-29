import React from 'react';
import './Vitals.css';

const Vitals = () => {
  const vitals = [
    { label: 'Blood Pressure', value: '120/89 mmHg', severity: 'normal' },
    { label: 'Heart Rate', value: '72 BPM', severity: 'normal' },
    { label: 'Respiratory Rate', value: '16 breaths/min', severity: 'normal' },
    { label: 'Temperature', value: '98.6°F', severity: 'normal' },
  ];

  // Function to determine the severity style
  const getSeverityClass = (severity) => {
    if (severity === 'normal') return 'normal';
    if (severity === 'high') return 'high';
    if (severity === 'low') return 'low';
    return '';
  };

  return (
    <div className="vitals">
      {vitals.map((vital, index) => (
        <div key={index} className={`vital-card ${getSeverityClass(vital.severity)}`}>
          <p>{vital.label}</p>
          <h4>{vital.value}</h4>
          <p className="severity">{vital.severity}</p>
        </div>
      ))}
    </div>
  );
};

export default Vitals;

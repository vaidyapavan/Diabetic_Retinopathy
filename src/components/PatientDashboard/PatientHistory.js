import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Importing download icon
import './PatientHistory.css';

const PatientHistory = () => {
  const history = [
    {
      dateOfVisit: '2023-01-20',
      diagnosis: 'Malaria',
      severity: 'High',
      totalVisits: 5,
      status: 'Under Treatment',
      documents: 'Malaria_Treatment_2023.pdf'
    },
    {
      dateOfVisit: '2023-02-10',
      diagnosis: 'Diabetes',
      severity: 'Low',
      totalVisits: 3,
      status: 'Stable',
      documents: 'Diabetes_Monitoring_2023.pdf'
    },
    {
      dateOfVisit: '2023-03-15',
      diagnosis: 'Hypertension',
      severity: 'High',
      totalVisits: 4,
      status: 'Monitoring',
      documents: 'Hypertension_Monitoring_2023.pdf'
    }
  ];

  return (
    <div className="patient-history">
      <h3>Patient History</h3>
      <table>
        <thead>
          <tr>
            <th>Date of Visit</th>
            <th>Diagnosis</th>
            <th>Severity</th>
            <th>Total Visits</th>
            <th>Status</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.dateOfVisit}</td>
              <td>{entry.diagnosis}</td>
              <td className={`severity ${entry.severity.toLowerCase()}`}>
                {entry.severity}
              </td>
              <td>{entry.totalVisits}</td>
              <td className={`status ${entry.status.toLowerCase().replace(' ', '-')}`}>
                {entry.status}
              </td>
              <td className="documents">
                <a href={`/documents/${entry.documents}`} download>
                  <FaDownload /> Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientHistory;

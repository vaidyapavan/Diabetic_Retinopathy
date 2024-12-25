import React, { useState } from 'react';

const LoginSection = () => {
  // State to toggle between hospital and patient login view
  const [isHospital, setIsHospital] = useState(null);

  const handleHospitalClick = () => setIsHospital(true);
  const handlePatientClick = () => setIsHospital(false);

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center p-8 bg-white">
      <div className="max-w-md w-full space-y-8">
        {/* Display buttons to select Hospital or Patient */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
          <p className="text-gray-600 mb-8">Please select your type of login</p>
          <div className="space-x-4">
            <button
              onClick={handleHospitalClick}
              className="py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Hospital Login
            </button>
            <button
              onClick={handlePatientClick}
              className="py-2 px-6 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50"
            >
              Patient Login
            </button>
          </div>
        </div>

        {/* Conditionally display content based on selection */}
        {isHospital !== null && (
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {isHospital ? 'For Hospitals' : 'For Patients'}
            </h2>
            <p className="text-gray-600 mb-8">
              {isHospital
                ? 'Manage patient records, analyze diagnosis trends, and access federated learning insights.'
                : 'Access your reports, monitor progress, and schedule consultations.'}
            </p>
            <button
              className={`w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                isHospital
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'border-2 border-gray-900 text-gray-900 hover:bg-gray-50'
              }`}
            >
              Login
            </button>

            <p className="text-sm text-center text-gray-600">
              {isHospital ? (
                "Don't have an account? Contact admin for access."
              ) : (
                <>
                  Don't have an account?{' '}
                  <a href="#signup" className="text-green-600 hover:text-green-700">
                    Sign up here
                  </a>
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSection;

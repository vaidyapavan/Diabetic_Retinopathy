import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-1 min-h-[calc(100vh-4rem)] items-center justify-center p-8 bg-white">
      <div className="max-w-md w-full text-center">
      <button
  className="w-full py-3 px-4 rounded-lg text-center font-medium transition-colors"
  style={{
    backgroundColor: '#d8b4e2', // Light purple
    color: '#fff',             // White text
  }}
>
  Login
</button>

      </div>
    </div>
  );
};

export default LoginPage;

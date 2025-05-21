import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = () => {
    const storedData = localStorage.getItem('userData');
    
    // Case 1: No user data in local storage
    if (!storedData) {
      setError('Firstly create the account');
      setTimeout(() => navigate('/signup'), 1500); // Navigate to signup after showing the error
      return;
    }

    const userData = JSON.parse(storedData);

    // Case 2: Email and password match
    if (userData.email === formData.email && userData.password === formData.password) {
      setError('');
      navigate('/user-detail'); // Navigate to user detail page on successful login
      return;
    }

    // Case 3: Email or password incorrect
    setError('Email or password is incorrect');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 rounded-lg shadow-lg bg-white">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">Sign in your PopX account</h1>
          <p className="text-sm sm:text-base text-[#676767] mt-2">
            Lorem ipsum dolor sit amet, <br className="sm:hidden" />
            consectetur adipiscing elit,
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full mt-1 p-3 border border-[#D3D3D3] rounded-lg text-sm sm:text-base text-[#A9A9A9] focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full mt-1 p-3 border border-[#D3D3D3] rounded-lg text-sm sm:text-base text-[#A9A9A9] focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg bg-[#CBCBCB] cursor-pointer text-black text-sm sm:text-base font-semibold hover:bg-[#B0B0B0] transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
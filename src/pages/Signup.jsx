import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'Yes',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.fullName) return 'Full Name is required.';
    if (!formData.phoneNumber) return 'Phone Number is required.';
    if (!formData.email) return 'Email Address is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.password) return 'Password is required.';
    if (formData.password.length < 6) return 'Password must be at least 6 characters long.';
    return '';
  };

  const handleSubmit = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    setError('');
    navigate('/user-detail'); // Navigate to user detail page after successful signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Create your PopX account</h1>
        <div className="w-full flex flex-col gap-4">
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">
              Full Name <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full p-3 border border-[#D3D3D3] rounded-lg text-sm sm:text-base text-[#676767] focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">
              Phone number <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full p-3 border border-[#D3D3D3] rounded-lg text-sm sm:text-base text-[#676767] focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">
              Email address <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full p-3 border border-[#D3D3D3] rounded-lg text-sm sm:text-base text-[#676767] focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">
              Password <span className="text-[#FF0000]">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full p-3 border border-[#D3D3D3] rounded-lg text-sm sm:text-base text-[#676767] focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">Company name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full p-3 border border-[#D3D3D3] rounded-lg text-sm sm:text-base text-[#676767] focus:outline-none focus:border-[#6C25FF]"
            />
          </div>
          <div>
            <label className="text-sm sm:text-base text-[#6C25FF]">
              Are you an agency? <span className="text-[#FF0000]">*</span>
            </label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === 'Yes'}
                  onChange={handleChange}
                  className="accent-[#6C25FF] w-5 h-5"
                />
                <span className="text-sm sm:text-base text-black">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === 'No'}
                  onChange={handleChange}
                  className="accent-[#6C25FF] w-5 h-5"
                />
                <span className="text-sm sm:text-base text-black">No</span>
              </label>
            </div>
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg bg-[#6C25FF] text-white text-sm sm:text-base font-semibold hover:bg-[#5a1fd6] transition-colors"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDetail() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      navigate('/signup'); // Redirect to signup if no user data
      return;
    }
    setUserData(JSON.parse(storedData));

    // Load profile image from local storage if it exists
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, [navigate]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setProfileImage(base64String);
        localStorage.setItem('profileImage', base64String); // Save image to local storage
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  if (!userData) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Account Settings</h1>
        <div className="relative">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-[#6C25FF] overflow-hidden">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl sm:text-5xl text-gray-500">👤</span>
            )}
          </div>
          <div
            onClick={triggerFileInput}
            className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#6C25FF] rounded-full flex items-center justify-center cursor-pointer"
          >
            <span className="text-white text-sm sm:text-base">📷</span>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-black">{userData.fullName}</h2>
          <p className="text-sm sm:text-base text-black">{userData.email}</p>
          <p className="text-xs sm:text-sm text-[#676767] mt-2 uppercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6 p-6 rounded-lg shadow-lg bg-white">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">Welcome to PopX</h1>
          <p className="text-sm sm:text-base text-[#676767] mt-2">
            Lorem ipsum dolor sit amet, <br className="sm:hidden" />
            consectetur adipiscing elit,
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          <button
            onClick={() => navigate('/signup')}
            className="w-full py-3 rounded-lg bg-[#6C25FF]  cursor-pointer text-white text-sm sm:text-base font-semibold hover:bg-[#5a1fd6] transition-colors"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-lg bg-[#C8C4FF] cursor-pointer text-black text-sm sm:text-base font-semibold hover:bg-[#b8b4ff] transition-colors"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
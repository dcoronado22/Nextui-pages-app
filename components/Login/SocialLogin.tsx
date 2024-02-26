// components/SocialLogin.tsx
const SocialLogin = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Iniciar sesión con:</h2>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mb-4 w-full">
          Google
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 w-full">
          Microsoft
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

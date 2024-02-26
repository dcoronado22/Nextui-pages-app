// pages/login.tsx
import Header from "../components/Login/Header";
import LoginForm from "../components/Login/LoginForm";
import SocialLogin from "../components/Login/SocialLogin";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 relative">
      {/* Fondo de imagen */}
      <img
        src="/image-invoice.jpeg"
        className="absolute inset-0 object-cover w-full h-full z-0"
        alt="Background"
      />

      {/* Contenedor principal */}
      <div className="z-10">
        <Header />
        <div className="w-full max-w-xl mx-auto p-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

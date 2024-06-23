import LoginForm from "@/components/displayform/LoginForm";
import RegistrationForm from "@/components/displayform/RegistrationForm";
import TextInput from "@/components/form/TextInput";

const Login = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default Login;

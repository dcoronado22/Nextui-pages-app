import React from "react";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Divider,
  Input,
  Link,
} from "@nextui-org/react";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/icons/eyeFiledIcon";
import { GoogleIcon } from "@/icons/google";
import { MicrosoftIcon } from "@/icons/microsoft";
import { useRouter } from "next/navigation";

// components/LoginForm.tsx
const LoginForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();

  const handleClick = (e: any) => {
    router.push("/DashboardPage");
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full max-w-2xl mx-auto p-1">
      <Card className="w-96">
        <CardBody>
          <div className="rounded px-6 pt-6 pb-4 mb-4">
            {/* Aquí va el formulario de inicio de sesión */}
            <h2 className="text-2xl mb-4 text-center">Iniciar sesión</h2>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Ingrese su email"
              className="py-2 w-full max-w-xs"
            />
            <Input
              label="Contraseña"
              variant="bordered"
              placeholder="Ingrese su contraseña"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="py-2 w-full max-w-xs"
            />
            <Checkbox className="py-5 w-full max-w-xs text-xs">
              <p className="text-sm">Recuerdame</p>
            </Checkbox>
            <Button
              color="primary"
              href="./Dashboard"
              className="py-5 w-full max-w-xs"
              onPress={handleClick}
            >
              Iniciar sesión
            </Button>
            <div className="flex items-center gap-4 py-2">
              <hr
                className="bg-divider border-none w-full h-divider flex-1"
                role="separator"
              />
              <p className="shrink-0 text-tiny text-default-500">OR</p>
              <hr
                className="bg-divider border-none w-full h-divider flex-1"
                role="separator"
              />
            </div>
            <Button variant="bordered" className="py-2 px-4 mb-4 w-full">
              <GoogleIcon className="text-2xl text-default-400 pointer-events-none" />
              Ingresa con Google
            </Button>
            <Button variant="bordered" className="py-2 px-4 mb-4 w-full">
              <MicrosoftIcon className="text-2xl text-default-400 pointer-events-none" />
              Ingresa con Microsoft
            </Button>
          </div>
          <p className="text-center text-gray-500 text-sm">
            ¿Necesitas crear una cuenta?{" "}
            <Link href="#" className="text-blue-500 hover:text-blue-700">
              Regístrate
            </Link>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginForm;

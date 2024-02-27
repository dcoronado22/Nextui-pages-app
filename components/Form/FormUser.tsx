import {
  Button,
  Card,
  Input,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import React, { useState } from "react";
import { statusOptions, teams } from "../Table/data";
import { useRouter } from "next/router";

const FormUser = (data: any) => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    role: "",
    team: "",
    status: "",
    age: "",
    email: "",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    notifications: false,
  });
  console.log(data);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes enviar formData a donde lo necesites
    let lastElement = data.data.slice(-1)[0].id + 1;
    formData.id = lastElement;
    data.data.push(formData);
    saveLocalStorage(data.data);
    router.push("GridPage");
  };

  const saveLocalStorage = (data: any) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto p-4">
        {id}
        <Card className="p-4">
          <div>
            <form
              className="grid grid-cols-2 p-4 gap-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 col-span-1">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 col-span-1">
                <label htmlFor="role" className="block mb-1">
                  Rol
                </label>
                <Input
                  id="role"
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="team" className="block mb-1">
                  Equipo
                </label>
                <Select
                  id="team"
                  name="team"
                  placeholder="Seleccione un equipo"
                  value={formData.team}
                  onChange={handleInputChange}
                >
                  {teams.map((team) => (
                    <SelectItem key={team.id} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="mb-4">
                <label htmlFor="status" className="block mb-1">
                  Status
                </label>
                <Select
                  id="status"
                  name="status"
                  placeholder="Seleccione un status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  {statusOptions.map((status) => (
                    <SelectItem key={status.id} value={status.name}>
                      {status.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block mb-1">
                  Age
                </label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <Switch defaultSelected>Notificaciones</Switch>
              </div>
              <Button variant="ghost" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default FormUser;

import {
  Button,
  Card,
  Input,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import React from "react";
import { statusOptions, teams } from "../Table/data";

const FormUser = () => {
  return (
    <>
      <div className="w-full max-w-3xl mx-auto p-4">
        <Card className="p-4">
          <div>
            <form className="grid grid-cols-2 p-4 gap-4">
              <div className="mb-4 col-span-1">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <Input id="name" type="text" />
              </div>
              <div className="mb-4 col-span-1">
                <label htmlFor="rol" className="block mb-1">
                  Rol
                </label>
                <Input id="rol" type="text" />
              </div>
              <div className="mb-4">
                <label htmlFor="equipo" className="block mb-1">
                  Equipo
                </label>
                <Select id="equipo" placeholder="Seleccione un equipo">
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
                <Select id="status" placeholder="Seleccione un status">
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
                <Input id="age" type="number" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <Input id="email" type="email" />
              </div>
              <div className="mb-4">
                <Switch defaultSelected>Notificaciones</Switch>
              </div>
              <Button type="submit" variant="ghost" color="primary">
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

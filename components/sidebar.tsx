// components/Sidebar.tsx
import { Button, User, Image, Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons/searchIcon";
import { HeartIcon } from "@/icons/heartIcon";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const redirectClick = (Page: string) => {
    router.push(Page);
  };

  return (
    <>
      <div className="flex-col h-full p-4 text-left bg-zinc-900">
        <Image
          width={100}
          alt="NextUI hero Image"
          className="p-1 mb-8"
          style={{ marginLeft: "50%" }}
          src="./logo.png"
        />
        <div className="mb-4">
          <User
            className="text-white ml-2"
            name="Daniel Coronado"
            description="test"
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
          />
        </div>

        <Input
          className="mb-10 max-w-80"
          classNames={{
            base: "sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          startContent={<SearchIcon size={18} />}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
        <div className="flex flex-col justify-center flex-grow space-y-2">
          <Button
            color="danger"
            startContent={<HeartIcon />}
            variant="light"
            className="justify-start"
            onPress={() => {
              redirectClick("/Login");
            }}
          >
            Login
          </Button>
          <Button
            color="primary"
            variant="light"
            className="justify-start"
            startContent={<HeartIcon />}
            onPress={() => {
              redirectClick("/DashboardPage");
            }}
          >
            Dashboard
          </Button>
          <Button
            color="secondary"
            variant="light"
            className="justify-start"
            startContent={<SearchIcon />}
            onPress={() => {
              redirectClick("/GridPage");
            }}
          >
            Grid
          </Button>
          <Button
            color="success"
            variant="light"
            className="justify-start"
            startContent={<HeartIcon />}
            onPress={() => {
              redirectClick("/CardsPage");
            }}
          >
            Cards
          </Button>
          <Button
            color="warning"
            variant="light"
            className="justify-start"
            startContent={<HeartIcon />}
            onPress={() => {
              redirectClick("/FormPage");
            }}
          >
            Formulario
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

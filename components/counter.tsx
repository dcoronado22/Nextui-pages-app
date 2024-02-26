import { useState } from "react";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
    handleConfetti();
  };

  const handleConfetti = () => {
    confetti({}); // Aquí debes proporcionar los parámetros adecuados para la función confetti
  };

  return (
    <Button radius="full" onPress={handlePress}>
      Count is {count}
    </Button>
  );
};

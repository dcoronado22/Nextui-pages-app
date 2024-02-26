// components/LoadingProgress.tsx
import { Progress } from "@nextui-org/react";

const LoadingProgress = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-2/6">
        <Progress isIndeterminate label="Loading..." size="md" />
      </div>
    </div>
  );
};

export default LoadingProgress;

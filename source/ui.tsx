import React, { useState } from "react";
import { Text, Box } from "ink";
import create from "zustand";
import SelectInput from "ink-select-input";

type AppStore = {
  fruit: string;
  setFruit: (fruit: string) => void;
};

const useAppStore = create<AppStore>((set) => ({
  fruit: "mango",
  setFruit: (newFruit) => {
    set(() => ({ fruit: newFruit }));
  },
}));

const App = () => {
  const { fruit, setFruit } = useAppStore();
  const [_, setState] = useState(0);

  return (
    <Box flexDirection="column">
      <Text>Selected fruit: {fruit}</Text>
      <SelectInput
        items={["apple", "mango", "orange", "pineapple"].map((mode) => {
          return {
            label: mode,
            value: mode,
          };
        })}
        onSelect={(item) => {
          setFruit(item.value);
          setState((curr) => curr + 1);
        }}
      />
    </Box>
  );
};

module.exports = App;
export default App;

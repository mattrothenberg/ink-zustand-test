// @ts-nocheck
import React, { FC, useState } from "react";
import { Box, Text } from "ink";
import {
	modes,
	store,
	useActions,
	useCliStore,
	useMode,
	useStoreActions,
	useStoreState,
} from "./state";
import SelectInput from "ink-select-input/build/SelectInput";
import { useBearStore } from "./cli";
import { StoreProvider } from "easy-peasy";

const Count = ({ count }) => {
	return <Text>{count}</Text>;
};

const AppInner: FC<{ name?: string }> = ({ count }) => {
	const [state, setState] = useState(0);
	const { setMode } = useActions();
	const mode = useMode();
	// const setMode = useStoreActions((actions) => actions.setMode);
	// const mode = useStoreState((state) => state.mode);

	return (
		<Box flexDirection="column">
			<Box>
				<Text>Mode: {mode}</Text>
				<Text>State: {state}</Text>
			</Box>
			<SelectInput
				items={modes.map((mode) => {
					return {
						label: mode,
						value: mode,
					};
				})}
				onSelect={(item) => {
					setMode(item.value);
					setState(state + 1);
				}}
			/>
		</Box>
	);
};

const App = () => {
	return (
		<StoreProvider store={store}>
			<AppInner />
		</StoreProvider>
	);
};

module.exports = App;
export default App;

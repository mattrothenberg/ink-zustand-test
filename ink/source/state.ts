// import { produce } from "immer";
import { action, Action, createStore, createTypedHooks } from "easy-peasy";
import create from "zustand";

export const modes = ["initial", "completion", "confirm", "revise"] as const;
export type CLIStateMode = typeof modes[number];

type State = {
	mode: number;
};

type Actions = {
	setMode: (mode: any) => void;
};

type CLIStore = State & { actions: Actions };

export const useCliStore = create<CLIStore>((set) => ({
	mode: 69,
	actions: {
		setMode: () => {
			let randomNumber = Math.floor(Math.random() * 100);
			return set({ mode: randomNumber });
		},

		// setMode: (mode) => {
		// 	// This implementation w/Immer DOES NOT WORK.
		// 	// set(
		// 	// 	produce((state) => {
		// 	// 		state.mode = mode;
		// 	// 	})
		// 	// );

		// 	set({ mode });
		// },
	},
}));

export const useActions = () => useCliStore((state) => state.actions);
export const useMode = () => useCliStore((state) => state.mode);

type CLIStoreModel = {
	mode: CLIStateMode;
	setMode: Action<CLIStoreModel, CLIStateMode>;
};

export const store = createStore<CLIStoreModel>({
	mode: modes[0],
	setMode: action((state, payload) => {
		console.log(payload);
		state.mode = payload;
	}),
});

const typedHooks = createTypedHooks<CLIStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

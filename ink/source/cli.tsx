#!/usr/bin/env node
// @ts-nocheck
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";
import create from "zustand";
import { StoreProvider } from "easy-peasy";
import { store } from "./state";

export const useBearStore = create((set, get) => ({
	bears: 0,
	increasePopulation: () => {
		console.log("here", get().bears);
		set((state) => ({ bears: state.bears + 1 }));
	},
}));

const cli = meow(
	`
	Usage
	  $ education

	Options
		--name  Your name

	Examples
	  $ education --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: "string",
			},
		},
	}
);

render(<App />);

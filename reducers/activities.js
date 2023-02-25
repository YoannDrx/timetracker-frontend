import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const activitiesSlice = createSlice({
	name: 'activities',
	initialState,
	reducers: {
		addActivity: (state, action) => {
			state.value.push(action.payload);
		},
		removeActivity: (state, action) => {
			state.value = state.value.filter(activity => activity.name !== action.payload.name);
		},
		startTimer: (state, action) => {
			state.value = state.value.map(activity => {
				if (activity.name === action.payload.name) {
					activity.ongoing = true;
				}
				return activity;
			});
		},
		stopTimer: (state, action) => {
			state.value = state.value.map(activity => {
				if (activity.name === action.payload.name) {
					activity.ongoing = false;
				}
				return activity;
			});
		},
		updateTimer: (state, action) => {
			state.value = state.value.map(activity => {
				if (activity.name === action.payload.name) {
					activity.timer++;
				}
				return activity;
			});
		},
	},
});

export const { addActivity, removeActivity, startTimer, stopTimer, updateTimer } = activitiesSlice.actions;
export default activitiesSlice.reducer;

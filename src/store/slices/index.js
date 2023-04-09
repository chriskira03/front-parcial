import { createSlice } from '@reduxjs/toolkit';

export const contadorSlice = createSlice({
	name: 'userCajero',
	initialState: {
		indice: 0,
		saldo: 1200,
	},
	reducers: {
		setCantidad: (state, action) => {
			state.indice = action.payload;
		},
		setSaldo: (state, action) => {
			state.saldo = action.payload;
		},
	},
});

export const { setCantidad, setSaldo } = contadorSlice.actions;

export default contadorSlice.reducer;

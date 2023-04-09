import { configureStore } from '@reduxjs/toolkit';

import contadorSlice from './slices';

export default configureStore({
	reducer: {
		userCajero: contadorSlice,
	},
});

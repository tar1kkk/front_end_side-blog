import { configureStore, congigureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { authReducer } from './slices/auth';

const store = configureStore({
	reducer: {
		posts: postsReducer,
		auth: authReducer,
	},
})

export default store;
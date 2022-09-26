import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    image: [],
};

const lunchSlice = createSlice({
    name: 'lunch',
    initialState,
    reducers: {
        getData(state, action) {
            state.data = state.data.push(...action.payload);
        },
        getImage(state, action) {
            state.image = state.data.push(...action.payload);
        },
        removeData(state, action) {
            let count = 0;
            for (let obj of state.data) {
                if (obj.id === action.payload) {
                    break;
                }
                count += 1;
            }
            state.data = [
                ...state.data.slice(0, count),
                ...state.data.slice(count + 1),
            ];
        },
        removeImage(state, action) {
            let count = 0;
            for (let obj of state.image) {
                if (obj.id === action.payload) {
                    break;
                }
                count += 1;
            }
            state.data = [
                ...state.image.slice(0, count),
                ...state.image.slice(count + 1),
            ];
        },
    },
});
export const lunchActions = lunchSlice.actions;
export default lunchSlice.reducer;

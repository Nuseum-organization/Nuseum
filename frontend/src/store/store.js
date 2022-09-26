import { configureStore } from '@reduxjs/toolkit';

// directory 묶어서 관리 가능한지 여부 확인
import breakfastSlice from './meal-slice/breakfast-slice';
import dinnerSlice from './meal-slice/dinner-slice';
import lunchSlice from './meal-slice/lunch-slice';
import snackSlice from './meal-slice/snack-slice';
import supplementSlice from './supplement-slice';

const store = configureStore({
    reducer: {
        breakfast: breakfastSlice,
        lunch: lunchSlice,
        dinner: dinnerSlice,
        snack: snackSlice,
        supplement: supplementSlice,
    },
});

export default store;

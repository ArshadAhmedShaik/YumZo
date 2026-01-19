import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            "addItem": (state, action) => {

                // older redux (vanilla)  => DON'T MUTATE STATE!
                // const newState = [...state];
                // newState.items.push(action.payload);
                // return newState => was kind of mandatory! 
                // ---------------------------------------------------
                // but new redux toolkit => WE HAVE TO MUTATE THE STATE
                // no need to return anything! => not mandatory at all 🥹
                // Newer Redux toolkit uses immer Behind the scenes 
                // either retuen the new state or mutate the existing state 

                state.items.push(action.payload);

            },
            "removeItem": (state, action) => {

                    const removalIndex = action.payload;
                    state.items = state.items.filter((_, index) => {
                             return index != removalIndex;
                    });
                   
                    
            }, 
            "emptyCart": (state, action) => {
                    state.items.length = 0;
            }
        }
    }
);

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
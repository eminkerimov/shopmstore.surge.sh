import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    cartOpen: false,
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)
            
            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(
                item => item.id !== action.payload
            )
        },
        resetCart: (state) => {
            state.products = []
        },
        handleCart: (state, action) => {
            state.cartOpen = action.payload
        },
        totalCart: (state, action) => {
            state.total = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, handleCart, totalCart } = cartSlice.actions

export default cartSlice.reducer
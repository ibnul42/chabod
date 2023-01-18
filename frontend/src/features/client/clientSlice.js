import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import clientService from './clientService'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
    contacts: null,
    isAllContacts: false,
    isDeletedContact: false,
    isCreatedContact: false,
    isCreatedPrayer: false,
}

export const getContacts = createAsyncThunk('clients/all-contacts', async (_, thunkAPI) => {
    try {
        return await clientService.getContacts()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const createContact = createAsyncThunk('clients/create-contact', async (data, thunkAPI) => {
    try {
        return await clientService.createContact(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteContact = createAsyncThunk('clients/delete-contact', async (id, thunkAPI) => {
    try {
        return await clientService.deleteContact(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.isAllContacts = false
            state.isCreatedContact = false
            state.isCreatedPrayer = false
            state.isDeletedContact = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getContacts.pending, (state) => {
            state.isLoading = false
        })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.contacts = action.payload
            state.isAllContacts = true
        })
        .addCase(getContacts.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.contacts = null
        })
        .addCase(createContact.pending, (state) => {
            state.isLoading = false
        })
        .addCase(createContact.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.contacts = action.payload
            state.isCreatedContact = true
        })
        .addCase(createContact.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.contacts = null
        })
        .addCase(deleteContact.pending, (state) => {
            state.isLoading = false
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.contacts = action.payload
            state.isDeletedContact = true
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = clientSlice.actions

export default clientSlice.reducer
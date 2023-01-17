import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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
        return await eventService.getContacts()
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// single Event
export const singleEvent = createAsyncThunk('event/single-event', async(date, thunkAPI) => {
    try {
        return await eventService.singleEvent(date)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getEvent = createAsyncThunk('event/get-event', async(id, thunkAPI) => {
    try {
        return await eventService.getEvent(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// all Event
export const allEvent = createAsyncThunk('event/all-event', async(date, thunkAPI) => {
    try {
        return await eventService.allEvent(date)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// create Event
export const createEvent = createAsyncThunk('event/create-event', async(data, thunkAPI) => {
    try {
        return await eventService.createEvent(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// delete Event
export const deleteEvent = createAsyncThunk('event/delete-event', async(id, thunkAPI) => {
    try {
        return await eventService.deleteEvent(id)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// update Event
export const updateEvent = createAsyncThunk('event/update-event', async(data, thunkAPI) => {
    try {
        return await eventService.updateEvent(data)
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const clientSlice = createSlice({
    name: 'event',
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
            .addCase(getContacts.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
                state.contacts = action.payload
            })
            .addCase(getContacts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.contacts = null
            })
    }
})

export const { reset } = clientSlice.actions

export default clientSlice.reducer
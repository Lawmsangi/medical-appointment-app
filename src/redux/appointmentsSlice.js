import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  privateAppointments: [],
  isLoading: true,
};

const loadAppointmentsFromLocalStorage = () => {
  const existingAppointmentsFromStorage = JSON.parse(localStorage.getItem('appointments')) || [];
  return existingAppointmentsFromStorage;
};

const saveAppointmentsToLocalStorage = (appointments) => {
  localStorage.setItem('appointments', JSON.stringify(appointments));
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    ...initialState,
    appointments: loadAppointmentsFromLocalStorage(),
  },
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
      saveAppointmentsToLocalStorage(state.appointments);
    },
    removeAppointment: (state, action) => {
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
      saveAppointmentsToLocalStorage(state.appointments);
    },
  },
});

export const { addAppointment, removeAppointment } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
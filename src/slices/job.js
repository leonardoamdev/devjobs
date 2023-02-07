import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';

const initialState = {
  jobs: [],
  isLoading: false,
  isLoaded: false,
};

const slice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    getJobs(state, action) {
      const jobs = action.payload;

      state.jobs = jobs;
    },
    setLoadingOn(state) {
      state.isLoading = true;
    },
    setLoadingOff(state) {
      state.isLoading = false;
    },
    setLoaded(state) {
      state.isLoaded = true;
    },
  },
});

export const reducer = slice.reducer;

export const getJobs = () => async dispatch => {
  dispatch(slice.actions.setLoadingOn());

  const response = await axios.get('/api/jobs');

  dispatch(slice.actions.getJobs(response.data));
  dispatch(slice.actions.setLoadingOff());
  dispatch(slice.actions.setLoaded());
};

export default slice;

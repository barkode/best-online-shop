import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://d10lvg3mbdbpo0.cloudfront.net/users';

const config = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

export const registration = createAsyncThunk(
  'auth/register',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(
        `/auth/customers/register`,
        {
          userDtoCreateRequest: {
            address: 'Pfld;lg',
            email: 'dianaforost@gmail.com',
            firstName: 'Diana',
            gender: 'MALE',
            lastName: 'Forostiana',
            dateOfBirth: '2005-07-12T18:00:00',
            phone: '+380957372174',
            password: 'P@ssw0rd',
            repeatPassword: 'P@ssw0rd',
          },
        },
        config.headers
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(`/auth/login`, credentials, config.headers);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const res = await axios.post(`/auth/logOut`, '', config.headers);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

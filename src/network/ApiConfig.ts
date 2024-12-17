import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// Definisi base URL API
const API_BASE_URL: string = 'http://localhost:3001'; // Ganti dengan URL API Anda

// Membuat instance Axios dengan pengaturan default
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Optional: set timeout request
});

// Interface untuk menangani data respons dan error
// interface ApiResponse<T> {
//   data: T;
// }

// Menangani kesalahan request
const handleRequestError = (error: AxiosError): Promise<never> => {
  if (error.response) {
    console.error('Response error:', error.response.data);
  } else if (error.request) {
    console.error('Request error:', error.request);
  } else {
    console.error('Error:', error.message);
  }
  return Promise.reject(error);
};

// GET request
export const get = async <T>(endpoint: string, params: Record<string, any> = {}): Promise<T> => {
  try {
    const config: AxiosRequestConfig = { params };
    const response: AxiosResponse<T> = await axiosInstance.get(endpoint, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error as AxiosError);
  }
};

// POST request
export const post = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    return handleRequestError(error as AxiosError);
  }
};

// PUT request
export const put = async <T>(endpoint: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    return handleRequestError(error as AxiosError);
  }
};

// DELETE request
export const del = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    return handleRequestError(error as AxiosError);
  }
};

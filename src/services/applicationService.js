import axiosInstance from '../api/axiosInstance';

export const evaluateApplication = async (
  data
) => {
  const response =
    await axiosInstance.post(
      '/applications/evaluate',
      data
    );

  return response.data;
};
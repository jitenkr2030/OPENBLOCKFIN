// src/utils/apiHelpers.js
export const handleApiError = (error) => {
    if (error.response) {
      return error.response.data;
    }
    return { message: 'Network Error' };
  };
  
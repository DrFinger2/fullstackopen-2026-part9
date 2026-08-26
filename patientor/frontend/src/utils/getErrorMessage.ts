import axios from "axios";

const getErrorMessage = (error: unknown): string => {
  const fallback = "Failed to add new entry";

  if (!axios.isAxiosError(error) || !error.response) {
    return fallback;
  }

  const responseError = error.response.data?.error;

  if (typeof responseError === "string") {
    return responseError;
  }

  if (Array.isArray(responseError)) {
    return responseError.at(-1).message;
  }

  return fallback;
};
export default getErrorMessage;

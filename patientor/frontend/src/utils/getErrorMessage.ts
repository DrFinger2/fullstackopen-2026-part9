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

  if (Array.isArray(responseError) && responseError.length > 0) {
    const issue = responseError[0];
    const field =
      Array.isArray(issue?.path) && issue.path.length > 0
        ? issue.path.join(".")
        : undefined;

    const capitalizedField = field
      ? field.charAt(0).toUpperCase() + field.slice(1)
      : field;

    return capitalizedField
      ? `${capitalizedField}: ${issue.message}`
      : (issue?.message ?? fallback);
  }
  return fallback;
};
export default getErrorMessage;

const INTERNAL_ERROR_MESSAGE = "Something went wrong!";

const getErrorMessage = (error: unknown): string => {
  let message = INTERNAL_ERROR_MESSAGE;
  if (error instanceof Error) {
    message = error.message;
  }
  if (typeof error === "string") {
    message = error;
  }
  return message;
};

export { getErrorMessage };

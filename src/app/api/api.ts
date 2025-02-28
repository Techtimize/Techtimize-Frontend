import { getErrorMessage } from "@/app/utils";

interface SuccessResponse<T> {
  data: T;
  status: "success";
}

interface ErrorResponse {
  error: string;
  status: "error";
}

type NetworkResponse<T> = SuccessResponse<T> | ErrorResponse;

const CONTENT_TYPE = "Content-Type";
const JSON_CONTENT = "application/json";

const POST = async <T>(
  url: string,
  body: FormData | object
): Promise<NetworkResponse<T>> => {
  const isInstanceOfFormData = body instanceof FormData;
  const result = await fetch(url, {
    method: "POST",
    body: isInstanceOfFormData ? body : JSON.stringify(body),
  });
  const jsonResult = await result.json();
  if (!result.ok) {
    return {
      status: "error",
      error: getErrorMessage(jsonResult.error),
    };
  }
  const data = jsonResult.data;
  return {
    status: "success",
    data,
  };
};

const DELETE = async <T>(
  url: string,
  body?: object
): Promise<NetworkResponse<T>> => {
  const result = await fetch(url, {
    method: "DELETE",
    body: body ? JSON.stringify(body) : undefined,
  });
  const jsonResult = await result.json();
  if (!result.ok) {
    return {
      status: "error",
      error: getErrorMessage(jsonResult.error),
    };
  }
  const data = jsonResult.data;
  return {
    status: "success",
    data,
  };
};

const GET = async <T>(
  url: string,
  options?: RequestInit
): Promise<NetworkResponse<T>> => {
  const result = await fetch(url, {
    cache: options?.next?.revalidate ? undefined : "no-store",
    ...options,
  });

  const jsonResult = await result.json();
  if (!result.ok) {
    return {
      status: "error",
      error: getErrorMessage(jsonResult.error),
    };
  }
  const data = jsonResult.data;
  return {
    status: "success",
    data,
  };
};

const PUT = async <T>(
  url: string,
  body: FormData | object
): Promise<NetworkResponse<T>> => {
  const isInstanceOfFormData = body instanceof FormData;
  const result = await fetch(url, {
    method: "PUT",
    body: isInstanceOfFormData ? body : JSON.stringify(body),
  });
  const jsonResult = await result.json();
  if (!result.ok) {
    return {
      status: "error",
      error: getErrorMessage(jsonResult.error),
    };
  }
  const data = jsonResult.data;
  return {
    status: "success",
    data,
  };
};

const PATCH = async <T>(
  url: string,
  body: FormData | object
): Promise<NetworkResponse<T>> => {
  const isInstanceOfFormData = body instanceof FormData;
  const result = await fetch(url, {
    method: "PATCH",
    body: isInstanceOfFormData ? body : JSON.stringify(body),
  });
  const jsonResult = await result.json();
  if (!result.ok) {
    return {
      status: "error",
      error: getErrorMessage(jsonResult.error),
    };
  }
  const data = jsonResult.data;
  return {
    status: "success",
    data,
  };
};

export { POST, GET, DELETE, PUT, PATCH };

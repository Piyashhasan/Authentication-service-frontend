import axiosInstance from "./axios";

// -- fetcher --
export const fetcher = async <T>(url: string): Promise<T> => {
  const { data } = await axiosInstance.get<T>(url);
  return data;
};

// -- mutator --
export const mutator = async <T, B = unknown>(
  url: string,
  { arg }: { arg: { method: "post" | "put" | "patch" | "delete"; body?: B } },
): Promise<T> => {
  const { method, body } = arg;
  const { data } = await axiosInstance.request<T>({
    url,
    method,
    data: body,
  });
  return data;
};

export const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  revalidateIfStale: false,
  shouldRetryOnError: false,
  dedupingInterval: 10000,
};

import axiosInstance from "./axios";

export const fetcher = async <T>(url: string): Promise<T> => {
  const { data } = await axiosInstance.get<T>(url);
  return data;
};

export const swrConfig = {
  fetcher,
};

// refreshInterval: 3000,
// revalidateIfStale: false,
// revalidateOnFocus: false,
// revalidationOnReconnect:false,
// shouldRetryOnError: false,
// dedupingInterval: 10000,

// post - tigger, isMutating - { optimisticData: data (this data come from anothe swr), rollbackOnError}
// get - {data, isLoading, error, isMutating, isValidating}

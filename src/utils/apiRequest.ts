import toast from "react-hot-toast";
export type RequestParams = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: string;
  data: object;
  resourceName?: string;
  successMessage?: string;
  failedMessage?: string;
  reset: () => void;
  redirect: () => void;
};
export async function makePostRequest({
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect,
  successMessage = `New ${resourceName} Created Successfully`,
  failedMessage = "Something Went wrong",
}: RequestParams) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(successMessage);
      reset();
      redirect();
    } else {
      setLoading(false);
      if (response.status === 409) {
        toast.error("Already exists");
      } else {
        toast.error(failedMessage);
      }
    }
    console.log(response.status);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makePutRequest({
  setLoading,
  endpoint,
  data,
  resourceName,
  redirect,
}: RequestParams) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log(response);
      setLoading(false);
      toast.success(`${resourceName} Updated Successfully`);
      redirect();
    } else {
      setLoading(false);
      toast.error("Something Went wrong");
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

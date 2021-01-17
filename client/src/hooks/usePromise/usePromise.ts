import useIsMounted from "../useIsMounted";

/** Creates a safe promise that will only resolve or reject if the component is still mounted */
function usePromise(): <Result extends any = any>(
  promise: Promise<Result>
) => Promise<Result> {
  const isMounted = useIsMounted();

  function creator<Result extends any = any>(promise: Promise<Result>) {
    return new Promise<Result>((resolve, reject) => {
      promise
        .then((result) => {
          if (isMounted()) {
            resolve(result);
          }
        })
        .catch((error) => {
          if (isMounted()) {
            reject(error);
          }
        });
    });
  }

  return creator;
}

export default usePromise;

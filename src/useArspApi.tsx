import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Dev Notes:
 * The reason for writing 'setDataState(d => ...)' is because 'dataState' is only used the 'setDataState' call.
 * Otherwise, the rule for React Hook useEffect will be broken because it would be missing 'dataState' as a dependency
 * and it will then ask for it to be included (resulting in a render loop) or for the dependency array to be
 * removed (also resulting in a loop).
 */

const useArspApi = (url: string) => {
  const [dataState, setDataState] = useState({ data: [], isFetching: false });
  const [endpointUrl] = useState(url);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setDataState((d) => ({ ...d, isFetching: true }));
        const response = await axios.get(endpointUrl);
        setDataState((d) => ({
          ...d,
          data: response.data,
          isFetching: false,
        }));
      } catch (e) {
        console.log(e);
        setDataState((d) => ({ ...d, isFetching: false }));
      }
    };
    fetchDataFromApi();
  }, [endpointUrl]);

  return [dataState];
};

export default useArspApi;

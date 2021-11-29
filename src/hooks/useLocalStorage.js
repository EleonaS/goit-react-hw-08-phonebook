import {
  useState,
  useEffect,
} from 'react';

//-----2вариант------переиспользуемый хук
//1:07

export default function useLocalStorage(
  key,
  defaultValue,
) {
  const [state, setState] = useState(
    () =>
      JSON.parse(
        window.localStorage.getItem(
          key,
        ),
      ) ?? defaultValue,
  );

  useEffect(() => {
    window.localStorage.setItem(
      key,
      JSON.stringify(state),
    );
  }, [key, state]);

  return [state, setState];
}

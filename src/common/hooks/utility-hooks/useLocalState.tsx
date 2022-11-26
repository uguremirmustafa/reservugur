/* eslint-disable consistent-return */
import React, { useState, useEffect } from "react";

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalState = <T extends unknown>(
  key: string,
  initial?: T
): ReturnType<T> => {
  const [value, setValue] = useState<T>(() => {
    if (initial === undefined || initial === null) return;
    try {
      const saved = window.localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch (error) {
      return initial;
    }
  });
  useEffect(() => {
    if (value) {
      console.log("run");
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  }, [value]);
  return [value, setValue];
};

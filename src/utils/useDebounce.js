import { useCallback } from "react";

export const debounce = (func)=>{
    let timer;
    return function (...args){
      const context = this;
      if(timer) clearTimeout(timer);
      timer = setTimeout(()=>{
        timer=null;
        func.apply(context, args);
      }, 500);
    };
  };

export const optimizedDebouncedFn = (func)=>{
    return useCallback(debounce(func), [])
}
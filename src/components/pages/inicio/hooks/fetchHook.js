import React from "react";
    
function useFetch(url) {
   const [open, setOpen] = React.useState(false);
   const [options, setOptions] = React.useState([]);
   const loading = open && options.length === 0;
 
   React.useEffect(() => {
     let active = true;
 
     if (!loading) {
       return undefined;
     }
 
     (async () => {
       const response = await fetch(url);
       const json = await response.json();
 
       if (active) {
         setOptions([...json]);
       }
     })();
 
     return () => {
       active = false;
     };
   }, [loading, url]);
 
   React.useEffect(() => {
     if (!open) {
       setOptions([]);
     }
   }, [open]);
    
   return [open, setOpen, options, loading];
}

export { useFetch };
import React from "react";
    
function useFetch(url) {
   const [options, setOptions] = React.useState([]);
 
   React.useEffect(() => {
      let active = true;

     (async () => {
       const response = await fetch(url);
       const json = await response.json();

       const result = json.reduce((acc, item) => {
            acc[`tit${item.titId}`] !== undefined 
            ? acc[`tit${item.titId}`] = [...acc[`tit${item.titId}`], item] 
            : acc[`tit${item.titId}`] = [item]
            return acc
        }, {})

        for (const item of Object.keys(result)) {
            result[item] = result[item].reduce((acc, newItem) => {
                acc[`art${newItem.artId}`] 
                ? acc[`art${newItem.artId}`] = [...acc[`art${newItem.artId}`], newItem] 
                : acc[`art${newItem.artId}`] = [newItem]
                return acc
            }, {})
        }

       if (active) setOptions([result]);
     })();

     return () => {
      active = false;
     }
   }, [url]);
    
   return [options];
}

export { useFetch };
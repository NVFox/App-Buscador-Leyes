import React from "react";
    
function useFetch(url, inputArr) {
   const [options, setOptions] = React.useState([]);
 
   React.useEffect(() => {
      let active = true;

     (async () => {
       const response = await fetch(url);
       const json = await response.json();

       const compareWords = ([storedArr, index], inputArr) => {
        const filteredArr = [...new Set([...storedArr, ...inputArr])];

        return {
         numeroCoincidencias: (storedArr.length + inputArr.length) - filteredArr.length,
         index: index
        }
       }

       const sortedElements = json.map((item, i) => compareWords([item.artPalabrasClave.split(", "), i], inputArr))
       .sort((a, b) => b.numeroCoincidencias - a.numeroCoincidencias)
       .filter(item => item.numeroCoincidencias > 0)
       .map(item => json[item.index]);

       if (active) setOptions(sortedElements);
     })();

     return () => {
      active = false;
     }
   }, [url, inputArr]);
    
   return [options];
}

export { useFetch };
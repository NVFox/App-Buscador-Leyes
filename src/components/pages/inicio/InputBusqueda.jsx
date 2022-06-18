import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/fetchHook";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

export default function InputBusqueda({ setValues }) {
  
  const [open, setOpen, options, loading] = useFetch(`${process.env.REACT_APP_REQUEST_DOMAIN}/articulos`);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const filterOptions = (opts) => {
      let newArr = [];
  
      for (const item of opts) {
        const palabrasArr = item.artPalabrasClave.split(", ");
        for (const newItem of palabrasArr) {
          newArr = [...newArr, newItem];
        }
      }
  
      return [...new Set(newArr)];
    }

    setFilteredOptions(filterOptions(options));
  }, [options])

  return (
    <Autocomplete
      multiple
      id="asynchronous-demo"
      sx={{ width: "80%"}}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(_e, newVal) => {
        setValues(newVal)
      }}
      getOptionLabel={(option) => option}
      options={filteredOptions}
      loading={loading}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Palabras Clave"
          color="primary"
          sx={{ background: "rgb(255, 255, 255)"}}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

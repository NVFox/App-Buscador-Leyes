import React, { useState } from "react";
import { useFetch } from "../hooks/fetchHook";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';

export default function InputBusqueda() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch("http://localhost:4000/articulos");
      const json = await response.json();

      if (active) {
        setOptions([...json]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      multiple
      id="asynchronous-demo"
      sx={{ width: "50%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.artId === value.artId}
      getOptionLabel={(option) => option.artPalabrasClave}
      options={options}
      loading={loading}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.artNombre} ({option.leyNombre}) ({option.artPalabrasClave})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Palabras Clave"
          sx={{ background: "rgba(238, 238, 238, 0.8)" }}
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

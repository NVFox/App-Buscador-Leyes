import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/fetchHook"
import ElementosBusqueda from "./ElementosBusqueda";

export default function InputBusqueda() {

    const [data, loading] = useFetch("");

    return (
      <div>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">Claves</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Introduzca palabras claves"
            onChange={e => <ElementosBusqueda fetchedData={[data, loading]} inputElements={e.target.value.split(", ")} />}
          />
        </div>
      </div>
    )
  }
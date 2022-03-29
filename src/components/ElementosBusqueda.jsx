import React from 'react'
import bootstrap from 'bootstrap'
import ElementoBusqueda from './ElementoBusqueda';

const ElementosBusqueda = ({fetchedData, inputElements}) => {

    const [data, loading] = fetchedData;

    const compareWords = ([storedArr, index], inputArr) => {
        const filteredArr = [...new Set([...storedArr, ...inputArr])];

        return {
            numeroCoincidencias: (storedArr.length + inputArr.length) - filteredArr.length,
            index: index
        }
    }

    const sortedElements = data.map((item, i) => compareWords([item.artPalabrasClave.split(", "), i], inputElements)).sort((a, b) => a.numeroCoincidencias - b.numeroCoincidencias);

    return (
        <div>
            {loading
            ?   <div>Loading...</div>
            :   <div className="absolute top-0 right-0 flex items-center">
                    <label htmlFor="elementos-busqueda" className="sr-only">
                      Elementos
                    </label>
                    <select
                        id="elementos-busqueda"
                        name="elementos-busqueda"
                        className="form-select focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                        aria-label="Default select example"
                    >
                        {sortedElements.slice(0, 4).map(item => {
                            <ElementoBusqueda key={data[item].artId} elemento={data[item]} />
                        })}
                    </select>
                </div>
            }
        </div>
    )
}

export default ElementosBusqueda
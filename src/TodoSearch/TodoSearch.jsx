
import './TodoSearch.css';

/* eslint-disable react/prop-types */
function TodoSearch({
    searchValue,
    setSearchValue
}) {
    //Creamos un estado
    //const [searchValue, setSearchValue] = useState('');
    //console.log('Los usuarios buscan todos de: ', searchValue);

    return(
        <input
            placeholder="Buscar Todos"
            //Atamos el atributo value al valor del estado del componente, y como en el onChange este valor cambiara, por lo tanto en el input tambien se vera reflejado el cambio
            value={searchValue}
            onChange={(event) => {
                //Actualizamos el valor del estado, en este caso, el valor sera lo que el usuario escriba en el input
                setSearchValue(event.target.value)
            }}
        />
    )
}

export { TodoSearch }
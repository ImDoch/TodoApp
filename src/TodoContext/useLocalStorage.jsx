import { useState } from "react";


//custom hook, debe iniciar con use
function useLocalStorage(itemName, initialValue) {
    
    let parsedItem;
      
    parsedItem = JSON.parse(localStorage.getItem(itemName));

    if (!parsedItem) {
      parsedItem = localStorage.setItem(itemName, JSON.stringify(initialValue))
    }
  
    const [item, setItem] = useState(parsedItem)
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return [item, saveItem]
}

export {useLocalStorage}
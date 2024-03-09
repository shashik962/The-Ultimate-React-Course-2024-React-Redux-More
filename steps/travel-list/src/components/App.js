import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList  from "./PackingList";
import Stats  from "./Stats";

// const initialItems  = [
//     { id: 1, description: "Passport", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: true },
//     { id: 3, description: "Charger", quantity: 12, packed: false },
// ];

export default function App() {
    const [items, setItems] = useState([]);
    /* const [numItems, setNumItems] = useState(0); //Don't do this. */

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
       /*  setNumItems((num) => num + 1); //Don't do this. */
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handletoggleItem(id) {
        setItems((items) => 
            items.map((item) => 
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function handleClearList() {
        const confirm = window.confirm("Are you sure you want to delete all items?");
        if(confirm) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handletoggleItem} onClearList={handleClearList} />
            <Stats items={items} />
        </div>
    );
}



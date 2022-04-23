import { useEffect, useState } from "react";

function Counter() {

    // membuat state dengan useState 
    const [angka, setAngkta] = useState(0);

    function addAngka() {
        setAngkta(angka + 1)
    }
    // Use Effect dijalankan pada lifecycle mount dan update
    const updateDom = () => {
        console.log("Life cycle dimount")
        // melakukan side effect mengakses DOM
        document.title = `Hasil : ${angka}`
    }
    useEffect(updateDom, [angka])
    // [] -> dijalankan pada lifecycle mount saja useEffect(updateDom, [])
    // [angka] -> ketika state yang di dalam array berubah jalankan useEffect

    console.log("Life cycle dirender")
    return (
        <div>
            <p>Hasil : {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    )
}
export default Counter;
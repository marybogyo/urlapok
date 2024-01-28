import { useState } from "react"

export default function Urlap(props){
    const [obj, setObj]=useState({nev:"", szul:2022})

    function kuld(event){
        event.preventDefault() //nem laravellel küldöm az adatokat hanem js-el
        console.log(obj)
        props.kuld(obj) //megkapja az obj adatokat az App js
    }

    function adatValt(event){
    //console.log(event.target)
    //console.log(event.target.value)
    //console.log(event.target.id)

        const masolat={...obj}
        masolat[event.target.id]= event.target.value
        setObj(masolat)
    }

    return(
        <>
        <h2>Új adat rögzítése</h2>
        <form onSubmit={kuld}>
        <div>
            <label htmlFor="nev">Név:</label>
            <input type="text" onChange={adatValt} id="nev" value={obj.nev} placeholder="Vezeteknev Keresztnev" name="nev"/>
        </div>
        <div >
            <label htmlFor="szul">Születési év:</label>
            <input type="number" onChange={adatValt} min="2000" value={obj.szul} max="2024" id="szul"  name="szul"/>
        </div>
        <input type="submit" id="submit" value="OK"/>
        </form>
        </>
    )
}
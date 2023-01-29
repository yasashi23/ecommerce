import React, {useState} from "react";



function List(props) {

    // const [getValhh, setValhh] = useState([])


    function klik(k, l, o) {
        // k = ''
        const y = k.splice(l,0)
        // const kk = setValhh(`${m}`)
        console.log(o + l + k)
        // y.remove()
        // console.log(kk)

    }

return(
    <div>
        <h1 >haloo semuanya</h1>
        <ul>

            {props.items.map((m, i) => <li key={i} onClick={() => klik(props.items, i, m)}>{m}</li>)}
        </ul>
    </div>
)
}

export default List;
// import { useState,useEffect,Component } from "react";



// class Kotak extends Component {
//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }

// }

const num = ["AC","+/-","%",9,8,7,6,5,4,3,2,1]
const op = ["/","*","-","+","="]
const ls = [0,"."]

function Kotak(props){
    return(
        <div className="kotak">
                <div>
                    {num.reverse().map(m => <div className="num">{m}</div>)}
                </div>
                <div>
                    {op.map(m => <div className="op">{m}</div>)}
                </div>
        </div>
    )
}
export default Kotak;



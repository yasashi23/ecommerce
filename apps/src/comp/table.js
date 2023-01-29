import styled from "styled-components";
import { useState, useEffect } from "react";
import rupiah from "rupiah"

const Table = () =>{
    const [data,setData] = useState([])
    const [image,setImage] = useState([])
    const [duit,setDuit] = useState(rupiah.format(amount))
    const {amount} = this.props
    const imagee = []
    useEffect(()=> {
        const fetchUser = async () =>{
            const response = await fetch("http://localhost:5000/api")
            const result = await response.json()
            setData(result)
            setImage(imagee)
        } 
        fetchUser()
    },[data,image])


    return(
        <Container>
            <div className="cont">
                {data.map((d,ind) => {
                    return(
                        <Produk key={ind}>
                            <h1>{d.Produk}</h1>
                            <img src={d.gambar} alt="" />
                        </Produk>
                    )
                })}
            </div>
        </Container>
    )
}

const Container = styled.div`
color:black;
`
const Produk = styled.div`
img{
    width:200px;
    height:auto;
}
`
export default Table

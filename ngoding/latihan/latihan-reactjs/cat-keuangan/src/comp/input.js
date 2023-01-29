import Cek from './cekInput'
import {useState} from 'react'


function Input(props) {
    const [nama,setNama] = useState('nama')
    const [email,setEmail] = useState('email')
    const [pass,setPass] = useState('pass')



    function clickInp(e) {
        const inp = e.target
        // console.log(pass.length)
        inp.classList.add('on')
    }

    function cekingNama(d) {
        const inp = d.target.value
        const inpT = d.target
        setNama(()=>{return inp})
        cekAll(inp.length,inpT)
    }

    function cekingEmail(d) {
        const inp = d.target.value
        const inpT = d.target
        setEmail(()=>{return inp})
        cekAll(inp.length,inpT)
    }   

    function cekingPass(d) {
        const inp = d.target.value
        const inpT = d.target
        setPass(()=>{
        return inp
    })
    cekAll(inp.length,inpT)
}
    function cekAll(r,u) {
        if(r < 1) {
            u.classList.remove('on')
        }else{
            u.classList.add('on')
        }
    }


    
    return(
        <div className='inputParent bg-black'>
            <h1 className='my-8'>BriliantBook</h1>
            <div className="input bg-black flex items-center flex-col">
                <h1 className="text-white mt-10 mb-10 font-bold">SIGN UP</h1>
                <form method="post" action="../funcApp/funcMain.js" className='flex items-center flex-col'>
                    <label className="relative">
                        <input type="text" className=" bg-black inputTxt border-2 rounded-lg border-white border-opacity-50 px-6 outline-none text-white transition duration-200" onClick={clickInp} onChange={cekingNama}/>
                        <span className="text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text" >
                            Nama</span>
                    </label>

                    <label className="relative my-10">
                        <input type="text" className=" bg-black inputTxt border-2 rounded-lg border-white border-opacity-50 px-6 outline-none text-white transition duration-200" onClick={clickInp} onChange={cekingEmail}/>
                        <span className="text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text" >
                            Email</span>
                    </label>

                    <label className="relative">
                        <input type="text" className=" bg-black inputTxt border-2 rounded-lg border-white border-opacity-50 px-6 outline-none text-white transition duration-200" onClick={clickInp} onChange={cekingPass}/>
                        <span className="text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text">
                            Password</span>
                    </label>
                    <button type='submit' className="text-white mt-10 hover:opacity-50 mb-2">Start Now!!</button>
                </form>
                <p className='text-white mb-8 opacity-80'>You have the account? <span className='hover:opacity-50'> Please Login at here</span></p>
            </div>
        </div>
    )
}





export default Input
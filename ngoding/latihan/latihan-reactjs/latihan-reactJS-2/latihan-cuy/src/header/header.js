function Header(props){
    return(
        <div>
            <div className='contNav'>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
                <ul>
                    <li>{props.name}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
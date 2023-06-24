import {useState} from 'react'
 function Like (){
    const[data,setData]=useState(0);
    function updateLike()
    {
        setData(data+1)
    }
    console.warn("---------")
    return(
        <div>
            <h3>{data}</h3>
            <button onClick={updateLike}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB8CAMAAACWsEibAAAAflBMVEX29vb+/v5AZrExNDn39/f////6+voiJSstMDXGxsgvNj81Q2BDZq4+WI0qLjPm5+hER0o5PD9iY2eeoKKUlpgVGiE6TG+qq61EZKQxOUzw8PEaHyVvcXTX19nh4eJXWV28vb+Cg4aKjI9NT1N5e34OExvOz9BAV4SytLYzO0kCi3dxAAAGYUlEQVRogeWbC5ObOAyAcTE2tD3zzHFnngnZXPr//+AhGRIg2QTjrbmZ087sa1r0rSxLsiwcaiaOo75sf0D/iD3FHIBOPu8BcFuJjRymAIw4YV2HkjG6BwAjVda4nPOovEqy6UkmAJTVx1gItxdfiOgqmWUAFnTcd0fx+bneQGAAQKtCKNW+wuBdRWwCsOoD1fKuiQoO34q40raBiQXCAyhNQ4c51SkGa4go1CUwAZDwZ/vSQ7k08BMvpebzTAAcXIHQI714nmzABjzVdAMTABr1zvdRI0CPILuewHc13cBoGya9xkM1ABCvin1YBL0nGgGUANCOAMTL0SkCLRMYARx7gOJ6B5BgEpFoeYERwImD190AiBeACQotLzACSAEgmwCgV/CTNQBYc3G8AxCvLXoniEKNZxoBXAGgJBMTOP0+dAsdNzTLhuhzbGoC8Eue2QK4QOTpZgAtMmk81AigxixMpwA1BKNYwwmMKiLUVjhTAAcygrisXwMjAAnJ4BBOAIh3BidobQF0/jQZIIAKTuuDoREA2nsBoILTjhbILQKwCjZBIWcA18IiAJh7HgdGC1jxARpiSZZN9Vt1QszGblHPAUpr25BVMRTi5Vw/bgxuIxBR54iHkYUBQohNro1QzCrQxI8z/X1hClVhp3E42ApAaQlbIKoXAJgNdQrjrQCsVceQuf4+EOrWZBsBKAVn8yO5BMBCOf/9AAyKv17TQj/xoCq1UJKpLOB3ztIABCoEoVOXbwNgORiAXx8MEHIrVTHF3S4a7wHgUmiWhNsACGQhV7RL/X0uhEL9vPz1RBj28yY6twCwGg1QskeADJYgyT6XtK0km6rcAkBO2I65POhXFaHr8xdSiCYNJy3FDQCsEk+CsNoEzb1t96n43E3vLcUNAAT/TFE9AZDxCgBsKd6aWfoA7MJVHfIEoCpeWR9FtRZ5MxJoA1AHDcDDR/39uSh9J1kiMIvz863PrwnAAv5YiN0IVkh4xP7umDB0AaiTPM1Cq6VHCOAM32dytgWAXdEDH7KQFkPr3juKd4D3t1Pwj7AdKZrNBlBGgHJWNKh6BKDEkfUrkQwsRrATVzxkIU0CPNHEuAYDAJNp/HF4JbzsS10qoTM/b4psAaDYzwvuADRM+LsQItyA4VnI5YGZ/iFki/YOoM4Y7wi6GjsSs7aUCcD1BkDDVSGU5xl6wJMspKl/uQQqun7/+4X8QrfBo8DZVD90kuBp1R0Ao9uPv17IP9/HRBI/yUK6ANliGw4AP799Ln+MAMXzIKylPxgDEdUH4KVRDAL1XhUJtOQ9FK8HOJyosf4r3nXybJIN1wL4RfqkCtDTL48FulInmT5A3JrqJ3C7hlte5PoWEIlxBAIT5BHe7LiBtg98CUDvBKEqKhupuw2/BgCKZ4z8k1BsGYB4eN8mEqoZB74MQJ0hXT/cD4DCCYaDG+4DMPQz8x0BMmyo/n8t4JFk7OjuBFBjKKr32gXqYKAaqrtEQuzkuAIrEvvJqE+oOR4O43qHXNBrD4MSEzLPyQ7ZkLXHTvUo+FnSPdJxeVAnkCLZUBF9xRLgqA1MHchpi8aiBdSojSjZ7VhufRekfHanYh8ghGOZf2G7AWCbUeS7AQwHw9vV5l4A2Y4Ax32XwHPgtke0+wG0/JaIdglEYaOGj5xdADxPlng2b9k4DW4PYDJ5KpL75bI9AFm1WYKp2Hcn1/u2APo0WAy3Ff5svsGaBbz8MPQ73evtbQCrAEQ1Q0UTzAZMLDqhGnnNFzP4FgHwSo0vZ78tAhA1hrwbgJrw+VjOFtgMRAiwnPDRAfAbadAn9HDogdd0O4DrR7lBKArUfZ8JQB/EynqjETwPZ6xOy1tC7W5515ItCJ6X4tRHwIwsAJGMl9WqK9q50EylQWpmARVMD10W1A5bL7TOO2wM8sf5Gi2AqFOXa77gbhxpiIsHcl/kj3OGWnGgrM/D/T++XLRe1P/g6cMCLAGGD/Xl2+2bn2MgYvTaiBFBU0R8faJ/CvDrzxfyY3AhItuSF1ysGtUYxe/XrN/AT9+GUxeX9euL00EbTslRxsL2lHSxjkRlWrPn813D1W25xq7D6yu0Z3BkqCPS+UT9DeASvyXw+cm517K6b7Z+KkOjglySdwMwbua8eM5mGTslzLnkL6UNt71RuQ6AonO9CWfOb7XAbvJfANhZ/gU3irfaiHkISAAAAABJRU5ErkJggg=="></img></button>
        </div>
    )
 
 }
 export default Like;
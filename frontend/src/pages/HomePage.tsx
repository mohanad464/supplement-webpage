import Herosection from "../components/Herosection"
import { useEffect, useState } from "react";

    
    const HomePage = () => {
      const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3003/Product").then( async (response) => {
      const data = await response.json()
      setProducts(data)
    })
  }, [])
      return (
<>
<Herosection/>
</>
      )
    }
    
    export default HomePage
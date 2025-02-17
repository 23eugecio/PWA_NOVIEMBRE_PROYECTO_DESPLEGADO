import { useEffect, useState } from "react"
import { getAuthenticatedHeaders, GET } from "../fetching/http.fetching"

const useProducts = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await GET('http://localhost:3000/api/products',
            {
                headers: getAuthenticatedHeaders()
            })

        console.log({ response })
        if (response.ok) {
            setProducts(response.payload.products)
        }

    }
    useEffect(
        () => {
            getProducts()
        },
        []
    )

    return { products }
}

export default useProducts
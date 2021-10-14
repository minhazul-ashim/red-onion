import { useEffect, useState } from "react"

const useDishes = (menu) => {

    const [dishes, setDishes] = useState([]);
    const url = `./${menu}.json`

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setDishes(data))
    }, [])
    return dishes;
}

export default useDishes;
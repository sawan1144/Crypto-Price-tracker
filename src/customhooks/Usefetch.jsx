import React, { useEffect, useState } from 'react'

const Usefetch = () => {
    const [loading, setloading] = useState(false)
    const [allcoin, setAllcoin] = useState([])
    const [currency, setCurrency] = useState({name:'usd', symbol: '$'})

    useEffect(() => {
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-iTf14Dm7pF7ZcpkM5qQAEnUr' } };
        setloading(true);
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=100&page=1&sparkline=false`, options)
            .then((raw)=>{if(!raw) {throw new Error(`Error: ${raw.status}`)} 
            return raw.json()})
            .then(res => setAllcoin(res))
            .catch(err => console.error(err))
            .finally(()=>setloading(false));
    }, [currency])

    return {allcoin, currency, setCurrency, loading}
}

export default Usefetch
import React, { useEffect, useState } from 'react'

const Usefetch = () => {

    const [allcoin, setAllcoin] = useState([])
    const [currency, setCurrency] = useState({name:'usd', symbol: '$'})

    useEffect(() => {
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-iTf14Dm7pF7ZcpkM5qQAEnUr' } };
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h`, options)
            .then(res => res.json())
            .then(res => setAllcoin(res))
            .catch(err => console.error(err));
    }, [currency])

    return {allcoin, setCurrency}
}

export default Usefetch
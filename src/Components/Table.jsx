
const Table = () => {
  return (
    <div className='px-60 py-10'>
        <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] bg-[#121212] p-5 rounded-xl border border-gray-600'>
            <div>#</div>
            <div>Coin</div>
            <div>Price</div>
            <div>24h Change</div>
            <div className='text-right'>Market Cap</div>
        </div>
    </div>
  )
}

export default Table
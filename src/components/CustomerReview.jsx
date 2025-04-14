function CustomerReview({ name, rating, description }) {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'text-yellow-500' : 'text-yellow-50'}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <div className='w-full min-h-[120px] mb-5 bg-gradient-to-b from-green-800 to-black rounded-xl text-white p-5'>
      <h3 className="font-bold text-lg mb-5">
        {name}
        <span className='mx-5'>{renderStars()}</span>
      </h3>
      <p className="text-lg">{description}</p>      
    </div>
  )
}

export default CustomerReview
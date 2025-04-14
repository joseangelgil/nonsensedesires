import Image from '../assets/images/favicon-32x32.png'

function Header({ onClick }) {
  return (
    <header 
      className=' 
          min-h-[100px] 
          w-full 
          p-5
          flex 
          justify-center 
          items-center
          flex-col
          gap-2
          text-center
          fixed
          top-0
          bg-white
          shadow-sm'>
      <div className='flex justify-center items-center text-center'>        
        <img src={Image} alt='NonsenseDesires icon'/>
        <h1 className='bg-gradient-to-b from-green-500 to-black bg-clip-text text-3xl sm:text-4xl font-bold tracking-wider text-transparent mx-2 sm:mx-5'>
          NonSenseDesireS
        </h1>
        <img src={Image} alt='NonsenseDesires icon'/>
      </div>
      <svg onClick={onClick} className='sm:absolute sm:right-7 size-12 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='1.5' stroke='#0d452b'>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    </header>
  )
}

export default Header



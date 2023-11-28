import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
   <footer className=' sm:sticky sm:bottom-0 w-full border-t-2 bg-gray-100 border-gray-200 flex flex-col justify-center items-center pt-8  ' >

    <FooterLinks />
  

    <div className='w-full '>
<span
    className='
    block
    text-center
    text-gray-400 
    font-serif
    pt-4
    pb-2
    '
    >
      Created By Amir Ali 
    </span>
    </div>
   

   </footer>
  )
}

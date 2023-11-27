import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
   <footer className='  w-full border-t-2 border-gray-200 flex flex-col justify-center items-center px-4 pt-8  ' >

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

import React from 'react'

function Header() {
  return (
      <header className=''>
          <div className="container mx-auto px-[20px] py-[10px]  flex justify-around items-center ">

             
              <a href="">
                  <img className='max-w-[122px] w-full h-[55px]' src="/public/imgs/logo.png" alt="" />
              </a>

              <ul className='flex gap-[10px]'>
                  <li className='pr-4 border-r border-gray-300 hover:text-[#EF7C00] font-bold duration-300 '>
                      <a href="">Продукция</a>
                  </li>
                  <li className='pr-4 border-r border-gray-300 hover:text-[#EF7C00] font-bold duration-300 '>
                      <a href="">Сертификаты</a>
                  </li>
                  <li className='pr-4 border-r border-gray-300 hover:text-[#EF7C00] font-bold duration-300 '>
                      <a href="">Наша команда</a>
                  </li>
                  <li className='pr-4 border-r border-gray-300 hover:text-[#EF7C00] font-bold duration-300 '>
                      <a href="">О нас</a>
                  </li>
                  <li className='pr-4 border-r border-gray-300 hover:text-[#EF7C00] font-bold duration-300 '>
                      <a href="">Новости</a>
                  </li>
                  <li className='pr-4 border-r border-gray-300 hover:text-[#EF7C00] font-bold duration-300 '>
                      <a href="">Вакансии</a>
                  </li>
                  <li className='hover:text-[#EF7C00] font-bold duration-300 '>
                      <a href="">Контакты</a>
                  </li>
              </ul>

              <div className='flex gap-[5px]'>
                  <h1 className='pr-4 border-r border-gray-300 hover:text-[#EF7C00] duration-300 cursor-pointer'>
                      Ru
                  </h1>
                  <h1 className='hover:text-[#EF7C00] duration-300 cursor-pointer'>
                      En
                  </h1>
              </div>

          </div>
      </header>

)
}   

export default Header
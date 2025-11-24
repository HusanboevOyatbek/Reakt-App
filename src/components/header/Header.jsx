import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { toast } from "react-toastify";

function Header() {
    const [dark, setDark] = useState(false)

    function changeMode() {
        document.documentElement.classList.toggle("dark");
        setDark(!dark)
        toast(` ${dark ? "☀️Kungi rejimga" : "🌙Tungi rejimga"} o'zgardi` , {
        position:"top-left"
        })
    }

    return (
        <header className='fixed top-0 left-0 w-full bg-white dark:bg-[grey]/90 dark:text-white shadow py-[20px] z-[9999]'>
            <div className="container mx-auto px-[20px] py-[10px] flex justify-around items-center">

                <a href="" className="">
                    <img className='max-w-[122px] w-full' src="/public/imgs/logo.png" alt="" />
                </a>

                <ul className='lg:flex gap-[10px] hidden'>
                    <li className='pr-4 border-r border-gray-300 dark:border-gray-600 hover:text-[#EF7C00] font-bold duration-300 '>
                        <a href="">Продукция</a>
                    </li>

                    <li className='pr-4 border-r border-gray-300 dark:border-gray-600 hover:text-[#EF7C00] font-bold duration-300 '>
                        <a href="">Сертификаты</a>
                    </li>

                    <li className='pr-4 border-r border-gray-300 dark:border-gray-600 hover:text-[#EF7C00] font-bold duration-300 '>
                        <a href="">Наша команда</a>
                    </li>

                    <li className='pr-4 border-r border-gray-300 dark:border-gray-600 hover:text-[#EF7C00] font-bold duration-300 '>
                        <a href="">О нас</a>
                    </li>

                    <li className='pr-4 border-r border-gray-300 dark:border-gray-600 hover:text-[#EF7C00] font-bold duration-300 '>
                        <a href="">Новости</a>
                    </li>

                    <li className='pr-4 border-r border-gray-300 dark:border-gray-600 hover:text-[#EF7C00] font-bold duration-300 '>
                        <a href="">Вакансии</a>
                    </li>

                    <li className='hover:text-[#EF7C00] font-bold duration-300 '>
                        <a href="">Контакты</a>
                    </li>
                </ul>

                <div className='flex gap-[5px]'>
                    <h1 className='pr-4 border-r border-gray-300 dark:border-gray-600 hover:text-[#EF7C00] duration-300 cursor-pointer'>
                        Ru
                    </h1>

                    <h1 className='hover:text-[#EF7C00] duration-300 cursor-pointer'>
                        En
                    </h1>
                </div>

                <button onClick={changeMode} className="outline-none text-[20px]">
                    {
                        dark ? <MdWbSunny className="text-[yellow]" /> : <FaMoon />

                    }
                </button>

            </div>
        </header>
    );
}

export default Header;

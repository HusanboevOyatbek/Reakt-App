import { Fragment } from "react/jsx-runtime";
import Header from "./components/header/Header";
import Pogination from "./components/paginetion/Pogination";
import Efect from "./components/swiperEfectpagination/Efectpagination";
import Praduct from "./components/product/Praduct";
import Praducts from "./components/product2/Product";
import Carta from "./components/cardts/carta";
import Yangilik from "./components/yangiliklar/Yangilik";


function App() {
    return (
        <Fragment>
            <Header />
            <main className="">
                <section>

                    <div className="container mx-auto flex relative">
                        <Pogination />

                        <div className="card absolute left-20 top-70 z-[999] ">
                            <p className="text-white">
                                LEANGROUP - тубы и этикетки
                            </p>

                            <h1 className="text-white font-bold text-[32px] my-[20px]">
                                Ламинатные тубы
                            </h1>

                            <p className="text-[13px] text-white">
                                Используются для производства зубных паст. Широко применяются в <br />
                                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой <br />
                                химии и DIY (Do-it-Yourself).
                            </p>

                            <button className="bg-[#EF7C00] rounded-[4px] px-[10px] py-[5px] text-white cursor-pointer mt-[20px]">
                                Каталог
                            </button>
                        </div>
                    </div>

                </section>


                <section className=" py-24 ">
                    <div className="container mx-auto px-5 ">

                        <div className="flex gap-2 justify-center">
                            <h1 className="font-bold text-3xl text-[#2C2D2E] ">
                                О компании
                            </h1>
                            <h1 className="font-bold text-3xl text-[#EF7C00]  ">
                                LEANGROUP
                            </h1>
                        </div>

                        <div className="grid grid-cols-2  px-5 mt-8 ">
                            <div className="">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/lEdyDNcCQaQ?si=pQ39zdnJ8KzlbUDh&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                            <div className="">

                                <p>
                                    Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.
                                    <br />
                                    <br />
                                    Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.
                                    <br />
                                    <br />
                                    С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container  mx-auto ">


                        <div className="flex gap-2.5 justify-center">
                            <h1 className="font-bold text-3xl text-[#2C2D2E]">
                                Качество продукции подтверждают
                            </h1>
                            <h1 className="font-bold text-3xl text-[#EF7C00]">
                                сертификаты
                            </h1>
                        </div>

                        <div className="mt-[50px] px-[200px]">
                            <Efect />
                        </div>
                    </div>
                </section>


                <section className="pb-[20px]">
                    <div className="container mx-auto  ">

                        <div className="flex gap-2.5 justify-center">
                            <h1 className="font-bold text-3xl text-[#2C2D2E]">
                                Наша
                            </h1>
                            <h1 className="font-bold text-3xl text-[#EF7C00]">
                                продукция
                            </h1>
                        </div>

                        <div className="flex mx-auto  mt-5 gap-4 max-w-[500px] w-full ">

                            <Praduct btn="Ламинатные тубы" />
                            <Praduct btn="Экструзионные тубы" />
                            <Praduct btn="Другая упаковка" />
                        </div>

                        <div className="grid grid-cols-4 mt-[20px] px-[10px] ">
                            <Praducts img="/public/imgs/img1.png" />
                            <Praducts img="/public/imgs/img2.png" />
                            <Praducts img="/public/imgs/img3.png" />
                            <Praducts img="/public/imgs/img4.png" />
                        </div>

                        <div className="flex justify-center mt-8">
                            <button className=" text-[#EF7C00] rounded-[10px] border p-1.5 hover:bg-[#EF7C00] hover:text-white cursor-pointer duration-500 ">
                                Перейти в каталог
                            </button>
                        </div>



                    </div>
                </section>



                <section className="bg-[url('/public/imgs/baner.png')] mt-[50px] bg-cover bg-center bg-no-repeat  w-full h-[400px] items-center">
                    <div className="container mx-auto">
                        <div className=" shadow-gray-500 rounded-[20px]">
                            <div className="flex gap-2.5 justify-center">
                                <h1 className="font-bold text-3xl text-[#2C2D2E]">
                                    Получить подробную
                                </h1>
                                <h1 className="font-bold text-3xl text-[#EF7C00]">
                                    информацию
                                </h1>
                            </div>

                            <div className="mt-[100px]">
                                <p className="text-[15px] font-bold">
                                    Просто заполните форму, наш менеджер свяжется <br />
                                    вами в ближайшее время
                                </p>

                                <form className="flex flex-col gap-4 max-w-[500px] mt-[30px]">

                                    <div className="flex gap-4">
                                        <input
                                            type="text"
                                            placeholder="Ваше имя"
                                            className="flex-1 p-3 border border-gray-300 rounded"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="+998 000 00 00"
                                            className="flex-1 p-3 border border-gray-300 rounded"
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Комментарий"
                                        className="w-full p-3 border border-gray-300 rounded h-[100px]"
                                    />

                                </form>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-[90px]">
                    <div className="container mx-auto">

                        <div className="flex gap-2.5 justify-center">
                            <h1 className="font-bold text-3xl text-[#2C2D2E]">
                                Наша
                            </h1>
                            <h1 className="font-bold text-3xl text-[#EF7C00]">
                                команда
                            </h1>
                        </div>
                        <div className="grid grid-cols-5 gap-[10px] px-[20px] ">

                            <Carta
                                img="/imgs/person1.png"
                                name="Войнич Дарья"
                                description="Заместитель директора по продажам"
                                tel="+375 (17) 270-53-77 (317)"
                                email=""
                            />


                            <Carta
                                img="/imgs/person2.png"
                                name="Мисько Екатерина"
                                description="Начальник отдела сопровождения"
                                tel="+375 (17) 270-53-77 (115)"
                                email="k.melnichenko@leangroup.by"
                            />


                            <Carta
                                img="/imgs/person3.png"
                                name="Дмитроченко Дмитрий"
                                description="Начальник отдела допечатной подготовки"
                                tel="+375 (17) 270-53-77 (115)"
                                email="dmitrochenko@leangroup.by"
                            />


                            <Carta
                                img="/imgs/person4.png"
                                name="Антух Евгений"
                                description="Начальник отдела снабжения"
                                tel="+375 (17) 270-53-77 (115)"
                                email="j.antuh@leangroup.by"
                            />


                            <Carta
                                img="/imgs/person5.png"
                                name="Мисник Елена"
                                description="Специалист по работе с клиентами"
                                tel="+375 (17) 270-53-77 (322)"
                                email="e.misnik@leangroup.by"
                            />

                        </div>

                        <div className="flex justify-center mt-[40px]">
                            <button className=" text-[#EF7C00] rounded-[10px] border p-1.5 hover:bg-[#EF7C00] hover:text-white cursor-pointer duration-500 ">
                                Перейти в каталог
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container mx-auto">
                        <h1 className="text-[#2C2D2E] text-4xl font-bold flex justify-center ">
                            Новости
                        </h1>

                        <div className="grid grid-cols-3 gap-[10px] mt-[30px]  ">
                            <Yangilik
                                img="/imgs/yangi1.png"
                                description=" ЛеанГрупп серебряный призер EcoVadis!"
                            />

                            <Yangilik
                                img="/imgs/yangi2.png"
                                description=" ЛеанГрупп серебряный призер EcoVadis!"
                            />

                            <Yangilik
                                img="/imgs/yangi3.png"
                                description="Туба, как вид упаковки"
                            />
                        </div>


                        <div className="flex justify-center mt-[40px]">
                            <button className=" text-[#EF7C00] rounded-[10px] border p-1.5 hover:bg-[#EF7C00] hover:text-white cursor-pointer duration-500 ">
                                Все новости
                            </button>
                        </div>
                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default App;
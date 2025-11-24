


function Praducts(pro) {
    return (
        <>
           <div className="text-[#EF7C00] max-w-[300px] w-full rounded-2xl border p-1.5 hover:bg-[#EF7C00] hover:text-white cursor-pointer duration-300">
                <img className=" w-full" src={pro.img} alt="" />
            </div>
        </>
    )
}

export default Praducts;

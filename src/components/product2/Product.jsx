


function Praducts(pro) {
    return (
        <div>
            <button className="text-[#EF7C00] rounded-2xl border p-1.5 hover:bg-[#EF7C00] hover:text-white cursor-pointer duration-300">
                <img className="max-w-[300px] w-full" src={pro.img} alt="" />
            </button>
        </div>
    )
}

export default Praducts;

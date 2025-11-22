
function Yangilik({ img = "/imgs/yangi1.png", description = "Diskription" }) {
    return (
        <div className="max-w-[500px] w-full bg-white rounded shadow p-4 flex flex-col">

            {/* Rasm container */}
            <div className="w-full h-[200px] mb-4 overflow-hidden rounded">
                <img
                    src={img}
                    alt={description}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Matn */}
            <p className="text-gray-700 text-sm font-bold mt-[20px]">{description}</p>
        </div>

    );
}

export default Yangilik;

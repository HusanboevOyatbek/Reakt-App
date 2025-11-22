function Carta({ img, name, description, tel, email }) {
    return (
        <div className="card text-center max-w-[200px] w-full  p-[10px] bg-white rounded shadow p-[10px] mt-[30px] ">

            <div className="mb-2">
                <img src={img} alt={name} className="max-w-[150px] w-full mx-auto rounded-full" />
            </div>

            <h3 className="text-[15px] font-bold mt-[10px]">{name}</h3>

            <p className="text-[#919399] text-sm">{description}</p>

            <p className="text-sm mt-1">{tel}</p>

            {email && <p className="text-sm">{email}</p>}

        </div>
    );
}

export default Carta;

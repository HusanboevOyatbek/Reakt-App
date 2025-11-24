function Carta({ img, name, description, tel, email }) {
    return (
        <div className="card  dark:text-white   dark:bg-gray-600  text-center max-w-[220px] w-full p-4 bg-white rounded shadow mt-6">

            <div className="mb-2">
                <img src={img} alt={name || 'team member'} className="w-28 h-28 object-cover mx-auto rounded-full" />
            </div>

            <h3 className="text-[15px] font-bold mt-2">{name}</h3>

            <p className="text-[#919399] text-sm dark:text-white/90 ">{description}</p>

            {tel && (
                <p className="text-sm mt-1 dark:text-white">
                    <a href={`tel:${tel}`} className="text-[#374151]  dark:text-white">{tel}</a>
                </p>
            )}

            {email && (
                <p className="text-sm">
                    <a href={`mailto:${email}`} className="text-[#374151]  dark:text-white">{email}</a>
                </p>
            )}

        </div>
    );
}

export default Carta;

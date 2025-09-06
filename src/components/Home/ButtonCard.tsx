import { Link } from "react-router-dom";

export default function ButtonCard({go_to, icon, title, description}: {go_to:string, icon:string, title:string, description:string}) {
    return ( 
        <>
            <div className="my-8 bg-[#F8FBFF] rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Link to={go_to} >
                    <div className="
                        flex flex-col p-8 border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="
                            w-full flex justify-center
                            mb-2">
                            <img src={icon} alt={`${title} icon`} className="w-8 h-8 "  />
                        </div>
                        <h3 className="
                            flex justify-center
                            text-lg font-bold
                            mb-2 text-black">{title}</h3>
                        <p className="
                            flex justify-center
                            text-sm text-gray-600">{description}</p>
                    </div>
                </Link>

            </div>
        </>
    );
}
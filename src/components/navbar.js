import edit_icon from "../assets/navbar/edit_icon.svg"
import star_filled from "../assets/navbar/star_filled.svg"

const Navbar = () => {
    return(
        <div className="bg-[#142838] w-80 h-screen flex flex-col text-[18px] pb-10 pt-10 justify-between" >
            <div className="pl-8 text-white">
                <label className ='' >Task selection: </label>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-row justify-between rounded-md bg-[#2F4454] mr-9 px-4 py-1">
                        <label className="w-[12rem]">Task name</label>
                        <img src={edit_icon}/>
                    </div>
                    <div className="mt-3">
                        <button className="rounded-md px-4 py-1 bg-[#D9D9D9] text-[#142838]">Modify task</button>
                    </div>
                    <div className="flex space-x-3 w-fit mt-16">
                        <img src={star_filled}/>
                        <label className="">Favourites</label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="rounded-md border-2 px-8 py-2 border-[#2F4454] text-white">End task</button>
            </div>
        </div>
    );
}

export default Navbar;
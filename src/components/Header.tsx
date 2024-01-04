import { Search } from "lucide-react";

const Header = () => {
    return (
        <div className="border  my-3 p-5 mx-5 bg-white rounded">
            <div className="flex justify-center items-center  outline-none border">
                <Search color="grey" className="mx-2" />
                <input
                    type="text"
                    placeholder="Search Wallpaper"
                    className="w-4/5 py-3 border-none focus:outline-none text-black"
                />
            </div>
        </div>
    );
};

// https://forms.gle/hfYaxNrLcsn3Gicp6
export default Header;

import Image from "next/image";

const Cards = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center  gap-20">
            <Image
                className="rounded shadow cursor-pointer"
                src={"/dummy.jpg"}
                alt={"wallpaper"}
                width={400}
                height={200}
            />
            <Image
                className="rounded"
                src={"/dummy.jpg"}
                alt={"wallpaper"}
                width={400}
                height={200}
            />
            <Image
                className="rounded"
                src={"/dummy.jpg"}
                alt={"wallpaper"}
                width={400}
                height={200}
            />
        </div>
    );
};

export default Cards;

const Electrics = () => {
    return (
        <div class=" h-screen px-32 bg-blend-difference grid place-items-center text-center place-content-center gap-2 leading-loose z-10">
            <div className=" grid place-items-center place-content-center">
                <div className="grid place-content-center gap-2 leading-loose">
                    <h1>stage electrics</h1>
                    <p1>click on a photo to learn more!</p1>
                    <div class="grid grid-cols-4 gap-3 ">
                        <img src='/images/LoganWhitten.jpeg' alt="Lighting Designer Logan Whitten" className="cursor-pointer rounded-md aspect-square object-cover hover:scale-105" />
                        <img src='/images/LoganWhitten.jpeg' alt="Lighting Designer Logan Whitten" className="cursor-pointer rounded-md aspect-square object-cover hover:scale-105" />
                        <img src='/images/LoganWhitten.jpeg' alt="Lighting Designer Logan Whitten" className="cursor-pointer rounded-md aspect-square object-cover hover:scale-105" />
                        <img src='/images/LoganWhitten.jpeg' alt="Lighting Designer Logan Whitten" className="cursor-pointer rounded-md aspect-square object-cover hover:scale-105" />
                        <img src='/images/LoganWhitten.jpeg' alt="Lighting Designer Logan Whitten" className="cursor-pointer rounded-md aspect-square object-cover hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Electrics;
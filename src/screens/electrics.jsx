const Electrics = () => {
    return (
        <div class=" min-h-screen w-screen bg-black">
            <div className=" grid mx-32 place-items-center place-content-center">
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
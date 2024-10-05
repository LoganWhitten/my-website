const Electrics = () => {
    return (
        <div class="h-screen">
            <div className="h-screen px-16 bg-blend-difference grid place-items-center text-center place-content-center leading-10">
                <div className="bg-white bg-opacity-75 grow rounded-md px-10 py-5">

                    <h1>stage electrics</h1>
                    <p1>click on a photo to learn more!</p1>
                    <br />
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
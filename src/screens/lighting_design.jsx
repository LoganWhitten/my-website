const LightingDesign = () => {
    return (
        <div class="h-screen">
                <div className="h-screen px-32 bg-blend-difference grid place-items-center text-center place-content-center gap-2 leading-loose z-10">
                    <h1>lighting design</h1>
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
    );
};

export default LightingDesign;
import About from "../screens/about";
import Electrics from "../screens/electrics";
import LightingDesign from "../screens/lighting_design";

const Content = () => {
    return (
        <div class="min-h-screen w-screen self-center grid place-items-center absolute z-10">
            <About />
            <LightingDesign />
            <Electrics />
        </div>
    );
};

export default Content;
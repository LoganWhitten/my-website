import LoganWhitten from '/images/LoganWhitten.jpeg';
import MyThree from './3d';

const About = () => {
    return (
        <div class="h-screen w-screen grid place-items-center relative">
            <div class="z-0 absolute">
                <MyThree />
            </div>
            <div className="absolute grid place-content-center gap-2 leading-loose z-10 px-96 bg-opacity-30">
                <h1>hi i'm logan whitten</h1>
                <p1>over the last several years i have been working to grow my knowledge in the worlds of <a>lighting design</a>, <a>stage electrics/power distribution</a>, and <a>computer programming</a></p1>
            </div>
            {/* <img src={LoganWhitten} alt="Lighting Designer Logan Whitten" class=" aspect-square object-cover rounded-lg hover:rotate-3 h-3/4 self-center my-10" /> */}
        </div>
    );
};

export default About;
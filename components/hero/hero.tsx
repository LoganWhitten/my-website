"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";

const heroImages = [
  {
    url: "/assets/atcprog24/atcprog-1.png",
    link: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-brushing-her-teeth-r1SjnJL5tf0",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "/assets/photona23/photona-3.jpg",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
  },
  {
    url: "/assets/bandit/bandit-4.jpg",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "/assets/photona24/photona24-1.jpeg",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "/assets/internship/internship-1.jpg",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "/assets/fairview/fairview-1.jpeg",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    title: "A women with a flower crown on her head",
  },
  {
    url: "/assets/cinderella/cinderella-3.jpg",
    title: "A blurry photo of white flowers in a field",
    link: "https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc",
  },
  {
    url: "/assets/TIOY/TIOY-4.jpg",
    link: "https://unsplash.com/photos/a-table-topped-with-two-wine-glasses-and-plates-Ig0gRAHspV0",
    title: "A table topped with two wine glasses and plates",
  },
];

const Hero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "img",
      { opacity: [0, 1] },
      { duration: 0.5, delay: stagger(0.15) }
    );
  }, []);

  return (
    <div
      className="flex w-full h-full min-h-[600px] justify-center items-center overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className="text-5xl md:text-7xl z-50 text-white font-calendas italic">
          Hey 👋 I'm Logan!
        </p>
        <div className="flex gap-4">
          <Link href={"/resume"}>
            <Button
              variant="outline"
              className="hover:bg-white hover:text-black cursor-pointer"
              onClick={() => console.log("clicked!")}
            >
              Resume
            </Button>
          </Link>
          <Link href="/gel">
            <Button
              className="hover:bg-black bg-white hover:text-white text-black ouline outline-white hover:outline-white cursor-pointer"
              onClick={() => redirect("https://gel.loganwhitten.com")}
            >
              GelTools
            </Button>
          </Link>
        </div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[0].url}
            className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[1].url}
            className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[2].url}
            className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[3].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[4].url}
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[7].url}
            className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[25%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[5].url}
            className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={heroImages[6].url}
            className="w-32 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  );
};

export default Hero;

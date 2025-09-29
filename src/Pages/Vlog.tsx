import { motion } from "framer-motion";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "dQw4w9WgXcQ", title: "Vlog Episode 1" },
  { id: "M7lc1UVf-VE", title: "Behind the Scenes" },
  { id: "sNPnbI1arSE", title: "Travel Vlog" },
  { id: "abcde12345", title: "Cooking with Style" },
  { id: "XYZ987654", title: "Daily Routine" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Vlog = () => {
  return (
    <div className="w-full  bg-white dark:bg-black dark:text-gray-200 text-black">
      <motion.div
        className=" container mx-auto px-4 lg:px-0 xl:px-4 py-12 "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              className="  rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/anotherVideoID1"
                  title=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              {/* <div className="p-4">
              <h2 className="text-xl font-semibold ">
                {video.title}
              </h2>
            </div> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

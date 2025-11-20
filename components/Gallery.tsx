"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Users, Trophy } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/team.jpg",
    alt: "School Cricket Team 2017",
    title: "School Cricket Team",
    description: "Group photo with the School Cricket Team in 2017. A memorable year representing our district with pride and dedication.",
    year: "2017",
    type: "team"
  },
  {
    id: 2,
    src: "/gallery/individual.JPEG",
    alt: "Individual cricket photo 2017",
    title: "Individual Cricket Photo",
    description: "Personal moment during practice session, showcasing the dedication and passion for the sport that taught me valuable life lessons.",
    year: "2017",
    type: "individual"
  }
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    } else {
      const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    }
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Cricket Gallery</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center">
            Memories from my cricket journey with the Kandy District Team in 2017. 
            These moments shaped my character and taught me valuable lessons about teamwork, 
            discipline, and perseverance that I carry into my programming career.
          </p>
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="glass p-8 rounded-xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">2017</div>
            <p className="text-gray-400">Year of Achievement</p>
          </div>
          
          <div className="glass p-8 rounded-xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">Kandy District</div>
            <p className="text-gray-400">Team Represented</p>
          </div>
          
          <div className="glass p-8 rounded-xl text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">{galleryImages.length}</div>
            <p className="text-gray-400">Memorable Moments</p>
          </div>
        </motion.div>

        <div className="w-full h-12 block" aria-hidden="true"></div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-xl hover:glow-cyan transition-all duration-300 cursor-pointer group"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    image.type === 'team' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                  }`}>
                    {image.type === 'team' ? 'Team Photo' : 'Individual'}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="p-2 bg-black/50 rounded-full">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {image.title}
              </h3>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {image.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-cyan-400 font-semibold">
                  {image.year}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-cyan-400 hover:text-white transition-colors"
                >
                  View Full Size →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full h-16 block" aria-hidden="true"></div>

        {/* Cricket Journey Story */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass p-12 rounded-2xl max-w-4xl">
            <h3 className="text-3xl font-bold mb-8 gradient-text text-center">From Cricket to Code</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Lessons from the Field</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🏏</span>
                    <span><strong>Teamwork:</strong> Cricket taught me the importance of collaboration and supporting teammates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🎯</span>
                    <span><strong>Strategy:</strong> Planning and adapting strategies based on changing conditions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">💪</span>
                    <span><strong>Persistence:</strong> Never giving up, even when facing challenging situations.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Applied to Programming</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🤝</span>
                    <span><strong>Collaboration:</strong> Working effectively in development teams and open source projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🧠</span>
                    <span><strong>Problem Solving:</strong> Breaking down complex problems into manageable solutions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">🚀</span>
                    <span><strong>Continuous Learning:</strong> Always improving skills and adapting to new technologies.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/50 transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              {galleryImages.length > 1 && (
                <>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-cyan-500/50 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-cyan-500/50 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Image */}
              <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="glass p-6 rounded-lg mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">
                    {selectedImage.year}
                  </span>
                  <span className="text-sm text-gray-500">
                    {currentIndex + 1} of {galleryImages.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

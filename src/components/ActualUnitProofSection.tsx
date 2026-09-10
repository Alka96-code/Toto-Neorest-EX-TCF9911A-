import { useState } from "react";
import {
  Camera,
  Play,
  Check,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"; // Menghapus ShieldCheck karena tidak digunakan
import { productImages } from "../assets/images";

interface ActualUnitProofSectionProps {
  youtubeVideoId?: string;
}

export default function ActualUnitProofSection({
  youtubeVideoId = "QEgnPyz53Qw",
}: ActualUnitProofSectionProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const whatsappDemoUrl =
    "https://wa.me/?text=Halo,%20saya%20ingin%20melihat%20video%20demonstrasi%20dan%20foto%20detail%20unit%20TOTO%20NEOREST%20EX%20TCF9911A.";

  const detailPhotos = [
    {
      id: "actual-front",
      title: "Tampilan Utama Unit",
      label: "Tampak Depan",
      image: productImages.actualFront,
    },
    {
      id: "actual-side",
      title: "Tampak Samping Unit",
      label: "Tampak Samping",
      image: productImages.actualSide,
    },
    {
      id: "actual-remote",
      title: "Remote Control",
      label: "Tampak Dalam",
      image: productImages.remoteWall,
    },
    {
      id: "actual-nozzle",
      title: "Detail Wand & Nozzle",
      label: "Tampak Belakang",
      image: productImages.cleansingWand,
    },
  ];

  const handlePrevious = () => {
    setSelectedPhotoIndex((prev) =>
      prev === 0 ? detailPhotos.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prev) =>
      prev === detailPhotos.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section
      id="kondisi-unit"
      className="w-full border-t border-[#E8EAEC] bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Intro */}
        <div className="mb-10 max-w-3xl sm:mb-12 lg:mb-16">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#A7ADB2]">
            Foto & Video
          </span>
          <h2 className="mb-3 text-2xl font-light leading-tight tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
            Kondisi Unit
          </h2>
          <p className="text-base font-light leading-relaxed text-[#2B2B2B] sm:text-lg">
            Unit telah dibersihkan secara menyeluruh dan dipersiapkan dengan
            baik. Kondisi serta fungsi utama dapat dilihat melalui foto dan
            video aktual.
          </p>
        </div>

        {/* ========================= */}
        {/* PHOTO SLIDESHOW */}
        {/* ========================= */}
        <div className="mb-14">
          <div className="relative overflow-hidden border border-[#E8EAEC] bg-[#F4F5F6]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[16/9] rounded-xl">
              <img
                src={detailPhotos[selectedPhotoIndex].image}
                alt={detailPhotos[selectedPhotoIndex].title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center transition-all duration-500"
              />

              {/* Label */}
              <div className="absolute left-4 top-4 flex items-center gap-2 border border-[#E8EAEC] bg-white/95 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#111111] backdrop-blur-sm">
                <Camera className="h-3.5 w-3.5" />
                <span>{detailPhotos[selectedPhotoIndex].label}</span>
              </div>

              {/* Previous */}
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Foto sebelumnya"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111111] shadow-md transition hover:bg-white sm:left-5"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Foto berikutnya"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#111111] shadow-md transition hover:bg-white sm:right-5"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
            {detailPhotos.map((item, index) => {
              const isSelected = selectedPhotoIndex === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={`relative aspect-[4/3] overflow-hidden border transition-all duration-200 ${
                    isSelected
                      ? "border-[#111111] ring-1 ring-[#111111]"
                      : "border-[#E8EAEC] hover:border-[#A7ADB2]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Demonstration (YouTube Embed) */}
        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-[#E8EAEC] bg-[#111111]">
            <div className="relative w-full aspect-[9/16] bg-[#111111]">
              <iframe
                src={`https://www.youtube.com/embed/${encodeURIComponent(youtubeVideoId)}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 h-full w-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

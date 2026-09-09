import { productImages } from "../assets/images";

export default function RemoteControlSection() {
  const remoteFunctions = [
    {
      name: "Rear Cleansing",
      desc: "Pembersihan area belakang yang standar dan presisi",
    },
    {
      name: "Rear Soft Cleansing",
      desc: "Semprotan lembut untuk kenyamanan ekstra pengguna sensitif",
    },
    {
      name: "Front Cleansing",
      desc: "Pembersihan area depan khusus wanita untuk menjaga higienitas",
    },
    { name: "Dryer", desc: "Pengering udara hangat bertahap" },
    { name: "Flush", desc: "Pembilasan cepat & bertenaga" },
    { name: "Open / Close", desc: "Buka tutup lid & seat otomatis" },
    { name: "Water Pressure", desc: "Pengaturan intensitas semprotan" },
    { name: "Temperature", desc: "Penyesuaian suhu air, seat & pengering" },
    { name: "Energy Saver", desc: "Mode hemat daya cerdas" },
    { name: "Wand Position", desc: "Penyesuaian posisi nozzle fleksibel" },
  ];

  return (
    <section
      id="remote-control"
      className="w-full bg-[#FAFAFA] border-t border-[#E8EAEC] py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 box-border">
        {/* Section Intro */}
        <div className="max-w-3xl mb-10 sm:mb-12 lg:mb-16">
          <span className="block text-xs font-semibold tracking-[0.25em] text-[#A7ADB2] uppercase mb-3">
            Kendali Penuh Fitur
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#111111] tracking-tight leading-tight mb-4">
            Desain Panel Kendali yang Intuitif
          </h2>
          <p className="text-base sm:text-lg text-[#2B2B2B] font-light leading-relaxed">
            Seluruh navigasi sanitasi dan personalisasi kenyamanan dapat diakses
            melalui panel kendali yang intuitif.
          </p>
        </div>

        {/* Remote Visual & Functionalities Editorial Composition */}
        <div className="bg-white border border-[#E8EAEC] grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden shadow-xs rounded-t-xl">
          {/* Visually Dominant Remote Photography */}
          <div className="lg:col-span-6 bg-[#F4F5F6] border-b lg:border-b-0 lg:border-r border-[#E8EAEC] relative overflow-hidden">
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] lg:min-h-full overflow-hidden">
              <img
                src={productImages.remoteWall}
                alt="TOTO NEOREST Remote Control Wall Mount"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Key Functions List */}
          <div className="lg:col-span-6 p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <span className="block text-xs font-semibold tracking-[0.2em] text-[#A7ADB2] uppercase mb-2">
                Fungsi & Navigasi Utama
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-[#111111] tracking-tight mb-6">
                Akses Semua Fitur
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {remoteFunctions.map((ctrl) => (
                  <div
                    key={ctrl.name}
                    className="py-2 border-b border-[#F0F2F4]"
                  >
                    <span className="text-sm font-medium text-[#111111] block">
                      {ctrl.name}
                    </span>
                    <span className="text-xs text-[#A7ADB2] font-light">
                      {ctrl.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt- border-[#E8EAEC]">
              <p className="text-xs text-[#A7ADB2] font-light leading-relaxed">
                Mekanisme tombol sentuh intuitif dan tampilan display yang mudah
                dipahami seluruh anggota keluarga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

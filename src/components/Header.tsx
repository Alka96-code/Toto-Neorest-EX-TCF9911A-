import whatsappIcon from "../assets/images/whatsappblack.svg";

export default function Header() {
  const whatsappUrl =
    "https://wa.me/6285892713270?text=Halo,%20saya%20tertarik%20dengan%20unit%20TOTO%20NEOREST%20EX%20TCF9911A."; // Ganti nomor sesuai kebutuhan

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm p-4">
      {/* Container utama dengan justify-end */}
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#2B2B2B]">
          <a
            href="#benefits"
            className="hover:text-[#111111] transition-colors"
          >
            Fitur
          </a>
          <a
            href="#kondisi-unit"
            className="hover:text-[#111111] transition-colors"
          >
            Kondisi Unit
          </a>
          <a href="#harga" className="hover:text-[#111111] transition-colors">
            Harga
          </a>
          <a href="#faq" className="hover:text-[#111111] transition-colors">
            FAQ
          </a>
        </nav>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="
          fixed bottom-5 right-5 z-50
          flex h-14 w-14 items-center justify-center
          rounded-full bg-white p-1.5
          border border-[#9d9ea0]
          shadow-lg
          transition-transform duration-200
          hover:scale-110
          active:scale-95
        "
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="h-full w-full object-contain"
        />
      </a>
    </header>
  );
}

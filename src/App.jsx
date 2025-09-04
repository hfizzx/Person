import { useState } from "react";
import DataImage from "./data";
import TextType from './components/TextType';
import { ExternalLink, ArrowRight } from "lucide-react";
import ScrollVelocity from './components/ScrollVelocity';

function App() {
  const [activeTab, setActiveTab] = useState("projects");
  const velocity = 2; // ✅ definisikan velocity biar tidak error

  // === Data Portfolio ===
  const projects = [
    {
      title: "Website portfolio",
      description:
        "Website ini upgrade dari website pertama saya, dengan menambahkan beberapa fitur dan desain yang lebih menarik.",
      image: "/assets/proyek/proyek8.webp",
      demo: "hfizz.my.id",
      details: "https://github.com/hfizzx/Person",
    },
    {
      title: "Music Card",
      description:
        "Saya disini membuat Playlist favorit dengan memanfaatkan dom, array pada javascript.",
      image: "/assets/proyek/proyek7.webp",
      demo: "https://hfizzx.github.io/DDK---3-Music-Card/",
      details: "https://github.com/hfizzx/DDK---3-Music-Card",
    },
    {
      title: "Coming Soon Page",
      description:
        "Segera hadir, project menarik lainnya akan saya tambahkan.",
      image: "/assets/proyek/ComingSoon.webp",
      demo: "#",
      details: "#",
    },
  ];

  const certifications = [
    {
      title: "Dicoding Frontend Developer",
      image: "/assets/proyek/proyek6.webp",
    },
    {
      title: "UI/UX Design Fundamental",
      image: "/assets/proyek/proyek5.webp",
    },
  ];

  const skills = [
    { title: "ReactJS", image: "/assets/tools/reactjs.png" },
    { title: "Next.js", image: "/assets/tools/nextjs.png" },
    { title: "TailwindCSS", image: "/assets/tools/tailwind.png" },
    { title: "Figma", image: "/assets/tools/figma.png" },
    { title: "Bootstap", image: "/assets/tools/bootstrap.png" },
    { title: "GitHub", image: "/assets/tools/github.png" },
    { title: "JavaScript", image: "/assets/tools/js.png" },
    { title: "Git", image: "/assets/tools/git.png" },
  ];

  // === fungsi render ===
  const renderContent = (items, type) => {
    if (type === "projects") {
      return (
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-2xl p-4 shadow-lg hover:shadow-[0_0_40px_#1565C0] transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-40 object-contain bg-zinc-800 p-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>

              <div className="flex justify-between">
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 flex items-center gap-1 hover:underline"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href={item.details}
                  className="bg-gray-800 px-3 py-1 rounded-lg flex items-center gap-1 hover:bg-gray-700"
                >
                  Details <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "certifications") {
      return (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {items.map((item, i) => (
            <img
              key={i}
              src={item.image}
              alt={item.title}
              className="rounded-xl shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>
      );
    }

    if (type === "skills") {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <p className="mt-2 text-sm text-gray-300">{item.title}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbxjByN0Ar5JphRFv4NGZTZGdx6FnFId2W6DQh7ZN43UkQFiIR8uwXp8I_PsUBNcWT70/exec";

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error!", error.message);
      alert("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="px-0 py-0 mx-0 mt-30">
      {/* Hero Section */}
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Quote"
              className="w-10 h-10 rounded-md object-cover"
            />
            <q className="text-sm md:text-base">
              Berpikir besar terlebih dahulu, kemudian mulai bertindak
            </q>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Hello, i&apos;m Hafiz Arintaka
          </h1>

          <TextType
            text={["UI/UX Designer", "Web Developer", "Mobile Developer"]}
            typingSpeed={100}
            deletingSpeed={50}
            pauseDuration={1500}
            className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-blue-600"
            cursorClassName="text-blue-500"
            textColors={["#2563EB", "#2563EB", "#2563EB"]}
          />

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Saya mempunyai ketertarikan dalam bidang Programming dan Designer, terutama pada pembuatan Website dan Desain.
          </p>

          <p className="text-sm md:text-base leading-relaxed mt-4 mb-6 text-gray-300">
            Saya juga berfokus pada menciptakan pengalaman digital yang menarik dan selalu berusaha memberikan solusi terbaik dalam setiap proyek yang saya kerjakan.
          </p>

          <div>
            <a
              href="#portfolio"
              className="inline-block bg-blue-600 text-white shadow-[0_0_20px_#1565C0] px-6 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div id="about" className="flex justify-center md:justify-end">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover shadow-[0_0_100px_#1565C0] ring-2 ring-blue-600"
          />
        </div>
      </div>
      {/* Hero End */}

      {/* About Section */}
      <div className="about flex flex-col justify-center items-center py-10 px-10 bg-zinc-800 rounded-2xl mt-10 max-w-3xl mx-auto text-center shadow-[0_0_90px_#1565C0] ring-1 ring-blue-600">
        <p>
          Perkenalkan, saya Hafiz. Saya bersekolah di SMKN 2 Depok, jurusan Sistem Informasi Jaringan dan Aplikasi, saya berada dibangku kelas 11. Saya tertarik dengan dunia IT, terutama pada bidang Web Development dan UI/UX Design. Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan.
        </p>
      </div>
      {/* About End */}

      {/* Portfolio Section */}
      <div
        id="portfolio"
        className="flex flex-col justify-center items-center py-5 px-5 mt-30 max-w-3xl mx-auto text-center"
      >
        <h1 className="font-bold leading-tight text-blue-500 text-4xl w-full">
          Portfolio Showcase
        </h1>
        <p className="mt-4 text-gray-300 opacity-70">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>


      {/* Tabs */}
<div className="flex justify-center gap-3 md:gap-6 py-4 px-3 bg-zinc-800 rounded-2xl mt-10 max-w-3xl mx-auto text-center shadow-[0_0_90px_#1565C0] ring-1 ring-blue-600">
  <button
    onClick={() => setActiveTab("projects")}
    className={`px-4 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
      activeTab === "projects"
        ? "bg-blue-600 text-white shadow-[0_0_20px_#1565C0]"
        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
    }`}
  >
    Projects
  </button>
  <button
    onClick={() => setActiveTab("certifications")}
    className={`px-4 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
      activeTab === "certifications"
        ? "bg-blue-600 text-white shadow-[0_0_20px_#1565C0]"
        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
    }`}
  >
    Certifications
  </button>
  <button
    onClick={() => setActiveTab("skills")}
    className={`px-4 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
      activeTab === "skills"
        ? "bg-blue-600 text-white shadow-[0_0_20px_#1565C0]"
        : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
    }`}
  >
    Skills
  </button>
</div>


      {/* Content */}
      <div className="mt-6 max-w-6xl mx-auto text-gray-300">
        {activeTab === "projects" && renderContent(projects, "projects")}
        {activeTab === "certifications" &&
          renderContent(certifications, "certifications")}
        {activeTab === "skills" && renderContent(skills, "skills")}
      </div>
      {/* Portfolio End */}

      {/* ScrollVelocity ✅ sudah aman */}
      {/* <div className="mt-30 w-full p-0 m-0">
        <ScrollVelocity
          texts={["AKAAFHZ", "Scroll Down"]}
          velocity={velocity}
          className=" custom-scroll-text px-0"
        />
      </div> */}
      {/* ScrollVelocity End */}

      {/* Contact Section */}
      
    <div className="bg-zinc-950 min-h-screen text-white">
      {/* === CONTACT SECTION === */}
      <div
        id="contact"
        className="flex flex-col justify-center items-center py-12 px-6 mt-20 max-w-3xl mx-auto text-center"
      >
        <h1 className="font-bold leading-tight text-blue-500 text-4xl">
          Contact Me
        </h1>
        <p className="mt-4 text-gray-300 opacity-80">
          Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800 p-6 md:p-8 w-full max-w-lg mx-auto rounded-xl mt-10 shadow-[0_0_60px_#1565C0]"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            {/* Alert dengan tombol X */}
            {success && (
              <div className="bg-blue-600 text-white rounded-md py-2 px-4 flex justify-between items-center">
                <span>
                  <strong>Terimakasih!</strong> Pesanmu sudah terkirim 😊
                </span>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="ml-3 text-white hover:text-gray-200 font-bold"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Nama */}
            <div className="flex flex-col gap-2 text-left">
              <label className="font-semibold text-gray-200">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama"
                required
                className="border border-zinc-600 bg-zinc-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 text-left">
              <label className="font-semibold text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan email"
                required
                className="border border-zinc-600 bg-zinc-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pesan */}
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="pesan" className="font-semibold text-gray-200">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows={6}
                placeholder="Kasih pesan dong.."
                className="border border-zinc-600 bg-zinc-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Tombol dengan animasi loading */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto flex justify-center items-center gap-2 bg-blue-600 text-white shadow-[0_0_20px_#1565C0] font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-70"
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
      {/* Contact End */}

      {/* Footer */}
<footer className="bg-zinc-900 text-gray-400 text-xs py-7 mt-20 rounded-t-3xl">
  <div className="max-w-4xl mx-auto text-center">
    &copy; {new Date().getFullYear()} Hafiz Arintaka. All rights reserved.
  </div>

  {/* Social media icons */}
  <div className="flex flex-row justify-center items-center gap-6 mt-6">
    {/* GitHub */}
    <a href="https://github.com/hfizzx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.113.82-.26.82-.577v-2.026c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.467-2.382 1.235-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.805 5.624-5.478 5.921.432.37.816 1.102.816 2.222v3.293c0 .32.216.694.824.576A12 12 0 0024 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a href="https://www.instagram.com/_akaafhz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm4.5 3.5a5 5 0 110 10 5 5 0 010-10zm0 2A3 3 0 1015 12a3 3 0 00-3-3zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
      </svg>
    </a>

    <a href="https://www.linkedin.com/in/hafiz-arintaka-a1a351369/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6.5 h-6.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z"></path>
      </svg>
    </a>
  </div>
</footer>

      {/* Footer End */}
    </div>
  );
}

export default App;

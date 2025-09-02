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
        "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal aritmatika.",
      image: "/assets/proyek/proyek1.webp",
      demo: "#",
      details: "#",
    },
    {
      title: "AutoChat-Discord",
      description:
        "Solusi otomatisasi untuk mengirim pesan ke saluran Discord secara efisien.",
      image: "/assets/proyek/proyek2.webp",
      demo: "#",
      details: "#",
    },
    {
      title: "Buku Catatan",
      description:
        "Website untuk membuat, menyimpan, dan mengelola catatan digital dengan mudah.",
      image: "/assets/proyek/proyek3.webp",
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

  return (
    <div className="px-0 py-10 mt-30">
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
            className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-blue-500"
            cursorClassName="text-blue-500"
            textColors={["#2196F3", "#2196F3", "#2196F3"]}
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
              className="inline-block bg-blue-600 shadow-[0_0_70px_#1565C0] text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
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
      <div className="flex flex-wrap justify-center gap-4 py-6 px-5 bg-zinc-800 rounded-2xl mt-10 max-w-3xl mx-auto text-center shadow-[0_0_90px_#1565C0] ring-1 ring-blue-600">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-6 py-2 rounded-xl transition ${
            activeTab === "projects"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`px-6 py-2 rounded-xl transition ${
            activeTab === "certifications"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Certifications
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`px-6 py-2 rounded-xl transition ${
            activeTab === "skills"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
    action=""
    className="bg-zinc-800 p-8 w-full mx-auto rounded-xl mt-10 shadow-lg"
    autoComplete="off"
  >
    <div className="flex flex-col gap-6">
      {/* Nama Lengkap */}
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

      {/* Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Kirim
        </button>
      </div>
    </div>
  </form>
</div>


      {/* Contact End */}
    </div>
  );
}

export default App;

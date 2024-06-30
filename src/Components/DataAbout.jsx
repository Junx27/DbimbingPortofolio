import { useEffect, useState } from "react";

function DataAbout() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };
    startLoading();
  }, []);
  return (
    <div
      className={`transition-all duration-500 w-full bg-fixed md:bg-left h-screen bg-[url('cover.png')] overflow-auto ${
        loading ? "scale-[101%]" : "scale-100"
      }`}
    >
      <div
        className={`transition-all duration-700 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 px-5 md:px-10 pt-20 md:pt-32 pb-10 md:pb-0 ${
          loading ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <div
          className={`transition-all duration-700 delay-100 bg-white/75 md:bg-white/30 px-10 pt-6 pb-10 md:pb-0 rounded-[30px] shadow-lg shadow-sky-600/20 ${
            loading ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <h1 className="font-bold text-xl text-center">Education</h1>
          <div className="flex items-center mt-5 text-xs">
            <img src="logounperba.png" alt="" className="w-10 h-10 mr-3" />
            <p>Universitas Perwira Purbalingga (2020-2024)</p>
          </div>
          <p className="capitalize text-xs text-blue-600 font-bold mt-5">
            bachelor of informatics - GPA 3,94
          </p>
          <ul className="list-disc ml-5">
            <li className="mt-2 text-xs text-justify">
              Programming implementation, computer theory, networking,
              information security, databases, AI, and software development.
            </li>
            <li className="mt-2 text-xs text-justify">
              Organizing on campus helps develop leadership, time management,
              collaboration, interpersonal, self-development, networking, and
              achievement skills.
            </li>
          </ul>
        </div>
        <div
          className={`transition-all duration-700 delay-200 bg-white/75 md:bg-white/30 p-10 pt-6 rounded-[30px] shadow-lg shadow-sky-600/20 ${
            loading ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <h1 className="font-bold text-xl text-center mb-6">Experience</h1>
          <div>
            <h1 className="text-xs mt-5 text-gray-400">
              February (2012 -2013)
            </h1>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Quality Control | PT. ACC | Tangerang, Indonesia
            </p>
            <ul className="list-disc ml-5">
              <li className="mt-2 text-xs text-justify">
                Make reports on the quality of goods, control and check the
                quality of production goods before sending them to vendors.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xs mt-5 text-gray-400">May (2014 -2016)</h1>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Conveyor | PT. KBM | Purbalingga, Indonesia
            </p>
            <ul className="list-disc ml-5">
              <li className="mt-2 text-xs text-justify">
                Arrange plywood that has been cut into pieces using a machine to
                make a board.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xs mt-5 text-gray-400">August (2016 -2017)</h1>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Wig Maker | PT. Yuro | Purbalingga, Indonesia
            </p>
            <ul className="list-disc ml-5">
              <li className="mt-2 text-xs text-justify">
                Read the pattern of the wig image then implement and sew it on
                the headband media to make the wig.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-xs mt-5 text-gray-400">July (2017 -2020)</h1>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Assembler | PT. Tylon | Tochigi, Japan
            </p>
            <ul className="list-disc ml-5">
              <li className="mt-2 text-xs text-justify">
                Create a product pattern design then make components based on
                that pattern and then assemble them as production goods ready to
                be shipped.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`transition-all duration-700 delay-300 bg-white/75 md:bg-white/30 p-10 pt-6 rounded-[30px] shadow-lg shadow-sky-600/20 ${
            loading ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <h1 className="font-bold text-xl text-center mb-6">Skills</h1>
          <div>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Tools
            </p>
            <ul className="list-disc ml-5">
              <li className="mt-2 text-xs text-justify">
                Visual Studio Code (Code Editor)
              </li>
              <li className="mt-2 text-xs text-justify">
                Microsoft Office (Office)
              </li>
              <li className="mt-2 text-xs text-justify">
                Adobe Illustrator (Design)
              </li>
              <li className="mt-2 text-xs text-justify">Figma (Design)</li>
            </ul>
          </div>
          <div>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Hard Skills
            </p>
            <div className="flex gap-10">
              <ul className="list-disc ml-5">
                <li className="mt-2 text-xs text-justify">HTML</li>
                <li className="mt-2 text-xs text-justify">CSS</li>
                <li className="mt-2 text-xs text-justify">Javascript</li>
                <li className="mt-2 text-xs text-justify">PHP</li>
                <li className="mt-2 text-xs text-justify">MySQL</li>
              </ul>
              <ul className="list-disc ml-5">
                <li className="mt-2 text-xs text-justify">React</li>
                <li className="mt-2 text-xs text-justify">Laravel</li>
                <li className="mt-2 text-xs text-justify">Tailwind</li>
                <li className="mt-2 text-xs text-justify">Bootstrap</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Soft Skills
            </p>
            <ul className="list-disc ml-5">
              <li className="mt-2 text-xs text-justify">
                Creativity in finding solutions
              </li>
              <li className="mt-2 text-xs text-justify">
                Adaptability to change
              </li>
              <li className="mt-2 text-xs text-justify">
                Good time management
              </li>
            </ul>
          </div>
          <div>
            <p className="capitalize text-xs text-blue-600 font-bold mt-2">
              Language
            </p>
            <ul className="list-disc ml-5">
              <li className="mt-2 text-xs text-justify">Indonesian (Native)</li>
              <li className="mt-2 text-xs text-justify">English (Beginner)</li>
              <li className="mt-2 text-xs text-justify">
                Japanese language (JLPT N5)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAbout;

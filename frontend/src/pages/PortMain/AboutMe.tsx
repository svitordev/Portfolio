import myPhoto from "../../assets/img/structure/MyPhoto.jpg";
import ButtonCV from "../../components/ButtonCV";
function AboutMe() {
  return (
    <section
      id="aboutme"
      className="w-full py-16 px-[10%] flex justify-between items-center font-condensed text-xl text-justify border-b-[3px] border-blue-700"
    >
      <div className="w-2/5 flex flex-col space-y-6 items-center">
        <img src={myPhoto} alt="" className="w-full rounded-full" />
        <ButtonCV height="full"/>
      </div>
      <div className="flex flex-col items-end gap-4 w-3/5">
        <h2 className="text-5xl bg-custom-gradient bg-clip-text text-transparent ">
          Sobre Mim
        </h2>
        <p className="w-3/4">
          Me chamo Vítor Silva e sou desenvolvedor front-end com um ano de
          experiência na área. Possuo habilidades em{" "}
          <span className="text-blue-600">React,</span>{" "}
          <span className="text-blue-600">Redux,</span>{" "}
          <span className="text-blue-600">JavaScript,</span>
          <span className="text-blue-600">TypeScript,</span>{" "}
          <span className="text-blue-600">Tailwind CSS,</span>{" "}
          <span className="text-blue-600">APIREST e</span>{" "}
          <span className="text-blue-600">NodeJS.</span>
        </p>

        <p className="w-3/4">
          Também sou músico á onze anos, onde desenvolvo minhas SoftSkills,
          como: trabalho em equipe, disciplina, persistência, criatividade,
          estudo, resiliência, escuta ativa, memória, empatia, discernimento
          estético e etc.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { AnimationLeft, AnimationRight } from "../../animation/animation";
import { ResetAnimationLeft, ResetAnimationRight } from "../../animation/resetAnimation";
import ButtonCV from "../../components/ButtonCV";
import useIntersectionObserver from "../../intersection";

type FormValues = {
  name: string;
  email: string;
  message: string;
};
interface ContactProp {
  theme: string | null;
}
const Contact = ({ theme }: ContactProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const sendEmail: SubmitHandler<FormValues> = async (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await emailjs.send(
        "service_foycaua",
        "template_k0rrk97",
        templateParams,
        "dhKybiheYpgMv58CS"
      );
      toast.success("Email enviado com sucesso!", {
        className: `toast-success-${theme === "dark" ? "dark" : "light"}`,
      });
      reset();
    } catch (error) {
      toast.error("Erro ao enviar email.", {
        className: `toast-error-${theme === "dark" ? "dark" : "light"}`,
      });
    }
  };
  const refs = {
    left: {
      title: useRef(null),
      p: useRef(null),
      ul: useRef(null),
    },
    right: {
      box1: useRef(null),
      box2: useRef(null),
      box3: useRef(null),
      box4: useRef(null),
    },
  };

  for (const ref of Object.values(refs.left)) {
    useIntersectionObserver({
      elements: ref,
      animate: AnimationLeft,
      reset: ResetAnimationLeft,
    });
  }

  for (const ref of Object.values(refs.right)) {
    useIntersectionObserver({
      elements: ref,
      animate: AnimationRight,
      reset: ResetAnimationRight,
    });
  }
  return (
    <section
      id="contacts"
      className="w-full py-10 md:py-16 px-[10%] flex flex-col gap-10 md:flex-row justify-between items-start font-condensed text-center md:text-justify"
    >
      <div className="gap-5 flex flex-col md:w-1/2 items-center md:items-start">
        <h2
          ref={refs.left.title}
          className="text-4xl md:text-5xl  bg-custom-gradient bg-clip-text text-transparent "
        >
          Entre em contato
        </h2>

        <p ref={refs.left.p} className="md:w-3/4">
          Entre em contato se precisar tirar alguma dúvida ou contratar algum
          tipo de serviço.
        </p>
        <ul
          ref={refs.left.ul}
          className="md:space-y-1 flex md:flex-col items-center justify-center gap-5 md:gap-2"
        >
          <li className="gap-2 items-center flex">
            <FaInstagram size={20} />
            <a
              href="https://www.instagram.com/svitor.dev/"
              className="inline-flex hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              svitor.dev
            </a>
          </li>
          <li className="gap-2 items-center flex">
            <FaWhatsapp size={20} />
            <a
              href="https://wa.me/5581984155252"
              className="inline-flex hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </li>
        </ul>
        <ButtonCV height="full" />
      </div>
      <form
        className="w-full md:w-2/5 space-y-6"
        onSubmit={handleSubmit(sendEmail)}
      >
        <div ref={refs.right.box1} className="flex flex-col items-start">
          <label htmlFor="name">Nome:</label>
          <input
            className="w-full border-2 border-blue-600 rounded-md py-1 px-2 text-neutral-700 outline-2 outline-blue-600 bg-slate-100"
            type="text"
            id="name"
            {...register("name", { required: "Nome é obrigatório" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div ref={refs.right.box2} className="flex flex-col items-start">
          <label htmlFor="email">Email:</label>
          <input
            className="w-full border-2 border-blue-600 rounded-md py-1 px-2 text-neutral-700 outline-2 outline-blue-600 bg-slate-100"
            type="text"
            id="email"
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "E-mail inválido",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div ref={refs.right.box3} className="flex flex-col items-start">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            className="w-full border-2 border-blue-600 rounded-md py-1 px-2 bg-slate-100 text-neutral-700 outline-2 outline-blue-600 h-32"
            id="message"
            {...register("message", {
              required: "Mensagem é obrigatória",
            })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button
          ref={refs.right.box4}
          className="bg-custom-gradient px-10 py-2 rounded-md border-2 dark:border-neutral-900 border-slate-50 dark:hover:border-white hover:border-neutral-500 text-white"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;

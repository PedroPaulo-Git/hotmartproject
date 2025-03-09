import Image from "next/image";
import ImagePNG from "../app/image.png";
import { AiFillSecurityScan } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="items-center flex flex-col space-y-10 p-10">
      <h1 className="text-4xl text-center ">
        <p className=" font-bold"> Freelancer de Elite:</p>
        Conquiste projetos e cobre no mínimo R$1000
      </h1>
      <Image
        alt="1k por projeto"
        src={ImagePNG}
        className="w-3/4 h-full pb-4 lg:w-[30%]"
      />
      <a
        href="https://go.hotmart.com/P98549650B?dp=1"
        className="cursor-pointer hover:scale-110 transition-all p-5 px-8 bg-green-600 font-semibold"
      >
        GARANTA MEU SUCESSO
      </a>
      <h2>
        <div>
          <h2 className="font-bold text-3xl my-4">SOBRE O CONTEÚDO</h2>
          <p>
            💼 <strong>Transforme suas habilidades em faturamento real!</strong>{" "}
            Com o <strong>Freelancer de Elite</strong>, você terá acesso a um
            método completo para fechar projetos lucrativos e cobrar no{" "}
            <strong>mínimo R$1000 por serviço</strong>.
          </p>

          <h3 className="font-bold text-xl mt-4">
            🚀 O que você vai aprender?
          </h3>
          <ul className="list-disc pl-5">
            <li>✅ Como atrair e conquistar clientes de forma estratégica</li>
            <li>
              ✅ Dominar contratos e precificação para valorizar seu trabalho
            </li>
            <li>
              ✅ Criar um planejamento de prospecção eficiente e previsível
            </li>
            <li>
              ✅ Utilizar um framework poderoso para calls de venda que
              convertem
            </li>
            <li>
              ✅ Acessar uma biblioteca exclusiva de{" "}
              <strong>landing pages no Figma</strong> para impressionar clientes
            </li>
          </ul>

          <p className="mt-4">
            🎯{" "}
            <strong>
              Além de tudo isso, você vai aprender como se posicionar no mercado
              e construir uma base sólida de clientes que pagam bem pelo seu
              serviço!
            </strong>
          </p>

          <p className="mt-4">
            Chega de depender de indicações ou passar perrengue com negociações
            ruins. Com esse conteúdo, você terá{" "}
            <strong>
              um passo a passo claro para transformar cada oportunidade em
              dinheiro no bolso
            </strong>
            . 🚀🔥
          </p>
        </div>
      </h2>
      <div className=" border-y-2 border-gray-800 py-10 mt-28">
        <div className="flex flex-col space-y-8 text-center items-center w-full ">
          <p className="flex font-bold text-2xl">
            Aproveite o conteúdo em qualquer dispositivo.
          </p>
          <p className="flex text-center items-center">
            <FaCheckDouble className=" mr-2 text-green-700" />
            Seus dados pessoais são confidenciais
          </p>

          <p className="flex text-center items-center">
            <AiFillSecurityScan className="mr-2 text-green-700" />
            Compra 100% segura
          </p>

          <p className="flex text-center items-center">
            <FaStar className=" mr-2 text-green-700" />
            Seu dinheiro de volta sem perguntas
          </p>
        </div>
      </div>
      <span className="mb-20 space-y-2 text-center items-center flex flex-col">
        <p className="text-sm text-gray-500">
          de <s>R$99</s>
        </p>

        <p>por apenas</p>
        <p className="text-5xl font-bold">R$60,00</p>
        <a
          href="https://go.hotmart.com/P98549650B?dp=1"
          className=" mb-4 cursor-pointer hover:scale-110 transition-all p-5 px-8 bg-green-600 font-semibold"
        >
          GARANTA MEU SUCESSO
        </a>
        <p className="text-xs">PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO</p>
      </span>
      <div className="group relative bg-green-700">
        <a
          className="bg-green-700 hover:w-14 hover:h-14 hover:bg-Blue_Primary transition-all flex justify-center text-3xl
      m-6 rounded-full items-center w-12 h-12 shadow-black shadow-lg bg-Blue_Primary
      fixed bottom-0 z-20 right-0"
          href="https://wa.me/558199049803?text=Olá,%20vim%20do%20Freelancer%20de%20Elite%20e%20gostaria%20de%20tirar%20uma%20dúvida!"
        >
          <IoLogoWhatsapp />
        </a>
        <a
          className="bg-green-700 block sm:hidden group-hover:block text-xs fixed bottom-8 px-6 py-2 z-10 right-16
      bg-Blue_Primary"
          href="https://wa.me/558199049803?text=Olá,%20vim%20do%20Freelancer%20de%20Elite%20e%20gostaria%20de%20tirar%20uma%20dúvida!"
        >
          <span className="pr-2">TIRAR DÚVIDAS</span>
        </a>
      </div>
    </div>
  );
}

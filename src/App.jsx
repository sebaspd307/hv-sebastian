import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";

function App() {
  const skills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Type Script", level: 90 },
      { name: "HTML/CSS/SASS", level: 85 },
      { name: "Angular", level: 60 },
    ],
    backend: [
      { name: "Java", level: 90 },
      { name: "PHP", level: 80 },
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 65 },
      { name: "Python", level: 60 },
    ],
    others: [
      { name: "Git & GitHub", level: 90 },
      { name: "Mongo BD", level: 80 },
      { name: "SQL", level: 70 },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-gray-600 text-4xl font-bold mb-2">
            Edgar Sebastian Peña Diaz
          </h1>
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
            <img
              src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
              alt="Tu Nombre"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-gray-600 text-xl">Desarrollador Full Stack</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sebaspd307@gmail.com"
              className="text-gray-600 inline-flex items-center mb-2"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              sebaspd307@gmail.com
            </a>
            <a
              href="tel:+573103235230"
              className="text-gray-600 inline-flex items-center mb-2"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              +57 (310) 323-5230 / (304)-434-1999
            </a>
            <a
              href="https://www.linkedin.com/in/edgar-sebastian-peña-diaz/?trk=public-profile-join-page"
              className="text-gray-600 inline-flex items-center mb-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </header>

        <section className="">
          <h2 className="text-gray-600 text-2xl font-bold mb-2">
            Perfil Profesional{" "}
          </h2>
          <hr className="h-0.5 mx-auto my-4 border-0 rounded  dark:bg-[#8d9aad]" />
          <p className="text-[#58677c] mb-7">
            Desarrollador de software altamente competente con una sólida
            trayectoria en la industria, especializado en sistemas financieros,
            gestión documental y soluciones de pensiones. Con más de 4 años de
            experiencia en el diseño, desarrollo e implementación de
            aplicaciones y plataformas de software de alta calidad, he
            demostrado mi capacidad para ofrecer soluciones innovadoras y
            efectivas que cumplen con los requisitos específicos de cada
            cliente.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-600 text-2xl font-bold mb-2 mt-5">
            Formación
          </h2>
          <hr className="h-0.5 mx-auto my-4 border-0 rounded  dark:bg-[#8d9aad]" />
          <div className="flex justify-between w-[65%]">
            <div>
              <p className="font-bold text-[#58677c]">
                2024 Ingenieria de sistemas
              </p>
              <p className="pl-10 text-[#58677c]">Universidad ECCI (Bogotá)</p>
            </div>
            <div>
              <p className="text-[#58677c] font-bold"></p>
            </div>
          </div>
          <div className="mt-4 flex justify-between w-[65%]">
            <div>
              <p className="font-bold text-[#58677c]">
                2020 Tecnólogo en análisis y diseño de sistemas de información
              </p>
              <p className="pl-10 text-[#58677c]">SENA (Bogotá)</p>
            </div>
            <div>
              <p className="text-[#58677c] font-bold"></p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="md:col-span-2">
            <h2 className="text-gray-600 text-2xl font-bold mb-2">
              Experiencia de Trabajo
            </h2>
            <hr className="h-0.5 mx-auto my-4 border-0 rounded  dark:bg-[#8d9aad]" />
            <div className="space-y-4 timeLine pl-9 relative">
              <div className="section-experience">
                <div className="title-experience">
                  <h3 className="text-[#434E5E] text-xl font-semibold">
                    Desarrollador Senior
                  </h3>
                  <div className="title2-experience">CGI (BBVA)</div>
                </div>

                <p className="text-[#aab4c3]">2020 - Actualidad</p>
                <p className="text-[#58677c]">
                  Desarrollador Senior en Java Spring con experiencia
                  significativa en el diseño e implementación de soluciones en
                  la arquitectura TRIS y CIRI. Responsable de realizar ajustes y
                  crear vistas para mejorar la interfaz de usuario, así como de
                  desarrollar consumidores y expositores de servicios REST para
                  facilitar la comunicación entre sistemas. Desarrollo de web
                  componentes usando libreria LitElement con arquitectura CELLS
                  ademas de implementacion de test unitarios, test E2E e
                  implementacion de analiticas con libreria de adobe.
                </p>
                <h4 className="text-[#58677C] font-bold mt-2 mb-2">
                  Tecnologías usadas:
                </h4>
                <ul className="list-none">
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Java (Spring)
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      CSS
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      LitElement
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Jenkins
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Git
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Java Script
                    </span>
                  </li>
                </ul>
              </div>
              <div className="section-experience2">
                <div className="title-experience">
                  <h3 className="text-[#434E5E] text-xl font-semibold">
                    Desarrollador Full Stack
                  </h3>
                  <div className="title2-experience">SERVISOFT</div>
                </div>

                <p className="text-[#aab4c3]">2020 — 2022</p>
                <p className="text-[#58677c]">
                  Responsable del desarrollo en Java JSP, encargado de ofrecer
                  soporte continuo y desarrollar nuevas funcionalidades para una
                  herramienta de Gestión Documental. Destacado por la creación
                  de Web Services en SOAP y la integración de servicios WEB SOAP
                  y REST para facilitar la interoperabilidad entre sistemas.
                  Además, he sido responsable de crear Procedimientos
                  Almacenados y Vistas para optimizar la manipulación y
                  visualización de datos en la base de datos subyacente,
                  contribuyendo así a una gestión más eficiente de la
                  información en la aplicación.
                </p>
                <h4 className="text-[#58677C] font-bold mt-2 mb-2">
                  Tecnologías usadas:
                </h4>
                <ul className="list-none">
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Java
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      CSS
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      JQUERY
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Git
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Java Script
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Web Logic
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      Oracle
                    </span>
                  </li>
                  <li className="mr-1 inline-block">
                    <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                      SQL Server
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="md:col-span-1">
            <h2 className="text-gray-600 text-2xl font-bold mb-2">Skills</h2>
            <hr className="h-0.5 mx-auto my-4 border-0 rounded  dark:bg-[#8d9aad]" />
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Frontend</h3>
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#58677C] h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold">Backend</h3>
                {skills.backend.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#58677C] h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold">Otros</h3>
                {skills.others.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#58677C] h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <h2 className="text-gray-600 text-2xl font-bold mb-2 mt-10">
          Freelance Experience
        </h2>
        <hr className="h-0.5 mx-auto my-4 border-0 rounded dark:bg-[#8d9aad]" />
        <div className="space-y-4">
          <div className="">
            <h3 className="text-[#434E5E] text-xl font-semibold">
              Inscripcion virtual
            </h3>
            <p className="text-[#58677C] font-bold">Canadian College</p>
            <p className="text-[#aab4c3]">2023 — 2024</p>
            <p className="text-[#58677c]">
              Como freelance, desarrollé y desplegué un formulario virtual para
              el registro de nuevos clientes en los diferentes planes ofrecidos
              por la compañía, implementé funcionalidades de control de
              información, un modulo de control de datos de usuarios, planes y
              valores de los cursos, formalicé documentos, creé contratos
              digitales, calculo descuentos y pagos de forma automatica segun la
              forma de pago elegida por el cliente, cargué documentación en la
              nube usando la API de DRIVE, integré un sistema de almacenamiento
              seguro en la nube para la documentación de los clientes, envio de
              correos electrónicos por medio de la API de GMAIL, automatizé
              notificaciones por correo electrónico al adquirir y pagar un plan,
              previsualización de PDFs, creé una API para gestionar todas las
              funcionalidades del backend, y conexion de la base de datos en
              MongoDB.
            </p>
            <h4 className="text-[#58677C] font-bold mt-2 mb-2">
              Tecnologías usadas:
            </h4>
            <ul className="list-none">
            <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  JavaScript
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  HTML
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  CSS
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  Reack
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  Mongo
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  Expres
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  Node
                </span>
              </li>              
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  GOOGLE CLOUD
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-[#434E5E] text-xl font-semibold">
              Proyecto de ventas difitales y membresias
            </h3>
            <p className="text-[#58677C] font-bold">
              Club deportivo de tiro escorpion
            </p>
            <p className="text-[#aab4c3]">2022</p>
            <p className="text-[#58677c]">
              Desarrollo de una aplicación web para la venta de artículos y
              gestión de membresías del Club Deportivo de Tiro Escorpión. Los
              usuarios inscritos y miembros del club pueden visualizar o
              descargar fácilmente la documentación de sus armas traumáticas y
              certificados de pertenencia al club.
            </p>
            <h4 className="text-[#58677C] font-bold mt-2 mb-2">
              Tecnologías usadas:
            </h4>
            <ul className="list-none">
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  SQL SERVER
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  PHP
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  JavaScript
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  HTML
                </span>
              </li>
              <li className="mr-1 inline-block">
                <span className="mb-1 inline-block text-[12px] py-[1.4px] px-3 rounded-[0.375rem] font-bold text-white bg-[#58677C]">
                  CSS
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

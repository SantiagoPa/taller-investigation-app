const POINTS_TASK = [
  {
    title: "Promoción",
    content:
      "Consiste en la difusión y promoción de los productos y servicios demicrocrédito ofrecidos por la institución financiera. El objetivo es informar y atraer a potenciales clientes que puedan estar interesados en obtener un microcrédito. Se pueden utilizar diferentes canales de promoción, como publicidad en medios de comunicación, redes sociales, eventos y ferias, entre otros.",
  },
  {
    title: "Solicitud de crédito",
    content:
      "En esta fase, el cliente interesado en obtener un microcrédito presenta una solicitud formal a la institución financiera. La solicitud debe incluir información personal y financiera del cliente, así como detalles sobre el negocio o proyecto que se financiará con el crédito. El cliente también debe proporcionar documentación que respalde su solicitud, como identificación oficial, comprobantes de ingresos y registros de negocio.",
  },
  {
    title: "Recepción de documentos y garantías",
    content:
      "Una vez que se ha presentado la solicitud de crédito, la institución financiera recibe y revisa la documentación proporcionada por el cliente. Se verifica la autenticidad y validez de los documentos, y se evalúa la capacidad de pago del cliente y la viabilidad del negocio o proyecto. En esta fase, también se evalúan las garantías ofrecidas por el cliente, como propiedades, activos o avalistas.",
  },
  {
    title: "Verificación del domicilio y negocio del cliente",
    content:
      "En esta fase, la institución financiera verifica la información proporcionada por el cliente sobre su domicilio y negocio. Se realiza una visita al domicilio y negocio del cliente para confirmar su existencia y verificar la información proporcionada. También se evalúa la situación financiera y operativa del negocio, y se identifican posibles riesgos o debilidades.",
  },
];

export const TaskOne = () => {
  return (
    <div className="flex justify-center align-middle">
      <ul>
       {
        POINTS_TASK.map(({ title, content }, idx)=>(
          <li key={idx} className=" p-2 bg-gray-100 my-2 rounded-md ">
            <span className="font-bold" >{idx+1} - {title}</span>
            <div>
              {content}
            </div>
          </li>
        ))
       }
      </ul>
    </div>
  );
};

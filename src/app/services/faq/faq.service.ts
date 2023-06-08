import { Injectable } from "@angular/core"
import { IFAQ } from "src/app/interfaces/support.interface"

@Injectable({
  providedIn: "root",
})
export class FaqService {
  faqList: IFAQ[] = [
    {
      question: "¿Cuál es el tiempo de entrega de los productos?",
      answer:
        "El tiempo de entrega varía según tu ubicación. Normalmente, nuestros envíos llegan en un plazo de 3 a 7 días hábiles.",
    },
    {
      question: "¿Cuáles son las opciones de pago disponibles?",
      answer:
        "Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express) y también ofrecemos la opción de pagar a través de PayPal.",
    },
    {
      question:
        "¿Puedo realizar cambios en mi pedido después de haberlo realizado?",
      answer:
        "Si deseas realizar cambios en tu pedido, por favor contáctanos lo antes posible. Nos esforzaremos por ayudarte, pero ten en cuenta que una vez que el pedido haya sido procesado y enviado, los cambios pueden ser limitados.",
    },
    {
      question: "¿Cuál es la política de devoluciones?",
      answer:
        "Aceptamos devoluciones dentro de los 30 días posteriores a la entrega del producto, siempre y cuando esté en su condición original y con el empaque intacto. Ponte en contacto con nuestro servicio al cliente para iniciar el proceso de devolución.",
    },
    {
      question: "¿Ofrecen envío internacional?",
      answer:
        "Sí, realizamos envíos internacionales. El costo y tiempo de entrega pueden variar dependiendo del país de destino.",
    },
    {
      question: "¿Cómo puedo rastrear mi pedido?",
      answer:
        "Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un enlace de seguimiento. Haz clic en el enlace para conocer el estado actualizado de tu envío.",
    },
    {
      question:
        "¿Tienen un programa de recompensas o descuentos para clientes habituales?",
      answer:
        "Sí, ofrecemos un programa de recompensas para nuestros clientes habituales. Obtendrás puntos por cada compra que realices, los cuales podrás canjear por descuentos en futuras compras.",
    },
    {
      question: "¿Puedo cancelar mi pedido?",
      answer:
        "Si deseas cancelar tu pedido, contáctanos lo antes posible. Si el pedido aún no ha sido procesado, podremos cancelarlo y emitirte un reembolso.",
    },
    {
      question:
        "¿Dónde puedo encontrar información sobre el tamaño de los productos?",
      answer:
        "En la página de cada producto, encontrarás una sección de 'Información de tallas' que te proporcionará detalles sobre las medidas y tallas disponibles.",
    },
    {
      question:
        "¿Qué debo hacer si el producto que recibí está dañado o defectuoso?",
      answer:
        "Lamentamos cualquier inconveniente. Por favor, ponte en contacto con nuestro servicio al cliente y estaremos encantados de ayudarte a resolver el problema.",
    },
    {
      question:
        "¿Puedo realizar un seguimiento de mi historial de pedidos anteriores?",
      answer:
        "Sí, puedes acceder a tu historial de pedidos iniciando sesión en tu cuenta. Allí encontrarás todos los detalles de tus compras anteriores.",
    },
  ]

  get FAQ(): IFAQ[] {
    return this.faqList
  }
}

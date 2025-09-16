import Image from "next/image";
import Link from "next/link";

const productos = [
  {
    ref: "AMA01",
    nombre: "Conjunto Safari",
    categoria: "Conjuntos",
    codigo: "AMA-001",
    tallas: "s-m, l-xl, plus",
    precio: "110000",
    imagen: "/images/amarak/AMA01-1.jpg"
  },
  {
    ref: "AMA02",
    nombre: "Conjunto Amirah",
    categoria: "Conjuntos",
    codigo: "AMA-002",
    tallas: "s-m, l-xl",
    precio: "110000",
    imagen: "/images/amarak/AMA02-1.jpg"
  },
  {
    ref: "AMA03",
    nombre: "Pantalón Carpier",
    categoria: "Pantalones",
    codigo: "AMA-003",
    tallas: "s-m, l-xl",
    precio: "60000",
    imagen: "/images/amarak/AMA03-1.jpg"
  },
  {
    ref: "AMA04",
    nombre: "Falda Carpier",
    categoria: "Faldas",
    codigo: "AMA-004",
    tallas: "Talla Única",
    precio: "60000",
    imagen: "/images/amarak/AMA04-1.jpg"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-3">
          <Image src="/images/amarak/logo.png" alt="Amarak Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">AMARAK</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/faq">Preguntas Frecuentes</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>

      <section className="text-center py-10">
        <h2 className="text-3xl font-bold">Calidad que se ve, tendencia que se siente</h2>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-10">
        {productos.map((p) => (
          <div key={p.ref} className="border rounded-lg shadow-md overflow-hidden">
            <Image src={p.imagen} alt={p.nombre} width={500} height={600} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.nombre}</h3>
              <p className="text-sm text-gray-500">Ref: {p.ref} - {p.codigo}</p>
              <p className="text-sm text-gray-500">Tallas: {p.tallas}</p>
              <p className="font-bold mt-2">${p.precio}</p>
              <a
                href={`https://wa.me/573507692564?text=Hola,%20quiero%20comprar%20${p.nombre}%20(${p.ref})`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
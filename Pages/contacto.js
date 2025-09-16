import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <div className="space-y-4 text-lg">
        <p className="flex items-center space-x-3">
          <FaWhatsapp className="text-green-600" /> 
          <span>+57 3507692564 - +57 3204948632</span>
        </p>
        <p className="flex items-center space-x-3">
          <FaTiktok className="text-black" /> 
          <span>@amarakbycarol</span>
        </p>
        <p className="flex items-center space-x-3">
          <FaInstagram className="text-pink-500" /> 
          <span>Amarak.moda</span>
        </p>
      </div>
    </div>
  );
}
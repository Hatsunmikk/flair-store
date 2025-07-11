// src/components/Modal.jsx
function Modal({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative max-h-[80vh] overflow-y-auto">
        <button
          className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-[#ADB2D4]">{title}</h2>
        <div className="text-sm text-gray-700 space-y-2">{content}</div>
      </div>
    </div>
  );
}

export default Modal;


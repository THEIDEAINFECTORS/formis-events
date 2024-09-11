const Modal = ({ open, onClose, children }) => {
  return (
    <main
      onClick={onClose}
      className={`fixed inset-0 transition-colors ${
        open ? "visible bg-formisBlack15/50" : "invisible"
      }`}
    >
      <div
      onClick={e => e.stopPropagation()}
        className={`transition-all ${
          open ? "opacity-100" : "opacity-0"
        } relative`}
      >
        {children}
      </div>
    </main>
  );
};

export default Modal;

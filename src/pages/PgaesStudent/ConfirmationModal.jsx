const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <dialog
      open
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed top-2/4 left-2/4 bg-white rounded-xl border border-black border-solid -translate-x-2/4 -translate-y-2/4 w-[380px]"
    >
      <div className="p-5">
        <h2 id="modal-title" className="mb-2.5 text-center">
          Nộp đơn
        </h2>
        <p className="mb-5 text-center">Bạn có chắc muốn nộp đơn ?</p>
        <div className="flex border-t border-solid border-t-black">
          <button
            onClick={onConfirm}
            className="p-2.5 w-6/12 text-base cursor-pointer border-[none]"
          >
            Có
          </button>
          <button
            onClick={onCancel}
            className="p-2.5 w-6/12 text-base cursor-pointer border-[none]"
          >
            Không
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;

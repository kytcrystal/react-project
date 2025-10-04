import type { ReactNode } from "react";

interface Props {
  children: ReactNode; //to pass children elements that are HTML content
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;

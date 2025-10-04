import type { ReactNode } from "react";

interface Props {
    children: ReactNode; //to pass children elements that are HTML content
}
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert
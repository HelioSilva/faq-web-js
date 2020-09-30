export default function Teste({ children, type }) {
  return type === "sucess" ? <div>{children}</div> : <div>OI</div>;
}

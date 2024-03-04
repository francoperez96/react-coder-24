import './ButtonComponent.css';

export default function ButtonComponent({ color, texto, reaccionarAClick }) {
  const misEstilos = {
    backgroundColor: color,
  };

  return (
    <>
      <button onClick={reaccionarAClick} style={misEstilos}>
        {texto}
      </button>
    </>
  );
}

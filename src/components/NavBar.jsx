import ButtonComponent from './ButtonComponent.jsx';
import CartWidget from './CartWidget.jsx';

export default function NavBar() {

  const caracteristicas = [
    {
      color: 'grey',
      texto: 'contacto',
    },
    {
      color: 'pink',
      texto: 'productos',
    },
    {
      color: 'blue',
      texto: 'nosotros',
    },
  ];

  const dispararConsola = () => {
    console.log('Hola !!');
  };


  return (
    <>
      <ButtonComponent
        texto={caracteristicas[0].texto}
        color={caracteristicas[0].color}
        reaccionarAClick={dispararConsola}
      />
      <ButtonComponent
        texto={caracteristicas[1].texto}
        color={caracteristicas[1].color}
        reaccionarAClick={dispararConsola}
      />
      <ButtonComponent
        texto={caracteristicas[2].texto}
        color={caracteristicas[2].color}
        reaccionarAClick={dispararConsola}
      />
      <CartWidget />
    </>
  );
}

const storedData = sessionStorage.getItem('login');
const parsedData = JSON.parse(storedData);
if (parsedData === undefined) { console.log("not logged in") }

export default function NavigationBar() {
  if (parsedData ==="yes") { // yes login
    return (
      <div className="navbar-container">
        <div><h1><a href="/">HorariosPP</a></h1></div>
        <div><a href="/schedule">Mi Horario</a></div>
        <div><a href="/generation">Generar</a></div>
        <div><a href="/time_blocks">Agregar Horario</a></div>
      </div>
    )
  }
  else {
    return ( // no login   
      <div className="navbar-container">
        <div><h1><a href="/">HorariosPP</a></h1></div>
        <div><a href="/schedule">Mi Horario</a></div>
        <div><a href="/generation">Generar</a></div>
        <div><a href="/time_blocks">Agregar Horario</a></div>
        <div className="sign-up"><a href="/login">Iniciar Sesion</a></div>
        <div className="sign-up"><a href="/sign_up">Crear Cuenta</a></div>
      </div>
    )
  }
}
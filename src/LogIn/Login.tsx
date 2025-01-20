import './Login.css'

const Login = () => {
  return (
    <div  className='logInContainer'>

        <div className="logIn">
            <h1 className='logInh1'>Iniciar Sesión</h1>

                <div className='logInput'>
                    <input className=' inputContraseña' placeholder="Correo electrónico"></input>

                    <input className=' inputCorreo' placeholder="Contraseña"></input>

                    <div className='btnsReminderForgot'>

                    <button className='btnRememberSeccion'> recordar sesión </button>

                    <button className='btnForgotPassword'> ¿Olvidaste contraseña? </button>

                    </div>

                    <button className='LogInbtn'>Iniciar Sesion</button>


                </div>

            <p className='unregistered'>¿Todavia no tenes cuenta?<button className='btnRegister'>Registrate aqui</button></p>
    </div>
    </div>
  )
}

export default Login
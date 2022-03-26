import ilustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'
import googleIconImage from '../Assets/images/google-icon.svg'

import '../styles/auth.scss'

export function Home () {
  return (
    <div id='page-auth'>
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp; A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask" />
          <button>
            Crie sua sala com o Google
            <img src={googleIconImage} alt="Logo do google"/>
            <div>Ou entre em uma sala</div>
          </button>
          <form>
            <input type="text" placeholder='Digite o código da sala' />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
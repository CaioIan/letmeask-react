import { useHistory } from 'react-router-dom'

import ilustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'
import googleIconImage from '../Assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useContext } from 'react'
import { AuthContext } from '../App'


export function Home () {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext)

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGoogle()
    }

    history.push("/rooms/new")
  }

  return (
    <div id='page-auth'>
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt="Letmeask" />
          <button className='create-room' onClick={handleCreateRoom}>
          <img src={googleIconImage} alt="Logo do google"/>
            Crie sua sala com o Google
          </button>
          <div className='separator'>Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder='Digite o código da sala' />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
import PosterAndForm from '../components/main/PosterAndForm/PosterAndForm'
import GameDiscription from '../components/main/GameDiscription/GameDiscription'

export default function GamePage() {
  return (
    <main className='min-h-[calc(100%-190px)] flex justify-center'>
      <div className='flex justify-center mt-4'>
          <PosterAndForm></PosterAndForm>
          <GameDiscription></GameDiscription>
      </div>
    </main>
  )
}

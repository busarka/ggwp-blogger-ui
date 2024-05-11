import GameDiscription from './GameDiscription/GameDiscription'
import PosterAndForm from './PosterAndForm/PosterAndForm'

export default function Main() {
    return (
        <main className='min-h-[calc(100%-190px)] flex justify-center'>
            <div className='flex justify-center mt-4'>
                <PosterAndForm></PosterAndForm>
                <GameDiscription></GameDiscription>
            </div>
        </main>
    )
}


import { getUser } from '@/services/supabase/actions'
import { Days } from './days'
import Logout from './logout'
import { CalAnimation } from './calAnimation'

export const NavBar = async ({ handleClick }) => {
  const user = await getUser()

  return (
    <div className=' flex flex-row h-16 select-none bg-[#cdcbcc] justify-around items-center'>
      <Days />
      <div className='flex flex-row text-xl h-full justify-center '>
        {/* <div className='flex flex-row w-full h-full justify-center items-center'>
          <div className='flex  border-r-2 border-r-[#27316e] px-2'>
            <CalAnimation href='/student/topics/subjects' onClick={handleClick}>
              <p className=' px-2 text-[#27316e] hover:text-[#fff] hover:bg-gradient-to-tr from-[#1f5186] to-[#131a2d] hover:rounded-lg'>Temas</p>
            </CalAnimation>
          </div>
          <div className='flex  border-r-2 border-r-[#27316e] px-2'>
            <CalAnimation href='/student/topics/documents' onClick={handleClick}>
              <p className=' px-2 text-[#27316e] hover:text-[#fff] hover:bg-gradient-to-tr from-[#1f5186] to-[#131a2d] hover:rounded-lg'>Documentación</p>
            </CalAnimation>
          </div>
          <div className='flex  border-r-2 border-r-[#27316e] px-2'>
            <CalAnimation href='/student/topics/activities' onClick={handleClick}>
              <p className=' px-2 text-[#27316e] hover:text-[#fff] hover:bg-gradient-to-tr from-[#1f5186] to-[#131a2d] hover:rounded-lg'>Actividades</p>
            </CalAnimation>
          </div>
          <div className='flex  border-r-2 border-r-[#27316e] px-2'>
            <CalAnimation href='/student/topics/exam' onClick={handleClick}>
              <p className=' px-2 text-[#27316e] hover:text-[#fff] hover:bg-gradient-to-tr from-[#1f5186] to-[#131a2d] hover:rounded-lg'>Examen</p>
            </CalAnimation>
          </div>
          <div className='flex  border-r-2 border-r-[#27316e] px-2'>
            <CalAnimation href='/student/topics/recordedclasses' onClick={handleClick}>
              <p className='px-2 text-[#27316e] hover:text-[#fff] hover:bg-gradient-to-tr from-[#1f5186] to-[#131a2d] hover:rounded-lg'>Clases grabadas</p>
            </CalAnimation>
          </div>
        </div> */}
        <CalAnimation />
      </div>
      <div className='flex items-center gap-2 bg-[#b0b0b0] rounded-lg px-3 py-1'>
        {/* <img src='/user.svg' alt='user' className='h-8' /> */}
        <button className='text-[#394075] font-semibold capitalize'>{user?.first_name}</button>
        <Logout />
      </div>
    </div>
  )
}

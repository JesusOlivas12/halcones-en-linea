import { Days } from './days'

const CalAnimation = ({ children }) => {
  return (
    <button
      className=' h-full hover:bg-itesus-blue-default hover:text-white'
    >
      {children}
    </button>
  )
}

export const NavBar = () => {
  return (
    <div className=' flex flex-row h-16 select-none bg-[#42434565] justify-around'>
      <Days />
      <div className='flex text-xl text-white h-full justify-center'>
        <div className='flex flex-row w-full h-full justify-center'>
          <div className=''>
            <CalAnimation link='/maestros/actividades/crearactividades'>
              <p className='border-r-2 border-r-[#27316e] px-2 text-[#27316e]'>Temas</p>
            </CalAnimation>
          </div>
          <div className=''>
            <CalAnimation>
              <p className='border-r-2 border-r-[#27316e] px-2 text-[#27316e]'>Documentación</p>
            </CalAnimation>
          </div>
          <div className=''>
            <CalAnimation>
              <p className='border-r-2 border-r-[#27316e] px-2 text-[#27316e]'>Actividades</p>
            </CalAnimation>
          </div>
          <div className=''>
            <CalAnimation>
              <p className='border-r-2 border-r-[#27316e] px-2 text-[#27316e]'>Examen</p>
            </CalAnimation>
          </div>
          <div className=''>
            <CalAnimation>
              <p className='px-2 text-[#27316e]'>Clases grabadas</p>
            </CalAnimation>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <button className='text-white font-semibold mr-4'>Alumno</button>
      </div>
    </div>
  )
}

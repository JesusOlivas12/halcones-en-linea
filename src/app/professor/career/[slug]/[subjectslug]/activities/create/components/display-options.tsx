'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface Props {
  onNav?: (currentPosition: number) => void
  children: React.ReactNode
  maxPosition: number
  minPosition?: number
}

export const DisplayOptions = ({ onNav, children, maxPosition, minPosition = 1 }: Props) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentPosition = () => parseInt(searchParams.get('position') ?? minPosition?.toString() ?? '1')

  const setPosition = (position: number) => {
    const newSearchParams = new URLSearchParams(searchParams)

    newSearchParams.set('position', position.toString())

    router.replace(`${pathname}?${newSearchParams.toString()}`)
  }

  const handleNav = (direction: string) => () => {
    const currentPosition = getCurrentPosition()

    const newPosition = direction === '+'
      ? currentPosition + 1
      : currentPosition > minPosition
        ? currentPosition - 1
        : minPosition

    onNav?.(newPosition)
    setPosition(newPosition)
  }

  return (
    <section className='flex flex-row gap-1 h-full flex-1 justify-center items-center overflow-x-hidden'>
      <button
        className={
          `transition-opacity ${getCurrentPosition() === minPosition ? 'opacity-20' : ''}`
        }
        disabled={getCurrentPosition() === minPosition}
        onClick={handleNav('-')}
      >
        <img src='/arrow.svg' alt='' className='w-14 h-14 rotate-90' />
      </button>
      <div className='relative w-[50%] h-full'>
        {children}
        {/* <AskDocumentation direction={direction} currentPosition={position} position={3} />
          <DeadlineAct direction={direction} currentPosition={position} position={4} /> */}
      </div>
      <button
        className={
          `transition-opacity ${getCurrentPosition() === maxPosition ? 'opacity-20' : ''}`
        }
        disabled={getCurrentPosition() === maxPosition}
        onClick={handleNav('+')}
      >
        <img src='/arrow.svg' alt='' className='w-14 h-14 -rotate-90' />
      </button>
    </section>
  )
}

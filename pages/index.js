import Image from 'next/image'

import Container from '../components/Container'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16'>
        <div className='flex flex-col-reverse sm:flex-row items-start'>
          <div className='flex flex-col pr-8'>
            <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white'>
              Matthew Skala
            </h1>
            <h2 className='text-gray-700 dark:text-gray-200 mb-4'>
              Travelling
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-16'>
              Enthusiastic and dedicated computer science graduate &mdash;
              currently travelling South East Asian whilst training.
            </p>
          </div>
          <div className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'>
            <Image
              alt='Lee Robinson'
              height={176}
              width={176}
              src='/avatar.jpg'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
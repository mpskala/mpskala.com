import Timeline from '/components/Timeline'
import Container from '/components/Container'
import AllRun from '/components/strava/AllRunning'

export default function About() {
  return (
    <Container title='Matt Skala — About.'>
      <div className='flex flex-col justify-center items-start max-w-3xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          About Me
        </h1>
        <div className='mb-8 prose leading-6 text-gray-600 dark:text-gray-400'>
          <p>
            Hey, I&apos;m Matt 👋🏻. I&apos;m a developer and an avid gym rat
            currently travelling around South East Asia.
          </p>
          <p>
            I grew up in Manchester, England and went to Manchester Metropolitan
            University, graduating with a degree in Computer Science. I usually
            spend my free time playing games 🎮, at the gym 🏋️‍♀️, listening to
            music 🎵 and enjoying time with friends.
          </p>
        </div>

        <div className='w-full flex flex-col'>
          <AllRun />

          <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mt-4 mb-2' />
          <span className='w-full text-sm text-gray-500 italic text-center'>
            All-Time Strava Running Data
          </span>
        </div>

        {/* <div className='max-w-2xl'>
          <Timeline />
        </div> */}
      </div>
    </Container>
  )
}

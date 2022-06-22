import useSWR from 'swr'
import fetcher from '/lib/fetcher'

const kmFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'km'
    : Math.sign(num) * Math.abs(num)
}

const AllRun = () => {
  const { data, err } = useSWR('/api/strava', fetcher)
  if (err) return 'an error has occured'
  if (!data) return ''

  return (
    <div className='flex flex-col'>
      <div className='p-2 flex flex-row gap-2 place-content-evenly text-center'>
        <div className='total-runs'>
          <span className='text-xl md:text-3xl'>{data.allRun.count}</span>{' '}
          <span className='text-sm md:text-base text-gray-500 italic'>
            Runs
          </span>
        </div>
        <div className='total-distance'>
          <span className='text-xl md:text-3xl'>
            {kmFormatter(data.allRun.distance)}
          </span>{' '}
          <span className='text-sm md:text-base text-gray-500 italic'>
            Travelled
          </span>
        </div>
        <div className='total-time'>
          <span className='text-xl md:text-3xl'>
            {new Date(data.allRun.moving_time * 1000)
              .toISOString()
              .substr(11, 8)}
          </span>{' '}
          <span className='text-sm md:text-base text-gray-500 italic'>
            Running
          </span>
        </div>
      </div>
    </div>
  )
}

export default AllRun
import React, {useEffect, useState} from 'react'

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0)
  
  useEffect(() => {
    window.addEventListener("scroll", progressBar)
    return () => {
      window.removeEventListener("scroll", progressBar)
    }
  })

  const progressBar = () => {
    const scrollTotal = document.documentElement.scrollTop;
    const heightWin = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = `${scrollTotal / heightWin * 100}%`;

    setScroll(scroll)
  };

  return (
    <div className="progress-bar p-back">
      <div className="progress-bar p-fill" style={{height: scroll}} />
    </div>
  )
}

export default ProgressBar

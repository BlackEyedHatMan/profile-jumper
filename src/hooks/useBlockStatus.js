import { useState, useEffect } from 'react'
import { isWithinBlockPeriod } from '../utility/block/block-time-utility'

export const useBlockStatus = (blockData) => {
  const [isBlocked, setIsBlocked] = useState(false)

  useEffect(() => {
    const checkBlockStatus = () => {
      setIsBlocked(isWithinBlockPeriod(blockData))
    }

    checkBlockStatus()

    const intervalId = setInterval(checkBlockStatus, 30000)

    return () => clearInterval(intervalId)
  }, [blockData])

  useEffect(() => {
    if (blockData) {
      setIsBlocked(isWithinBlockPeriod(blockData))
    } else {
      setIsBlocked(false)
    }
  }, [blockData])

  return isBlocked
}

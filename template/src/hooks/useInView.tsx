import React from 'react'

const useInView = (options?: IntersectionObserverInit) => {
    const ref = React.useRef(null)
    const [isVisible, setIsVisible] = React.useState(false)

    const handleIntersect = React.useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                } else  {
                    setIsVisible(false)
                }
            })
        },
        [isVisible]
    )

    const observer = React.useMemo(() => new IntersectionObserver(handleIntersect, options), [handleIntersect, options])

    React.useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
            observer.disconnect()
        }
    }, [observer])

    return {
        isVisible,
        ref,
    }
}

export default useInView

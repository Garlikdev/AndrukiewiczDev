import { useEffect } from "react"
import { useActiveSectionContext } from "@context/active-section-context"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"
import { useRouter } from "next/navigation"

export function useSectionInView(
  sectionName: SectionName,
  desktopThreshold = 0.5,
  mobileThreshold = 0.1
) {
  const { ref, inView } = useInView({
    threshold: window.innerWidth < 600 ? mobileThreshold : desktopThreshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  const router = useRouter()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
      const sectionId = sectionName.toLowerCase()
      router.replace(`#${sectionId}`)
      const element = document.getElementById(sectionName)
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [
    inView,
    setActiveSection,
    timeOfLastClick,
    sectionName,
    router,
    desktopThreshold,
    mobileThreshold,
  ])

  return {
    ref,
  }
}

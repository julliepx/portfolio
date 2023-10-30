import { useDeviceContext } from "@/app/context/store"

const ArrowIcon = () => {
    const { isMobile } = useDeviceContext();
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12L16 23L29 12" stroke={isMobile ? 'var(--secondary-color)' : 'var(--background-primary)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ArrowIcon
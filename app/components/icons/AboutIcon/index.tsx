import { useDeviceContext } from "@/app/context/store"

const AboutIcon = () => {
    const { isMobile } = useDeviceContext();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_70_29)">
                <path d="M7.2 5.6H8.8V4H7.2M8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4ZM8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0ZM7.2 12H8.8V7.2H7.2V12Z" fill={isMobile ? 'var(--secondary-color)' : 'var(--background-primary)'} />
            </g>
            <defs>
                <clipPath id="clip0_70_29">
                    <rect width="16" height="16" fill={isMobile ? 'var(--secondary-color)' : 'var(--background-primary)'} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default AboutIcon
export interface LayoutContainerProps {
    children: React.ReactNode;
    className?: string
}

const LayoutContainer = ({ children, className }: LayoutContainerProps) => {
    return (
        <div className={`${className ? `${className} ` : ""}max-w-7xl mx-auto`}>{children}</div>
    )
}

export default LayoutContainer
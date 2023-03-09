const NavContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-500 py-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {children}
      </div>
    </div>
  )
}

export default NavContainer
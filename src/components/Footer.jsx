import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 inset-x-0 z-50 bg-[var(--color-black)] dark:bg-gray-900 text-white p-4 text-center'>
      <p className="text-sm">&copy; {new Date().getFullYear()} MLSC Ideathon 2025. All rights reserved.</p>
      <p className='text-sm'>Handcrafted by Team MLSC ❤️</p>
    </div>
  )
}

export default Footer

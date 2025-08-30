import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 inset-x-0 z-50 bg-gray-800 dark:bg-gray-900 text-white p-4 text-center'>
      <p className="text-sm">&copy; {new Date().getFullYear()} Ideathon. All rights reserved.</p>
    </div>
  )
}

export default Footer

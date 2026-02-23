import React from 'react'

const SkeletonCard = () => {
  return (
     <div className="bg-card rounded-2xl p-4 animate-pulse">
      <div className="h-48 bg-muted rounded-lg mb-4"></div>
      <div className="h-6 bg-muted rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-muted rounded w-1/3"></div>
    </div>
  )
}

export default SkeletonCard

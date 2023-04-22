import React from 'react'

function footer() {
  return (
    <div className="stats shadow self-center align-middle bg-opacity-100">
      <div className="stat place-items-center">
        <div className="stat-title">Média de tempo do processo no judiciário</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>
      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-secondary">4,200</div>
      </div>
    </div>
  )
}

export default footer

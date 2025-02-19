import React from 'react'

const Service = ({img,txt}) => {
  return (
    <div className="service-card flex w-full  flex-col justify-center items-center gap-2 text-center">
      <img  src={img} alt="service" className="service-image w-32 h-32"/>
      <h1 className="service-text text-3xl">{txt}</h1>
    </div>
  )
}

export default Service
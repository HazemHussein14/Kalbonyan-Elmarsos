import React, { Fragment } from 'react'

const CarDetails = ({carClass,name,description}) => {
  return (
    <Fragment>
      <article className="mb-8 text-center">
          <h3 className="text-2xl text-[--primary-color] uppercase font-bold ">
            {carClass}
          </h3>
          <p className="text-[16px]">{name}</p>
        </article>
        <p className="mb-8">{description}</p>
    </Fragment>
  )
}

export default CarDetails
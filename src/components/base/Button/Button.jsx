import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'

const Button = ({ className,type,title}) => {
    return (
      // <div>
      //       <button className={className} type={type} >{title}</button>
      // </div>
      <Fragment>
         <button className={className} type={type} >{title}</button>
      </Fragment>
  )
}
Button.defaultProps = {
    type :'submit'
}


export default Button
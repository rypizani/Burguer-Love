import React from 'react'
import { Link } from 'react-router-dom'

interface ILogo {
  classes: string
}

export const Logo: React.FC<ILogo> = ({ classes }) => {
  return (
    <Link to='/' className={classes}>
      Burger<span> Love</span>
    </Link>
  )
}

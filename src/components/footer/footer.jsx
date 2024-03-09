import { Link } from 'react-router-dom'
import s from './footer.module.scss'

export const Footer = () => {
    return (
      <div className={s.container}>
        
        <h1>Ігор Волошин</h1>
        <Link>Git</Link>
      </div>
  )
}

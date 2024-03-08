import s from './forma.module.scss'

export const Forma = () => {
  return (
    <div className={s.container}>
      <form className={s.forma}>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Phone
          <input type="phone" />
        </label>
        <label>
          Adress
          <input type="adress" />
        </label>
      </form>
    </div>
  );
}

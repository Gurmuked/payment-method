import styles from "../style";
import Button from "./Button";

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col" >
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everthig you need accept card payment and 
          grow your business anywhere on the planet
        </p>
      </div>
      <div>
        <Button />
      </div>
    </section>
  )
export default CTA
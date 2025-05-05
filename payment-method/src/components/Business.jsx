//import features from '../constants';
import { features } from '../constants';
import styles, {layout} from '../style';
import Button from './Button';

const FeatureCard = ({ icons, title, content, index}) => (
  <di>
    <div className={`flex flex-row p-6 rounded-[20px] feature-card ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
      <img src={icons} alt={icons} className='w-[64px] h-[64px] object-contain '/>
    </div>
  </di>
)


const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className='sm:block hidden' /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
        </p>

        <Button  styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (<FeatureCard key ={feature.id} {...feature} />))}
      </div>
    </section>
  )
}

export default Business
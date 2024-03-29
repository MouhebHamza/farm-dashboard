import "./Card.css";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    
        <CompactCard param={props} />
  );
};

function CompactCard({ param }) {
  const Png = param.png;  
  return (
      <motion.div
          className='CompactCard'
          style={{
              background: param.color.backGround,
              boxShadow: param.color.boxShadow
          }}
          layoutId='expandableCard'>
              <div className='image'>
              <Png size='50' />
              
              <h2>{param.title}</h2>
          </div>
          <div className='detail'>
              <h3>{param.value}</h3>
          </div>
      </motion.div>
  )
}


   

export default Card;

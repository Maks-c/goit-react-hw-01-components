import PropTypes from 'prop-types';
import {Section} from "./statisticsStyle";
import {H2,Ul,Li,Span} from "./statisticsStyle";


 const Statistics = ({items,title}) => {
    return  <Section >
        {title && <H2 >{title}</H2>}
        <Ul>
            {items.map(item=>(
                <Li key={item.id}>

                   <Span> {item.label}</Span>
                    <span>{item.percentage}%</span>
                </Li>
            ))}
        </Ul>
    </Section>
};


 Statistics.propTypes={
     items:PropTypes.arrayOf(PropTypes.shape({
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
     })).isRequired,
     title:PropTypes.string,


}

export default Statistics;



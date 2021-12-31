import PropTypes from 'prop-types';
import {Section} from "./statisticsStyle";
import {H2, Ul, Li, Span} from "./statisticsStyle";


const Statistics = ({items, title}) => {
    return <Section>
        {title && <H2>{title}</H2>}
        <Ul>
            {items.map(({id, label, percentage}) => (
                <Li key={id}>

                    <Span> {label}</Span>
                    <span>{percentage}%</span>
                </Li>
            ))}
        </Ul>
    </Section>
};


Statistics.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
    title: PropTypes.string,
}

export default Statistics;



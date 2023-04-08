import CalendarHeatmap from 'react-calendar-heatmap';

import './CipherMap.scss'
import 'react-calendar-heatmap/dist/styles.css';
import {cipherValue} from "./cipherMapValue";

const CipherMap = () => {
    return (
        <div className="cipher-map-box">
            <span className="heading">CIPHER MAP</span>
            <CalendarHeatmap
                startDate={new Date('2022-08-01')}
                endDate={new Date('2023-12-1')}
                showWeekdayLabels={true}
                titleForValue = {(value)=>`Cipher Points 0`}
                values={[
                ]}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-scale-0';
                    }
                    return `color-scale-${value.count}`;
                }}
            />
            <div className={'cipher-map-values'}>
                <span>Less</span>
                {cipherValue.map(color => <div style={{width:'0.85rem', height:'0.85rem', backgroundColor:`${color}`}}></div> )}
                <span>More</span>
            </div>

        </div>
    );
};
export default CipherMap;
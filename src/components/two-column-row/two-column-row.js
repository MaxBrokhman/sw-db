import React from 'react';

const TwoColumnRow = (props) => {
    return(
        <div className="row mb2">
            <div className="col-md-6">
                { props.left }
            </div>
            <div className="col-md-6">
                { props.right }
            </div>
        </div>
    );
};

export default TwoColumnRow;
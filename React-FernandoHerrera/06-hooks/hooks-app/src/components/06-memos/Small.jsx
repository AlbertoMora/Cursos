import React, { memo } from 'react'

const Small = ({value}) => {

    console.log("rerender");

    return (
        <small>
          { value }
        </small>
    )
};

export default memo(Small);

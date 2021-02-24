import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

const LabelItems = ({LabelItemsProps}) => {

    const labelItems = LabelItemsProps.map((item) => {
        return (
          <>
            <Label as='a' color={item.labelColor} key={item.labelName}> 
              <Icon name={item.labelIcon} />
                {item.labelName}</Label>
                <br/>
                </>
        );
      });

    return ( 
        <>
         {labelItems}
    </>
    )
}
export default LabelItems;
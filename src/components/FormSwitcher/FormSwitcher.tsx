import React, { FunctionComponent } from 'react'
import { Typography, Button } from 'antd';
const { Text } = Typography;

interface Labels {
    header: string,
    buttonLabel: string
}

interface Props {
    labels: Labels,
    onSwitch: () => void
}

export const FormSwitcher: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            <Text>{props.labels.header}</Text>
            <Button size="large" type='default' block onClick={props.onSwitch}>
                {props.labels.buttonLabel}
            </Button>
        </div>
    )
}

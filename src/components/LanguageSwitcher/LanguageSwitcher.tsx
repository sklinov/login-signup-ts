import React from 'react';
import { connect } from 'react-redux'
import { Radio } from 'antd';

export interface LanguageSwitcherProps {
}

export function LanguageSwitcher (props: LanguageSwitcherProps) {
  return (
    <div>
      <Radio.Group defaultValue="en" size="small">
        <Radio.Button value="en">en</Radio.Button>
        <Radio.Button value="ru">ru</Radio.Button>
      </Radio.Group>
    </div>
  );
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher)
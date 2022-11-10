import React, { component } from 'react';

class Hello extends component {
  static defaultProps = {
    name: '이름없음'
  }
  render() {
    const { color, name, isSpecial } = this.defaultProps
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    )
  }
}


export default Hello;
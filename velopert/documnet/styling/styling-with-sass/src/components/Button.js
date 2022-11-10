import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
};

export default Button;
/* 매번 버튼을 만들때마다 새로운 컴포넌트를 만들게 아니라 위와 같이 다양한 옵션을 넣을 수 있게 해서 그때 그때 커스터마이징 해서 사용하는 것이 효율적입니다.*/
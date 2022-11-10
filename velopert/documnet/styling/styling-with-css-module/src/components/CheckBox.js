import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import styles from './CheckBox.module.css';
import { classNames } from 'classnames/bind';


const cx = classNames.bind(styles)

function Checkbox({ children, checked, ...rest }) {
  return (
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={cx('icon')}>
          {checked ? (
            <MdCheckBox className={cx('checked')} />
          ) : (
            <MdCheckBoxOutlineBlank />
          )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  )
}

export default Checkbox
/*
레거시 코드란 다른 사람에게 넘겨받은 읽기 어렵고 수정하기 오래된 어려운 코드
레거시프로젝트 or  클래스 이름 짓는 규칙을 정하기 힘든 상황이거나 번거로울 때 
*/ 
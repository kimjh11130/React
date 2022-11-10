import React, { useState } from 'react';

const PhoneForm = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const onChangeName = (event) => setName(event.target.value)
  const onChangePhone = (event) => setPhone(event.target.value)

  const handleSubmit = (event) => event.preventDefault()
  return (
    <>
      <form>
        <input
          onChange={onChangeName}
          placeholder="이름"
          name="name"
          value={name} />
        <input
          onChange={onChangePhone}
          placeholder="전화번호"
          name="phone"
          value={phone} />
        <button type='submit' onSubmit={handleSubmit}>등록</button>
        <div>
          {name}
          {phone}
        </div>
      </form>
    </>

  );
};

export default PhoneForm;
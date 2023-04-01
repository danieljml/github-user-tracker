import React, { memo } from 'react';
import { CiSearch } from 'react-icons/ci';

const Input = () => {
  return (
    <>
      <CiSearch className="form__icon-search" />
      <input className="form__input" type="text" placeholder="Search Github username..." name="user" autoComplete="off" />
      <button className="form__btn">Search</button>
    </>
  );
};

export default memo(Input);

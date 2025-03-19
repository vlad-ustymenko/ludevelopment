"use client";

import React, { useEffect, useState } from "react";
import styles from "./DropDown.module.css";
import Arrow from "../Arrow/Arrow";

const DropDown = ({ list, title, selectTitle, onChange, disabled }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className={styles.dropDown}>
      <div className={styles.dropDownTitleWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div
          className={styles.selectWrapper}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div
            className={styles.select}
            style={{
              color: selected && "black",
            }}
          >
            {selectTitle}
          </div>
          <Arrow open={open} />
        </div>
      </div>

      <ul className={`${styles.dropDownList} ${open && styles.dropDownActive}`}>
        {list.map((item) => {
          return (
            <li
              key={item}
              className={styles.dropDownListItem}
              onClick={() => {
                onChange(item);
                setOpen(false);
                setSelected(true);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;

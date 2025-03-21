"use client";

import React, { useState } from "react";
import styles from "./DropDown.module.css";
import Arrow from "../Arrow/Arrow";
import { useViewportWidthContext } from "@/context/ViewportWidthContext";
import useClickOutside from "@/hooks/useClickOutside";

const DropDown = ({ list, title, selectTitle, onChange, small, big }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const { viewportWidth } = useViewportWidthContext();

  const dropDownRef = useClickOutside(() => setOpen(false));

  return (
    <div className={styles.dropDown} ref={dropDownRef}>
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

      <ul
        className={styles.dropDownList}
        style={{
          height: open
            ? big
              ? viewportWidth > 1279
                ? "16.6vw"
                : viewportWidth > 767
                ? "33vw"
                : "55vw"
              : small
              ? viewportWidth > 1279
                ? "7.5vw"
                : viewportWidth > 767
                ? "15vw"
                : "25vw"
              : "0"
            : "0",
        }}
      >
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

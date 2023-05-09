import React from "react";
import styles from "./CategoryList.module.css"

// React Component to display individual item
const Item = ({ name, category }) => (
    <div className={styles.itemcontainer}>
    <div>
      <span className={styles.itemlabel}>Name: </span>
      {name}
    </div>
    <div>
      <span className={styles.itemlabel}>Category: </span>
      {category}
    </div>
  </div>
);

export default Item;
import React, { useEffect, useMemo, useState } from "react";
import Item from "./Item";
import styles from "./CategoryList.module.css"
import Link from "next/link";



export default function CategoryList() {

  var defaultSports = [
    { name: "Table Tennis", category: "Indoor",},
    { name: "Football", category: "Outdoor", },
    { name: "Swimming", category: "Aquatics",  },
    { name: "Chess", category: "Indoor",  },
    { name: "BaseBall", category: "Outdoor",  }
    ];
    
  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();


  useEffect(() => {
      setSportList(defaultSports);
  }, []);// eslint-disable-line


  function getFilteredList() {
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

 
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

    return (
        <div className={styles.dropbox}>
            <Link href="/">Go back</Link>
      <div className={styles.filtercontainer}>
        <h2>Filter by Category:</h2>
        <div className={styles.selectlist}>
          <select
            name="category-list"
                        id="category-list"
                        className={styles.categorylist}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Aquatics">Aquatics</option>
          </select>
        </div>
      </div>
      <div className={styles.sportlist}>
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div>
    </div>
  );
}
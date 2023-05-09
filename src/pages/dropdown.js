'use client'
// import { useState } from 'react';
import CategoryList from '@/components/sports-category/CategoryList';
import styles from "../components/sports-category/CategoryList.module.css"

// const products = [
//     { label: "Orange", value: 0, available: true },
//     { label: "Mango", value: 1, available: false },
//     { label: "Milk", value: 2, available: true },
//     { label: "Chocolate", value: 3, available: false },
//     { label: "Banana", value: 4, available: true },
// ];

const Dropdown = () => {



    return (<div className={styles.dropboxlayout}>
        <h1> Dropdown test</h1>

           <CategoryList />
       
    </div>)
};

export default Dropdown;
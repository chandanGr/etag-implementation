import React, { useState, useEffect } from "react";
import axios from "axios";

import TabPanel from "../../Components/TabPanel";
import ProductCard from "../../Components/ViewComponents/ProductCard";
import PreLoader from "../../Components/ViewComponents/PreLoader";

import { formatProductList } from "../Utils";

import "./index.scss";

function TabPanelProductCardItemsContainer() {
  const [productDetailItems, setProductDetails] = useState([]);
  const [productListLoader, setProductListLoader] = useState(false);
  const [tabList, setTabList] = useState([]);
  const [selectedTab, setSelectedTab] = useState("ALL");

  useEffect(() => {
    axios.get("http://localhost:5000/tabDetails")
      .then((res) => {
        setTabList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let url;
    if (selectedTab === "ALL") {
      url = "http://localhost:5000/productList";
    } else {
      url = `http://localhost:5000/productList?categoryType=${selectedTab}`;
    }
    setProductListLoader(true);
    axios.get(url)
      .then((res) => {
        setProductDetails(formatProductList(res.data));
        setProductListLoader(false);
      }).catch((err) => {
        setProductDetails([]);
        setProductListLoader(false);
      });
  }, [selectedTab]);

  function showProductDetails() {
    if (productDetailItems.length === 0) {
      return null;
    }
    return (
      <ul className="productCardItemContainer">
        {productDetailItems &&
          productDetailItems.map((productDetail, key) => {
            return (
              <li key={productDetail._id}>
                <ProductCard productDetail={productDetail} />
              </li>
            );
          })}
      </ul>
    );
  }

  return (
    <div className="TabPanelProductCardItemsContainer">
      <TabPanel
        tabPanelItems={tabList}
        onClickSelectedTab={(tab, key) => {
          setSelectedTab(tab.categoryType);
        }}
      />
      {productListLoader ? (
        <div className="preLoaderContainer">
          <PreLoader />
        </div>
      ) : (
        showProductDetails()
      )}
    </div>
  );
}

export default React.memo(TabPanelProductCardItemsContainer);

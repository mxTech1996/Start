"use client";
import { pageName } from "@/data";
import axios from "axios";
import { useState, useEffect } from "react";

const url = `https://cms.mxtechconsulting.com/api/website/${pageName}/`;
const token = "069c07b020945e19690b026f15a9605f9cc84fa0";
const initialState = {
  name: "",
  url: "",
  telephone: "",
  email: "",
  address: "",
  description: "",
  subtitle: "",
  image_hero: null,
  image_hero2: null,
  iconImage: null,
  info: [],
  services: [],
  references: [],
  products: [],
};

export const useInformation = () => {
  const [dataSite, setDataSite] = useState(initialState);

  const getSiteInfo = async () => {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: "Token " + token,
      },
    });
    console.log(data);
    setDataSite(data);
  };
  useEffect(() => {
    getSiteInfo();
  }, []);

  return { dataSite };
};

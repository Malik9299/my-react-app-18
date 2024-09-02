import { useEffect, useState } from "react";

interface Products {
  id: 1;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

export const useProducts = () => {
  const [data, setData] = useState<Products[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCats = async () => {
      setIsLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (response.ok) {
        const jsonData = await response.json();
        setIsLoading(false);
        setData(jsonData);
      } else {
        setError("Some Error");
      }
    };
    fetchCats();
  }, []);
  return { data, isLoading, error };
};

import { useEffect, useState } from "react";

interface Cats {
  creationAt: string;
  id: number;
  image: string;
  updatedAt: string;
  name: string;
}

export const useCategories = () => {
  const [data, setData] = useState<Cats[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCats = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories"
      );
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

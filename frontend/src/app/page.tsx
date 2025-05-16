"use client";
import axios from "axios";

import { useEffect } from "react";

export default function Home() {
  const fetchRed = async () => {
    await axios
      .get("http://localhost:4000/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log("error:", error));
  };

  useEffect(() => {
    fetchRed();
  }, []);

  return <div>bar</div>;
}

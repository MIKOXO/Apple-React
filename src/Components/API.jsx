import React, { useState, useEffect } from "react";
import Loading from "../Assets/Loading.gif";

const API = () => {
  //channelID: UCE_M8A5yxnLfW0KghEeajjw;

  //"uploads": "UUE_M8A5yxnLfW0KghEeajjw"

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Api =
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=UUE_M8A5yxnLfW0KghEeajjw&key=AIzaSyAZxGpcny5_vCaZM56PqlzXJ4MKPk4ediw";
    fetch(Api)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
        }));
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <img src={Loading} className="block mx-auto my-14" />
      </div>
    );
  }
  return (
    <section className="mx-auto container px-4 my-10">
      <div>
        <h1 className="my-10 pt-5 text-center text-5xl font-semibold">
          Lately on YouTube
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid lg:grid-cols-3">
          {data.map((item) => (
            <div className="bg-NavbarBG py- px- rounded-2xl shadow-2xl hover:scale-105 ease-in-out duration-300">
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${`item.snippet.resourceId.videoId`}`}
              >
                <img
                  src={item.snippet.thumbnails.high.url}
                  width="100%"
                  className="rounded-2xl"
                />
                <p className="my-5 px-5 font-semibold text-lg text-center text-FooterText">
                  {item.snippet.title}
                </p>
              </a>
            </div>
          ))}
        </div>
        {console.log(data)}
      </div>
    </section>
  );
};

export default API;

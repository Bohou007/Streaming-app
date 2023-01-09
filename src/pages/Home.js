import React, { Component } from "react";
import CategoriesVideo from "../components/cards/categories/CategoriesVideo";
import Index from "../components/cards/home-header/Index";
import FavoryVideo from "../components/cards/videos/FavoryVideo";
import Video from "../components/cards/videos/Video";

class Home extends Component {
  render() {
    let data = [
      {
        url: "https://cdn.pixabay.com/photo/2022/02/21/06/47/applications-7025904_1280.jpg",
      },
      {
        url: "https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_1280.jpg",
      },
      {
        url: "https://cdn.pixabay.com/photo/2014/08/05/10/31/waiting-410328_1280.jpg",
      },
      {
        url: "https://cdn.pixabay.com/photo/2015/03/20/21/17/agfa-682920_1280.jpg",
      },
      {
        url: "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450_1280.jpg",
      },
    ];
    return (
      <>
        <Index />
        <CategoriesVideo />
        <Video image_url={data} cardTitle="Les dernieres videos" />
        <Video image_url={data} cardTitle="Les dernieres Series" />
        <FavoryVideo />
        <Video image_url={data} cardTitle="Les derniers Animes" />
        {/* <Video /> */}
        {/* <Video /> */}
      </>
    );
  }
}

export default Home;

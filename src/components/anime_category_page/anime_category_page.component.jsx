import React, { Component } from 'react'
import "../anime_category_page/anime-category-page.style.css"
import SingleCategory from "./single_category.component"
import animeData from "../../base/data"


class AnimeCategoryPage extends Component {
  constructor(props) {
    super(props)
    this.componentName = "anime category page"
    this.GENRE = "genre"
    this.MEDIA = "media"
    this.state = {
      mediaCategory: [],
      genreCategory: [],

    }
  }

  componentDidMount() {
    let segmentedDataMedia = this.categoriseAnime(animeData, this.MEDIA)
    let segmentedDataGenre = this.categoriseAnime(animeData, this.GENRE)
    // console.log(segmentedDataGenre)


  }


  render() {
    return (
      <div className="anime-collections-page-container">
        <div className="anime-collections-page-title">
          <p>Anime Categories</p>
        </div>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <div className="anime-media">
          <p>Anime Media Type</p>
        </div>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
      </div>

    )
  }



  categoriseAnime = (animeData, genre = this.GENRE) => {
    let categories = this.getGenresOrMedia(animeData, genre = this.GENRE)
    let segmentedData = []
    categories.forEach(category => {
      let groupedData = {};
      groupedData = {
        group: category,
        groupedData: []
      }
      animeData.forEach((anime) => {
        if (genre === this.GENRE) {
          if (anime.genre === category) {
            groupedData.groupedData.push(anime)
          }
        } else {
          if (anime.media === category) {
            groupedData.groupedData.push(anime)
          }
        }
      })
      segmentedData.push(groupedData)
    });
    return segmentedData
  }

  getGenresOrMedia = (animeData, genre = this.GENRE) => {
    let categories = []
    switch (genre) {
      case this.GENRE:
        categories = animeData.map((anime) => {
          return anime.genre
        })
        break
      case this.MEDIA:
      default:
        categories = animeData.map((anime) => {
          return anime.media
        })
        break
    }
    return [...new Set(categories)]//remove duplicates
  }
}
export default AnimeCategoryPage;
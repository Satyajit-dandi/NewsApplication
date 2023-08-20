import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
                 static defaultProps = {
                   country: "in",
                   pageSize: 9,
                   category: "general",
                 };

                 static propTypes = {
                   country: PropTypes.string,
                   pageSize: PropTypes.number,
                   category: PropTypes.string,
                 };

                 capitalizeFirstletter = (string) => {
                   return string.charAt(0).toUpperCase() + string.slice(1);
                 };

                 constructor(props) {
                   super(props);
                   this.state = {
                     articles: [],
                     loading: false,
                     page: 1,
                     totalResults: 0,
                   };
                   document.title = `${this.capitalizeFirstletter(
                     this.props.category
                   )} - NewsMonkey`;
                 }

                 async componentDidMount() {
                  this.updateNews()
                  
                }

                async updateNews(){
                  this.props.setProgress(0);
                  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

                  this.setState({ loading: true });
                  let data = await fetch(url);
                  let parseddata = await data.json();

                  this.setState({
                    articles: parseddata.articles,
                    totalResults: parseddata.totalResults,
                    loading: false,
                  });
                  this.props.setProgress(100);
                } 

                 handlePrevclick = async () => {
                   let url = `https://newsapi.org/v2/top-headlines?country=${
                     this.props.country
                   }&category=${
                     this.props.category
                   }&apikey=${this.props.apikey}&page=${this.state.page -
                     1}&pageSize=${this.props.pageSize}`;

                   this.setState({ loading: true });

                   let data = await fetch(url);
                   let parseddata = await data.json();
                     this.setState({ loading: false });
                   this.setState({
                     page: this.state.page - 1,
                     articles: parseddata.articles,
                     loading: false,
                   });
                 };

                 handleNextclick = async () => {
                   if (
                     !(
                       this.state.page + 1 >
                       Math.ceil(this.state.totalResults / this.props.pageSize)
                     )
                   ) {
                     let url = `https://newsapi.org/v2/top-headlines?country=${
                       this.props.country
                     }&category=${
                       this.props.category
                     }&apikey=${this.props.apikey}&page=${this.state.page +
                       1}&pageSize=${this.props.pageSize}`;

                     this.setState({ loading: true });

                     let data = await fetch(url);
                     let parseddata = await data.json();
                     this.setState({ loading: false})
                     this.setState({
                       page: this.state.page + 1,
                       articles: parseddata.articles,
                       loading: false,
                     });
                   }
                 };

                //  fetchMoreData = async() => {
                   
                //    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
                   
                //    this.setState({
                //        page: this.state.page + 1
                //    })
                //   //  this.setState({ loading: true });
                //    let data = await fetch(url);
                //    let parseddata = await data.json();

                //    this.setState({
                //      articles:this.state.articles.concat(parseddata.articles),
                //      totalResults: parseddata.totalResults,
                //     //  loading: false,
                //    });
            
                //  };

                 render() {
                  
                   return (
                     <>
                       <h2 className="text-center" style={{marginTop:'90px'}}>
                         📰🐒 - Top{" "}
                         {this.capitalizeFirstletter(this.props.category)}{" "}
                         Headlines
                       </h2>
                       {this.state.loading && <Spinner />} 
                       {/* <InfiniteScroll
                         dataLength={this.state.articles.length}
                         next={this.fetchMoreData}
                         hasMore={this.state.articles.length != this.state.totalResults}
                         loader={<Spinner />}
                       > */}
                         <div className="container">
                           <div className="row">
                             {// !this.state.loading &&
                             this.state.articles.map((element) => {
                               return (
                                
                                 <div className="col-md-4" key={element.url}>
                                   <NewsItem
                                     title={
                                       element.title
                                         ? element.title.slice(0, 40)
                                         : ""
                                     }
                                     description={
                                       element.description
                                         ? element.description.slice(0, 80)
                                         : ""
                                     }
                                     URL={element.urlToImage}
                                     newsurl={element.url}
                                     author={element.author}
                                     date={element.publishedAt}
                                     source={element.source.name}
                                   ></NewsItem>
                                 </div>
                               );
                             })}
                           </div>
                         </div>
                       {/* </InfiniteScroll> */}
                       <div className="container d-flex justify-content-between ">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div>
                     </>
                   );
                 }
               }

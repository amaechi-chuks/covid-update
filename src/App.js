import React, { Component } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import SimpleCards from "./Cards/Card";
import Footer from "./footer/footer";
// import SearchBar from './SearchBar/SearchBar'
import Loader from './LoadingBar/Loadng';
import './LoadingBar/LoadingBar.css';
import "./Data/data.css";
import "./Apps.css";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 4,
      currentPage: 0,
      loading: true
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios
      .get(
        "https://api.quarantine.country/api/v1/summary/latest"
      )
      .then((res) => {
        const data = res.data;
        const slice = Object.entries(data.data.regions).slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map((item) => (
          <React.Fragment>
            <SimpleCards
              key={item.id}
              name={item[1].name}
              total_cases={item[1].total_cases}
              active_cases={item[1].active_cases}
              tested={item[1].tested}
              critical={item[1].critical}
              recovered={item[1].recovered}
              deaths={item[1].deaths}
              death_ratio={item[1].death_ratio}
              recovery_ratio={item[1].recovery_ratio}
            />
          </React.Fragment>
        ));

        this.setState({
          pageCount: Math.ceil(Object.entries(data.data.regions).length / this.state.perPage),
          postData,
          loading: false
        });
      });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }
  render() {
    return (
      <div className="App">
        <div className="flex-container"></div>
        <header className="App-header">
        <h2>COVID-19 Update</h2>
        {this.state.loading === true ? (
          <div className="spinner">
          <Loader />
          </div>
        ) : (
         <div>
         {/* <SearchBar /> */}
         <div className="talk">
          
          {this.state.postData}
          </div>
         </div>
         
        
        )}
        <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
          <Footer />
        </header>
      </div>
    );
  }
}

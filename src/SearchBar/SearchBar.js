import React, {Component} from 'react';
import './search.css'

class SearchBar extends Component {
    constructor(props) {
       super(props);
       this.txtSearch = null;
       this.state = { term: '' };
       this.setInputSearchRef = e => {
          this.txtSearch = e;
       }
    }
    onInputChange(event) {
       this.setState({ term: this.txtSearch.value });
    }
    render() {
       return (
          <input className="search" placeholder="search"
             value={this.state.term}
             onChange={this.onInputChange.bind(this)}
             ref={this.setInputSearchRef} />
       );
    }
 }
 export default SearchBar;

import React, {Component} from 'react';
import axios from 'axios';
import Row from './Row';
import './Table.css';


class Table extends Component {
  constructor(props){
    super(props);

    this.state = {
      data:[]
    }

    this.sortBy.bind(this);
    this.compareBy.bind(this);
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }

  componentWillMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const data = res.data;
      this.setState({data});
    })
  }
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <div className="table">
        <div className="header">
          <div className="sort" onClick={() => this.sortBy('title')}>Title</div>
          <div onClick={() => this.sortBy('body')}>Summary</div>
        </div>
        <div className="body">
          {rows}
        </div>
      </div>
    );
    
  }
}


//   render() {
//     return (
//       <div className="table">
//         <tr>
//         <tb className="sort">Titles</tb>
//         </tr>
//         <Tablerow data={this.props.data} />
//       </div>
//     );
//   }
// }



export default Table;
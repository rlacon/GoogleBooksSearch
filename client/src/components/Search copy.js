// import React from "react";

// function Search(props) {

//     return (
//         <div>
//             <container>
//             <form>
//                 <div class="form-group">
//                     <label for="exampleInputEmail1">Search</label>
//                     <input type="text" class="form-control" id="input" aria-describedby="searchHelp" placeholder="Enter book title" />
//                 </div>
//                 <button type="submit" class="btn btn-primary">Submit</button>
//             </form>
//             </container>
//         </div>
//     )
// }


// export default Search;



// class Form extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = { search_term: '' }
//       this.handleChange = this.handleChange.bind(this)
//       this.handleSubmit = this.handleSubmit.bind(this)
//     }
  
//     handleChange(event) {
//       this.setState({ value: event.target.value })
//     }
  
//     handleSubmit(event) {
//       alert(this.state.username)
//       event.preventDefault()
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />
//           <input type="submit" value="Submit" />
//         </form>
//       )
//     }
//   }
//    
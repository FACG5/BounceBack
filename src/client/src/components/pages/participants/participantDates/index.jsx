import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../../abstract/header";
import Table from "../../../abstract/Table";
import Footer from "../../../abstract/footer";
import Button from "../../../abstract/button";
import axios from 'axios';
import contextHoc from './../../../abstract/HOC/contextHoc';
import swal from "sweetalert2";

class Date extends Component {
  state = {
    search: "",
    rows: [],
    message: ""
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  goAdd = event => {
    this.props.history.push("/participants/date/add");
  };

  goBack = event => {
    const id = this.props.match.params.id;
    this.props.history.push(`/participant/details/${id}`);
  };

  // axios to make requests from backend.. 
  getDates = async () => {
    const { dispatch } = this.props.context;
    const id = this.props.match.params.id;
    try {
      const result = await axios(`/api/v2/participant/${id}/dates`);
      const dates = result.data.participantDates;
      let array = [["Participant Name/BB-No", "Worker Name/ID", "Start", "End", "Action"]];
      if (dates.length === 0){
        const msg = 'There is no dates yet !!';
        array =[];          
        this.setState({ message: msg, rows:array});
      }
      else{    
      dates.map(row =>
        array.push([
          row.participant_id,
          row.worker_id,
          row.id,
          row.participant_id,
          <>
             <i className="fas fa-trash-alt"  onClick={() => this.onDelete(row.id)}/>
             <Link to= {`/participant/${id}/date/details/${row.id}`}>
               <i className="fas fa-info-circle" />
             </Link>
           </>
         ])
       );
       this.setState({ rows: array });
       }
    } catch (err) {
      dispatch({ type: 'ERROR_PAGE', payload: { ErrorPage: err.response.status } })
    }
};

  componentDidMount = async () => {
    this.getDates();
  };

//Delete an exist date
  onDelete = id =>{
    swal({
      type: 'warning',
      html:'Are you sure that you want to delete this date ?',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'<i class="fa fa-thumbs-up"></i> Yes',
      confirmButtonAriaLabel: 'Thumbs up',
      cancelButtonText:'<i class="fa fa-thumbs-down"></i> No ',
      cancelButtonAriaLabel: 'Thumbs down',
    }).then(confirm => {
      if (confirm.value) {
        axios("/api/v2/date", {
          method: "DELETE",
          data: {
            dateId: id
          }
        }).then(result => {
          this.getDates().then(() => {
            swal({
              title: 'Success',
              type: 'success',
              html: ' <strong>Your work has been saved</strong> <br/>' +result.data.message,
              showConfirmButton: false,
              timer: 3000
            }).then(() => {
              this.getDates();
            })
          });
        });
      }
    });
};
  render() {
    return (
      <React.Fragment>
        <Header value="View Dates" />
        <Table rows={this.state.rows} />
        {this.state.rows.length === 0 && (
            <p className="error-msg">
              <i className="far fa-surprise" />
              {this.state.message}
            </p>
        )}
        <Button value="Add Date" color="#272727" onClick={this.goAdd} />
        <Button value="Back" color="#FF4800"  onClick={this.goBack} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default contextHoc(Date);

import React from "react";
import withContext from "../../withContext";
import { Link } from "react-router-dom";
import axios from "axios";

// const initState = {
//     P_Name: "",
//     P_Price: "",
//     P_Descreption: "",
//     category: "",
//     imgURL: ""
// };

const AddProduct = (initState) => {

    const save = async (e) => {
        const { pstate : P_Name, P_Price, P_Descreption, category, imgURL } = this.state

        if(P_Name && P_Price){
          const id = Math.random().toString(36).substring(2) + Date.now().toString(36);

          await axios.post(
            'http://localhost:3001/products',    
            { id, P_Name, P_Price, P_Descreption, category, imgURL },        
          )
          this.props.context.AddProduct(
            { P_Name, P_Price, P_Descreption, category, imgURL },
            () => this.setState(initState)
          )
          this.setState(
            { flash: { status: 'is-success', msg: 'Product created successfully' }}
          );
        }else {
          this.setState(
            { flash: { status: 'is-danger', msg: 'Please enter name and price' }}
          );
        }
    }

    const handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });
    const { P_Name, P_Price, P_Descreption, category, imgURL } = this.state
    const { user } = this.props.context;

  return !(user && user.accessLevel < 1) ? (
    <Link to="/" />
  ) : (
    <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Add Product</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={save()}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Product Name: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={P_Name}
                  onChange={handleChange()}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Price: </label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={P_Price}
                  onChange={handleChange()}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Descreption: </label>
                <input
                  className="textarea"
                  type="text"
                  rows="2"
                  name="description"
                  value={P_Descreption}
                  onChange={handleChange()}
                />
              </div>
              <div className="field">
                <label className="label">Category: </label>
                <input
                  className="input"
                  type="text"
                  name="category"
                  value={category}
                  onChange={handleChange()}
                />
              </div>
              <div className="field">
                <label className="label">Image Url: </label>
                <img src={imgURL} alt="" />
              </div>
              {this.state.flash && (
                <div className={`notification ${this.state.flash.status}`}>
                  {this.state.flash.msg}
                </div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                  type="submit"
                  onClick={save()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
  )
};

export default withContext (AddProduct);

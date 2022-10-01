import React, { Component, useState } from "react";
import { Idistrict } from "../../interface";
import { baseURL, getData } from "../../api";
import CityDistricts from "../CityDistricts/CityDistricts";
import axios from "axios";
import { stringify } from "querystring";
 

let testData:any;


class TagForm extends Component{
 
  state = {
    districts: [
      {id: 0, district: "Selecteer een Stadsdeel"}
    ],
  };

  
  componentDidMount () {
    
    console.log("TF.47: " + JSON.stringify(this.state.districts));

      const doGetRequest = async () => {
      const res = await axios.get(baseURL);
      const data = res.data.districts;
      const result:any = [];
    
      console.log(JSON.stringify(data));
    
      data.forEach((value:any) => {
        result.push({
          id: value.id,
          district: value.district,
        });
      });
    
      this.setState({
        districts:[this.state.districts[0],
        ...result
      ]
      })

      console.log("TF.50: " + JSON.stringify(this.state.districts));
      
      return result
    
    }
      doGetRequest()

      testData = doGetRequest()

      console.log(testData)
  }


    render(){
      const { districts } = this.state;

        return (
          <div>
            <h2>Hang hier de gewenste tag aan de geweeste stadsdeel</h2>
            <form action="#">
              <select>
              {districts.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.district}
            </option>
          );
        })}
              </select>
            </form>
         </div>
        )
    }
}
 

export default TagForm;

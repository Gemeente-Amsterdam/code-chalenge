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
    test:[],
    item: {},
    setItems: []
  };

  
  componentDidMount () {
    
    console.log("TF.47: " + JSON.stringify(this.state.districts));

    async function doGetRequest() {
      let res = await axios.get(baseURL);
      let data = res.data.districts;
    
      console.log(data);
    
      data.forEach((data:any) => {
        testData.push({
          id: data.id,
          district: data.district,
        });
      });
      // Update the options state
      setOptions([
        {id: 'Select a company', district: ''}, 
        ...data
      ])
      
    
      return testData
    
    }
      doGetRequest()

      testData = doGetRequest()

      console.log(testData)
  }


    render(){
      const { districts } = this.state;

      let districtList = districts.length > 0
		&& districts.map((item, i) => {
		return (
			<option key={i} value={item.id}>{item.district}</option>
		)
	}, this);

        return (
          <div>
            <h2>Hang hier de gewenste tag aan de geweeste stadsdeel</h2>
            <form action="#">
              <select>
                {districtList}
              </select>
            </form>
         </div>
        )
    }
}
 

export default TagForm;
function setOptions(arg0: any[]) {
  throw new Error("Function not implemented.");
}


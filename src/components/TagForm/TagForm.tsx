import { Component } from "react";
import { baseURL } from "../../api";
import axios from "axios";
import { Idistrict } from "../../interface";

class TagForm extends Component{
  state = {
    districts: [
      {id: 0, district: "Selecteer een Stadsdeel"}
    ]
  };
  
  componentDidMount () {
      const getALLData = async () => {
        //API connection
        const res = await axios.get(baseURL);
        const data = res.data.districts;
        const result:any = [];
      
        // map data from api
        data.forEach((value:Idistrict) => {
          result.push({
            id: value.id,
            district: value.district,
          });
        });
      
        //Set data from api to state
        this.setState({
          districts:[this.state.districts[0],
          ...result
        ]
        })

        return result
    }

    getALLData()
  }

  render(){
    const { districts } = this.state;
  
    const selectOptions = districts.map((option: Idistrict) =>
      <option key={option.id} value={option.id}>{option.district}
      </option>
    );

      return (
        <div>
          <h2>Hang hier de gewenste tag aan de geweeste stadsdeel</h2>
      
          <form action="">
            <select name="districts-list" id="districts-list">
              {selectOptions}
            </select>
          </form>
        </div>
      )
  }
}
 

export default TagForm;
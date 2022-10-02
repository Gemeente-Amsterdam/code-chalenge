import { Component } from "react";
import { baseURL } from "../../api";
import axios from "axios";

class TagForm extends Component{
  state = {
    districts: [
      {id: 0, district: "Selecteer een Stadsdeel"}
    ]
  };

  
  componentDidMount () {
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
                  <option key={option.id} value={option.id}>{option.district}
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

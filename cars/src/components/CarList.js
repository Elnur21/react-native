import { Text, ScrollView } from "react-native";
import React, { Component } from "react";
import axios from "axios";
import CarDetail from "./CarDetail";
class CarList extends Component {
  state={
    carList:[]
  }
  componentDidMount() {
    axios.get("https://givecars.herokuapp.com").then((response) => {
      this.setState({
        carList:response.data
      })
    });
  }
  renderList=()=>{
    return(


          this.state.carList.map((brand)=>{
           return <CarDetail key={brand.model[0].name} brand={brand}/>
          })
        
      
    )
  }
  render() {
    return (
      <ScrollView>
            {
              this.renderList()
            }
      </ScrollView>
    );
  }
}
export default CarList;

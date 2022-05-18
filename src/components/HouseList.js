import React from 'react';
import {House} from "./House";
import { housesApi } from "../rest/HousesApi";

export class HouseList extends React.Component {
    //Creates the house as an object
    state = {
      houses: []
    };
    
    componentDidMount() {
        this.fetchHouses();
      }

      fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
      };
    
    updateHouse = async (updatedHouse) => {
      await housesApi.put(updatedHouse);
      this.fetchHouses();
    };
    render() {
        return (
            <div className="house-list">
            {this.state.houses.map((house) => (
                <House
                house={house}
                key={house._id}
                updatedHouse={this.updatedHouse}
                />
            ))}
            </div>
        )
        }
    }
   
  
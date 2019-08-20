import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../src/App.css";
import axios from "axios";


const itemCategories = [
  "All",
  "Sea",
  "Mountain",
  "Desert",
  ""
];

class Package extends Component {
  state = {
    cards: [],
    category: "All",
    tours:[],
    nameCity:[]
  };

  componentDidMount() {
    axios ({
      method: "GET",
      url: "https://cors-anywhere.herokuapp.com/https://tourism-project-sei.herokuapp.com/cities.json"
    })
    
    .then(response => { 

      // console.log(response)
      // let city = this.state.nameCity
      // city.push(response.data[i].name)
        this.setState({
          // nameCity: response.data.name
          nameCity: response.data
        })
        // console.log("**",response.data)
  }).catch(arr=> {
    console.log(arr)
  })
  }

    // this.setState({ 
    //   cards: tours
    //  });
  

  render() {
        console.log(this.state.nameCity)

    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>A BETTER WAY TO VISIT SAUDI ARABIA</h1>
            <p>CHOOSE YOUR ADVANTURE FROM OUR CATEGORY</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "All"
                  ? this.props.nameCity.map(tourcard => {
                        return tourcard.category === category ? (
                          <TourCard key={tourcard.id} tourcard={tourcard}  />
                        ) : null;
                    })
                  : this.props.nameCity.map(tourcard => (
                      <TourCard key={tourcard.id} tourcard={tourcard} />
                    ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelSpotCard from '../TravelSpotCard'
import {
  TravelGuideContainer,
  ResponsiveContainer,
  MainHeading,
  CardContainer,
  LoaderContainer,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  in_progress: 'IN_PROGRESS',
}

class TravelGuide extends Component {
  state = {
    travelGuideList: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTravelGuidePackages()
  }

  getTravelGuidePackages = async () => {
    this.setState({apiStatus: apiConstants.in_progress})
    const ApiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(ApiUrl)

    if (response.ok === true) {
      const data = await response.json()

      const UpdatedList = data.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        description: eachItem.description,
        imageUrl: eachItem.image_url,
      }))
      this.setState({
        travelGuideList: UpdatedList,
        apiStatus: apiConstants.success,
      })
    }
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader height={50} width={50} type="TailSpin" color="#00BFFF" />
    </LoaderContainer>
  )

  renderTravelSpotCard = () => {
    const {travelGuideList} = this.state
    return (
      <CardContainer>
        {travelGuideList.map(eachSpot => (
          <TravelSpotCard cardDetails={eachSpot} key={eachSpot.id} />
        ))}
      </CardContainer>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderTravelSpotCard()
      case 'IN_PROGRESS':
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <TravelGuideContainer>
        <ResponsiveContainer>
          <MainHeading>Travel Guide</MainHeading>
          {this.renderApiStatus()}
        </ResponsiveContainer>
      </TravelGuideContainer>
    )
  }
}

export default TravelGuide

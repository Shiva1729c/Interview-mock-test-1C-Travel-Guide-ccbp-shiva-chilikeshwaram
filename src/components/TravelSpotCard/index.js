import {
  CardItem,
  CardPlaceName,
  CardImage,
  CardDescription,
  CardDetails,
} from './styledComponents'

const TravelSpotCard = props => {
  const {cardDetails} = props
  const {name, imageUrl, description} = cardDetails

  return (
    <CardItem>
      <CardImage src={imageUrl} alt={name} />
      <CardDetails>
        <CardPlaceName>{name}</CardPlaceName>
        <CardDescription as="p">{description}</CardDescription>
      </CardDetails>
    </CardItem>
  )
}

export default TravelSpotCard

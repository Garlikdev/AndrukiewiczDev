"use client"
import Slider from "react-slick"

const ProductGallery = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {product.images.map((image, index) => (
        <img key={image.id} className='' alt={image.name} src={image.path} />
      ))}
    </Slider>
  )
}

export default ProductGallery

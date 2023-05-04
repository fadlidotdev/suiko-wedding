import "photoswipe/dist/photoswipe.css";
import React from "react";
import { Gallery as ImageGallery, Item } from "react-photoswipe-gallery";
import Heading from "../components/Heading";
import Section from "../components/Section";

const sectionStyle = {
  background: `
linear-gradient(
to right bottom,
rgba(252, 250, 246, 0.9),
rgba(209, 217, 223, 0.7)
),
url('/bg-gallery-screen.jpg')
`,
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
};

function Gallery() {
  return (
    <Section
      id="gallery"
      headerComponent={<Heading>Galeri</Heading>}
      className="space-y-4"
      style={sectionStyle}
    >
      <div data-aos="zoom-in">
        <ImageGallery>
          <div className="grid grid-cols-2 gap-2 bg-gray-200 min-h-[736px]">
            <Item
              original="/images/gallery-01.jpg"
              thumbnail="/images/gallery-01.jpg"
              width="1036"
              height="691"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src="/images/gallery-01.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded"
                />
              )}
            </Item>
            <Item
              original="/images/gallery-02.jpg"
              thumbnail="/images/gallery-02.jpg"
              width="1036"
              height="691"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src="/images/gallery-02.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded"
                />
              )}
            </Item>
            <Item
              original="/images/gallery-04.jpg"
              thumbnail="/images/gallery-04.jpg"
              width="1036"
              height="691"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src="/images/gallery-04.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded"
                />
              )}
            </Item>
            <Item
              original="/images/gallery-05.jpg"
              thumbnail="/images/gallery-05.jpg"
              width="1036"
              height="691"
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src="/images/gallery-05.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded"
                />
              )}
            </Item>
            <Item
              original="/images/gallery-03.jpg"
              thumbnail="/images/gallery-03.jpg"
              width="1061"
              height="1591"
            >
              {({ ref, open }) => (
                <div className="col-span-2">
                  <img
                    ref={ref}
                    onClick={open}
                    src="/images/gallery-03.jpg"
                    alt=""
                    className="h-full w-full object-cover rounded"
                  />
                </div>
              )}
            </Item>
          </div>
        </ImageGallery>
      </div>
    </Section>
  );
}

export default Gallery;

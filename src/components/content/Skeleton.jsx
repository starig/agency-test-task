import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={370}
        height={416}
        viewBox="0 0 370 416"
        backgroundColor="#c2c2c2"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="370" height="416" />
    </ContentLoader>
)

export default Skeleton;
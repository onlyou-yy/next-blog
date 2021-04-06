import AdvertCss from "../styles/components/advert.module.css";

const Advert = () => {
    return (
        <div className={[AdvertCss["advert-div"],"commen-box"].join(" ")}>
            <div><img src="https://picsum.photos/400/100?random=1" width="100%" alt="advert1"/></div>
            <div><img src="https://picsum.photos/400/100?random=2" width="100%" alt="advert1"/></div>
            <div><img src="https://picsum.photos/400/100?random=3" width="100%" alt="advert1"/></div>
            <div><img src="https://picsum.photos/400/100?random=4" width="100%" alt="advert1"/></div>
        </div>
    )
}

export default Advert;